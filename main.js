import "./style.css";
import { TextInterface } from "text-interface";

let app = document.querySelector("#app");
// Create a new "Text Interface"
let ti = new TextInterface(app, "Billy's Fast Food Finder");
ti.output("What is your name?");
let name = await ti.readText();
ti.output("Hello, " + name);

