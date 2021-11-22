class Tester {
  constructor() {
    this.container = document.querySelector(".poll");
    this.title = this.container.querySelector(".poll__title");
    this.answers = this.container.querySelector(".poll__answers");
    this.URLs = {
      get: "https://netology-slow-rest.herokuapp.com/poll.php",
      post: "https://netology-slow-rest.herokuapp.com/poll.php",
    };
    this.getTestData();
  }
  getTestData() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", this.URLs.get);
    xhr.send();

    xhr.onload = () => {
      if (xhr.status !== 200) {
        alert("load Fail");
      } else {
        const res = JSON.parse(xhr.response);
        this.displayTitle(res);
        this.displayAnswers(res);
      }
    };
  }
  displayTitle(response) {
    this.title.innerText = response.data.title;
  }
  displayAnswers(response) {
    response.data.answers.forEach((e) => {
      const newBtn = document.createElement("button");
      newBtn.className = "poll__answer";
      newBtn.innerText = e;
      newBtn.addEventListener("click",()=>{
        alert("Спасибо, ваш голос засчитан!")
      })
      this.answers.append(newBtn);
    });
  }
}
new Tester();
