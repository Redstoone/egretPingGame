/**
 *
 * @author redstoone
 *
 */

class Menu extends BaseComponent {
	private static instance: Menu;
	private menuRecordBtn: eui.Button = null;
	private menuFriendsBtn: eui.Button = null;
	private menuMallBtn: eui.Button = null;
	private menuWelfareBtn: eui.Button = null;
	private menuKefuBtn: eui.Button = null;

	public constructor() {
		super();
		Menu.instance = this;
		// this.load("component/MenuSkin.exml");
		this.skinName = "MenuSkin";

		var inst = Menu.instance;
		inst.x = 6;
		inst.y = 630;
		// Main.getInstance().addChild(inst);
	}

	protected initComponent() {
		this.menuRecordBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRecordBtnTouch, this)
		this.menuFriendsBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onFriendsBtnTouch, this)
		this.menuMallBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onMallBtnTouch, this)
		this.menuWelfareBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onWelfareBtnTouch, this)
		this.menuKefuBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onKefuBtnTouch, this)
	}

	private onRecordBtnTouch(ev: egret.TouchEvent): void {
		console.log('record:', ev, this)
	}

	private onFriendsBtnTouch(ev: egret.TouchEvent): void {
		console.log('friends:', ev)
	}

	private onMallBtnTouch(ev: egret.TouchEvent): void {
		console.log('mall:', ev)
	}

	private onWelfareBtnTouch(ev: egret.TouchEvent): void {
		console.log('welfare: ', ev)
	}

	private onKefuBtnTouch(ev: egret.TouchEvent): void {
		console.log('kefu: ', ev)
	}
}