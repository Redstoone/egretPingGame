class UserInfo extends BaseComponent {
	private static instance: UserInfo;
	private userAvatar: eui.Image;
	private userName: eui.Label;
	private userId: eui.Label;
	private goldNum: eui.Label;
	private goldAddBtn: eui.Button;
	private userGroup: eui.Group;
	private goldGroup: eui.Group;
	private goBackBtn: eui.Button;
	private settingBtn: eui.Button;

	private matchType = null;

	public constructor(type: string = null) {
		super();
		this.matchType = type
		this.load("com/UserInfoSkin.exml");
	}

	protected initComponent() {
		console.log(this.matchType)
		if (this.matchType == "match") {
			this.userGroup.left = 110
			this.goldGroup.right = 110
			this.goBackBtn.visible = true
			this.settingBtn.visible = true

			this.goBackBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGobackBtnTouch, this)
			this.settingBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSettingBtnTouch, this)
		} else {
			this.userGroup.left = 32
			this.goldGroup.right = 40
			this.goBackBtn.visible = false
			this.settingBtn.visible = false
		}

		this.goldAddBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGoldAddBtnTouch, this)
	}

	private onGoldAddBtnTouch(ev: egret.TouchEvent): void {
		console.log('gold add:', ev, this)
	}

	private onGobackBtnTouch(ev: egret.TouchEvent): void {
		SceneMgr.gotoIndex();
	}

	private onSettingBtnTouch(ev: egret.TouchEvent): void {
		console.log('setting btn:', ev, this)
	}
}