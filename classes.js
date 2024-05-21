class train{
    constructor(color,lightOn){
        this.color=color;
        this.lightOn=lightOn;
    }
    toggleLight(){
        this.lightOn=!this.lightOn;
    }
    lightStatus(){
        console.log("Train status: ?",this.lightOn);
    }
    getSelf(){
        console.log(this)
    }
    getPrototype(){
        var proto=Object.getPrototypeOf(this);
        console.log(proto);
    }
}
class highSpeedTrain extends train{
    constructor(color,lightOn,passenger,highSpeedOn){
        super(color,lightOn);
        this.passenger=passenger;
        this.highSpeedOn=highSpeedOn;
    }
    toggleHighSpeed(){
        this.highSpeedOn=!this.highSpeedOn
        console.log("HighSpeedMode : ",this.highSpeedOn)
    }
    toggleLight(){
        super.toggleLight();
        super.lightStatus();
        console.log('Light are 100% operational')
    }

}

var t=new train('blue',false);
t.toggleLight();
t.lightStatus();
t.getSelf();
t.getPrototype();

var t1=new highSpeedTrain('red',true,23,false);
t1.toggleHighSpeed();
t1.toggleLight();
t1.getSelf();
t1.getPrototype();
