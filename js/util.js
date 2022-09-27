function resetNums(nums) {
    var randIdx, keep, i;

    for (i = nums.length - 1; i > 0; i--) {
        randIdx = getRandomInt(0, nums.length - 1);       //מחזיר מערך מבולגן 
        keep = nums[i];
        nums[i] = nums[randIdx];
        nums[randIdx] = keep;
    }
    return nums
}

function createNums(num) {
    var res = []
    for (let i = 1; i < num + 1; i++) {
        res.push(i)                                          // creating arr until the num
    }
    return res
}

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min) // The maximum is exclusive and the minimum is inclusive

}

function setTime() {
        var startTime = Date.now()
        var elModal = document.querySelector('.timer-container')
        gInterval = setInterval(function () {
            var currTime = Date.now()
            var time = ((currTime - startTime) / 1000).toFixed(3);
            elModal.querySelector('.timer').innerText = time
        }, 100)
}



// function createBoard(num) {
//     // var board = []
//     // var count = num * num - 1
//     // for (var i = 0; i < num; i++) {
//     //     board.push([])
//     //     for (var j = 0; j < num; j++) {
//     //         board[i][j] = gNums[count]
//     //         count--
//     //     }
//     // }
//     // console.table('board', board)
//     // return board
// }