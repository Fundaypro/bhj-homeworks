class ToolTips {
  constructor() {
    this.elements = Array.from(document.querySelectorAll(".has-tooltip")).map(
      (elem) => {
        
        return {
          element: elem,
          // tooltip: this.buildTooltip(elem),
        };
      }
    );
    this.elements.forEach((element) => {
      element.element.addEventListener("click", (event) => {
        event.preventDefault();
        if(element.toolTip) {
          element.toolTip.remove()
          element.toolTip = null
        }
        else element.toolTip = this.buildTooltip(element.element)
      });
    });
  }
  buildTooltip(parent){
    const newToolTip = document.createElement("div");
    newToolTip.innerText = parent.title;
    newToolTip.className = "tooltip";
    newToolTip.style.display = "block"
    //position
    const parentPostion = parent.getBoundingClientRect();
    newToolTip.style.top = (parentPostion.top + parentPostion.height) + "px";
    newToolTip.style.left = parentPostion.left +  "px"

    document.querySelector("body").append(newToolTip)
    return newToolTip
  }
}
const tools = new ToolTips();
