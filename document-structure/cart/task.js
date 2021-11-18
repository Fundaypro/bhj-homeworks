class Product {
  constructor(container, cart) {
    this.product = {
      imgUrl: container.querySelector(".product__image").src,
      name: container.querySelector(".product__title").innerText,
      id: container.dataset.id,
    };
    this.quantity = {
      element: container.querySelector(".product__quantity-value"),
      value: +container.querySelector(".product__quantity-value").innerText,
    };
    this.quantityControls = {
      inc: container.querySelector(".product__quantity-control_inc"),
      dec: container.querySelector(".product__quantity-control_dec"),
    };
    this.quantityControls.inc.addEventListener("click", () => {
      this.setQuantity(true);
    });
    this.quantityControls.dec.addEventListener("click", () => {
      this.setQuantity(false);
    });

    this.productAddBtn = container.querySelector(".product__add");
    this.productAddBtn.addEventListener("click", (event) => {
      cart.addProduct(
        this.product.imgUrl,
        this.quantity.value,
        this.product.id,
        event
      );
    });
  }
  setQuantity(bool) {
    bool ? (this.quantity.value += 1) : (this.quantity.value -= 1);
    this.quantity.value = !this.quantity.value ? 1 : this.quantity.value;
    this.quantity.element.innerText = this.quantity.value;
  }
}
class Cart {
  constructor() {
    this.element = document.querySelector(".cart__products");
    this.products = [];
  }
  addProduct(prodImg, prodQuantity, id, event) {
    let element = this.products.reduce(
      (ac, prod) => (prod.id === id ? prod : ac),
      false
    );
    if (!element) {
      element = this.buildProdCard(prodImg, prodQuantity, id);
      this.products.push(element);
      this.element.append(element.element);
    } else {
      const conter = element.element.querySelector(".cart__product-count");
      conter.innerText = +conter.innerText + prodQuantity;
    }
    this.moveAnimation(prodImg, event,element);
  }
  moveAnimation(imgUrl, event,target) {
    //create icon
    const icon = document.createElement("img");
    icon.className = "product__anumation";
    icon.src = imgUrl;
    icon.style.left = event.clientX + "px";
    icon.style.top = event.clientY + "px";
    document.querySelector("body").append(icon);
    //start postion
    let moveTo = target.element.getBoundingClientRect()
    moveTo = {top : moveTo.top, left : moveTo.left }
    const frapses = 40;
    const animation = {
        moveTime : 300,
        top : event.clientY,
        left : event.clientX,
        moveX : (moveTo.left-event.clientX)/frapses,
        moveY : (moveTo.top - event.clientY)/frapses,
        move(icon){
            //horzontal
            this.left+=this.moveX
            icon.style.left = this.left + "px"
            //vertical
            this.top+=this.moveY
            icon.style.top = this.top + "px"

            if(this.top<moveTo.top) return true
            else return false; 
        }
    }
    const startMove = setInterval(()=>{
      if (animation.move(icon)){
         clearInterval(startMove)
         icon.remove()
        }
    },animation.moveTime/frapses)
  }
  buildProdCard(prodImg, prodQuantity, prodID) {
    const container = document.createElement("div");
    container.className = "cart__product";

    const img = document.createElement("img");
    img.className = "cart__product-image";
    img.src = prodImg;

    const quantity = document.createElement("div");
    quantity.className = "cart__product-count";
    quantity.innerText = prodQuantity;

    container.append(img);
    container.append(quantity);

    return { id: prodID, element: container };
  }
}
class Market {
  constructor() {
    this.cart = new Cart();
    this.products = Array.from(document.querySelectorAll(".product")).map(
      (product) => {
        const prod = new Product(product, this.cart);
        return prod;
      }
    );
  }
}
new Market();
