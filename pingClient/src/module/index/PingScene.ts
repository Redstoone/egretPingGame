class PingScene extends BaseComponent {
	public constructor() {
		super();

		let userInfo = new UserInfo();
		userInfo.skinName = Main.resUrl + "com/UserInfoSkin.exml";
		this.addChild(userInfo);

		let notify = new Notify(384, 24, 653, 45, 5, 0, 3000);
		notify.skinName = Main.resUrl + "com/NotifySkin.exml";
		this.addChild(notify);

		let match = new MatchPing();
		match.skinName = Main.resUrl + "index/MatchPingSkin.exml";
		this.addChild(match);

		this.load("index/IndexSceneSkin.exml");
	}

	protected initComponent() {
		console.log('ping secne initComponent')
	}
}