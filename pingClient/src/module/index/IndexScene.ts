class IndexScene extends BaseComponent{

	public constructor() {
		super();

		let userInfo = new UserInfo();
		userInfo.skinName = "UserInfoSkin";
		this.addChild(userInfo);

		let menu = new Menu();
		menu.skinName = "MenuSkin";
		this.addChild(menu);

		let match = new Match();
		match.skinName = "MatchSkin";
		this.addChild(match);

		let notify = new Notify(384, 24, 653, 45, 5, 0, 3000);
		notify.skinName = "NotifySkin";
		this.addChild(notify);

		// let ranking = new game.Ranking();
		// menu.skinName = "src/module/index/RankingSkin.exml";
		// this.addChild(notify);

		// this.load("IndexSceneSkin");
		this.skinName = "IndexSceneSkin"
	}

	protected initComponent() {
		console.log('initComponent')
	}
}