class Slider {
    constructor(){
        this.element = document.querySelector(".slider");
        this.sliderPosition = 0;
        this.slides = Array.from(this.element.querySelectorAll(".slider__item"));
        this.dotsContainer = this.element.querySelector(".slider__dots")
        
    }
}