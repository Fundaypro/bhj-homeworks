class MoleGameArea {
    constructor(){
        this.gameAreaElement = document.querySelector(".hole-game")
        this.count = {
            caught : 0 ,
            misses : 0 ,
        }
        this.countDisplays = {
            lost : document.getElementById("lost"),
            dead : document.getElementById("dead")
        }
        for (let i = 0 ; i < this.gameAreaElement.children.length; i++) {
            this.gameAreaElement.children[i].addEventListener("click",e=>{
                let cl = e.target.className.includes("hole_has-mole");
                if (cl) this.count.caught += 1
                else this.count.misses += 1
                this.displayCounts
            })
        }
    }
    get displayCounts () {
        this.countDisplays.lost.innerText = this.count.misses;
        this.countDisplays.dead.innerText = this.count.caught;
    }
    
}
const a = new MoleGameArea()