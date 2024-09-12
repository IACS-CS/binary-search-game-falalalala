import "./style.css";
import { TextInterface } from "text-interface";

let app = document.querySelector("#app");
// Create a new "Text Interface"
var counter =  0;
const resturants = ["Mcdonalds","Subway","Chick-fil-a","Dunkins","Pizza Hut","Chipotle","Tacobell","Panda Express"]
let ti = new TextInterface(app, "Camy's Fast Food Finder");
ti.output("Let Camy help you find a fast food resturant! Do want a sandwich of some sort? -Camy ");
var answer= await ti.readYesOrNo();
ti.clear();
if(answer == true) {
  counter += 4
  ti.output("mmm yummy. Are you craving A burger or a chicken sandwich?");
  answer = await ti.readYesOrNo();
  if(answer == true){
    counter += 2
    ti.output("sounds good!")
  }
  if(answer == false){

  }

}
if(answer == false) {

}



