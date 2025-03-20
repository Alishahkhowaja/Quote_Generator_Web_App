const apiUrl = "https://quotes-api-self.vercel.app/quote";

const quote = document.getElementById("quote");
const author = document.getElementById("author");

async function getQuote(url) {
    const response = await fetch(url);
    var data = await response.json();

    quote.innerHTML = data.quote;
    author.innerHTML = data.author;
}

getQuote(apiUrl);

function tweet() {
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML, + "---by " + author.innerHTML, + "Tweet Window", "width=600, hight=300");
}