const tab=[
    {
        "id":1,
        "image":"./images/hebergements/fred-kleber.jpg",
        "altTxt":"Image de la chambre d'hôtel montrant deux lits cota à cote",
        "titre":"Hôtel de Port",
        "description":"Nuit à partir de 52",
        "icon": 5,
        "Hotel":"Printemps"
    },
    {
        "id":2,
        "image":"./images/hebergements/febrian-zakaria2.jpg",
        "altTxt":"Image de la chambre d'hôtel montrant deux lits cota à cote avec table d'étude",
        "titre":"Hôtel chez Amina",
        "description":"Nuit à partir de 90",
        "icon": 5,
        "Hotel":"Printemps"
    },
    {
        "id":3,
        "image":"./images/hebergements/reisetopia.jpg",
        "altTxt":"Image de la chambre d'hôtel montrant un lit avec un mirroir et un placard",
        "titre":"Hôtel les mouettes",
        "description":"Nuit à partir de 76",
        "icon": 5,
        "Hotel":"Palace"
    },
    {
        "id":4,
        "image":"./images/hebergements/annie-spratt.jpg",
        "altTxt":"Image de la chambre d'hôtel montrant un lit avec un cadran de la mer bleue juste au dessus",
        "titre":"Hôtel de la mer",
        "description":"Nuit à partir de 46",
        "icon": 5,
        "Hotel":"Palace"
    },
    {
        "id":5,
        "image":"./images/hebergements/marcus-loke.jpg",
        "altTxt":"Image de la chambre d'hôtel montrant deux lits en fer superposés avec vue extérieur",       
        "titre":"Auberge de Canebière",
        "description":"Nuit à partir de 25",
        "icon": 5,
        "Hotel":"Auberge de la falaise"
    },
    {
        "id":6,
        "image":"./images/hebergements/nicate-lee.jpg",
        "altTxt":"Image de la chambre d'hôtel montrant deux lits en bois superposé",
        "titre":"Auberge Le Panier",
        "description":"Nuit à partir de 23",
        "icon": 5,
        "Hotel":"Auberge de la falaise"
    }
 
]


const eco =document.querySelector(".fa-money-bill-wave");
const fam =document.querySelector(".fa-child-dress");
const rom =document.querySelector(".fa-heart");
const pep =document.querySelector(".fa-fire");



const heb =document.querySelector(".hebergements");
const pop =document.querySelector(".populaires");
const act =document.querySelector(".Activites-titre");


const clic1 =( )=>{
    pop.style.display = "none"
}

const clic2 =( )=>{
    heb.style.display = "none"
}

const clic3 =( )=>{
    pop.style.display = "none"
}

const clic4 =( )=>{
    act.style.display = "none"
}


eco.addEventListener("click",clic1)
fam.addEventListener("click",clic2)
rom.addEventListener("click",clic3)
pep.addEventListener("click",clic4)


// const box = async()=>{
//     const Data= await fetch('tab')
//     .then((res)=>{
//         return res.json();
//     })
//     return Data;
// }

// const Card = async()=>{
//      const cadran = await box();
//      console.log(cadran);

// }
// Card();

const Heb = document.querySelectorAll(".cardH");
const cadre = document.querySelector(".others-content")
const boxh = document.querySelector(".others")

const clic =( ) =>{
    console.log("clic")
    boxh.style.display = "block"
    const Cadre = Object.values(tab);
    console.log(Cadre);

    const divv = document.createElement("div")
    divv.classList.add("box-div")
    cadre.appendChild(divv)

    const Div = document.createElement("div")
    Div.classList.add("barre-bouton")
    divv.appendChild(Div)

    const button1 = document.createElement("button")
    button1.classList.add("All")
    button1.innerHTML="All"
    button1.setAttribute("data-name", "All")
    Div.appendChild(button1)

    const button2 = document.createElement("button")
    button2.classList.add("but")
    button2.innerHTML="Auberge de la Falaise"
    button2.setAttribute("data-name", "Auberge de la falaise")
    Div.appendChild(button2)

    const button3 = document.createElement("button")
    button3.classList.add("but")
    button3.innerHTML="Palace"
    button3.setAttribute("data-name", "Palace")
    Div.appendChild(button3)

    const button4 = document.createElement("button")
    button4.classList.add("but")
    button4.innerHTML="Printemps"
    button4.setAttribute("data-name", "Printemps")
    Div.appendChild(button4)

    
    const div = document.createElement("div")
    div.classList.add("hebergements-card")
    divv.appendChild(div)
    for(let dat of Cadre){
        const article= document.createElement("article")
        article.classList.add("cardH")
        div.appendChild(article)

        const img = document.createElement("img");
        img.src=dat.image;
        img.alt=dat.altTxt;
        img.classList.add("i1")
        article.appendChild(img);

        const div1= document.createElement("div")
        div1.classList.add("cardH-content")
        article.appendChild(div1)

        const div2= document.createElement("div")
        div1.classList.add("cardH-txt")
        div1.appendChild(div2)

        const h3 = document.createElement("h3");
        h3.innerHTML = dat.titre;
        h3.classList.add("cardH-title")
        div2.appendChild(h3);

        const p = document.createElement("p");
        p.innerHTML = dat.description;
        p.classList.add("cardH-subtitle")
        div2.appendChild(p);

        const div3= document.createElement("div")
        div3.classList.add("cardH-rating")
        div1.appendChild(div3)

        for(let i=0; i<5;i++){
            const i = document.createElement("i");
            i.innerHTML = dat.icon;
            div3.appendChild(i);
        }
    }
    button1.addEventListener("click",all=()=>{
        div.innerHTML=""
        const divv = document.createElement("div")
        divv.classList.add("box-div")
        cadre.appendChild(divv)

        const Div = document.createElement("div")
        Div.classList.add("barre-bouton")
        divv.appendChild(Div)

        for(let dat of Cadre){
            const article= document.createElement("article")
            article.classList.add("cardH")
            div.appendChild(article)

            const img = document.createElement("img");
            img.src=dat.image;
            img.alt=dat.altTxt;
            img.classList.add("i1")
            article.appendChild(img);

            const div1= document.createElement("div")
            div1.classList.add("cardH-content")
            article.appendChild(div1)

            const div2= document.createElement("div")
            div1.classList.add("cardH-txt")
            div1.appendChild(div2)

            const h3 = document.createElement("h3");
            h3.innerHTML = dat.titre;
            h3.classList.add("cardH-title")
            div2.appendChild(h3);

            const p = document.createElement("p");
            p.innerHTML = dat.description;
            p.classList.add("cardH-subtitle")
            div2.appendChild(p);

            const div3= document.createElement("div")
            div3.classList.add("cardH-rating")
            div1.appendChild(div3)

            for(let i=0; i<5;i++){
                const i = document.createElement("i");
                i.innerHTML = dat.icon;
                div3.appendChild(i);
            }
            
        }
    })
    const but = document.querySelectorAll(".but")
    for(let elt of but){
        elt.addEventListener("click",()=>{
            div.innerHTML=""
            console.log(elt);
            const p = elt.closest("button")
            const n = p.getAttribute("data-name")
            // console.log("test " +n);
            // console.log("if");
            const aub = Cadre.filter((e)=> e.Hotel === n)
            console.log(aub);
            for(let dat of aub){
                const article= document.createElement("article")
                article.classList.add("cardH")
                div.appendChild(article)
        
                const img = document.createElement("img");
                img.src=dat.image;
                img.alt=dat.altTxt;
                img.classList.add("i1")
                article.appendChild(img);
        
                const div1= document.createElement("div")
                div1.classList.add("cardH-content")
                article.appendChild(div1)
        
                const div2= document.createElement("div")
                div1.classList.add("cardH-txt")
                div1.appendChild(div2)
        
                const h3 = document.createElement("h3");
                h3.innerHTML = dat.titre;
                h3.classList.add("cardH-title")
                div2.appendChild(h3);
        
                const p = document.createElement("p");
                p.innerHTML = dat.description;
                p.classList.add("cardH-subtitle")
                div2.appendChild(p);
        
                const div3= document.createElement("div")
                div3.classList.add("cardH-rating")
                div1.appendChild(div3)
        
                for(let i=0; i<5;i++){
                    const i = document.createElement("i");
                    i.innerHTML = dat.icon;
                    div3.appendChild(i);
                }
            }
           
        })
    }

}
for(let dat of Heb){
    dat.addEventListener("click",clic)
}

    //"display block" remet en visuel
    //modal pour le coté populaire
const card = document.querySelectorAll(".card")
const Clic=()=>{
    boxh.style.display = "block"
    const Cadre = Object.values(tab);
    console.log(Cadre);
    for(let dat of Cadre){
        // const div = document.createElement("div")
        // div.classList.add("hebergements-card")
        // cadre.appendChild(div)

        const article= document.createElement("article")
        article.classList.add("cardH")
        cadre.appendChild(article)

        const img = document.createElement("img");
        img.src=dat.image;
        img.alt=dat.altTxt;
        img.classList.add("i1")
        article.appendChild(img);

        const div1= document.createElement("div")
        div1.classList.add("cardH-content")
        article.appendChild(div1)

        const div2= document.createElement("div")
        div1.classList.add("cardH-txt")
        div1.appendChild(div2)

        const h3 = document.createElement("h3");
        h3.innerHTML = dat.titre;
        h3.classList.add("cardH-title")
        div2.appendChild(h3);

        const p = document.createElement("p");
        p.innerHTML = dat.description;
        p.classList.add("cardH-subtitle")
        div2.appendChild(p);

        const div3= document.createElement("div")
        div3.classList.add("cardH-rating")
        div1.appendChild(div3)

        for(let i=0; i<5;i++){
            const i = document.createElement("i");
            i.innerHTML = dat.icon;
            div3.appendChild(i);
        }
        
    }

}

for (let data of card){
    data.addEventListener("click", Clic)
}
 //fonction pour retirer la modal
const boxp  = document.querySelector(".others")
const croix = document.querySelector(".fa-circle-xmark")
const retirer=()=>{
    boxp.style.display = "none"
}
croix.addEventListener("click",retirer)

