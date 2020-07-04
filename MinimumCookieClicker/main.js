/*
メイン処理
*/

/********** グローバル変数 **********/
var cookies = 0;    //クッキーの数
var canvas = document.getElementById('view_area');  //htmlのcanvasを取得

/********** クリックイベント処理 **********/
canvas.addEventListener('click', function(e){
    //クッキー加算
    cookies++; 
    //画面更新
    draw();     
}, false);

/********** 描画関数 **********/
function draw(){
    if (canvas.getContext) {
        //コンテキストの取得
        var context = canvas.getContext('2d');
        //幅と高さ取得
        var w = canvas.width;
        var h = canvas.height;
        //Canvas全体をクリア 
        context.clearRect(0, 0, w, h);
    
        //クッキーの描画
        context.fillStyle = "blue";
        context.font = "30px 'ＭＳ ゴシック'";
        context.textAlign = "left";
        context.textBaseline = "top";
        context.fillText(cookies, 0, 0, 200);   //文字の描画
    }
}

/********** 毎秒呼ばれる処理 **********/
setInterval(function(){
    //クッキーを焼く
    cookies++; 
    //描画
    draw();
}, 1000);
