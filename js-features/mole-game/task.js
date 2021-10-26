class MoleGameArea {
  constructor() {
    this.gameAreaElement = document.querySelector(".hole-game");
    this.count = {
      caught: 0,
      misses: 0,
    };
    this.countDisplays = {
      lost: document.getElementById("lost"),
      dead: document.getElementById("dead"),
    };
    this.messages = {
      win: "You win!",
      lose: "You lose!",
    };
    for (let i = 0; i < this.gameAreaElement.children.length; i++) {
      this.gameAreaElement.children[i].addEventListener("click", (e) => {
        let cl = e.target.className.includes("hole_has-mole");
        if (cl) this.count.caught += 1;
        else this.count.misses += 1;
        this.displayCounts();
        this.alertAboutWinOrLose();
        
      });
    }
  }
  get isWin() {
    return this.count.caught >= 10;
  }
  get isLose() {
    return this.count.misses >= 5;
  }
  displayCounts() {
    this.countDisplays.lost.innerText = this.count.misses;
    this.countDisplays.dead.innerText = this.count.caught;
  }
  alertAboutWinOrLose() {
    if (this.isWin) {
      alert(this.messages.win);
      this.resetGame();
    } else if (this.isLose) {
      alert(this.messages.lose);
      this.resetGame();
    }
  }
  resetGame() {
    this.count = {
      caught: 0,
      misses: 0,
    };
    this.displayCounts();
  }
}
new MoleGameArea();
