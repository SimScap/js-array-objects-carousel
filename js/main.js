/**
 *
 *
 *
Riprendiamo l'esercizio carosello e rifacciamolo, questa volta usando gli oggetti, prendendo come riferimento il codice scritto oggi insieme a lezione, che troverete direttamente nella mia repository di github a questo link: [link github]

Modifichiamo il codice dell'esercizio per renderlo funzionante con un array di oggetti al posto dei tre array separati, con una sola regola: non è possibile modificare l'HTML ma solamente JS e CSS.
Ricordiamo sempre l'importanza dell'integrità del dato.

Bonus 1:
Sperimentiamo attraverso l'uso delle timing functions anche una funzionalità di scorrimento al nostro carosello:
al click di un bottone o già dall'inizio possiamo far partire, ad intervalli di tempo a piacere, lo scorrimento delle immagini disponibili nel carosello stesso.

Bonus 2:
E se volessi un bottone per invertire la "direzione" del carosello?

 *
 */

const immages = [
{
    image:'riky1.jpeg',
    title:'meglio non commentare'
    
},
{   
    image:'riky2.jpg',
    title:'inneggiamenti',
},
{
    image:'riky3.jpg',
    title:'riccardo dab',
},
{
    image:'riky5.jpg',
    title:'riccardo comunista/o',
},
{
    image:'andreotti.png',
    title:'in memory of'
},
];

//for (let i = 0; i < immages.length; i++) {
//  console.log(immages[i]);}
    const carouselContainer = document.querySelector(".my-carousel-images");
    const cardContainer = document.querySelector('.my-thumbnails');

    for( let i=0; i < immages.length; i++){
        let newDiv = document.createElement('div');
        newDiv.classList.add('card'); 
        let newImg = document.createElement('img');
        newImg.classList.add('img-fluid');
        newImg.src= "img/"+immages[i].image;
        cardContainer.append(newDiv);
        newDiv.appendChild(newImg);
        carouselContainer.innerHTML = ` <div class="my-thumbnails">
        <img class="w-100" src="./img/${immages[i].image}" alt="Thumbnail of ${immages[i].title} picture">
        <h1>${immages[i].title}</h1>
    </div>`;
    }

        let indice = 0;
        document.querySelector('.my-next-hook').addEventListener("click",function(){
        indice++ 
    })    
    


