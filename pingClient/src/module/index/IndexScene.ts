class IndexScene extends BaseComponent {
	private static instance: IndexScene = null;

	public constructor() {
		super();
		IndexScene.instance = this

		let userInfo = new UserInfo();
		userInfo.skinName = Main.resUrl + "com/UserInfoSkin.exml";
		this.addChild(userInfo);

		let menu = new Menu();
		menu.skinName = Main.resUrl + "index/MenuSkin.exml";
		this.addChild(menu);

		let match = new MatchIndex();
		match.skinName = Main.resUrl + "index/MatchIndexSkin.exml";
		this.addChild(match);

		let notify = new Notify(384, 24, 653, 45, 5, 0, 3000);
		notify.skinName = Main.resUrl + "com/NotifySkin.exml";
		this.addChild(notify);

		let ranking = new uiComponent.RankingIndex();
		ranking.skinName = Main.resUrl + "index/RankingIndexSkin.exml";
		this.addChild(ranking);

		console.log(Main.getInstance().stage.stageHeight, Main.getInstance().stage.stageWidth)
		this.load("index/IndexSceneSkin.exml");
	}

	protected initComponent() {
		// IndexScene.instance.height = Main.getInstance().stage.stageHeight
		console.log(IndexScene.instance.height)
		// console.log(this.$stage.$stageHeight = 250)
		console.log('index initComponent')
	}
}