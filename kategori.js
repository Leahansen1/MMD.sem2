fetch("https://kea-alt-del.dk/t7/api/categories")
.then(res=>res.json())
.then(showCategories)

function showCategories(cats){
    cats.forEach(showCategory)
}

function showCategory(cat){
// vi fanger vores tempplate
const template = document.querySelector("template").content;

// vi cloner
const clone = template.cloneNode(true);

// ændrer indhold
clone.querySelector("a").textContent = cat.category;
clone.querySelector("a").href = `produktliste.html?category=${cat.category}`;

// vi appender
document.querySelector(".kategori ul").appendChild(clone);
}