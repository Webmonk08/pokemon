// mytimer1,mytimer,mytimer2 - for animation
// fn - to call the function to change loading screen
// clickeffect - to change the loading screen {fetchpoke}
// backchange - change background by clicking pickachu {fetch poke,pagefade}
// fetchpoke - to fetch pokemon
// pagefade- to fade the first page

var a = 1;
var pika = document.querySelector("#img");
var poke = document.getElementById("text");
var cont = document.getElementById("continue-text");
var image = document.querySelector(".image-bulbasaur");
var con = document.querySelector(".con");
var head = document.querySelector("#head");
var bback = document.querySelector("#b-back");
var bdetails = document.querySelector("#b-details");
var bt = document.querySelector("#b-t");
var cback = document.querySelector("#c-back");
var cdetails = document.querySelector("#c-details");
var ct = document.querySelector("#c-t");
var page2 = document.querySelector('#page2');
var imgc=document.querySelector(".image-charizard");
var htext=document.querySelector("#h-text");
var page1=document.querySelector("#page1");
const colors = ["white.webp", "orange.webp"] ;
const colors1=["purple.webp","https://www.kindpng.com/picc/b/217-2177850_green-glow-light-png-transparent-png.png"];
var images1=document.querySelector("#images1");
var images2=document.querySelector("#images2");
// loading page st
const myVar = setTimeout(myTimer, 4988);

function myTimer() {
    pika.style.left = "-230px";
}

const myVar1 = setTimeout(myTimer1, 9998);

function myTimer1() {

    text.style.opacity = "1";
    pika.style.transform = "scale(1.3)";
    pika.style.left = "-215px";

}

const myVar2 = setTimeout(myTimer2, 10998);

function myTimer2() {
    cont.style.opacity = "1";
}

const myvar3 = setTimeout(fn, 10998);

function fn() {
    document.body.setAttribute('onclick', 'clickeffect()');
    document.body.style.cursor="pointer";
}
// loading page end
 
// first page effect 

function clickeffect() {
    document.body.style.cursor='default';
    image.style.display = "block";
    document.body.style.background = "transparent";
    con.style.animation = "fadeeffect 0.5s";
    con.style.opacity = "0";
    head.style.display = "block";
    poke.style.color = "black";
    document.body.getAttribute('onclick');
    document.body.removeAttribute('onclick');
    bback.style.display = "block";
    bdetails.style.animation = "moveb 2s ease";
    bt.style.animation = "move-b 2s ease";
    
    fetchpoke();
}
// pokemon change 

function backchange() {
    var b=Math.floor(Math. random() * colors. length);
    if(a==1){
        bdetails.style.animation="movecend 1s";
        bt.style.animation="move-cend 1s";
        image.style.animation="image1end 1s";
        document.querySelector("#page1").style.animation = "pagefade 0.2s ease";
        pagefade();
        page2.style.opacity="1";
        cback.src=colors[b];
        images1.style.animation="image2 2s ease"
        imgc.style.animation="image2 2s ease"
        cback.style.display = "block";
        cdetails.style.display='block';
        cdetails.style.color='white';
        ct.style.color='white';
        cdetails.style.animation = "movec 2s ease";
        ct.style.animation = "move-c 2s ease";
        page2.style.display = "block";
        imgc.style.display='block';
        ct.style.display='block';
        htext.style.color='white';
        htext.style.zIndex='33';
        a=0;
        fetchpoke();
    }
    else{
        cdetails.style.animation="movecend 1s";
        ct.style.animation="move-cend 1s";
        imgc.style.animation="image2end 1s";
        document.querySelector("#page2").style.animation = "pageappear 2s ease";
        pageappear();
        page1.style.opacity="1";
        images2.style.animation="image1 0.2s ease";
        image.style.animation="image1 0.2s ease";
        bback.src=colors1[b];
        bback.style.display = "block";
        bdetails.style.display='block';
        bdetails.style.color='black';
        bt.style.color='black';
        bdetails.style.animation = "moveb 02s ease";
        bt.style.animation = "move-b 0.2s ease";
        page1.style.display = "block";
        image.style.display='block';
        bt.style.display='block';
        htext.style.color='black';
        htext.style.zIndex='33';
        a=1;
        // document.querySelector("#page2").style.animation =null;
        fetchpoke();
    }
}

function pagefade() {
    document.querySelector('#page1').style.opacity = '0';
    document.querySelector('#page1').style.display = 'none';
    bback.style.display='none';
}
function pageappear() {
    document.querySelector('#page2').style.opacity = '0';
    document.querySelector('#page2').style.display = 'none';
    cback.style.display='none';
}
// pokemonchange end

// Fetching Api

async function fetchpoke() {
    if (a == 1) {
        try {
            var response = await fetch('https://pokeapi.co/api/v2/pokemon/');
            var data = await response.json();
            var randomIndex = Math.floor(Math.random() * data.results.length);
            var pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${data.results[randomIndex].name}`);
            var pokemondata = await pokemon.json();
            document.querySelector(".image-bulbasaur").src = pokemondata.sprites.front_default;
            document.querySelector("#b-t").textContent = pokemondata.name;
            document.querySelector("#p-type").textContent ="Type: " + pokemondata.types[0].type.name;
            document.querySelector("#p-height").textContent ="Height:  " + pokemondata.height;
            document.querySelector("#p-weight").textContent ="Wight: " + pokemondata.weight;
            document.querySelector("#p-id").textContent = pokemondata.Id;
        } catch (error) {
            console.log("Error", error);
        }
    } else {
        try {
            var response = await fetch('https://pokeapi.co/api/v2/pokemon/');
            var data = await response.json();
            var randomIndex = Math.floor(Math.random() * data.results.length);
            var pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${data.results[randomIndex].name}`);
            var pokemondata = await pokemon.json();
            document.querySelector(".image-charizard").src = pokemondata.sprites.front_default;
            document.querySelector("#c-t").textContent =pokemondata.name;
            document.querySelector("#c-type").textContent ="Type: "  + pokemondata.types[0].type.name;
            document.querySelector("#c-height").textContent ="Height: " + pokemondata.height;
            document.querySelector("#c-weight").textContent ="Weigth: " + pokemondata.weight;
            document.querySelector("#c-id").textContent = pokemondata.Id;
        } catch (error) {
            console.log("Error", error);
        }
    }
}

// Fetched