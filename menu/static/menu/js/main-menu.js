var header = document.getElementById("header");
var veg = document.getElementById("veg");
var nonveg = document.getElementById("nonveg");
var cold = document.getElementById("cold");
var categories = document.getElementById("categories");

const html = document.getElementById("html");

const menubox = document.getElementById("menu-box");
const cate = document.getElementById("cate");
const vegphotos = document.getElementById("veg-photos");
const nonvegphotos = document.getElementById("non-veg-photos");
const colddrinksphotos = document.getElementById("cold-drinks-photos");

veg.addEventListener("click", change_Header_veg);
nonveg.addEventListener("click", change_Header_nonveg);
cold.addEventListener("click", change_Header_cold);
categories.addEventListener("click", change_Header_categories);

function change_Header_veg() {
  header.innerHTML = "Vegitarian";
  vegphotos.style.display = "grid";
  cate.style.display = "none";
  nonvegphotos.style.display = "none";
  colddrinksphotos.style.display = "none";
  menubox.style.height = "98rem";
  html.style.setProperty("--beforeHeight", "222rem");
}
function change_Header_nonveg() {
  header.innerHTML = "Non-Vegitarian";
  nonvegphotos.style.display = "grid";
  cate.style.display = "none";
  vegphotos.style.display = "none";
  colddrinksphotos.style.display = "none";
  menubox.style.height = "98rem";
  html.style.setProperty("--beforeHeight", "222rem");
}
function change_Header_cold() {
  header.innerHTML = "ColdDrinks";
  colddrinksphotos.style.display = "grid";
  cate.style.display = "none";
  vegphotos.style.display = "none";
  nonvegphotos.style.display = "none";
  menubox.style.height = "98rem";
  html.style.setProperty("--beforeHeight", "222rem");
}
function change_Header_categories() {
  header.innerHTML = "Categories";
  cate.style.display = "flex";
  nonvegphotos.style.display = "none";
  vegphotos.style.display = "none";
  colddrinksphotos.style.display = "none";
  menubox.style.height = "54rem";
  html.style.setProperty("--beforeHeight", "125rem");
}
