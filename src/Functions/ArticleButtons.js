import { articulosBlog } from "../data";
let id = articulosBlog.id;
const ultimoArticulo = articulosBlog[articulosBlog.length - 1].id;
const nextButton = document.querySelector("#nextButton");
const prevButton = document.querySelector("#prevButton");
{
  id === ultimoArticulo
    ? (nextButton.style.display = "none")
    : (nextButton.style.display = "flex");
}
{
  id === 1
    ? (prevButton.style.display = "none")
    : (prevButton.style.display = "flex");
}
