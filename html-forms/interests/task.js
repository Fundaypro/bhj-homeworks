class Interests {
  constructor(container) {
    this.list = container.firstElementChild;
    this.treeOfElements = this.buildTree(this.list);
  }
  buildTree(list, parent = false) {
    if (list.childElementCount > 1) {
      const childs = Array.from(list.children).map((element) => {
        const child = {
          status: false,
          parent: parent,
          element: element.firstElementChild.firstElementChild,
        };
        this.addCallBack(child);
        child.childs =
          element.childElementCount > 1
            ? this.buildTree(element.children[1], child)
            : false;
        return child;
      });
      return childs;
    }
  }
  addCallBack(elem) {
    elem.element.addEventListener("click", (event) => {
      this.putcheckBox(elem);
    });
  }
  putcheckBox(element) {
    element.status = element.element.checked;
    if (element.childs) this.checkChildes(element.childs, element.status);
    if (element.parent) this.checkParent(element.parent);
  }
  checkParent(parent) {
    const calcStatus = (() => {
      const status = parent.childs.filter((e) => e.status === true).length;
      return status === 0 ? false
        : status < parent.childs.length ? "indeterminate"
        : true;
    })();

    parent.status = calcStatus;
    if (calcStatus === "indeterminate") {
      parent.element.checked = false;
      parent.element.indeterminate = true;
    } else {
      parent.element.checked = calcStatus;
      parent.element.indeterminate = false;
    }

    if (parent.parent) this.checkParent(parent.parent);
  }
  checkChildes(elements, status) {
    elements.forEach((childe) => {
      childe.status = status;
      childe.element.checked = status;
      if (childe.childs) this.checkChildes(childe.childs, childe.status);
    });
  }
}
new Interests(document.querySelector(".interests"));
