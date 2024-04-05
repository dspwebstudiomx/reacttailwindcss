import { articulosBlog } from "../data";
let id = articulosBlog.id;

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
