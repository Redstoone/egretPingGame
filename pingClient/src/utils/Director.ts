class Director {

	public static instance: Director = null;
	private stackLayer = [];
	//游戏层,其实就是Main层
	private gameLayer: Main = null;
	// private netLayer: NetLayerUtil = null;
	private guidLayer: GuidLayerUtil = null;
	public constructor() {
	}

	public static getInstance() {
		if (Director.instance == null) {
			Director.instance = new Director();
		}
		return Director.instance;
	}

	public initWithMain(m: Main) {
		if (this.gameLayer == null) {
			this.gameLayer = m;
		}
		// this.netLayer = new NetLayerUtil();
		// Display.stage.addChildAt(this.netLayer, 9);
		this.guidLayer = new GuidLayerUtil();
		Display.stage.addChildAt(this.guidLayer, 10);
	}

	// ==================== 游戏场景转换逻辑的层管理 ====================================
	public repleaceScene(layer: egret.DisplayObject) {
		if (this.gameLayer != null && layer != null) {
			this.gameLayer.removeChildren();
			this.gameLayer.addChild(layer);
		}
	}

	public pushScene(layer: egret.DisplayObject) {
		if (this.gameLayer != null && layer != null) {
			this.gameLayer.addChild(layer);
			this.stackLayer.push(layer);
		}
	}

	public popScene() {
		if (this.gameLayer != null) {
			let len = this.stackLayer.length;
			if (len > 0) {
				let layer = this.stackLayer[len - 1];
				if (layer.parent == this.gameLayer) {
					this.gameLayer.removeChild(layer)
					Util.removeByElements(this.stackLayer, layer);
				}
			}
		}
	}
}