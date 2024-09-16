import "./style.css";
import { TextInterface } from "text-interface";

let app = document.querySelector("#app");
// Create a new "Text Interface"
var counter =  0;
const resturants = ["Panda Express","Pizza Hut","Tacobell","Chipotle","Subway","Dunkins","Chick-fil-a","Mcdonald's"]
let ti = new TextInterface(app, "Camy's Fast Food Finder");
ti.output("Let Camy help you find a fast food resturant! Do want a sandwich of some sort?");
var answer= await ti.readYesOrNo();
ti.clear();
if(answer == true) {
  counter += 4
  ti.output("mmm yummy. Are you craving a burger and/or a chicken sandwich?");
  answer = await ti.readYesOrNo();
  ti.clear();
  if(answer == true){
    counter += 2
    ti.output("sounds good! Final question... is it a Sunday?")
    answer = await ti.readYesOrNo();
    ti.clear();
    if(answer == true){
      counter += 1
    }
    answer = true;
  }
  if(answer == false){
    ti.output("Okay okay! Are you looking for breakfast food?")
    answer =  await ti.readYesOrNo();
    if(answer == true){
      counter += 1
    }
  }
answer = true;
}
if(answer == false) {
  ti.output("Are you craving mexican food?");
  answer = await ti.readYesOrNo();
  ti.clear();
  if(answer == true) {
    counter += 2
    ti.output("Interesting... do you want to customize your meal?")
    answer = await ti.readYesOrNo();
    //asked chatgt for this question
    if(answer == true){
      counter += 1
    }
    answer = true;
  }
  if(answer == false){
    ti.output("Hmmm how about some italian quisine?")
    answer = await ti.readYesOrNo();
    if(answer == true){
      counter +=1
    }
  }
}
ti.clear();
let choice = resturants.at(counter);
ti.output("Amazing, your resturant of choice is: " + choice)
//billy has been an amazing peer partner for 9/12

