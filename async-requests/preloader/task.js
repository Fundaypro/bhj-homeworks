class ExchangeRate {
  constructor() {
    this.url = "https://netology-slow-rest.herokuapp.com";
    this.container = document.querySelector(".card");
    this.loader = this.container.querySelector(".loader");
    this.display = {
      element: this.container.querySelector("#items"),
      data: null,
    };
  }
  loaderShowTogle(bool) {
    if (bool) this.loader.classList.add("loader_active");
    else this.loader.classList.remove("loader_active");
  }

  getData() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", this.url);
    xhr.send();

    xhr.onload = () => {
      if (xhr.status !== 200) {
        this.loaderShowTogle(true);
      } else {
        const res = JSON.parse(xhr.response);
        this.displayData(res.response.Valute);
        this.loaderShowTogle(false);
      }
    };
    xhr.onprogress = () => {
      this.loaderShowTogle(true);
    };
  }
  buildValuteCart(data) {
    const newCart = document.createElement("div");
    newCart.className = "item";
    //add item code name
    const itemCode = document.createElement("div");
    itemCode.className = "item__code";
    itemCode.innerText = data.CharCode;
    newCart.append(itemCode);
    //add item value
    const itemValue = document.createElement("div");
    itemValue.className = "item__value";
    itemValue.innerText = data.Value;
    newCart.append(itemValue);
    //add item currency
    const itemCurrency = document.createElement("div");
    itemCurrency.className = "item__currency";
    itemCurrency.innerText = "руб.";
    newCart.append(itemCurrency);

    return newCart;
  }
  displayData(response) {
    Object.keys(response).forEach((key) => {
      this.display.element.append(this.buildValuteCart(response[key]));
    });
  }
}

new ExchangeRate().getData();
