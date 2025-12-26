const slides = [
    {
        image: "./images/img1.jpg",
        quote: "Creativity is thinking up new things. Innovation is doing new things.",
        author: "Theodore Levitt"
    },
    {
        image: "./images/img2.jpg",
        quote: "Design is not just what it looks like and feels like. Design is how it works.",
        author: "Steve Jobs"
    },
    {
        image: "./images/img3.jpg",
        quote: "Success usually comes to those who are too busy to be looking for it.",
        author: "Henry David Thoreau"
    },
    {
        image: "./images/img4.jpg",
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        image: "./images/img5.jpg",
        quote: "Dream big. Start small. Act now.",
        author: "Robin Sharma"
    },
    {
        image: "./images/img6.jpg",
        quote: "Simplicity is the ultimate sophistication.",
        author: "Leonardo da Vinci"
    },
    {
        image: "./images/img7.jpg",
        quote: "Design is intelligence made visible.",
        author: "Alina Wheeler"
    }
];

let index = 0;
let timer;

const img = document.getElementById("slide");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");


function showSlide(){
    img.src = slides[index].image;
    quoteText.textContent = slides[index].quote;
    authorText.textContent = "— " + slides[index].author;
}


function nextClick(){
    index++;
    if(index >= slides.length) index = 0;
    showSlide();
    resetAuto();
}

function prevClick(){
    index--;
    if(index < 0) index = slides.length - 1;
    showSlide();
    resetAuto();
}

function startAuto(){
    timer = setInterval(nextClick, 3000);
}

function resetAuto(){
    clearInterval(timer);
    startAuto();
}

showSlide();
startAuto();
