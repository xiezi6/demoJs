var board = new Array();
var score = 0;

$(document).ready(function () {
    newgame();
});

function newgame() {
    init();
    //在随机两个格子里生成数字
}

//封闭函数：计算出每个格子的坐标
function init() {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            var gridCell = document.querySelector('#grid-cell-' + i + '-' + j);
            gridCell.style.left = getPosLeft(i, j) + 'px';
            gridCell.style.top = getPosTop(i, j) + 'px';
        }
    }
    for (var i = 0; i < 4; i++) {
        board[i] = new Array();
        for (var j = 0; j < 4; j++) {
            board[i][j] = 0;
        }
    }
    updateBoardView();
}

//刷新页面
function updateBoardView() {
    $('.number-cell').remove();
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            $('#grid-container').append('<div class="number-cell" id="number-cell-' + i + ' - ' + j + '"></div>')
            var theNumberCell = $('#number-cell-' + i + '-' + j);


            if (board[i][j] = 0) {

            } else {

            }
        }
    }
    //随机产生两个随机数，并且把相应的number-cell的控件的样式修改

}