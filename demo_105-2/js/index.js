// 產生從 start 到 end 的亂數
var rand = function(start, end) {

    // 求有多少個數字
    var n = end - start + 1;

    // 先放大 n 倍
    var r = Math.random() * n;

    // 將小數點去除
    var f = Math.floor(r);

    // 因為數字是從 start 開始，所以加上 start
    var result = f + start;

    return result;
}

// 換照片
var fnChange = function() {

    // 取亂數得到 1~4
    //var n = Math.floor(Math.random() * 4) + 1;

    var index = rand(1, 4);

    $('#section2 > div.image > img').attr('src', './image/0' + index + '.jpg');
}

// 列出歷屆校長
var fnList_old = function() {
    var str = '';
    for (var i = 1; i <= 4; i++) {
        str = str + '<img src="./image/0' + i + '.jpg" alt="">'
    }

    $('#section2 > div.list').html(str);
}

// 列出歷屆校長
var fnList = function() {

    // 清除 div.list 內所有的 img
    $('#section2 > div.list > img').remove();

    for (var i = 1; i <= 4; i++) {
        var $img = $('<img>').attr('src', './image/0' + i + '.jpg');
        $('#section2 > div.list').append($img);
    }
}


// 註冊事件
$('#change').on('click', fnChange);
$('#list').on('click', fnList)