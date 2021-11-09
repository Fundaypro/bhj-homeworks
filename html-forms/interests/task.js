class Interests {
  constructor(container) {
    this.list = container.firstElementChild;
    this.treeOfElements = this.buildTree(this.list);
  }
  buildTree(list, parent = null) {
    if (list.childElementCount > 1) {
      const childs = Array.from(list.children).map((element) => {
        const child = {
          checked: false,
          parent: parent,
          element: element.firstElementChild.firstElementChild,
        };
        child.childs =
          element.childElementCount > 1
            ? this.buildTree(element.children[1], child)
            : null;
        return child;
      });
      return childs;
    }
  }
  putcheckBox(element){
      element.element.checked = true
    if(element.parent) {
        element.parent.element.checked=true
        this.putcheckBox(element.parent)
    }
    if(element.childs){
        
    }
  }
}   
const int = new Interests(document.querySelector(".interests"));
