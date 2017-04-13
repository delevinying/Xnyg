var MainPanel = (function () {
    function MainPanel(players) {
        var palyer = players;
        this._view = fairygui.UIPackage.createObject("Joystick", "Main").asCom;
        this._view.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
        fairygui.GRoot.inst.addChild(this._view);
        this._text = this._view.getChild("n9").asTextField;
        this._joystick = new JoystickModule(this._view);
        this._joystick.on(JoystickModule.JoystickMoving, this, this.onJoystickMoving);
        this._joystick.on(JoystickModule.JoystickUp, this, this.onJoystickUp);
    }
    var _compass = -2;
    MainPanel.prototype.onJoystickMoving = function (degree) {
        this._text.text = "s" + degree+"s";
    
        if(degree>45&&degree<135){
            return;
        }else if(45>degree&&degree>-45){
            _compass = 1;
        }else if(-135>degree||degree>135){
            _compass = -1;
        }else{
            _compass = 0;
        }
       Laya.timer.frameLoop(1,MainPanel.this,onLoop);
    };

    var onLoop =  function(){
        if(player1.y>=610){
            player1.y = 610;
            player1.jumpReset();
        }
         if(player2.y>=610){
            player2.y = 610;
            player2.jumpReset();
        }
        player1.x += 3*_compass;
        if(player1.x<10){
            player1.x = 10;
        }
        if(player1.x>1180){
            player1.x = 1180;
        }
    }

    MainPanel.prototype.onJoystickUp = function () {
        this._text.text = "";
        _compass = 0;
    };
    return MainPanel;
}());