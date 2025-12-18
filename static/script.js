document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("button");
  const quoteDiv = document.getElementById("quote");
  const ball = document.getElementById("ball");

  button.addEventListener("click", () => {

    quoteDiv.classList.remove("show");
    ball.classList.add("shaking");

    fetch("/quote")
      .then(res => res.text())
      .then(text => {
        quoteDiv.innerText = text;
      });

    setTimeout(() => {
      ball.classList.remove("shaking");
      quoteDiv.classList.add("show"); 
    }, 800); 
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("button");
  const ball = document.getElementById("ball");
  const quoteDiv = document.getElementById("quote");

  button.addEventListener("click", () => {
   
    quoteDiv.classList.remove("show");


    ball.classList.add("shaking");

    fetch("/quote")
      .then(res => res.text())
      .then(text => {
        quoteDiv.innerText = text;
      });


    setTimeout(() => {
      ball.classList.remove("shaking"); 
      quoteDiv.classList.add("show");   
    }, 800); 
  });
});