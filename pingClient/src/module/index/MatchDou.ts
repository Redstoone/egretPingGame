class MatchDou extends BaseComponent {
	public matchCreateBtn: eui.Button;
	public matchArenaBtn: eui.Button;

	public constructor() {
		super();
		this.load("index/MatchDouSkin.exml");

		this.x = 921;
		this.y = 240;
	}

	protected initComponent() {
		this.matchCreateBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCreateBtnTouch, this)
		this.matchArenaBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onArenaBtnTouch, this)
	}

	private onCreateBtnTouch(ev: egret.TouchEvent): void {
		console.log('create:', ev)
	}

	private onArenaBtnTouch(ev: egret.TouchEvent): void {
		console.log('arena:', ev)
	}
}