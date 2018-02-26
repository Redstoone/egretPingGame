class IndexScene extends BaseComponent{

	public constructor() {
		super();

		let userInfo = new UserInfo();
		userInfo.skinName = Main.resUrl + "com/UserInfoSkin.exml";
		this.addChild(userInfo);

		let menu = new Menu();
		menu.skinName = Main.resUrl + "index/MenuSkin.exml";
		this.addChild(menu);

		let match = new MatchIndex();
		match.skinName = Main.resUrl + "index/MatchSkin.exml";
		this.addChild(match);

		let notify = new Notify(384, 24, 653, 45, 5, 0, 3000);
		notify.skinName = Main.resUrl + "com/NotifySkin.exml";
		this.addChild(notify);

		let ranking = new uiComponent.Ranking();
		ranking.skinName = Main.resUrl +  "index/RankingSkin.exml";
		this.addChild(ranking);

		this.load("index/IndexSceneSkin.exml");
	}

	protected initComponent() {
		console.log('initComponent')
	}
}