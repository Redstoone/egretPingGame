class SceneMgr {
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
}