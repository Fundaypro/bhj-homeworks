class Tester {
    constructor(){
        this.container = document.querySelector(".poll");
        this.title = this.container.querySelector(".poll__title");
        this.answers = this.container.querySelector(".poll__answers");
        this.URLs = {
            get : "https://netology-slow-rest.herokuapp.com/poll.php",
            post : "https://netology-slow-rest.herokuapp.com/poll.php"
        }
    }
    getTestData(){
        const xhr = new XMLHttpRequest();
        xhr.open("GET", this.URLs.get)
        xhr.send()

        xhr.onload = ()=>{
            if (xhr.status !== 200) {
                alert("Onload Fail")
              } else {
                const res = JSON.parse(xhr.response);
                console.log(res)
              }
        }
    }
}
new Tester();