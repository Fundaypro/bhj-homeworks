class DropDownMenu  {
    constructor(){
        this.element = document.querySelector(".dropdown");
        this._isHiden = false
        this.head = this.element.querySelector(".dropdown__value");
        this.head.addEventListener("click", ()=>{
            if(this._isHiden) this.hideDropList();
            else this.revealDropList();
        })
        this.list = {element : this.element.querySelector(".dropdown__list")}
        this.list.items = Array.from(this.list.element.children).map((e)=>{
                const value = e.children[0].innerText
                return {item : e.children[0] , value : value}
            })
        this.list.items.forEach((el)=>{
            el.item.addEventListener("click", (e)=>{
                e.preventDefault();
                this.setHead(el.value);
                this.hideDropList()
            })
        });
        
    }
    setHead(value){
        this.head.textContent = value;
    }
    hideDropList(){
        this._isHiden = false;
        this.list.element.className = "dropdown__list"
    }
    revealDropList(){
        this._isHiden = true
        this.list.element.className = "dropdown__list dropdown__list_active";
    }
}

const droptDown = new DropDownMenu();