(function () {

    console.log("To begin, you can either start the game with 6 colors or select 'hard mode' first and then start the game for 12 colors " +"\n" +
        "The goal is to determine the sequence that is generated by using process of elimination." + "\n" +
        "Input your four guesses into the provided text box and assert them against the hidden code " + "\n" +
        "You will be given one of 3 responses after each assert, 0 red, 0 white => no colors are in the sequence " + "\n" +
        "'x' red response means that 'x' many colors are correct and in the correct spot in the sequence( no particular order tho) " + "\n" +
        "'x' white response means that 'x' many colors are correct but in the wrong spot in the sequence (no particular order as well) " + "\n" +
        "use the provided notes box as needed to keep track of your options you have eliminated, you have 10 guesses to solve the code!");

    const colorKey = [
        "blue",
        "yellow",
        "orange",
        "green",
        "pink",
        "brown"
    ];
    const hardColorKey = [
        "blue",
        "yellow",
        "orange",
        "green",
        "pink",
        "brown",
        "olive",
        "purple",
        "grey",
        "lime",
        "cyan",
        "tan"
    ];
    let sequence = [];
    let hardMode = document.getElementById("increaseDiff");
    let hard = false;
    let isHard = document.getElementById("isHardMode");
    hardMode.addEventListener("click", function () {
        hard = true;
        hardMode.style.color = "#14bdeb";
        hardMode.style.background = "black";
        isHard.innerText = "Enabled";
        hardMode.disabled = true;
    });

    let newGame = document.getElementById("newGame");
    let done = document.getElementById("done");
    let gameWon = document.getElementById("winner");
    let count = 0;
    //answer key
    let answer1 = document.getElementById("key1");
    let answer2 = document.getElementById("key2");
    let answer3 = document.getElementById("key3");
    let answer4 = document.getElementById("key4");
    //assert buttons
    let assert = document.getElementById("submit");
    let guess1 = document.getElementById("colorInput1");
    let guess2 = document.getElementById("colorInput2");
    let guess3 = document.getElementById("colorInput3");
    let guess4 = document.getElementById("colorInput4");

    //your inputs
    let your11 = document.getElementById("you11");
    let your12 = document.getElementById("you12");
    let your13 = document.getElementById("you13");
    let your14 = document.getElementById("you14");

    let your21 = document.getElementById("you21");
    let your22 = document.getElementById("you22");
    let your23 = document.getElementById("you23");
    let your24 = document.getElementById("you24");

    let your31 = document.getElementById("you31");
    let your32 = document.getElementById("you32");
    let your33 = document.getElementById("you33");
    let your34 = document.getElementById("you34");

    let your41 = document.getElementById("you41");
    let your42 = document.getElementById("you42");
    let your43 = document.getElementById("you43");
    let your44 = document.getElementById("you44");

    let your51 = document.getElementById("you51");
    let your52 = document.getElementById("you52");
    let your53 = document.getElementById("you53");
    let your54 = document.getElementById("you54");

    let your61 = document.getElementById("you61");
    let your62 = document.getElementById("you62");
    let your63 = document.getElementById("you63");
    let your64 = document.getElementById("you64");

    let your71 = document.getElementById("you71");
    let your72 = document.getElementById("you72");
    let your73 = document.getElementById("you73");
    let your74 = document.getElementById("you74");

    let your81 = document.getElementById("you81");
    let your82 = document.getElementById("you82");
    let your83 = document.getElementById("you83");
    let your84 = document.getElementById("you84");

    let your91 = document.getElementById("you91");
    let your92 = document.getElementById("you92");
    let your93 = document.getElementById("you93");
    let your94 = document.getElementById("you94");

    let your101 = document.getElementById("you101");
    let your102 = document.getElementById("you102");
    let your103 = document.getElementById("you103");
    let your104 = document.getElementById("you104");

    //response
    let begin = document.getElementById("start");
    let response1 = document.getElementById("one");
    response1.style.color = "red";
    let response1W = document.getElementById("oneWhite");
    response1W.style.color = "white";
    let response2 = document.getElementById("two");
    response2.style.color = "red";
    let response2W = document.getElementById("twoWhite");
    response2W.style.color = "white";
    let response3 = document.getElementById("three");
    response3.style.color = "red";
    let response3W = document.getElementById("threeWhite");
    response3W.style.color = "white";
    let response4 = document.getElementById("four");
    response4.style.color = "red";
    let response4W = document.getElementById("fourWhite");
    response4W.style.color = "white";
    let response5 = document.getElementById("five");
    response5.style.color = "red";
    let response5W = document.getElementById("fiveWhite");
    response5W.style.color = "white";
    let response6 = document.getElementById("six");
    response6.style.color = "red";
    let response6W = document.getElementById("sixWhite");
    response6W.style.color = "white";
    let response7 = document.getElementById("seven");
    response7.style.color = "red";
    let response7W = document.getElementById("sevenWhite");
    response7W.style.color = "white";
    let response8 = document.getElementById("eight");
    response8.style.color = "red";
    let response8W = document.getElementById("eightWhite");
    response8W.style.color = "white";
    let response9 = document.getElementById("nine");
    response9.style.color = "red";
    let response9W = document.getElementById("nineWhite");
    response9W.style.color = "white";
    let response10 = document.getElementById("ten");
    response10.style.color = "red";
    let response10W = document.getElementById("tenWhite");
    response10W.style.color = "white";

    let restart = document.getElementById("link");
    let newText = document.getElementById("textCycle1");
    let gameText = document.getElementById("textCycle2");
    let restartCount = 0;
    const reloadGame = function(restartCount){
        if(restartCount % 2 === 0){
            newText.style.color = "#ff2e00";
            gameText.style.color = "#fffaff";
        } else {
            newText.style.color = "#fffaff";
            gameText.style.color = "#ff2e00";
        }
        textRestart();
        hard = false;
        sequence = [];
        hardMode.style.color = "#fffafb";
        hardMode.style.background = "#4d473d";
        newGame.style.color = "#fffafb";
        newGame.style.background = "#4d473d";
        hardMode.disabled = false;
        newGame.disabled = false;
        guess1.style.background = "#171717";
        guess2.style.background = "#171717";
        guess3.style.background = "#171717";
        guess4.style.background = "#171717";
        guess1.disabled = false;
        guess2.disabled = false;
        guess3.disabled = false;
        guess4.disabled = false;

    }
    const textRestart = function(){
        isHard.innerText = "";
        answer1.innerHTML = "--";
        answer2.innerHTML = "--";
        answer3.innerHTML = "--";
        answer4.innerHTML = "--";
        response1.innerText = "";
        response1W.innerText = "";
        response2.innerText = "";
        response2W.innerText = "";
        response3.innerText = "";
        response3W.innerText = "";
        response4.innerText = "";
        response4W.innerText = "";
        response5.innerText = "";
        response5W.innerText = "";
        response6.innerText = "";
        response6W.innerText = "";
        response7.innerText = "";
        response7W.innerText = "";
        response8.innerText = "";
        response8W.innerText = "";
        response9.innerText = "";
        response9W.innerText = "";
        response10.innerText = "";
        response10W.innerText = "";
        your11.innerText = "..";
        your12.innerText = "..";
        your13.innerText = "..";
        your14.innerText = "..";
        your21.innerText = "..";
        your22.innerText = "..";
        your23.innerText = "..";
        your24.innerText = "..";
        your31.innerText = "..";
        your32.innerText = "..";
        your33.innerText = "..";
        your34.innerText = "..";
        your41.innerText = "..";
        your42.innerText = "..";
        your43.innerText = "..";
        your44.innerText = "..";
        your51.innerText = "..";
        your52.innerText = "..";
        your53.innerText = "..";
        your54.innerText = "..";
        your61.innerText = "..";
        your62.innerText = "..";
        your63.innerText = "..";
        your64.innerText = "..";
        your71.innerText = "..";
        your72.innerText = "..";
        your73.innerText = "..";
        your74.innerText = "..";
        your81.innerText = "..";
        your82.innerText = "..";
        your83.innerText = "..";
        your84.innerText = "..";
        your91.innerText = "..";
        your92.innerText = "..";
        your93.innerText = "..";
        your94.innerText = "..";
        your101.innerText = "..";
        your102.innerText = "..";
        your103.innerText = "..";
        your104.innerText = "..";
        begin.innerText = "";
    }
    restart.addEventListener("click", function(){
        reloadGame(restartCount);
        restartCount++;
    });

    newGame.addEventListener("click", function () {
        newGame.style.color = "#14bdeb";
        newGame.style.background = "black";
        let key1 = Math.floor(Math.random() * colorKey.length - 1) + 1;
        let key2 = Math.floor(Math.random() * colorKey.length - 1) + 1;
        let key3 = Math.floor(Math.random() * colorKey.length - 1) + 1;
        let key4 = Math.floor(Math.random() * colorKey.length - 1) + 1;
        let hardKey1 = Math.floor(Math.random() * hardColorKey.length - 1) + 1;
        let hardKey2 = Math.floor(Math.random() * hardColorKey.length - 1) + 1;
        let hardKey3 = Math.floor(Math.random() * hardColorKey.length - 1) + 1;
        let hardKey4 = Math.floor(Math.random() * hardColorKey.length - 1) + 1;
        if (hard) {
            sequence.push(hardColorKey[hardKey1]);
            sequence.push(hardColorKey[hardKey2]);
            sequence.push(hardColorKey[hardKey3]);
            sequence.push(hardColorKey[hardKey4]);
        } else {
            sequence.push(colorKey[key1]);
            sequence.push(colorKey[key2]);
            sequence.push(colorKey[key3]);
            sequence.push(colorKey[key4]);
        }
        begin.innerText = "Sequence Generated";
        newGame.disabled = true;
        done.addEventListener("click", function () {
            answer1.innerHTML = sequence[0];
            answer2.innerHTML = sequence[1];
            answer3.innerHTML = sequence[2];
            answer4.innerHTML = sequence[3];
            guess1.style.background = "#000000";
            guess2.style.background = "#000000";
            guess3.style.background = "#000000";
            guess4.style.background = "#000000";
            guess1.disabled = true;
            guess2.disabled = true;
            guess3.disabled = true;
            guess4.disabled = true;
        });
    });
    assert.addEventListener("click", function(){
        onClick(count);
        count++;
    });

    function onClick(){
        let newKey = sequence;
        let firstIsRed = false;
        let secondIsRed = false;
        let thirdIsRed = false;
        let fourthIsRed = false;
        let rCRS = 0;
        let rCWS = 0;
        if (count === 0) {
            let first = guess1.value.toLowerCase();
            let second = guess2.value.toLowerCase();
            let third = guess3.value.toLowerCase();
            let fourth = guess4.value.toLowerCase();
            your11.innerHTML = first;
            your11.style.color = guess1.value;
            your12.innerHTML = second;
            your12.style.color = guess2.value;
            your13.innerHTML = third;
            your13.style.color = guess3.value;
            your14.innerHTML = fourth;
            your14.style.color = guess4.value;

            if (first === newKey[0]) {
                rCRS++;
                newKey = newKey.join(" ").replace(first, "").split(" ");
                firstIsRed = true;
            }
            if (second === newKey[1]) {
                rCRS++;
                newKey = newKey.join(" ").replace(second, "").split(" ");
                secondIsRed = true;
            }
            if (third === newKey[2]) {
                rCRS++;
                newKey = newKey.join(" ").replace(third, "").split(" ");
                thirdIsRed = true;
            }
            if (fourth === newKey[3]) {
                rCRS++;
                newKey = newKey.join(" ").replace(fourth, "").split(" ");
                fourthIsRed = true;
            }
            if (newKey.indexOf(first) !== -1 && !firstIsRed) {
                rCWS++;
                newKey = newKey.join(" ").replace(first, "").split(" ");
            }
            if (newKey.indexOf(second) !== -1 && !secondIsRed) {
                rCWS++;
                newKey = newKey.join(" ").replace(second, "").split(" ");
            }
            if (newKey.indexOf(third) !== -1 && !thirdIsRed) {
                rCWS++;
                newKey = newKey.join(" ").replace(third, "").split(" ");
            }
            if (newKey.indexOf(fourth) !== -1 && !fourthIsRed) {
                rCWS++;
                newKey = newKey.join(" ").replace(fourth, "").split(" ");
            }

            if (rCRS === 4) {
                gameWon.innerText = "Winner!";
            }

            response1.innerText = rCRS + " Red ";
            response1W.innerText = rCWS + " White";
        } else if (count === 1) {
            let first = guess1.value.toLowerCase();
            let second = guess2.value.toLowerCase();
            let third = guess3.value.toLowerCase();
            let fourth = guess4.value.toLowerCase();
            your21.innerHTML = first;
            your21.style.color = guess1.value;
            your22.innerHTML = second;
            your22.style.color = guess2.value;
            your23.innerHTML = third;
            your23.style.color = guess3.value;
            your24.innerHTML = fourth;
            your24.style.color = guess4.value;

            if (first === newKey[0]) {
                rCRS++;
                newKey = newKey.join(" ").replace(first, "").split(" ");
                firstIsRed = true;
            }
            if (second === newKey[1]) {
                rCRS++;
                newKey = newKey.join(" ").replace(second, "").split(" ");
                secondIsRed = true;
            }
            if (third === newKey[2]) {
                rCRS++;
                newKey = newKey.join(" ").replace(third, "").split(" ");
                thirdIsRed = true;
            }
            if (fourth === newKey[3]) {
                rCRS++;
                newKey = newKey.join(" ").replace(fourth, "").split(" ");
                fourthIsRed = true;
            }
            if (newKey.indexOf(first) !== -1 && !firstIsRed) {
                rCWS++;
                newKey = newKey.join(" ").replace(first, "").split(" ");
            }
            if (newKey.indexOf(second) !== -1 && !secondIsRed) {
                rCWS++;
                newKey = newKey.join(" ").replace(second, "").split(" ");
            }
            if (newKey.indexOf(third) !== -1 && !thirdIsRed) {
                rCWS++;
                newKey = newKey.join(" ").replace(third, "").split(" ");
            }
            if (newKey.indexOf(fourth) !== -1 && !fourthIsRed) {
                rCWS++;
                newKey = newKey.join(" ").replace(fourth, "").split(" ");
            }

            if (rCRS === 4) {
                gameWon.innerText = "Winner!";
            }
            response2.innerText = rCRS + " Red ";
            response2W.innerText = rCWS + " White";
        } else if (count === 2) {
            let first = guess1.value.toLowerCase();
            let second = guess2.value.toLowerCase();
            let third = guess3.value.toLowerCase();
            let fourth = guess4.value.toLowerCase();
            your31.innerHTML = first;
            your31.style.color = guess1.value;
            your32.innerHTML = second;
            your32.style.color = guess2.value;
            your33.innerHTML = third;
            your33.style.color = guess3.value;
            your34.innerHTML = fourth;
            your34.style.color = guess4.value;

            if (first === newKey[0]) {
                rCRS++;
                newKey = newKey.join(" ").replace(first, "").split(" ");
                firstIsRed = true;
            }
            if (second === newKey[1]) {
                rCRS++;
                newKey = newKey.join(" ").replace(second, "").split(" ");
                secondIsRed = true;
            }
            if (third === newKey[2]) {
                rCRS++;
                newKey = newKey.join(" ").replace(third, "").split(" ");
                thirdIsRed = true;
            }
            if (fourth === newKey[3]) {
                rCRS++;
                newKey = newKey.join(" ").replace(fourth, "").split(" ");
                fourthIsRed = true;
            }
            if (newKey.indexOf(first) !== -1 && !firstIsRed) {
                rCWS++;
                newKey = newKey.join(" ").replace(first, "").split(" ");
            }
            if (newKey.indexOf(second) !== -1 && !secondIsRed) {
                rCWS++;
                newKey = newKey.join(" ").replace(second, "").split(" ");
            }
            if (newKey.indexOf(third) !== -1 && !thirdIsRed) {
                rCWS++;
                newKey = newKey.join(" ").replace(third, "").split(" ");
            }
            if (newKey.indexOf(fourth) !== -1 && !fourthIsRed) {
                rCWS++;
                newKey = newKey.join(" ").replace(fourth, "").split(" ");
            }

            if (rCRS === 4) {
                gameWon.innerText = "Winner!";
            }

            response3.innerText = rCRS + " Red ";
            response3W.innerText = rCWS + " White";
        } else if (count === 3) {
            let first = guess1.value.toLowerCase();
            let second = guess2.value.toLowerCase();
            let third = guess3.value.toLowerCase();
            let fourth = guess4.value.toLowerCase();
            your41.innerHTML = first;
            your41.style.color = guess1.value;
            your42.innerHTML = second;
            your42.style.color = guess2.value;
            your43.innerHTML = third;
            your43.style.color = guess3.value;
            your44.innerHTML = fourth;
            your44.style.color = guess4.value;

            if (first === newKey[0]) {
                rCRS++;
                newKey = newKey.join(" ").replace(first, "").split(" ");
                firstIsRed = true;
            }
            if (second === newKey[1]) {
                rCRS++;
                newKey = newKey.join(" ").replace(second, "").split(" ");
                secondIsRed = true;
            }
            if (third === newKey[2]) {
                rCRS++;
                newKey = newKey.join(" ").replace(third, "").split(" ");
                thirdIsRed = true;
            }
            if (fourth === newKey[3]) {
                rCRS++;
                newKey = newKey.join(" ").replace(fourth, "").split(" ");
                fourthIsRed = true;
            }
            if (newKey.indexOf(first) !== -1 && !firstIsRed) {
                rCWS++;
                newKey = newKey.join(" ").replace(first, "").split(" ");
            }
            if (newKey.indexOf(second) !== -1 && !secondIsRed) {
                rCWS++;
                newKey = newKey.join(" ").replace(second, "").split(" ");
            }
            if (newKey.indexOf(third) !== -1 && !thirdIsRed) {
                rCWS++;
                newKey = newKey.join(" ").replace(third, "").split(" ");
            }
            if (newKey.indexOf(fourth) !== -1 && !fourthIsRed) {
                rCWS++;
                newKey = newKey.join(" ").replace(fourth, "").split(" ");
            }

            if (rCRS === 4) {
                gameWon.innerText = "Winner!";
            }
            response4.innerText = rCRS + " Red ";
            response4W.innerText = rCWS + " White";
        } else if (count === 4) {
            let first = guess1.value.toLowerCase();
            let second = guess2.value.toLowerCase();
            let third = guess3.value.toLowerCase();
            let fourth = guess4.value.toLowerCase();
            your51.innerHTML = first;
            your51.style.color = guess1.value;
            your52.innerHTML = second;
            your52.style.color = guess2.value;
            your53.innerHTML = third;
            your53.style.color = guess3.value;
            your54.innerHTML = fourth;
            your54.style.color = guess4.value;

            if (first === newKey[0]) {
                rCRS++;
                newKey = newKey.join(" ").replace(first, "").split(" ");
                firstIsRed = true;
            }
            if (second === newKey[1]) {
                rCRS++;
                newKey = newKey.join(" ").replace(second, "").split(" ");
                secondIsRed = true;
            }
            if (third === newKey[2]) {
                rCRS++;
                newKey = newKey.join(" ").replace(third, "").split(" ");
                thirdIsRed = true;
            }
            if (fourth === newKey[3]) {
                rCRS++;
                newKey = newKey.join(" ").replace(fourth, "").split(" ");
                fourthIsRed = true;
            }
            if (newKey.indexOf(first) !== -1 && !firstIsRed) {
                rCWS++;
                newKey = newKey.join(" ").replace(first, "").split(" ");
            }
            if (newKey.indexOf(second) !== -1 && !secondIsRed) {
                rCWS++;
                newKey = newKey.join(" ").replace(second, "").split(" ");
            }
            if (newKey.indexOf(third) !== -1 && !thirdIsRed) {
                rCWS++;
                newKey = newKey.join(" ").replace(third, "").split(" ");
            }
            if (newKey.indexOf(fourth) !== -1 && !fourthIsRed) {
                rCWS++;
                newKey = newKey.join(" ").replace(fourth, "").split(" ");
            }

            if (rCRS === 4) {
                gameWon.innerText = "Winner!";
            }

            response5.innerText = rCRS + " Red ";
            response5W.innerText = rCWS + " White";
        } else if (count === 5) {
            let first = guess1.value.toLowerCase();
            let second = guess2.value.toLowerCase();
            let third = guess3.value.toLowerCase();
            let fourth = guess4.value.toLowerCase();
            your61.innerHTML = first;
            your61.style.color = guess1.value;
            your62.innerHTML = second;
            your62.style.color = guess2.value;
            your63.innerHTML = third;
            your63.style.color = guess3.value;
            your64.innerHTML = fourth;
            your64.style.color = guess4.value;

            if (first === newKey[0]) {
                rCRS++;
                newKey = newKey.join(" ").replace(first, "").split(" ");
                firstIsRed = true;
            }
            if (second === newKey[1]) {
                rCRS++;
                newKey = newKey.join(" ").replace(second, "").split(" ");
                secondIsRed = true;
            }
            if (third === newKey[2]) {
                rCRS++;
                newKey = newKey.join(" ").replace(third, "").split(" ");
                thirdIsRed = true;
            }
            if (fourth === newKey[3]) {
                rCRS++;
                newKey = newKey.join(" ").replace(fourth, "").split(" ");
                fourthIsRed = true;
            }
            if (newKey.indexOf(first) !== -1 && !firstIsRed) {
                rCWS++;
                newKey = newKey.join(" ").replace(first, "").split(" ");
            }
            if (newKey.indexOf(second) !== -1 && !secondIsRed) {
                rCWS++;
                newKey = newKey.join(" ").replace(second, "").split(" ");
            }
            if (newKey.indexOf(third) !== -1 && !thirdIsRed) {
                rCWS++;
                newKey = newKey.join(" ").replace(third, "").split(" ");
            }
            if (newKey.indexOf(fourth) !== -1 && !fourthIsRed) {
                rCWS++;
                newKey = newKey.join(" ").replace(fourth, "").split(" ");
            }

            if (rCRS === 4) {
                gameWon.innerText = "Winner!";
            }
            response6.innerText = rCRS + " Red ";
            response6W.innerText = rCWS + " White";
        } else if (count === 6) {
            let first = guess1.value.toLowerCase();
            let second = guess2.value.toLowerCase();
            let third = guess3.value.toLowerCase();
            let fourth = guess4.value.toLowerCase();
            your71.innerHTML = first;
            your71.style.color = guess1.value;
            your72.innerHTML = second;
            your72.style.color = guess2.value;
            your73.innerHTML = third;
            your73.style.color = guess3.value;
            your74.innerHTML = fourth;
            your74.style.color = guess4.value;

            if (first === newKey[0]) {
                rCRS++;
                newKey = newKey.join(" ").replace(first, "").split(" ");
                firstIsRed = true;
            }
            if (second === newKey[1]) {
                rCRS++;
                newKey = newKey.join(" ").replace(second, "").split(" ");
                secondIsRed = true;
            }
            if (third === newKey[2]) {
                rCRS++;
                newKey = newKey.join(" ").replace(third, "").split(" ");
                thirdIsRed = true;
            }
            if (fourth === newKey[3]) {
                rCRS++;
                newKey = newKey.join(" ").replace(fourth, "").split(" ");
                fourthIsRed = true;
            }
            if (newKey.indexOf(first) !== -1 && !firstIsRed) {
                rCWS++;
                newKey = newKey.join(" ").replace(first, "").split(" ");
            }
            if (newKey.indexOf(second) !== -1 && !secondIsRed) {
                rCWS++;
                newKey = newKey.join(" ").replace(second, "").split(" ");
            }
            if (newKey.indexOf(third) !== -1 && !thirdIsRed) {
                rCWS++;
                newKey = newKey.join(" ").replace(third, "").split(" ");
            }
            if (newKey.indexOf(fourth) !== -1 && !fourthIsRed) {
                rCWS++;
                newKey = newKey.join(" ").replace(fourth, "").split(" ");
            }

            if (rCRS === 4) {
                gameWon.innerText = "Winner!";
            }
            response7.innerText = rCRS + " Red ";
            response7W.innerText = rCWS + " White";
        } else if (count === 7) {
            let first = guess1.value.toLowerCase();
            let second = guess2.value.toLowerCase();
            let third = guess3.value.toLowerCase();
            let fourth = guess4.value.toLowerCase();
            your81.innerHTML = first;
            your81.style.color = guess1.value;
            your82.innerHTML = second;
            your82.style.color = guess2.value;
            your83.innerHTML = third;
            your83.style.color = guess3.value;
            your84.innerHTML = fourth;
            your84.style.color = guess4.value;

            if (first === newKey[0]) {
                rCRS++;
                newKey = newKey.join(" ").replace(first, "").split(" ");
                firstIsRed = true;
            }
            if (second === newKey[1]) {
                rCRS++;
                newKey = newKey.join(" ").replace(second, "").split(" ");
                secondIsRed = true;
            }
            if (third === newKey[2]) {
                rCRS++;
                newKey = newKey.join(" ").replace(third, "").split(" ");
                thirdIsRed = true;
            }
            if (fourth === newKey[3]) {
                rCRS++;
                newKey = newKey.join(" ").replace(fourth, "").split(" ");
                fourthIsRed = true;
            }
            if (newKey.indexOf(first) !== -1 && !firstIsRed) {
                rCWS++;
                newKey = newKey.join(" ").replace(first, "").split(" ");
            }
            if (newKey.indexOf(second) !== -1 && !secondIsRed) {
                rCWS++;
                newKey = newKey.join(" ").replace(second, "").split(" ");
            }
            if (newKey.indexOf(third) !== -1 && !thirdIsRed) {
                rCWS++;
                newKey = newKey.join(" ").replace(third, "").split(" ");
            }
            if (newKey.indexOf(fourth) !== -1 && !fourthIsRed) {
                rCWS++;
                newKey = newKey.join(" ").replace(fourth, "").split(" ");
            }

            if (rCRS === 4) {
                gameWon.innerText = "Winner!";
            }

            response8.innerText = rCRS + " Red ";
            response8W.innerText = rCWS + " White";
        } else if (count === 8) {
            let first = guess1.value.toLowerCase();
            let second = guess2.value.toLowerCase();
            let third = guess3.value.toLowerCase();
            let fourth = guess4.value.toLowerCase();
            your91.innerHTML = first;
            your91.style.color = guess1.value;
            your92.innerHTML = second;
            your92.style.color = guess2.value;
            your93.innerHTML = third;
            your93.style.color = guess3.value;
            your94.innerHTML = fourth;
            your94.style.color = guess4.value;

            if (first === newKey[0]) {
                rCRS++;
                newKey = newKey.join(" ").replace(first, "").split(" ");
                firstIsRed = true;
            }
            if (second === newKey[1]) {
                rCRS++;
                newKey = newKey.join(" ").replace(second, "").split(" ");
                secondIsRed = true;
            }
            if (third === newKey[2]) {
                rCRS++;
                newKey = newKey.join(" ").replace(third, "").split(" ");
                thirdIsRed = true;
            }
            if (fourth === newKey[3]) {
                rCRS++;
                newKey = newKey.join(" ").replace(fourth, "").split(" ");
                fourthIsRed = true;
            }
            if (newKey.indexOf(first) !== -1 && !firstIsRed) {
                rCWS++;
                newKey = newKey.join(" ").replace(first, "").split(" ");
            }
            if (newKey.indexOf(second) !== -1 && !secondIsRed) {
                rCWS++;
                newKey = newKey.join(" ").replace(second, "").split(" ");
            }
            if (newKey.indexOf(third) !== -1 && !thirdIsRed) {
                rCWS++;
                newKey = newKey.join(" ").replace(third, "").split(" ");
            }
            if (newKey.indexOf(fourth) !== -1 && !fourthIsRed) {
                rCWS++;
                newKey = newKey.join(" ").replace(fourth, "").split(" ");
            }

            if (rCRS === 4) {
                gameWon.innerText = "Winner!";
            }
            response9.innerText = rCRS + " Red ";
            response9W.innerText = rCWS + " White";
        } else if (count === 9) {
            let first = guess1.value.toLowerCase();
            let second = guess2.value.toLowerCase();
            let third = guess3.value.toLowerCase();
            let fourth = guess4.value.toLowerCase();
            your101.innerHTML = first;
            your101.style.color = guess1.value;
            your102.innerHTML = second;
            your102.style.color = guess2.value;
            your103.innerHTML = third;
            your103.style.color = guess3.value;
            your104.innerHTML = fourth;
            your104.style.color = guess4.value;

            if (first === newKey[0]) {
                rCRS++;
                newKey = newKey.join(" ").replace(first, "").split(" ");
                firstIsRed = true;
            }
            if (second === newKey[1]) {
                rCRS++;
                newKey = newKey.join(" ").replace(second, "").split(" ");
                secondIsRed = true;
            }
            if (third === newKey[2]) {
                rCRS++;
                newKey = newKey.join(" ").replace(third, "").split(" ");
                thirdIsRed = true;
            }
            if (fourth === newKey[3]) {
                rCRS++;
                newKey = newKey.join(" ").replace(fourth, "").split(" ");
                fourthIsRed = true;
            }
            if (newKey.indexOf(first) !== -1 && !firstIsRed) {
                rCWS++;
                newKey = newKey.join(" ").replace(first, "").split(" ");
            }
            if (newKey.indexOf(second) !== -1 && !secondIsRed) {
                rCWS++;
                newKey = newKey.join(" ").replace(second, "").split(" ");
            }
            if (newKey.indexOf(third) !== -1 && !thirdIsRed) {
                rCWS++;
                newKey = newKey.join(" ").replace(third, "").split(" ");
            }
            if (newKey.indexOf(fourth) !== -1 && !fourthIsRed) {
                rCWS++;
                newKey = newKey.join(" ").replace(fourth, "").split(" ");
            }

            if (rCRS === 4) {
                gameWon.innerText = "Winner!";
            }
            response10.innerText = rCRS + " Red ";
            response10W.innerText = rCWS + " White";
        }
    }
})();