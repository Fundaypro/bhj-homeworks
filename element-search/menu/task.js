class MainMenu {
  constructor() {
    this.element = document.querySelector(".menu_main");

    this.menuItems = ((element) => {
      const arrOfchildes = [];
      for (let i = 0; element.item(i); i++) {
        if (element.item(i).childElementCount > 1) {
          const childEl = {
            element: element.item(i),
            subMenu: element.item(i).querySelector(".menu_sub"),
            link: element.item(i).querySelector(".menu__link"),
          };
          childEl.link.addEventListener("click", (ev) => {
            ev.preventDefault();
            this.showDropList(childEl);
          });
          arrOfchildes.push(childEl);
        }
      }
      return arrOfchildes;
    })(this.element.children);
  }
  showDropList(element) {
    const classList = element.subMenu.classList;
    const classForActive = " menu_active";

    if (classList.value.includes(classForActive))
      classList.value = "menu menu_sub";
    else classList.value = "menu menu_sub  menu_active";
    //hide another droplists
    (function (element) {
      
      for (let i = 0; i < this.menuItems.length; i++) {
        if (element !== this.menuItems[i])
          this.menuItems[i].subMenu.classList.value = "menu menu_sub";
      }
    })(element);
  }
}
new MainMenu();
