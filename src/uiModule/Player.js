 (function () {
     
    /**
     * 玩家类
     */
    function Player(){
 
        //记录当前动作
        this.action = null;
        //玩家
        this.body = null;
 
        //跳 统计数
        this.jumpCount = 0;
        //跳 最大次数 如果想三连跳 改成 3 即可
        this.jumpCountMax = 2;
 
        //下落变量
        this.vy = 0;
        //下落速度
        this.downSpeed = 3;
        //最大下路值
        this.maxVy = 32;
 
        Player.__super.call(this);
 
        //这里我们强制设置一下 玩家的宽度和高度
        this.width = 96;
        this.height = 96;
         
        this.init();
    }
    //玩家动作
 
    //跑
    Player.RUN = "player_run";
    //飞
    Player.FLY = "player_fly";
    //暂时没有用到的动作
    Player.HERT = "player_hert";
    //跳
    Player.JUMP = "player_jump";
 
    //状态
    Player.DIE = "player_die";
     
    //Player
    Laya.class(Player,"Player", laya.display.Sprite);
     
    var _proto = Player.prototype;
 
    //是否缓存了
    Player.cached = false;
     
    _proto.init = function(){
        //动画缓存起来
        if(!Player.cached){
             
           Player.cached = true;
            //根据不同的动画 来创建动画模板
            laya.display.Animation.createFrames(['res/player/chara_01.png','res/player/chara_02.png','res/player/chara_03.png','res/player/chara_04.png'], Player.RUN);
            laya.display.Animation.createFrames(['res/player/chara_05.png','res/player/chara_06.png','res/player/chara_07.png','res/player/chara_08.png'], Player.FLY);
            //Animation.createFrames(['player/chara_09.png','player/chara_10.png','player/chara_11.png','player/chara_12.png'], Player.HERT);
            laya.display.Animation.createFrames(['res/player/chara_13.png','res/player/chara_14.png','res/player/chara_15.png','res/player/chara_16.png'], Player.JUMP);
                         
        }
         
       if(this.body == null){
 
            this.body = new laya.display.Animation();
            this.body.pivot(48,60);
            this.body.interval = 100;
            this.addChild(this.body);
             
        }
        //播放动作对应的动画
        this.playAction(Player.RUN);
        //创建一个帧循环处理函数
        Laya.timer.frameLoop(1, this, this.onLoop)
    }
    /**
     * 播放动作对应的动画
     * action String 动作名称
     */
    _proto.playAction = function(action){
        //如果是重复的动作 不执行
        if(this.action == action)return;
        this.action = action;
        this.body.play(0, true, this.action);
    }
    _proto.onLoop = function(){
 
        //玩家开始下落
        this.y += this.vy;
        this.vy += this.downSpeed;
 
        //控制最大值
        if(this.vy > this.maxVy){
            this.vy = this.maxVy;
        }
         
        //如果玩家y轴掉出屏幕以外100像素 就算游戏结束
        if( this.y > (480 + 100)){
            // console.log('gameOver');
            return;
        }
 
        switch(this.action){
            case Player.FLY:
                 //如果当前是飞行状态 将玩家Y轴慢慢往上提 并且不超过最大值
                 this.vy = 0;
                 this.y -= 4;
                 if(this.y < 110)
                    this.y = 110;
            break;
            case Player.HERT:
            break;
            default:
                 
            break;
        }
    }
    //开始跳
    _proto.gotoJump = function(){
       this.playAction(Player.JUMP);
    }
    //开始跑
    _proto.gotoRun = function(){
       this.playAction(Player.RUN);
    }
    //开始飞
    _proto.gotoFly = function(){
        this.playAction(Player.FLY);
    }
    /**
     * 触发跳（二连跳）
     */
    _proto.jump = function(){
        //当跳跃计数小于最大计数的时候 可以连续跳跃
        if(this.jumpCount < this.jumpCountMax){
            this.vy = -30;
            this.jumpCount++;
            this.gotoJump();
        }else{
            this.gotoFly();
        }
         
    }
     //跳结束重置
    _proto.jumpReset = function(){
        this.vy = 0;
        this.jumpCount = 0;
        this.gotoRun();
    }
})();