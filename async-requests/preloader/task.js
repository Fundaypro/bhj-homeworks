class ExchangeRate {
    constructor(){
        this.url = "https://netology-slow-rest.herokuapp.com"
        this.container = document.querySelector(".card");
        this.loader = this.container.querySelector(".loader");
        this.display = {
            element : this.container.querySelector(".items"),
            data : null
        }

    }
    loaderShowTogle(bool){
        if(bool) this.loader.classList.add("loader_active");
        else this.loader.classList.remove("loader_active")
    }
    
    getData(){
        const xhr = new XMLHttpRequest();
        xhr.open("GET",this.url)
        xhr.send()

        xhr.onload = ()=>{
            if(xhr.status !== 200) {
                this.loaderShowTogle(true);
            } else {
                console.log(xhr.response)
                this.loaderShowTogle(false);
            }
        }
        xhr.onprogress = () => {
            this.loaderShowTogle(true);
        }

    }
}

new ExchangeRate()
    .getData()