

/* display for Chicken buckets */

let bag = [];

fetch("https://636e05beb567eed48ad060f3.mockapi.io/food")
  .then((res) => res.json())
  .then((result) => {
    displayTable(result);
    displaylaunch(result);
    displaybriyani(result);
    displaybox(result);
    displayburgers(result);
    displaysnacks(result);
    displayhome(result);
    displaybeverages(result);
    console.log(result);
  })
  .catch((error) => alert(error));

/*  display(bag) */
/* console.log(bag); */

let cartedBox = JSON.parse(localStorage.getItem("carted")) || [];
/* let carti = JSON.parse(localStorage.getItem("carted"));

let totalC = carti.reduce((acc, el) => {
  return acc + eval(el.price);
}, 0);
console.log(totalC); */

/* let cartTotal = document.querySelector("#cart-Total");
cartTotal.innerText = totalC;
 */


/*   function searched(){
  let val = document.querySelector("#searching").value;
  console.log(val);
  let newData = bag.filter(function (elm) {
     elm.productdesc==val;
     return;elm.productdesc;
  });
  console.log(newData);
  displayCart(newData);
} */
  
function displayCart(data) {
/*   document.querySelector("#container").innerHTML = null; */

  data.forEach((elem, i) => {
    let div = document.createElement("div");

    let image = document.createElement("img");
    image.setAttribute("src", elem.image);

    let pdesc = document.createElement("h3");
    pdesc.innerText = elem.productdesc;

    let price = document.createElement("p");
    price.innerText = `Rs. ` + elem.price;

    let dis = document.createElement("h6");
    dis.innerText = elem.description;

    
    div.append(image, pdesc, price, dis);

    document.querySelector(".container").append(div);
  });
}


  
  
 /* console.log(val); */

function displayTable(data) {
  data.forEach((elem, i) => {
    let div = document.createElement("div");

    let image = document.createElement("img");
    image.setAttribute("src", elem.image);

    let pdesc = document.createElement("h3");
    pdesc.innerText = elem.productdesc;

    let price = document.createElement("p");
    price.innerText = `Rs. ` + elem.price;

    let dis = document.createElement("h6");
    dis.innerText = elem.description;

    let btn = document.createElement("button");
    btn.innerText = "Add to Cart";
    btn.addEventListener("click", function () {
      cartedBox.push(elem);
      localStorage.setItem("carted", JSON.stringify(cartedBox));
    });

    div.append(image, pdesc, price, dis, btn);

    document.querySelector(".chickenBuck-grids").append(div);
  });
}

/* NEW LAUNCH DISPLAY */

function displaylaunch(data) {
  data.forEach((elem, i) => {
    let div = document.createElement("div");

    let image = document.createElement("img");
    image.setAttribute("src", elem.image);

    let pdesc = document.createElement("h3");
    pdesc.innerText = elem.productdesc;

    let price = document.createElement("p");
    price.innerText = `Rs. ` + elem.price;

    let dis = document.createElement("h6");
    dis.innerText = elem.description;

    let btn = document.createElement("button");
    btn.innerText = "Add to Cart";
    btn.addEventListener("click", function () {
      cartedBox.push(elem);
      localStorage.setItem("carted", JSON.stringify(cartedBox));
    });

    div.append(image, pdesc, price, dis, btn);

    document.querySelector(".launch-Buck-grids").append(div);
  });
}

function displaybriyani(data) {
  data.forEach((elem, i) => {
    let div = document.createElement("div");

    let image = document.createElement("img");
    image.setAttribute("src", elem.image);

    let pdesc = document.createElement("h3");
    pdesc.innerText = elem.productdesc;

    let price = document.createElement("p");
    price.innerText = `Rs. ` + elem.price;

    let dis = document.createElement("h6");
    dis.innerText = elem.description;

    let btn = document.createElement("button");
    btn.innerText = "Add to Cart";
    btn.addEventListener("click", function () {
      cartedBox.push(elem);
      localStorage.setItem("carted", JSON.stringify(cartedBox));
    });

    div.append(image, pdesc, price, dis, btn);

    document.querySelector("#briyani-buckets").append(div);
  });
}

/* box -DISPLAY */

function displaybox(data) {
  data.forEach((elem, i) => {
    let div = document.createElement("div");

    let image = document.createElement("img");
    image.setAttribute("src", elem.image);

    let pdesc = document.createElement("h3");
    pdesc.innerText = elem.productdesc;

    let price = document.createElement("p");
    price.innerText = `Rs. ` + elem.price;

    let dis = document.createElement("h6");
    dis.innerText = elem.description;

    let btn = document.createElement("button");
    btn.innerText = "Add to Cart";
    btn.addEventListener("click", function () {
      cartedBox.push(elem);
      localStorage.setItem("carted", JSON.stringify(cartedBox));
    });

    div.append(image, pdesc, price, dis, btn);

    document.querySelector("#box-buckets").append(div);
  });
}

/* BURGERS DISPLAY */

function displayburgers(data) {
  data.forEach((elem, i) => {
    let div = document.createElement("div");

    let image = document.createElement("img");
    image.setAttribute("src", elem.image);

    let pdesc = document.createElement("h3");
    pdesc.innerText = elem.productdesc;

    let price = document.createElement("p");
    price.innerText = `Rs. ` + elem.price;

    let dis = document.createElement("h6");
    dis.innerText = elem.description;

    let btn = document.createElement("button");
    btn.innerText = "Add to Cart";
    btn.addEventListener("click", function () {
      cartedBox.push(elem);
      localStorage.setItem("carted", JSON.stringify(cartedBox));
    });

    div.append(image, pdesc, price, dis, btn);

    document.querySelector("#burgers-buckets").append(div);
  });
}

/* SNACKS */

function displaysnacks(data) {
  data.forEach((elem, i) => {
    let div = document.createElement("div");

    let image = document.createElement("img");
    image.setAttribute("src", elem.image);

    let pdesc = document.createElement("h3");
    pdesc.innerText = elem.productdesc;

    let price = document.createElement("p");
    price.innerText = `Rs. ` + elem.price;

    let dis = document.createElement("h6");
    dis.innerText = elem.description;

    let btn = document.createElement("button");
    btn.innerText = "Add to Cart";
    btn.addEventListener("click", function () {
      cartedBox.push(elem);
      localStorage.setItem("carted", JSON.stringify(cartedBox));
    });

    div.append(image, pdesc, price, dis, btn);

    document.querySelector("#snacks-buckets").append(div);
  });
}

/* STAY HOME SPECIALS */

function displayhome(data) {
  data.forEach((elem, i) => {
    let div = document.createElement("div");

    let image = document.createElement("img");
    image.setAttribute("src", elem.image);

    let pdesc = document.createElement("h3");
    pdesc.innerText = elem.productdesc;

    let price = document.createElement("p");
    price.innerText = `Rs. ` + elem.price;

    let dis = document.createElement("h6");
    dis.innerText = elem.description;

    let btn = document.createElement("button");
    btn.innerText = "Add to Cart";
    btn.addEventListener("click", function () {
      cartedBox.push(elem);
      localStorage.setItem("carted", JSON.stringify(cartedBox));
    });

    div.append(image, pdesc, price, dis, btn);

    document.querySelector("#home-buckets").append(div);
  });
}

/* beverages */

function displaybeverages(data) {
  data.forEach((elem, i) => {
    let div = document.createElement("div");

    let image = document.createElement("img");
    image.setAttribute("src", elem.image);

    let pdesc = document.createElement("h3");
    pdesc.innerText = elem.productdesc;

    let price = document.createElement("p");
    price.innerText = `Rs. ` + elem.price;

    let dis = document.createElement("h6");
    dis.innerText = elem.description;

    let btn = document.createElement("button");
    btn.innerText = "Add to Cart";
    btn.addEventListener("click", function () {
      cartedBox.push(elem);
      localStorage.setItem("carted", JSON.stringify(cartedBox));
    });

    div.append(image, pdesc, price, dis, btn);

    document.querySelector("#beverages-buckets").append(div);
  });
}
