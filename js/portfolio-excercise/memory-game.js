(function () {
  const msj = document.getElementById('msj');
  let clickedFirstCard;
  let clickedSecondCard;
  let countCardFlip = 0;
  let cardFront1;
  let cardBack1;
  let cardFront2;
  let cardBack2;
  let count = [];

  let newArray = [];
  // i will obtain the id of the clicked card
  document.querySelectorAll('.front').forEach(card => {
    card.addEventListener('click', e => {

      if (countCardFlip == 0) {
        clickedFirstCard = e.target.getAttribute('id');
        countCardFlip++;
      } else if (countCardFlip == 1) {
        clickedSecondCard = e.target.getAttribute('id');
        countCardFlip++;
      }
      flipCard(countCardFlip);

    });
  });

  // array creation from 0 to 11
  const imagenes = [
    '/img/0.jpg', '/img/1.jpg', '/img/2.jpg',
    '/img/3.jpg', '/img/4.jpg', '/img/5.jpg',
    '/img/0.jpg', '/img/1.jpg', '/img/2.jpg',
    '/img/3.jpg', '/img/4.jpg', '/img/5.jpg'
  ];

  // call to the mix function
  shuffleArray(imagenes);

  //  mix array number function
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // assign the image to every card
  for (let i = 0; i < imagenes.length; i++) {
    let cardId = document.getElementById(`back${i}`);
    let urlImage = `url(${imagenes[i]})`;
    cardId.style.backgroundImage = urlImage;

    newArray.push({
      id: `back${i}`,
      url: `${imagenes[i]}`
    });
  }


  //flip cards
  function flipCard(countCardFlip) {
    if (countCardFlip == 1) {
      cardFront1 = document.getElementById(`${clickedFirstCard}`);
      cardBack1 = document.getElementById(`back${clickedFirstCard}`);
      cardFront1.classList.add('flip__front');
      cardBack1.classList.add('flip__back');
    } else if (countCardFlip == 2) {
      cardFront2 = document.getElementById(`${clickedSecondCard}`);
      cardBack2 = document.getElementById(`back${clickedSecondCard}`);
      cardFront2.classList.add('flip__front');
      cardBack2.classList.add('flip__back');
      checkMatches();
    } else {
      cardFront1 = document.getElementById(`${clickedFirstCard}`);
      cardBack1 = document.getElementById(`back${clickedFirstCard}`);
      cardFront2 = document.getElementById(`${clickedSecondCard}`);
      cardBack2 = document.getElementById(`back${clickedSecondCard}`);
      cardFront1.classList.remove('flip__front');
      cardBack1.classList.remove('flip__back');
      cardFront2.classList.remove('flip__front');
      cardBack2.classList.remove('flip__back');

      resetVariables();
    }

  }

  function getUrlById(id) {
    const elemento = newArray.find(item => item.id === id);
    return elemento ? elemento.url : null;
  }

  function checkMatches() {
    let url1 = getUrlById(`back${clickedFirstCard}`);
    let url2 = getUrlById(`back${clickedSecondCard}`);

    if (url1 === url2) {
      if (count === 10) {
        alert("Congratulations!! You won");
      } else {
        setTimeout(() => {
          msj.innerText = 'Well done! Keep going!!';
          msj.style.color = 'green';
          resetVariables();
        }, 500);
      }
      count[0] += 1;
      console.log(count[0])
    } else {
      setTimeout(() => {
        flipCard(0);
      }, 1000);
    }
    console.log(count);
  }

  function resetVariables() {
    countCardFlip = 0;
    clickedFirstCard = null;
    clickedSecondCard = null;
    cardFront1 = null;
    cardBack1 = null;
    cardFront2 = null;
    cardBack2 = null;
    count = 0;
  }

})();