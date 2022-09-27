'use strict'

var gNums
var gLevel
var gChoseNum
var gInterval
var gTimer = document.querySelector(".timer");

function onInit() {

}

function levels(level) {
    gLevel = level
    choseLevel()
    clearInterval(gInterval)

    gTimer.innerText = '00:00'
    onPlayGame()
}

function onPlayGame() {
    gNums = createNums(gLevel)
    gNums = resetNums(gNums)
    gChoseNum = createNums(gLevel)
    renderBoard(Math.sqrt(gLevel))
}

function cellClicked(elCell) {
    console.log('ev', elCell)

    if (gChoseNum[0] == elCell.innerText) {
        gChoseNum.shift()
        console.log('gChoseNum', gChoseNum)
        elCell.style.backgroundColor = "#d122d1ab"
        console.log(gChoseNum);
    }
    isVictory()
    if (elCell.innerText == 1) {
        setTime()
    }
}

function isVictory() {
    if (!gChoseNum.length) {
        clearInterval(gInterval)
        var elBoard = document.querySelector('.board')
        elBoard.innerHTML = '<div class="win">victory!!!!</div>'

    }
}

function renderBoard(num) {
    var strHTML = ''
    var count = num * num - 1

    for (var i = 0; i < num; i++) {
        strHTML += '\n<tr>\n'

        for (var j = 0; j < num; j++) {
            strHTML += `\t<td onclick="cellClicked(this)">${gNums[count]}</td>\n`
            count--
        }
        strHTML += '\n</tr>'
    }
    var elBoard = document.querySelector('.board')
    elBoard.innerHTML = strHTML

}

function choseLevel() {

    var elEasy = document.querySelector('.easy')
    var elMid = document.querySelector('.mid')
    var elDifficult = document.querySelector('.difficult')

    switch (gLevel) {
        case 9:
            elEasy.style.boxShadow = '1px 1px 10px 6px'
            elMid.style.boxShadow = 'none'
            elDifficult.style.boxShadow = 'none'
            break;
        case 16:
            elMid.style.boxShadow = '1px 1px 10px 6px'
            elEasy.style.boxShadow = 'none'
            elDifficult.style.boxShadow = 'none'
            break;
        case 25:
            elDifficult.style.boxShadow = '1px 1px 10px 6px'
            elEasy.style.boxShadow = 'none'
            elMid.style.boxShadow = 'none'
    }
}







