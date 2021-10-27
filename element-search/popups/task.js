class ModalWindow {
    constructor(){
        this.modalMain = {
            element : document.getElementById("modal_main"),
        }
        this.modalMain.childs = {
                closeBtn : this.modalMain.element.querySelector(".modal__close_times"),
                modalBtn :  this.modalMain.element.querySelector(".btn"),
            }
        //for modalMain
        this.modalMain.childs.closeBtn.addEventListener("click", ()=>{
            this.modalMain.element.style.display = "none";
        });
        this.modalMain.childs.modalBtn.addEventListener("click", ()=>{
            this.modalMain.element.style.display = "none"
            this.modalSuccess.element.style.display = "flex"
        })

        this.modalSuccess = {
            element : document.getElementById("modal_success"),
        }
        this.modalSuccess.childs = {
            closeBtn : this.modalSuccess.element.querySelector(".modal__close_times"),
            modalBtn :  this.modalSuccess.element.querySelector(".btn"),
        }
        // for modalSuccess
        this.modalSuccess.childs.closeBtn.addEventListener("click", ()=>{
            this.modalSuccess.element.style.display = "none";
        });
        this.modalSuccess.childs.modalBtn.addEventListener("click", ()=>{
            this.modalSuccess.element.style.display = "none";
        });
        
        
    }
    showModal () {
        this.modalMain.element.style.display = "flex"
    }
}
(new ModalWindow).showModal();