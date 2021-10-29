class DropDownMenu  {
    constructor(){
        this.element = document.querySelector(".dropdown");
        this._isHiden = false
        this.head = this.element.querySelector(".dropdown__value");
        this.head.addEventListener("click", ()=>{
            if(this._isHiden) this.hideDropList();
            else this.revealDropList();
            this._isHiden = !this._isHiden
        })
        this.list = {element : this.element.querySelector(".dropdown__list")}
        this.list.items = Array.from(this.list.element.children).map((e)=>{
                const value = e.children[0].innerText
                return {item : e.children[0] , value : value}
            })
        this.list.items.forEach((el)=>{
            el.item.addEventListener("click", ()=>{
                el.item.preventDefault();
                this.setHead(el.value);

            })
        });
        
    }
    setHead(value){
        this.head.textContent = value;
    }
    hideDropList(){
        this.list.element.className = "dropdown__list"
    }
    revealDropList(){
        this.list.element.className = "dropdown__list dropdown__list_active";
    }
}

const droptDown = new DropDownMenu();