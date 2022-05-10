$(document).ready(function () {
  const gameArea = $("#game");
  const score = $("#score");
  const maxlvl = 3;
  var timerFlag = true;

  class Pallets {
    constructor(namePal, mainCol, clickCol) {
      this.palletName = namePal;
      this.mainColor = mainCol;
      this.clickColor = clickCol;
    }
  }

  const pallet = [
    new Pallets('green', '#0DEB0E', '#00FF65'),
    new Pallets('blue', '#034CF5', '#1151FF'),
    new Pallets('orange', '#F58310', '#F58D01'),
    new Pallets('pinky', '#F502E0', '#FF00FF')
  ];

  class gameLvl {
    constructor(count, lvl, bonusSec) {
      this.lvl = lvl;
      this.blockSize = gameArea.innerWidth() / Math.sqrt(count);
      this.blocksCount = count;
      this.bonusSec = bonusSec;
    }
  }

  function initLvl(lvl) {
    switch (lvl) {
      case 1:
        var count = 16;
        var bonusSec = 1;
        break;

      case 2:
        var count = 25;
        var bonusSec = 1;
        break;

      case 3:
        var count = 64;
        var bonusSec = 2;
        break;

      default:
        var count = 16;
        var bonusSec = 1;
        break;
    }
    const lvlObj = new gameLvl(count, lvl, bonusSec);
    return lvlObj;
  }

  function getRandomPallet(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function getRandomClickColor(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  function createBoard(lvlName) {
    gameArea.empty();
    var fields = $("#game div");
    let palletNumb = getRandomPallet(0, pallet.length - 1);
    for (let i = 0; i < lvlName.blocksCount; i++) {
      const field = $("<div></div>").css({ "width": lvlName.blockSize + "px", "height": lvlName.blockSize + "px", "background-color": pallet[palletNumb].mainColor });
      gameArea.append(field);
      fields.push(field);
    }
    fields[getRandomClickColor(0, fields.length - 1)].addClass('click').css({ "background-color": pallet[palletNumb].clickColor });
  }

  var counter = 0;
  gameSrart();

  function gameSrart() {
    gameSrart = function () { };
    activeLvl = makeLvl(1);
    createBoard(activeLvl);
  }

  gameArea.on('click', initGame);

  function makeLvl(lvl) {
    return initLvl(lvl);
  }


  function initGame(e) {
    if (timerFlag) {
      gameTimer();
    }
    if (e.target.classList.contains('click')) {
      counter++;
      activeLvl = makeLvl(changeLvl(counter, activeLvl.lvl));
      score.html(counter);
      createBoard(activeLvl);
      addSeconds(activeLvl.bonusSec);
    } else {
      clearInterval(int);
      getLose();
    }
  }

  function changeLvl(counter, lvl = 1) {
    if (counter % 3 == 0 && lvl < maxlvl) {
      lvl++;
      return lvl;
    } else {
      return lvl;
    }
  }

  function getLose() {
    clearInterval(int);
    gameArea.off('click', initGame);
    alert('YOU LOST!');
  }

  function addSeconds(sec) {
    let seconds = $(".seconds");
    let minutes = $(".minutes");
    let secValue = Number(seconds.text());
    let newSec = secValue + sec;
    if ((secValue + sec) > 59) {
      newSec = newSec - 60;
      minutes.text(Number(minutes.text()) + 1);
      if (newSec < 10) newSec = "0" + newSec;
      seconds.text(newSec);
    } else {
      if (newSec < 10) newSec = "0" + newSec;
      seconds.text(newSec);
    }
  }

  function gameTimer() {
    int = setInterval(function () {
      var _Seconds = $('.seconds').text(), int;
      var _Minutes = $(".minutes").text(), int;
      if (_Seconds > 0) {
        _Seconds--;
        if (_Seconds < 10) _Seconds = "0" + _Seconds;
        $('.seconds').text(_Seconds);
      } else if (_Seconds == 0 && _Minutes > 0) {
        _Minutes--;
        _Seconds = 59;
        $('.seconds').text(_Seconds);
        $('.minutes').text(_Minutes);
      }
      else {
        clearInterval(int);
        getLose();
      }
    }, 1000);
    timerFlag = false;
  }

  $("#restart").click(function () {
    gameArea.off('click', initGame);
    if (typeof int !== "undefined") {
      clearInterval(int);
    }
    $('.seconds').text('30');
    $('.minutes').text('0');
    score.html(0);
    counter = 0;
    activeLvl = makeLvl(1);
    createBoard(activeLvl);
    timerFlag = true;
    gameArea.on('click', initGame);
  });

});