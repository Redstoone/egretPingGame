class Notify extends BaseComponent {
	private _running: Array<eui.Label> = [];
	private _waiting: Array<eui.Label> = [];

	private _delayTime: number;
	private _timer: egret.Timer;
	private _space: number = 0;
	private _bias: number = 0;
	private _waitFlag: boolean = false;

	private notifyTxt: eui.Label;

	public constructor(x: number, y: number, width: number, height: number, space: number, bias: number, delay: number) {
		super();
		this.load("com/NotifySkin.exml");
		// this.skinName = "NotifySkin";

		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);

		this._delayTime = delay;
		this._timer = new egret.Timer(delay);

		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;

		this._space = space;
		this._bias = bias;
	}

	private onAddToStage() {
		this._timer.addEventListener(egret.TimerEvent.TIMER, this.update, this);
		this._timer.start();
	}

	public addText(txt: string, size: number = 50, color: number = 0xffffff): boolean {
		this.notifyTxt.text = txt;

		this._waiting.push(this.notifyTxt);
		return true;
	}

	private update() {
		this._waitFlag = true;
		this.updateRunning();
		this.updateWaiting();
	}

	private updateRunning() {
		if (this._running.length <= 0)
			return;

		//head
		var head: eui.Label = this._running[0];
		if (head.x + head.width <= 0) {
			this.removeChild(this._running.shift());
		}

		if (this._running.length > 0) {
			//body
			for (var i: number = 0; i < this._running.length; ++i) {
				var current: eui.Label = this._running[i];
				current.x -= this._bias;
			}

			//tail
			var tail: eui.Label = this._running[this._running.length - 1];
			this._waitFlag = (tail.x + tail.width <= this.width) ? true : false;
		}
	}

	private updateWaiting() {
		if (this._waiting.length <= 0)
			return;

		if (this._waitFlag == false)
			return;

		var next: eui.Label = this._waiting.shift();
		next.x = this.width + this._space;
		next.visible = true;
		this._running.push(next);
	}
}