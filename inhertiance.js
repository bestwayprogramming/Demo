class animal{
    constructor(color="yellow",energy=100){
        this.color=color;
        this.energy=energy;
    }
    isActive(){
        if(this.energy>0){
            this.energy -= 20;
            console.log("Energy is decreasing, Currently at;",this.energy)
        }
        else if(this.energy == 0){
            this.sleep();
        }
    }
    sleep(){
        this.energy +=20;
        console.log("Energy is Increasing");
    }
    getColor(){
        console.log(this.color);
    }
}

class cat extends animal{
    constructor(Sound="meow!",canJumpHigh="true",canClimbTrees=true,energy,color){
        super(energy,color);
        this.canClimbTrees=canClimbTrees;
        this.canJumpHigh=canJumpHigh;
        this.Sound=Sound;
    }
    makeSound(){
        console.log(this.Sound)
    }
}

class bird extends animal{
    constructor(Sound="chirp!",canFly="true",energy,color){
        super(energy,color);
        this.Sound=Sound;
        this.canFly=canFly;
    }
    makeSound(){
        console.log(this.Sound);
    }
}

class houseCat extends cat{
    constructor(houseCatSound="mow!",Sound,canClimbTrees,canJumpHigh,energy,color){
        super(Sound,canClimbTrees,canJumpHigh,color,energy)
        this.houseCatSound=houseCatSound;
    }
    makeSound(option){
        if(option){
            super.makeSound();
        }
        console.log(this.houseCatSound)
    }
}

class tiger extends cat{
    constructor(tigerCatSound="Roar!",Sound,canClimbTrees,canJumpHigh,energy,color){
        super(Sound,canClimbTrees,canJumpHigh,color,energy)
        this.tigerCatSound=tigerCatSound;
    }
    makeSound(option){
        if(option){
            super.makeSound();
        }
        console.log(this.tigerCatSound)
    }
}

class parrot extends bird{
    constructor(canTalk=true,Sound,canFly,color,energy){
        super(Sound,canFly,color,energy)
        this.canTalk=canTalk;
    }
    makeSound(option){
        if(option){
            super.makeSound();
        }
        if(this.canTalk){
            console.log("I'm talking ! - parrot")
        }
    }
}

var polly = new parrot(false);
polly.makeSound(false);
