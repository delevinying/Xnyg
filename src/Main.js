// var Handler = laya.utils.Handler;
// var Loader = laya.net.Loader;
// // 程序入口
// Laya.init(2000, 800);
// //Laya.init(1136, 640, Laya.WebGL);
// laya.utils.Stat.show(0, 0);
// //设置适配模式	 
// Laya.stage.scaleMode = "noscale";
// Laya.stage.alignH = "left";
// Laya.stage.alignV = "top";
// //设置横竖屏
// Laya.stage.screenMode = "horizontal";//"horizontal";

//     var background = new Laya.Image("res/background.png");
//     background.pos(0, 0);
//     Laya.stage.addChild(background);

// //   var sp = new laya.display.Sprite();
// //     sp.x = 100;
// //     sp.y = 100;

// var asset = [];
//  asset.push({
//     url : [
//         "res/background.png"
//     ],
//     type : Laya.Loader.IMAGE
// });
// //加载图集资源
// asset.push({
//     url:"res/player.json",
//     type : Laya.Loader.ATLAS
// });
// Laya.loader.load([
//     { url: "res/Joystick@atlas0.png", type: Loader.IMAGE },
//     { url: "res/Joystick.fui", type: Loader.BUFFER }
// ], Handler.create(this, this.onLoaded));
// function onLoaded() {
//     Laya.stage.addChild(fairygui.GRoot.inst.displayObject);
//     fairygui.UIPackage.addPackage("res/Joystick");
  
//     // var texture = Laya.loader.getRes("res/player/chara_01.png");
//     // sp.graphics.drawTexture(texture, 0, 0, 96, 96);
//     // Laya.stage.addChild(sp);

//     new MainPanel();
  
// }

//laya初始化
Laya.init(852, 480, Laya.WebGL);
//FPS
Laya.Stat.show(0,0);
//设置适配模式
Laya.stage.scaleMode = "exactfit";
//设置剧中对齐
Laya.stage.alignH = "center";
//设置横屏
Laya.stage.screenMode = "horizontal";


//加载单个资源
var asset = [];
asset.push({
    url : [
        "res/background.png"
        // "res/m_background.png",
        // "res/floor.png"
    ],
    type : Laya.Loader.IMAGE
});
//加载图集资源
asset.push({
    url:"res/player.json",
    type : Laya.Loader.ATLAS
});
    
    
//加载图集资源
Laya.loader.load(asset, laya.utils.Handler.create(this, onLoaded), laya.utils.Handler.create(this, onLoading, null, false));

//加载进度
function onLoading(progress){
    console.log("onLoading: " + progress);
}
//加载完毕
function onLoaded(){
    console.log("onLoaded");
    //实例化RunGame
    var runGame = new RunGame();
    Laya.stage.addChild(runGame);
} 