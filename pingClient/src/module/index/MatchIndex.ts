class MatchIndex extends BaseComponent {
	private matchPingBtn: eui.Button = null;
	private matchDouBtn: eui.Button = null;
	private matchCreateBtn: eui.Button = null;
	private matchAddBtn: eui.Button = null;

	public constructor() {
		super();
		this.load("index/MatchIndexSkin.exml");

		this.x = 921;
		this.y = 88;
	}

	protected initComponent() {
		this.matchPingBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPingBtnTouch, this)
		this.matchDouBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onDouBtnTouch, this)
		this.matchCreateBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCreateBtnTouch, this)
		this.matchAddBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onAddBtnTouch, this)
	}

	private onPingBtnTouch(ev: egret.TouchEvent): void {
		SceneMgr.gotoPingIndex();
	}

	private onDouBtnTouch(ev: egret.TouchEvent): void {
		SceneMgr.gotoDouIndex();
	}

	private onCreateBtnTouch(ev: egret.TouchEvent): void {
		console.log('create:', ev)
	}

	private onAddBtnTouch(ev: egret.TouchEvent): void {
		console.log('add: ', ev)
	}
}