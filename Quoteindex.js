console.log("hello");
var btn = document.getElementById("newquote");
var quote = document.querySelector(".text-content");
var person = document.querySelector(".person");

const quotesarr = [{
    quote:"Success is most often achieved by those who don't know that failure is inevitable.",
    person: "Coco Chanel"
},
   {
    quote:"If you are not willing to risk the usual, you will have to settle for the ordinary.",
    person: "- Jim Rohn"
},

{
quote:"Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.",
    person: "- Albert Einstein"
},
{
quote:"Success is walking from failure to failure with no loss of enthusiasm.",
    person: " Winston Churchill"
},

{
    quote:"It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.",
        person: "Charles Darwin"
        
    },

]

btn.addEventListener('click',onclicks);

function onclicks(){
    
    let random = Math.floor(Math.random()*quotesarr.length); //Math.random sometimes don't generate the whole number
    console.log(random);
    quote.innerText= quotesarr[random].quote;
    person.innerText = quotesarr[random].person;
}