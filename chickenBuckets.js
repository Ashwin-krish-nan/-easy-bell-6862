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
    btn.addEventListener("click", function () {});

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
    btn.addEventListener("click", function () {});

    div.append(image, pdesc, price, dis, btn);

    document.querySelector("#new-launch").append(div);
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
    btn.addEventListener("click", function () {});

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
    btn.addEventListener("click", function () {});

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
    btn.addEventListener("click", function () {});

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
    btn.addEventListener("click", function () {});

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
    btn.addEventListener("click", function () {});

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
    btn.addEventListener("click", function () {});

    div.append(image, pdesc, price, dis, btn);

    document.querySelector("#beverages-buckets").append(div);
  });
}


