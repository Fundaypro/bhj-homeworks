class ChatWindow {
  constructor() {
    this.chatWidget = document.querySelector(".chat-widget");
    this.chatWidget.onclick = () => {
      this.togleChatShowHide();
    };
    this.chat = document.getElementById("chat-widget__messages");
    this.messages = [];

    this.chatInput = document.getElementById("chat-widget__input");
    this.chatInput.addEventListener("keypress",(event)=>{
        if(event.key === "Enter") {
            this.displayMessage(this.newMessage(this.chatInput.value))
            this.chatInput.value = ""
        }
    })
  }
  togleChatShowHide() {
    if (!this.chatWidget.className.includes("chat-widget_active")) {
      this.chatWidget.classList.add("chat-widget_active");
    }
  }
  newMessage(text, author="User") {
    const time = new Date();
    let mins =
      String(time.getMinutes()).length < 2
        ? 0 + String(time.getMinutes())
        : String(time.getMinutes());
    const message = {
        text: text,
        date: time.getHours() + ":" + mins,
        author: author,
      }
      
    this.messages.push(message);

    return message;
  }
  displayMessage(message) {
    const newMes = document.createElement("div");
    newMes.className = message.author === "User" ? "message message_client" : "message";
    const divTime = `<div class = "message__time" > ${message.date}</div>`
    const divText = `<div class = "message__text"  >${message.text}</div>`
    newMes.innerHTML = divTime + divText
    this.chat.append(newMes)
  }
}
class ChatBot {
    constructor(chat = new ChatWindow()){
        this.chat = chat
        this.responses = [
            "Спасибо за обращение",
            "В нашей компании внеплановый выходной",
            "До свидания"
        ];
    
    }
    get getResponse(){
        const randValue = Math.floor(Math.random()*this.responses.length)
        return this.responses[randValue]
    }
    useChat(){
        this.chat.chatInput.addEventListener("keypress",(event)=>{
            if(event.key === "Enter") {
                this.chat.displayMessage(this.chat.newMessage(this.getResponse , "Bot"))
            }
        })
    }
}
new ChatBot(new ChatWindow()).useChat()
