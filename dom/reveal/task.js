class RevealBlocks {
    constructor(){
        this.elements = Array.from(document.querySelectorAll(".reveal"))
        this.windowVievH = window.innerHeight;

        document.addEventListener("scroll" , ()=>{
            this.elements.forEach((elem)=>{
                if(this.isOnScreen(elem))  this.showElement(elem);
                else this.hideElement(elem)
            })
        })
    }
    showElement(element){
        element.classList.add("reveal_active")
    }
    hideElement(element){
        element.classList.remove("reveal_active")
    }
    isOnScreen(element){
        return element.getBoundingClientRect().top < this.windowVievH
    }
} new RevealBlocks()

