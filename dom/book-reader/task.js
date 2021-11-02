class Reader {
  constructor() {
    this.container = document.getElementById("book");
    this.bookBody = this.container.querySelector(".book__content");
    this.content = Array.from(
      this.container.querySelector(".book__content").children
    );
    this.settingsBar = {
      element: this.container.querySelector(".book__controls"),
    };
    this.styleEnums = {
      font: {
        small: "font-size_small",
        big: "font-size_big",
        ["undefinde"]: "",
      },
      fontColor: {
        whitesmoke: "book_color-whitesmoke",
        gray: "book_color-gray",
        black: "book_color-black",
      },
      bgColor: {
        black: "book_bg-black",
        white: "book_bg-white",
        gray: " book_bg-gray",
      },
    };
    this.textStyleState = {
      fontSize: "",
      fontColor: "",
    };
    //font size controls
    this.settingsBar.fsControls = {
      element: this.settingsBar.element.querySelector(
        ".book__control_font-size"
      ),
    };
    this.settingsBar.fsControls.buttons = Array.from(
      this.settingsBar.fsControls.element.children
    );
    // add event to font size controls
    this.settingsBar.fsControls.buttons.forEach((elem, i, arr) => {
      elem.addEventListener("click", (event) => {
        event.preventDefault();
        arr.forEach((elem) => {
          elem.className = elem.className.replace("font-size_active", "");
        });
        elem.className += " font-size_active";
        this.chageFontSize(elem.dataset.size);
      });
    });
    //text color controls
    this.settingsBar.fColorControls = {
      element: this.settingsBar.element.querySelector(".book__control_color"),
    };
    this.settingsBar.fColorControls.buttons = Array.from(
      this.settingsBar.fColorControls.element.querySelectorAll(".color")
    );
    //add event to text color controls
    this.settingsBar.fColorControls.buttons.forEach((elem, i, arr) => {
      elem.addEventListener("click", (event) => {
        event.preventDefault();
        arr.forEach((e) => {
          e.className = e.className.replace("color_active", "");
        });
        elem.className += " color_active";
        this.changeFontColor(elem.dataset.textColor);
      });
    });
    //back ground color controls
    this.settingsBar.bgColorControls = {
      element: this.settingsBar.element.querySelector(
        ".book__control_background"
      ),
    };
    this.settingsBar.bgColorControls.buttons = Array.from(
      this.settingsBar.bgColorControls.element.querySelectorAll(".color")
    );
    this.settingsBar.bgColorControls.buttons.forEach((elem, i, arr) => {
      elem.addEventListener("click", (event) => {
        event.preventDefault();
        arr.forEach((elem) => {
          elem.className = elem.className.replace(" color_active", "");
        });
        elem.className += " color_active";
        this.changeBgColor(elem.dataset.bgColor);
      });
    });
  }
  applyTextStyles() {
    this.content.forEach((e) => {
      e.className = Object.values(this.textStyleState).join(" ");
    });
  }
  chageFontSize(styleClass) {
    this.textStyleState.fontSize = this.styleEnums.font[styleClass];
    this.applyTextStyles();
  }
  changeFontColor(color) {
    this.textStyleState.fontColor = this.styleEnums.fontColor[color];
    this.applyTextStyles();
  }
  changeBgColor(color) {
    this.bookBody.className = "book__content " + this.styleEnums.bgColor[color];
  }
}
const reader = new Reader();
