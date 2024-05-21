#!/bin/bash
#SBATCH --job-name=tran
#SBATCH --output=transcription_%j.log
#SBATCH --ntasks=1
#SBATCH --time=10:00:00
#SBATCH --mem-per-cpu=2G
#SBATCH --gres=gpu:1

DIR="$1"

process_directory() {
    local current_dir="$1"
    local index=1

    while IFS= read -r -d '' subdir; do
        process_directory "$subdir"
    done < <(find "$current_dir" -mindepth 1 -maxdepth 1 -type d -print0 | sort -z)

    local file_index=1

    while IFS= read -r -d '' mp3file; do
        local extension="${mp3file##*.}"  # Get the file's extension
        local obfuscated_name="$current_dir/obfuscated$index.$extension"
        mv "$mp3file" "$obfuscated_name"

        # Use the Whisper API to transcribe the obfuscated MP3 file
        # Replace 'YOUR_API_KEY' with your actual OpenAI API key
        whisper transcribe "$obfuscated_name" --model large --language Spanish --apikey YOUR_API_KEY

        local transcription_name="$current_dir/obfuscated$index.txt"
        mv "transcription.txt" "$transcription_name"

        index=$((index + 1))
    done < <(find "$current_dir" -mindepth 1 -maxdepth 1 -type f -name "*.mp3" -print0 | sort -z)
}

process_directory "$DIR"
