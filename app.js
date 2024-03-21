let destinacija= document.getElementById("lista-destinacija");
let naslov=document.getElementsByClassName("title");
let element= document.getElementsByTagName("li");

console.log(destinacija);
console.log(naslov);
console.log(element);

let wrap= document.querySelector("#wrapper");
console.log(wrap);

let nekeDestinacije= document.querySelectorAll(".naziv");
console.log(nekeDestinacije);

let listaDestinacija=document.querySelector("#lista-destinacija")
console.log("lista dest roditelj"); console.log(listaDestinacija.parentNode);
console.log(listaDestinacija.children);
var dugmici= document.querySelectorAll(".obrisi");
Array.from(dugmici).forEach(function(dugme){
    dugme.addEventListener("click",function(e){
        const li= e.target.parentNode;
        let ul=li.parentNode;
        ul.removeChild(li);
    })
})
let ld= document.querySelectorAll("#lista-destinacija ul li .naziv");
string = "Rim, Italija";

for(let i=0;i<ld.length;i++){
    if (ld[i].innerHTML==string){
        ld[i].parentNode.remove();
    }
}
let forme = document.forms;
console.log(forme);
let forma1= document.forms["dodaj-destinaciju"]
console.log(forma1);
//console.log(ld);
