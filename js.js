let cells = document.getElementsByTagName('td');
let myreset = document.getElementById("play");
let myp = document.getElementById("won");
let mycells = [];
let player = 1;
for (let i = 0; i < cells.length; i++) {
  cells[i].onclick = function() {
    if (cells[i].textContent === '') {
      if (player % 2 == 0) {
        cells[i].textContent = 'X'
      } else {
        cells[i].textContent = 'O'
      }
      player++
    }
    win();
  };
}

function win() {
    for (let i = 1; i <= 9; i++) {
      mycells[i] = document.getElementById("c" + i).textContent;
    }
    if (
      (mycells[1] == mycells[2] && mycells[2] == mycells[3] && mycells[1] != "") ||
      (mycells[4] == mycells[5] && mycells[5] == mycells[6] && mycells[4] != "") ||
      (mycells[7] == mycells[8] && mycells[8] == mycells[9] && mycells[7] != "") ||
      (mycells[1] == mycells[4] && mycells[4] == mycells[7] && mycells[1] != "") ||
      (mycells[2] == mycells[5] && mycells[5] == mycells[8] && mycells[2] != "") ||
      (mycells[3] == mycells[6] && mycells[6] == mycells[9] && mycells[3] != "") ||
      (mycells[1] == mycells[5] && mycells[5] == mycells[9] && mycells[1] != "") ||
      (mycells[3] == mycells[5] && mycells[5] == mycells[7] && mycells[3] != "")
    ) {
      myp.innerHTML = "you won";
      for (let i = 0; i < cells.length; i++) {
        cells[i].onclick = function() {
            return false
          }
      }
    }
    console.log(mycells);
  }
  myreset.onclick = function() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerHTML = ''
    myp.innerHTML = ""
    
  }
  for (let i = 0; i < cells.length; i++) {
    cells[i].onclick = function() {
      if (cells[i].textContent === '') {
        if (player % 2 === 0) {
          cells[i].textContent = 'X'
        } else {
          cells[i].textContent = 'O'
        }
        player++
      }
      win();
    };
  }
}

