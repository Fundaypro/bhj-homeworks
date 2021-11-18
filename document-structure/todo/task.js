class TodoList {
    constructor(){
        this.inputBar = {
            container : document.getElementById("tasks__form"),
            inputBtn :  document.getElementById("tasks__add"),
            text : document.getElementById("task__input")
        }
        this.inputBar.inputBtn.addEventListener("click", (event)=>{
            event.preventDefault();
            this.addTodoItem(this.getInputValue)

        })
        this.tasks = {
            window : document.getElementById("tasks__list"),
            list : []
        };
        this.storageName = "todoList"
        this.localStorage = window.localStorage
        
        document.addEventListener("DOMContentLoaded", ()=> {
            this.getStorage().forEach(task=>{
                this.buildNewItem(task)
                this.tasks.list.push(task)
            })
        });
    }
    addTodoItem(titleText){
        this.tasks.list.push(titleText);
        this.updateStorage();
        this.buildNewItem(titleText)
    }
    buildNewItem(titleText){
        const newEl  = document.createElement("div");
        newEl.className = "task";
        newEl.dataset.text = titleText;
        //create title
        const title = document.createElement("div");
        title.className = "task__title";
        title.innerText = titleText;
        newEl.append(title);
        //add remove button
        const removeBtn = document.createElement("a")
        removeBtn.className = "task__remove";
        removeBtn.innerText = "×"
        removeBtn.addEventListener("click",()=>{
            this.removeListItem(newEl,titleText)
        })
        newEl.append(removeBtn)

        this.tasks.window.append(newEl)
    }
    removeListItem(item,text){
        const index = this.tasks.list.indexOf(text)
        this.tasks.list.splice(index,1)
        this.updateStorage()
        item.remove()
    }
    get getInputValue () {
        const text = this.inputBar.text.value;
        this.inputBar.text.value = ""
        return text
    }
    getStorage(){
        const stor = this.localStorage.getItem(this.storageName)
        return stor ? JSON.parse(stor) : []
    }
    updateStorage(){
        const toStr = JSON.stringify(this.tasks.list)
        this.localStorage.setItem(this.storageName ,toStr)
    }
}

new TodoList();
