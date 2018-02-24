class IndexScene extends BaseComponent{

	public constructor() {
		super();
		this.load("index/IndexSceneSkin.exml");

		// this.addChild(new Menu());
		// this.addChild(new Match());
		// this.addChild(new Notify(384, 24, 653, 45, 5, 0, 3000));
		// this.addChild(new game.Ranking());

		// this.skinName = "IndexSceneSkin";
	}

	protected initComponent() {
		console.log('initComponent')
	}
}