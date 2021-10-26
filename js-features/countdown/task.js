class Timer {
    constructor(timeInSeconds){
        this.element = document.getElementById("timer");
        this.time = Number(timeInSeconds);
    }
    
    countdown(){
       setTimeout(()=>{
           this.time-=1
           this.element.innerText = this.displayTime
           if(this.time >= 1 ) this.countdown()
           else alert("Вы победили в конкурсе!")
       },1000)

    }
    get displayTime(){
        const toFormat = (time)=>{
            s = String(time)
            return time.length < 2 ? "0"+ time : time
        }
        const sliceTime = {
            seconds : toFormat(this.time % 60),
            minutes : toFormat(Math.floor(this.time/60)%60),
            hours : toFormat(Math.floor(this.time/3600)),
        }
        return sliceTime.hours + ":" + sliceTime.minutes + ":" + sliceTime.seconds 
    }
}

new Timer(document.getElementById("timer").innerText).countdown()