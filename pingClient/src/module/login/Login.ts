class Login extends BaseComponent {
	private btnLogin: eui.Button;

	public constructor() {
		super();
		this.load('login/LoginSkin.exml');
	}

	protected initComponent() {
		console.log('initComponent')
	}
}

