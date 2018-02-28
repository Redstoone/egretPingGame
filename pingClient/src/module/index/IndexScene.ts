class IndexScene extends BaseComponent {

	public constructor() {
		super();

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

		this.load("index/IndexSceneSkin.exml");

		var shp: egret.Shape = new egret.Shape();
		shp.graphics.beginFill(0xffff00);
		shp.graphics.drawRect(0, 0, 100, 100);
		shp.graphics.endFill();
		this.addChild(shp);
		var shp2: egret.Shape = new egret.Shape();
		shp2.graphics.beginFill(0x00ff00);
		shp2.graphics.drawCircle(0, 0, 20);
		shp2.graphics.endFill();
		this.addChild(shp2);
		shp2.x = 20;
		shp2.y = 20;
		var rect:egret.Rectangle = new egret.Rectangle(20,20,30, 60);
		shp.mask = rect;
	}

	protected initComponent() {
		console.log('index initComponent')
	}
}