class UserInfo extends BaseComponent {
	private static instance: UserInfo;
	private userAvatar: eui.Image;
	private userName: eui.Label;
	private userId: eui.Label;
	private goldNum: eui.Label;
	private goldAddBtn: eui.Button;

	public constructor() {
		super();
		this.load("com/UserInfoSkin.exml");
	}

	protected initComponent() {
		this.goldAddBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGoldAddBtnTouch, this)
	}

	private onGoldAddBtnTouch(ev: egret.TouchEvent): void {
		console.log('gold add:', ev, this)
	}
}