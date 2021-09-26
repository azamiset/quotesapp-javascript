const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const newQ = document.getElementById("newQ");
const tweetMe = document.getElementById("tweetMe");
const imgQ = document.getElementById("imgQ");
const showAll = document.getElementById("showAll");

let realData = "";
let quotesData = "";


const tweetNow = () => {
  let tweetPost = `https://twitter.com/intent/tweet?text=${quotesData.text} ${quotesData.author}`;
  window.open(tweetPost);
}

const getNewQuotes = () => {
  let randomNum = Math.floor(Math.random() * 10);

  quotesData = realData[randomNum];
  quotes.innerHTML = `${quotesData.text}`;
  quotesData.author = null ?
    (author.innerText = "unKnown") :
    (author.innerText = `${quotesData.author}`);
}

const getQoutes = async () => {
  const api = "https://type.fit/api/quotes";
  try {
    let data = await fetch(api)
    realData = await data.json();
    getNewQuotes();

    let newImg = 'https://source.unsplash.com/random/350x350';
    imgQ.setAttribute('src', newImg);
  } catch (err) {
    console.log(err);
  }
}

tweetMe.addEventListener('click', tweetNow);
newQ.addEventListener('click', getNewQuotes);
showAll.addEventListener('click', getQoutes);