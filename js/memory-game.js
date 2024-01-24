(function () {
    const msj = document.getElementById('msj');
    let clickedFirstCard;
    let clickedSecondCard;
    let countCardFlip = 0;
    let cardFront1;
    let cardBack1;
    let cardFront2;
    let cardBack2;
    let newArray = [];

    const doneMoves = document.getElementById('moves');
    const doneMatches = document.getElementById('matches');
    const minTimer = document.getElementById('m_timer');
    const secTimer = document.getElementById('s_timer');
    let timerInterval;

    const resetButton = document.getElementById('reset__button');

    // i will get the id of the clicked card
    document.querySelectorAll('.front').forEach(pCard => {
        pCard.addEventListener('click', e => {
            if (countCardFlip == 0) {
                clickedFirstCard = e.target.getAttribute('id');
                countCardFlip++;
            } else if (countCardFlip == 1) {
                clickedSecondCard = e.target.getAttribute('id');
                countCardFlip++;
            }
            chekTimer();
            movesRecorded();
            flipCard(countCardFlip);
        });
    });

    //reset event
    resetButton.addEventListener('click', () => {
        document.querySelectorAll('.front').forEach(card => {
            card.classList.remove("flip__front");
        });
        document.querySelectorAll('.back').forEach(card => {
            card.classList.remove("flip__back");
        });
        msj.innerText = 'FLip any card you want, and start playing!';
        msj.style.color = '#000';
        doneMoves.innerText = 0;
        doneMatches.innerText = 0;
        shuffleArray(imagenes);
        cardAssignment();
        resetTimer();
        minTimer.innerText = '00';
        secTimer.innerText = '00';
    });

    function chekTimer() {
        min = Number(minTimer.innerText);
        sec = Number(secTimer.innerText);
        if (min === 0 || sec === 0) {
            startTimer();
        }
    }

    // array creation from 0 to 11
    const imagenes = [
        '/img/0.jpg', '/img/1.jpg', '/img/2.jpg',
        '/img/3.jpg', '/img/4.jpg', '/img/5.jpg',
        '/img/0.jpg', '/img/1.jpg', '/img/2.jpg',
        '/img/3.jpg', '/img/4.jpg', '/img/5.jpg'
    ];

    //  mix array number function
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // assign the image to every card
    function cardAssignment() {
        for (let i = 0; i < imagenes.length; i++) {
            let cardId = document.getElementById(`back${i}`);
            let urlImage = `url(${imagenes[i]})`;
            cardId.style.backgroundImage = urlImage;

            newArray.push({
                id: `back${i}`,
                url: `${imagenes[i]}`
            });
        }
    }


    //flip cards assigning the right class to every card to flip the front and the back of every img the user clicked on.
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

    //i get the url of the img, to compare the to see if there is a match between 2 flipped cards
    function getUrlById(id) {
        const elemento = newArray.find(item => item.id === id);
        return elemento ? elemento.url : null;
    }

    //check the match cards
    function checkMatches() {
        let url1 = getUrlById(`back${clickedFirstCard}`);
        let url2 = getUrlById(`back${clickedSecondCard}`);

        if (url1 === url2) {
            checkAllCards();
        } else {
            setMsgTime(2, 1000, 'Keep trying!!', 'red');
        }
    }

    //check to see if all cards are flipped or not yet
    function checkAllCards() {
        const checkedCards = [...document.querySelectorAll('.flip__back')];
        matchesRecorded();
        if (checkedCards.length === 12) {
            stopTimer();
            setMsgTime(1, 500, 'Congratulations, You won!!', 'green');
        } else if (checkedCards.length > 0 && checkedCards.length < 11) {
            setMsgTime(1, 500, 'Well done! Keep going!!', 'green');
            resetVariables();
        }
    }

    //set the message time to flip the wrong matches and to change the message color
    function setMsgTime(option, time, msg, color) {
        switch (option) {
            case 1:
                setTimeout(() => {
                    msj.innerText = msg;
                    msj.style.color = color;
                }, time);
                break;

            case 2:
                setTimeout(() => {
                    msj.innerText = msg;
                    msj.style.color = color;
                    flipCard(0);
                }, time);
                break;
        }
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

    function movesRecorded() {
        let count = Number(doneMoves.innerText);
        count++;
        doneMoves.innerText = count;
    }

    function matchesRecorded() {
        let count = Number(doneMatches.innerText);
        count++
        doneMatches.innerText = count;
    }

    function resetTimer() {
        stopTimer();
        min = '00';
        sec = '00';
        cronometro();
    }

    function stopTimer() {
        clearInterval(timerInterval);
        timerInterval = null;
    }

    function startTimer() {
        if (!timerInterval) {
            timerInterval = setInterval(cronometro, 1000);
        }
    }

    function cronometro() {
        let min = Number(minTimer.innerText);
        let sec = Number(secTimer.innerText);

        if (sec < 59) {
            sec = sec < 9 ? "0" + String(sec + 1) : String(sec + 1);
            if (min < 10) {
                min = String("0" + min);
            } else {
                min = String(min);
            }
        } else {
            sec = "00";
            if (min < 59) {
                min = min < 9 ? "0" + String(min + 1) : String(min + 1);
            }
        }

        secTimer.innerText = String(sec);
        minTimer.innerText = String(min);
    }   

    // call to the mix function
    shuffleArray(imagenes);
    //call to assign every card
    cardAssignment();

})();