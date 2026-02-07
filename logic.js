const API_URL = "https://dummyjson.com/quotes/random";

const quoteText = document.querySelector(".quote-text");
const authorText = document.querySelector(".author-text");
const generatorBtn = document.getElementById("generator");

async function getQuote() {
  try {
    quoteText.textContent = "Loading...";

    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch quote");
    }

    const data = await response.json();

    // dummyjson structure
    quoteText.textContent = `"${data.quote}"`;
    authorText.textContent = `— ${data.author}`;

  } catch (error) {
    console.error(error);
    quoteText.textContent = "Oops! Couldn't fetch a new quote.";
    authorText.textContent = "";
  }
}

generatorBtn.addEventListener("click", getQuote);
getQuote();
