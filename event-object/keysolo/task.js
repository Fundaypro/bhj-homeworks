class KeyboardSoloGame {
  constructor() {
    this.gameContainer = document.getElementById("keyboard_solo_game");
    this.interface = {
      writeCounter: {
        element: (() => {
          const newEl = document.createElement("p");
          newEl.textContent = "Правильно введённых слов : ";
          const number = document.createElement("span");
          number.innerText = 0;
          newEl.append(number);
          this.gameContainer.append(newEl);
          return number;
        })(),
        count: 0,
        upNum() {
          this.element.innerText = this.count += 1;
        },
      },
      wrongCounter: {
        element: (() => {
          const newEl = document.createElement("p");
          newEl.textContent = "Неправильно введённых слов : ";
          const number = document.createElement("span");
          number.innerText = 0;
          newEl.append(number);
          this.gameContainer.append(newEl);
          return number;
        })(),
        count: 0,
        upNum() {
          this.element.innerText = this.count += 1;
        },
      },
      wordsBlock: {
        element: (() => {
          const block = document.createElement("div");
          this.gameContainer.append(block);
          block.onclick = () => {
            this.interface.wordsBlock.element.onclick = null;
            this.interface.wordsBlock.element.innerText = "";
            this.interface.wordsBlock.newWord();
            //main game function
            document.addEventListener("keyup", (event) => {
              if (event.code.includes("Key")) {
                const letterNum = this.interface.wordsBlock.curentLettter;
                const letter =
                  this.interface.wordsBlock.arrOfLetters[letterNum];
                if (letter.innerText === event.key) {
                  letter.style.color = "green";
                  if ( letterNum < this.interface.wordsBlock.arrOfLetters.length-1) {
                    this.interface.wordsBlock.curentLettter+= 1;
                  } else {
                    this.interface.writeCounter.upNum();
                    this.interface.wordsBlock.newWord()
                  }
                } else {
                  this.interface.wrongCounter.upNum();
                  letter.style.color = "red";
                  setTimeout(() => {
                    this.interface.wordsBlock.newWord();
                  }, 200);
                }
              } else {
                return false;
              }
            });
          };
          //CSS
          block.innerText = "Start Game";
          block.style.cursor = "pointer";
          block.style.display = "inline-block";
          block.style.padding = "5px";
          block.style.fontSize = "50px";
          block.style.border = "3px solid #888";
          block.style.borderRadius = "3px";
          block.style.backgroundColor = "#ccc";
          return block;
        })(),
        wordsArr: [
          "bob",
          "awesome",
          "netology",
          "hello",
          "kitty",
          "rock",
          "youtube",
          "popcorn",
          "cinema",
          "love",
          "javascript",
        ],
        curentLettter: 0,
        arrOfLetters: [],
        newWord() {
          this.deleteWord();
          let splited =
            this.wordsArr[
              Math.floor(Math.random() * this.wordsArr.length)
            ].split("");

          splited.forEach((e) => {
            let newLetter = document.createElement("span");
            newLetter.innerText = e;
            this.arrOfLetters.push(newLetter);
          });
          this.displayWord();
        },
        deleteWord() {
          this.arrOfLetters = [];
          this.element.innerHTML = "";
          this.curentLettter = 0;
        },
        displayWord(letters = this.arrOfLetters) {
          letters.forEach((e) => {
            this.element.append(e);
          });
        },
      },
    };
  }
}
const game = new KeyboardSoloGame();
