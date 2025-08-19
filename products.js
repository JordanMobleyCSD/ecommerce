fetch('ecom.json')
.then(response => response.json()) 
    .then(data => {
        const container = document.getElementById('card-container');
        data.forEach(product => {
            const card = document.createElement('div');
            card.classList.add('card');

            card.innerHTML = `
            <img src="${product.image}" alt="${product.name}"/>
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <p>${product.description}</p>
            `;
            container.appendChild(card);
        });
    })

        



// const cardContainer = document.getElementById("card-container")

// products.forEach(product => {
//   const card = document.createElement("div"); // Create the card container
//   card.classList.add("product-card"); 

//   const image = document.createElement("img"); // Create the image element
//   image.src = product.image;
//   image.alt = product.name;
//   card.appendChild(image);

//   const name = document.createElement("h3"); // Create the title element
//   name.textContent = product.name;
//   card.appendChild(name);

//   const price = document.createElement("p"); // Create the price element
//   price.textContent = `$${product.price.toFixed(2)}`; 
//   card.appendChild(price);

//   const description = document.createElement("p"); // Create the description element
//   description.textContent = product.description;
//   card.appendChild(description);

//   cardContainer.appendChild(card); // Add the complete card to the container
// });