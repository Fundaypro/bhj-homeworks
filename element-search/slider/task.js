class Slider {
  constructor() {
    this.element = document.querySelector(".slider");

    this._sliderPosition = 0;
    this.slides = Array.from(this.element.querySelectorAll(".slider__item"));
    this.maxSliderposition = this.slides.length;
    //dots
    this.dotsContainer = this.element.querySelector(".slider__dots");
    this.dots = [];
    for (let i = 0; i < this.slides.length; i++) {
      const newDot = document.createElement("div");
      newDot.className = "slider__dot";
      newDot.addEventListener("click", () => {
        this.slideTo(i);
      });
      this.dots.push(newDot);
      this.dotsContainer.append(newDot);
    }
    this.dots[this._sliderPosition].className =
      "slider__dot slider__dot_active";
    //arrows
    this.arrows = {
      left: this.element.querySelector(".slider__arrow_prev"),
      right: this.element.querySelector(".slider__arrow_next"),
    };
    this.arrows.left.addEventListener("click", () => {
      this.slideTo(this.prevSlide);
    });
    this.arrows.right.addEventListener("click", () => {
      this.slideTo(this.nextSlide);
    });
  }
  get nextSlide() {
    return this._sliderPosition + 1 < this.maxSliderposition
      ? (this._sliderPosition += 1)
      : 0;
  }
  get prevSlide() {
    return this._sliderPosition - 1 >= 0
      ? (this._sliderPosition -= 1)
      : this.maxSliderposition - 1;
  }
  slideTo(slideNum) {
    this.slides.forEach((element, i) => {
      this._sliderPosition = slideNum;
      if (i !== slideNum) {
        element.className = "slider__item";
        this.dots[i].className = "slider__dot";
      } else {
        element.className = "slider__item slider__item_active";
        this.dots[i].className = "slider__dot slider__dot_active";
      }
    });
  }
}
const slider = new Slider();
