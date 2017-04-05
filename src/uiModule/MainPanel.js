var MainPanel = (function () {
    function MainPanel() {
        this._view = fairygui.UIPackage.createObject("Joystick", "Main").asCom;
        this._view.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
        fairygui.GRoot.inst.addChild(this._view);
        this._text = this._view.getChild("n9").asTextField;
        this._joystick = new JoystickModule(this._view);
        this._joystick.on(JoystickModule.JoystickMoving, this, this.onJoystickMoving);
        this._joystick.on(JoystickModule.JoystickUp, this, this.onJoystickUp);
    }
    MainPanel.prototype.onJoystickMoving = function (degree) {
        this._text.text = "" + degree;
    };
    MainPanel.prototype.onJoystickUp = function () {
        this._text.text = "";
    };
    return MainPanel;
}());
//# sourceMappingURL=MainPanel.js.map