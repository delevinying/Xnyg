
//laya初始化
Laya.init(1200, 800, Laya.WebGL);
//FPS
Laya.Stat.show(0,0);
//设置适配模式
Laya.stage.scaleMode = "showall";
//设置剧中对齐
Laya.stage.alignH = "center";
//设置横屏
Laya.stage.screenMode = "horizontal";
var player1;
var player2;
//加载单个资源
var asset = [];
asset.push({
    url : [
        "res/background.png",
        "res/Joystick@atlas0.png"
    ],
    type : Laya.Loader.IMAGE
});
asset.push({
    url : [
        "res/Joystick.fui"
    ],
    type : Laya.Loader.BUFFER
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
    Laya.stage.addChild(runGame);
    player1 = new Player();
    player1.x = 32 * 8;
    player1.y = 160 * 4;
    Laya.stage.addChild(player1);
    player2 = new Player();
    player2.x = 800;
    player2.y = 160 * 4;
    Laya.stage.addChild(player2);
    Laya.stage.addChild(fairygui.GRoot.inst.displayObject);
    fairygui.UIPackage.addPackage("res/Joystick"); 
    new MainPanel(player1);
    Laya.timer.frameLoop(1,this,this.onLoop);

    
} 

var onLoop =  function(){
        if(player1.y>=610){
            player1.y = 610;
            player1.jumpReset();
        }
         if(player2.y>=610){
            player2.y = 610;
            player2.jumpReset();
        }
    }
 