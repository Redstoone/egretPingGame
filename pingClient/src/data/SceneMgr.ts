class SceneMgr {
	// 登录
	public static gotoLogin() {
		let loading = new ResLoading();
		Director.getInstance().pushScene(loading);
		let call = new CallBackFunc().handler(SceneMgr.onLogo, this, []);
		loading.load(["com"], call);
	}

	private static onLogo() {
		let layer = new Login();
		Director.getInstance().repleaceScene(layer);
	}

	// 首页大厅
	public static gotoIndex() {
		let loading = new ResLoading();
		Director.getInstance().pushScene(loading);
		let call = new CallBackFunc().handler(SceneMgr.onIndex, this, []);
		loading.load(["com", 'index'], call);
	}

	private static onIndex() {
		let index = new IndexScene();
		Director.getInstance().repleaceScene(index);
	}

	// 斗地主大厅
	public static gotoDouIndex() {
		let loading = new ResLoading();
		Director.getInstance().pushScene(loading);
		let call = new CallBackFunc().handler(SceneMgr.onDouIndex, this, []);
		loading.load(["com", 'index'], call);
	}

	private static onDouIndex() {
		let index = new DouScene();
		Director.getInstance().repleaceScene(index);
	}

	// 拼十大厅
	public static gotoPingIndex() {
		let loading = new ResLoading();
		Director.getInstance().pushScene(loading);
		let call = new CallBackFunc().handler(SceneMgr.onPingIndex, this, []);
		loading.load(["com", 'index'], call);
	}

	private static onPingIndex() {
		let index = new PingScene();
		Director.getInstance().repleaceScene(index);
	}


}