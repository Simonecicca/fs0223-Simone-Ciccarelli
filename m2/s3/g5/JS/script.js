// Ci ho provato anche copia incollando cose, ma sempre cercandoo di capirle, però ci sono errori che non riesco a risolvere,
// probabilmente farà un ripasso di Java per conto mio appena riesco per vedere dove il mio cervello ha un gap, spero anche che la build week mi aiuti!


const PRODUCT_URL = 'https://striveschool-api.herokuapp.com/api/product/' 

let nameInput = document.getElementById("name");
let descriptionInput = document.getElementById("description");
let brandInput = document.getElementById("brand");
let priceInput = document.getElementById("price");
let imgUrl = document.getElementById("imgUrl");
let saveButton = document.getElementById("save-button");
let deleteButton = document.getElementById("delete-button");
let rowReference = document.getElementById("product-container");

function Phone(name = nameInput.value, description = descriptionInput.value, brand = brandInput.value, price = priceInput.value, imgUrl = imgUrl.value) {
    this.name = name;
    this.description = description;
    this.brand = brand;
    this.price = price;
    this.imgUrl = imgUrl;
}

let getProducts = function() {
fetch(PRODUCT_URL, {
    headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMGNmNjg4Zjc0MDAwMTQyODc0ZTkiLCJpYXQiOjE2ODM4ODUzMDIsImV4cCI6MTY4NTA5NDkwMn0.yJU7j6HaaESU4wTtnKp9T66girbGSxW_574XOpqV6zo"
        }  
})
.then((res) => {
    if (res.ok) {
        return res.json()
    } else {
        throw new Error("Prodotto non trovato")
    }
})
.then((data) => {
    console;
    data
      .forEach((event) => {
        let col = `
          <div class="col-12 col-md-3">
          <div class="card shadow">
          <img class='img-fluid' style="height: 175px" src="${event.imgUrl}" alt="">
          <div class="card-body">
          <h5 class="card-title">${event.name}</h5>
          <p class="card-text">
          ${event.description}
          </p>
          <p>${event.brand} - ${event.price}€</p>
          <a href="./backoffice.html?eventId=${event._id}" class="btn btn-primary">MODIFICA</a>
          </div>
          </div>
          </div>
          `;
        rowReference.innerHTML += col;
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

window.onload = () => {
  getProducts();
};

let address = new URLSearchParams(window.location.search);
let eventId = address.get("eventId");
console.log("eventId");

// Elimina Carta

if (eventId) {
  document.getElementsByTagName("h2")[0].innerText =
    "Backoffice page - Modifica prodotto";
  document.getElementById("save-button").innerText = "MODIFICA PRODOTTO";
  document.getElementById("delete-button").classList.remove("d-none");
  deleteButton.addEventListener("click", () => {
    fetch(PRODUCT_URL + eventId, {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMGNmNjg4Zjc0MDAwMTQyODc0ZTkiLCJpYXQiOjE2ODM4ODUzMDIsImV4cCI6MTY4NTA5NDkwMn0.yJU7j6HaaESU4wTtnKp9T66girbGSxW_574XOpqV6zo",
      },
    })
      .then((res) => {
        if (res.ok) {
          location.assign("./page.html");
        } else {
          throw new Error("Errore");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
}

fetch(PRODUCT_URL, {
    headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMGNmNjg4Zjc0MDAwMTQyODc0ZTkiLCJpYXQiOjE2ODM4ODUzMDIsImV4cCI6MTY4NTA5NDkwMn0.yJU7j6HaaESU4wTtnKp9T66girbGSxW_574XOpqV6zo"
        }  
})

.then((res) => {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Prodotto non trovatro");
  }
})
.then((product) => {
  console.log(
    "Dati del prodotto recuperati",
    product
  );
})
.catch((err) => console.log(err));



saveButton.addEventListener("click", function (e) {
  e.preventDefault();
  fetch(eventId ? PRODUCT_URL + eventId : PRODUCT_URL, {
    method: eventId ? "PUT" : "POST",
    body: JSON.stringify(new Phone()),
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMGNmNjg4Zjc0MDAwMTQyODc0ZTkiLCJpYXQiOjE2ODM4ODUzMDIsImV4cCI6MTY4NTA5NDkwMn0.yJU7j6HaaESU4wTtnKp9T66girbGSxW_574XOpqV6zo",
      "Content-Type": "application/json",
    },
  })
    .then((res) => console.log(res), location.assign("./page.html"))
    .catch((err) => console.log(err));
});

