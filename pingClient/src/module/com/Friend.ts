class Friend extends BaseComponent {
	private static instance: Friend;
	public currIndex: number = 0;

	private friendMenuBtn: eui.Button = null;
	private friendViewStack: eui.ViewStack = null;
	private friendGrp: eui.Group;
	private douList: eui.List = null;
	private btnCancel: eui.Button;
	private func: Function;
	private cfunc: Function;
	private obj: any;

	public constructor() {
		super();
		Friend.instance = this;
		this.load("com/FriendSkin.exml");
	}

	protected initComponent() {
		let nemuList = Friend.instance.friendGrp.$children;
		nemuList.forEach((item, index) => {
			if (index == 0) {
				// item.$children[0].source = "btn_notice_active_png"
			}
		})

		this.btnCancel.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonTouchBegin, this);
		this.btnCancel.addEventListener(egret.TouchEvent.TOUCH_END, this.onButtonTouchEnd, this);
		this.btnCancel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchCancel, this);

		this.friendGrp.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onFriendMenuTouch, this);

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

	private onFriendMenuTouch(e: eui.UIEvent) {
		let friendBtn: eui.Button = e.target;
		// this.currIndex = rankingGroup.selectedValue
		console.log(friendBtn)
		this.friendGrp.$children.forEach((item, index) => {
			if (index == 0) {
				// item.$children[0].source = "btn_notice_png"
			}
		})
		// friendBtn.$children[0].source = "btn_notice_active_png"
	}

	private onTouchCancel(ev: egret.TouchEvent) {
		this.parent.removeChild(this);
		if (this.cfunc) {
			this.cfunc.call(this.obj)
		}
	}

	public static show(func: Function = null, obj: any = null, cancel = false, cancelFunc: Function = null) {
		var inst = Friend.instance;
		inst.func = func;
		inst.cfunc = cancelFunc;
		inst.obj = obj;

		Main.getInstance().addChild(inst);
	}

	public removeAll() {
		this.parent.removeChild(this);
	}
}