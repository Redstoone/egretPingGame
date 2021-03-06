class Alert extends BaseComponent {
	private static instance: Alert;
	private static texts: Object = {
		"NetworkErr": "连接失败：无法连接网络 请检查你的网络连接",
		"RoomNumErr": "房号输入有误，请重新输入",
	};

	public labText: eui.Label;
	public btnOk: eui.Button;
	public btnCancel: eui.Button;
	public func: Function;
	public cfunc: Function;
	public obj: any;

	public constructor() {
		super();
		Alert.instance = this;
		this.load("com/AlertSkin.exml");
	}

	protected initComponent() {
		this.btnOk.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonTouchBegin, this);
		this.btnOk.addEventListener(egret.TouchEvent.TOUCH_END, this.onButtonTouchEnd, this);
		this.btnOk.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);

		this.btnCancel.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonTouchBegin, this);
		this.btnCancel.addEventListener(egret.TouchEvent.TOUCH_END, this.onButtonTouchEnd, this);
		this.btnCancel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchCancel, this);
	}

	private onButtonTouchBegin(ev: egret.TouchEvent) {
		ev.target.scaleX = 0.9;
		ev.target.scaleY = 0.9;
	}

	private onButtonTouchEnd(ev: egret.TouchEvent) {
		ev.target.scaleX = 1;
		ev.target.scaleY = 1;
	}

	private onTouch(ev: egret.TouchEvent) {
		this.parent.removeChild(this);
		if (this.func) {
			this.func.call(this.obj);
		}
	}

	private onTouchCancel(ev: egret.TouchEvent) {
		this.parent.removeChild(this);
		if (this.cfunc) {
			this.cfunc.call(this.obj)
		}
	}

	public static show(text: string, trans: boolean = true, func: Function = null, obj: any = null, cancel = false, cancelFunc: Function = null) {
		if (trans) {
			text = Alert.texts[text];
		}

		var inst = Alert.instance;
		inst.labText.text = text;
		inst.func = func;
		inst.cfunc = cancelFunc;
		inst.obj = obj;

		Main.getInstance().addChild(inst);
	}

	public removeAll() {
		this.parent.removeChild(this);
	}
}
