const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

// fetch
fetch("https://kea-alt-del.dk/t7/api/products?category="+category)
.then(res=>res.json())
.then(showProducts)

function showProducts(products){
    // loop og kalder showProduct
 products.forEach(showProduct)
}

function showProduct(product){
    console.log(product);
    // fang template
    const template = document.querySelector("#smallProductTemplate").content;
    // lav en kopi
    const copy = template.cloneNode(true);
    // ændre indhold
    copy.querySelector("h2").textContent=product.productdisplayname;
    // if(product.udsolgt){
    //     copy.querySelector("article").classList.add("udsolgt");
    // }
    copy.querySelector(".price").textContent=product.price;
    copy.querySelector("img").src=`https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

     copy.querySelector(".seMere").setAttribute("href", `produkt.html?id=${product.id}`);
    // appende
    document.querySelector(".grid_2-4").appendChild(copy);

}    