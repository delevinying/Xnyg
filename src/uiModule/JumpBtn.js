var JumpBtn = (function () {
    function JumpBtn(players) {
        var palyer1 = players;
        var texture1 = Laya.loader.getRes('res/IMGjump.png');
        var _jump = new laya.display.Sprite();
        _jump.graphics.drawTexture(texture1, 1000, 610,100,100);
        Laya.stage.addChild(_jump);
        Laya.stage.on(laya.events.Event.MOUSE_DOWN,this,onMouseDown);
    }

   var onMouseDown = function(){
        player1.jump();
        console.log("onMouseDown");
    }

    return JumpBtn;
}());