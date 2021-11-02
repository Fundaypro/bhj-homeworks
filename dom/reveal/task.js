class RevealBlocks {
    constructor(){
        document.addEventListener("onscroll")
        this.elements = document.querySelectorAll(".reveal");
    }
} 
const blocks = new RevealBlocks()