class Cookie {
    constructor(){
        this.element = document.getElementById("cookie");
        this.element.addEventListener("click" ,()=>{
            this.sizeCnanger()
            this.counter.element.innerText = (this.counter.count+=1);
            this.clicks.element.innerText = this.clickSpeedAvg
        });

        this.counter = {
            element : document.getElementById("clicker__counter"),
            count : 0,
        };
        
        this.clicks = {
            lastClick: Date.now(),
            clicksMemory : [Date.now()],
            element : document.getElementById("click__speed"),
        };
        
    }
    sizeCnanger(){
        this.element.width = "180";
        setTimeout(()=>{this.element.width = "200";},100)
    }
    get clickSpeedAvg(){
        const newClickTime = Date.now();
        const timeRange = newClickTime -  this.clicks.lastClick;
        this.clicks.lastClick = newClickTime;
        return (1/timeRange*1000).toFixed(2)
    }
}

new Cookie()

