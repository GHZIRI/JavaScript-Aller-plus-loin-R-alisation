
fetch(`https://fakestoreapi.com/products`)

.then(response => response.json()) 
.then(data => 
{
   let result = document.getElementById("conter");
   result.innerHTML = ``;
   data.forEach(element => 
   {
    let son = document.createElement("div");


    let  title_1 = document.createElement("p");
    title_1.classList.add("title_1");
    title_1.innerHTML =element.title;
    son.appendChild(title_1);
    result.appendChild(son);


    

    let photo = document.createElement("img");
    photo.src = element.image ;
    son.appendChild(photo);
    result.appendChild(son);
    photo.classList.add("image")
    
    let description = document.createElement("p");
    description.innerHTML = element.description;
    son.appendChild(description);
    result.appendChild(son);
    description.classList.add("description")


    let price = document.createElement("p");
    price.innerHTML = element.price;
    son.appendChild(price);
    result.appendChild(son);
    price.classList.add("price");
     
    
    
   });

 
})
