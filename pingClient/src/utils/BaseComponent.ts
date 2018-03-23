/**
 *
 * @author redstoone
 *
 */
class BaseComponent extends eui.Component {
	public constructor() {
		super();
	}

	protected load(skinName: string) {
		this.addEventListener(eui.UIEvent.COMPLETE, this.onUIComplete, this);
		this.skinName = Main.resUrl + skinName;
	}

	protected onUIComplete(ev: eui.UIEvent) {
		this.removeEventListener(eui.UIEvent.COMPLETE, this.onUIComplete, this);
		this.initComponent();
	}

	public childrenCreated() {
		if (this.skinName.indexOf('IndexSceneSkin') > 0) {
			super.childrenCreated();
			this.left = 0;
			this.right = 0;
			this.top = 0;
			this.bottom = 0;
		}
    }

	protected initComponent() {
		//TODO
	}
}
