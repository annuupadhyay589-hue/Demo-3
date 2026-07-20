// ================= MENU =================

const sideMenu = document.getElementById("sideMenu");
const menuOverlay = document.getElementById("menuOverlay");

function openMenu(){

    sideMenu.classList.add("active");

    menuOverlay.classList.add("active");

}

function closeMenu(){

    sideMenu.classList.remove("active");

    menuOverlay.classList.remove("active");

}

document.getElementById("menuBtn").onclick = openMenu;

// ================= MENU OPTIONS =================

function aboutUs(){

    closeMenu();

    alert("About Page");

}

function showProducts(){

    closeMenu();

    document.getElementById("products").scrollIntoView({
        behavior:"smooth"
    });

}

function contactUs(){

    closeMenu();

    alert("Contact Us");

}

function openInstagram(){

    closeMenu();

    window.open("https://instagram.com","_blank");

}

function openYoutube(){

    closeMenu();

    window.open("https://youtube.com","_blank");

}
/*====================================
        API
====================================*/

const API = "https://em-store-meerut.onrender.com";

/*====================================
     LOAD PRODUCTS
====================================*/

async function loadProducts(){

    try{

        const res = await fetch(API + "/products");

        const products = await res.json();

        renderProducts(products);

    }

    catch(err){

        console.log(err);

    }

}

loadProducts();

/*====================================
     RENDER PRODUCTS
====================================*/

function renderProducts(products){

    // Sab category container empty

    document.querySelectorAll(".products-row").forEach(box=>{

        box.innerHTML="";

    });

    products.forEach(product=>{

        const container=document.getElementById(product.category+"Products");

        if(!container) return;

        const firstPrice=product.sizes.length
        ?product.sizes[0].price
        :0;

        container.innerHTML+=`

<div class="product-card">

<div class="product-image">

<img src="${API}${product.image}">

</div>

<div class="product-info">

<div class="product-name">

${product.name}

</div>

<div class="product-price">

₹${firstPrice}

</div>

<div class="product-buttons">

<button class="size-btn"

onclick="openSizeModal('${product._id}')">

Choose Size

</button>

<button class="cart-btn"

onclick="quickAdd('${product._id}')">

Add To Cart

</button>

</div>

</div>

</div>

`;

    });

    hideEmptyCategories();

}

/*====================================
 HIDE EMPTY CATEGORY
====================================*/

function hideEmptyCategories(){

document.querySelectorAll(".category-section")

.forEach(section=>{

const box=section.querySelector(".products-row");

if(box.children.length==0){

section.style.display="none";

}

else{

section.style.display="block";

}

});

}
function openDeveloperContact() {
    window.location.href =
    "mailto:upadhyaysushant837@gmail.com?subject=EM Store Developer Contact";
}