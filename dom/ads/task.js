class Rotator {
  constructor() {
    this.parent = document.querySelector(".card");
    this.isRotate = true;
    this.messages = Array.from(
      this.parent.children[0].children[0].children
    ).map((elem, i, arr) => {
      elem.style.color = elem.dataset.color;
      return {
        element: elem,
        time: +elem.dataset?.speed,
      };
    });
    this.messages.forEach((e, i, arr) => {
      e.next = arr[i + 1];
    });
    this.messages[this.messages.length - 1].next = this.messages[0];
  }
  rotate(elem = this.messages[0]) {
    const { element, time, next } = elem;
    element.className = "rotator__case rotator__case_active";
    setTimeout(() => {
      if (!this.isRotate) {
        element.className = "rotator__case";
        this.messages[0].element.className =
          "rotator__case rotator__case_active";
        return false;
      }
      element.className = "rotator__case";
      this.rotate(next);
    }, time);
  }
  stopRotate() {
    this.isRotate = false;
  }
  startRotate(elem = this.messages[0]) {
    this.isRotate = true;
    this.rotate(elem);
  }
}
const rotator = new Rotator();
rotator.startRotate();
