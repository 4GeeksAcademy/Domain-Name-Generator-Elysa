import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["my", "her", "its", "their", "she", "your"];
let adj = ["brave", "itchy", "zealous", "petite"];
let noun = ["flower", "fairy", "girl", "dinosaur"];
let domain = [".org", ".us", ".io", ".studio", ".com"];

let output ="";

for (let i=0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let l = 0; l <domain.length; l++) {
        let domainName = pronoun[i] + adj[j] + noun[k] + domain[l];
        output += domainName + "<br>"
        console.log(domainName);
      }
    }
  }
}


window.onload = function() {
document .getElementById("domain").innerHTML = output;
  console.log("Hello Rigo from the console!");
};
