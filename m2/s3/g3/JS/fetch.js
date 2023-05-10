fetch('https://striveschool-api.herokuapp.com/books')

.then((res) => {
    if (res.ok) {
        return res.json();
    } else {
        throw new Error("No-books");
    }
})
.then((dati) => {
   let row = document.getElementsByClassName("row")[0];
   dati.forEach((element) => {
    row.innerHTML += `
    <div class="col">
        <div class="card ms-auto me-auto" style="width: 18rem;">
            <img src="${element.img}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <p class="card-text"><span class="fw-bold">Category:</span> ${element.category}</p>
                <p class="card-text"><span class="fw-bold">Price:</span> ${element.price}</p>
                <button class="btn btn-danger discard">Scarta</button>
                <button class="btn btn-success buy-now">Compra ora</button>
            </div>
        </div>
    </div>
    `
   });

   let card = document.getElementsByClassName("card");
   console.log(card);
   let button = document.getElementsByClassName("btn");
   for (const iterator of btn) {
    iterator.addEventListener("click", () =>
        iterator.parentElement.parentElement.parentElement.remove()
        );
   }

})

   .catch((error) => {
    console.log(error)
   });

   




