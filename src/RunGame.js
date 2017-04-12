(function () {
    /**
     * 游戏入口
     */
    function RunGame(){
 
        this.bg = null;
        this.mapFloor = null;
      //  this.player = null;
        RunGame.__super.call(this);
        this.init();
    }
    //RunGame 是一个显示对象 继承此 Sprite
    Laya.class(RunGame,"RunGame", laya.display.Sprite);
     
    //定义RunGame的prototype
    var _proto = RunGame.prototype;
     
    //初始化
    _proto.init = function(){
        console.log('RunGame Init');
        //背景
        this.bg = new Background();
        this.addChild(this.bg);  
        // this.player = new Player();
        // this.player.x = 32 * 8;
        // this.player.y = 160 * 4;
        // this.addChild(this.player);

        Laya.stage.on(laya.events.Event.MOUSE_DOWN,this,this.onMouseDown);
        Laya.stage.on(laya.events.Keyboard.A,this,this.onKeyLeft)
        Laya.timer.frameLoop(1,this,this.onLoop);
    }

    _proto.onLoop =  function(){
        // if(this.player.y>=610){
        //     this.player.y = 610;
        //     this.player.jumpReset();
        // }
    }
    _proto.onMouseDown = function(){
        // this.player.jump();
        //  console.log("onMouseDown");
    }

    _proto.onKeyLeft = function(){
        if(this.player.x>0){
            this.player.x -= 5;
        }else{
            this.player.x = 0;
        }
    }
})();