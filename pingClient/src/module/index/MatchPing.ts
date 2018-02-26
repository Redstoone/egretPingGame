class MatchPing extends BaseComponent {

	public matchFengkuangBtn: eui.Button;
	public matchJuezhanBtn: eui.Button;

	public constructor() {
		super();
		this.load("index/MatchPingSkin.exml");

		this.x = 921;
		this.y = 240;
	}
	protected initComponent() {
		this.matchFengkuangBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onFengkuangBtnTouch, this)
		this.matchJuezhanBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onJuezhanBtnTouch, this)
	}

	private onFengkuangBtnTouch(ev: egret.TouchEvent): void {
		console.log('fengkuang:', ev)
	}

	private onJuezhanBtnTouch(ev: egret.TouchEvent): void {
		console.log('juezhan:', ev)
	}
}