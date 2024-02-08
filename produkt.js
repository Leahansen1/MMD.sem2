const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://kea-alt-del.dk/t7/api/products/" + id)

.then((response)=>response.json())
.then((data)=>showProduct(data));

function showProduct(product){
console.log(product);
document.querySelector("h1.produktnavn").textContent = product.productdisplayname;
document.querySelector(".brand").textContent = product.brandname;
document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
}

// id	1163
// gender	"Men"
// category	"Apparel"
// subcategory	"Topwear"
// articletype	"Tshirts"
// season	"Summer"
// productionyear	2011
// usagetype	"Sports"
// productdisplayname	"Sahara Team India Fanwear Round Neck Jersey"
// price	895
// discount	null
// brandname	"Nike"
// soldout	0