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
            clicksMemory : [Date.now()],
            element : document.getElementById("click__speed"),
        };
        
    }
    sizeCnanger(){
        this.element.width = "180";
        setTimeout(()=>{this.element.width = "200";},100)
    }
    get clickSpeedAvg(){
        this.clicks.clicksMemory.push(Date.now())
        this.clicks.clicksMemory = this.clicks.clicksMemory.filter((e)=>{
            return e  >= (Date.now() - 5000)
        })
        let x = this.clicks.clicksMemory.length/5
        return x
    }
}

new Cookie()
