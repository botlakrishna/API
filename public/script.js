

// function yoo () {
//   let a = alert("hello")
// console.log(a);
// }


let container = document.querySelector(".container")

let productsDiv = document.querySelector(".products")


function createCard(title,image,description,price) {
  

let cardDiv = document.createElement("div");
let img = document.createElement("img");
 
let cardBody = document.createElement("div");
let h3 = document.createElement("h3");

let p = document.createElement("p");
let button =document.createElement("button");

// class defining

cardDiv.setAttribute("class","card");
img.setAttribute("class","card-img-top")
cardBody.setAttribute("class","card-body")
h3.setAttribute("class","card-title")
p.setAttribute("class","card-text")
button.setAttribute("class","btn btn-secondary")


img.setAttribute("src" , image)
h3.innerText = title;
p.innerText = description;
button.innerText = `Price: ${price}`;

cardBody.append(h3, p ,button)
cardDiv.append(img,cardBody)
productsDiv.append(cardDiv)

}
// createCard("tharddrive","https://images.freecreatives.com/wp-content/uploads/2015/03/Huge-Backgrounds-17.jpg","loremedvsve rwdgvsetfgaergaerg aegaerg","7979");


// Function to load data and create cards
async function loadProducts() {
  try {
    let response = await fetch("https://fakestoreapi.com/products");
    let data = await response.json();

    // Iterating over API data
    data.forEach(product => {
      createCard(product.title, product.image, product.description, product.price);
    });
  } catch (error) {
    console.error("Error loading products:", error);
  }
}

// Load products on page load
loadProducts();
