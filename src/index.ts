import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";
import logoImg from "./content/img1.png";

const person: string = "Jose";
console.log(`Hello ${person}`);

const img = document.createElement("img");
img.src = logoImg;
document.getElementById("imgContainer").appendChild(img);