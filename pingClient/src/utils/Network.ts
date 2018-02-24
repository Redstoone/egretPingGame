/**
 *
 * @author redstoone
 *
 */
let _this = null
class Network {
	private static instance: Network;
	private socket;
	private state: number;
	private path: string;
	private queryStr: string;
	private handler: Object = {};
	private cbConnect: Array<any> = [];
	private cbClose: Array<any> = [];
	private cbError: Array<any> = [];
	private alertView: Alert = null;

	public constructor(_path: string, _queryStr: string = '') {
		Network.instance = this

		//初始化alert
		this.alertView = new Alert();
		this.alertView.horizontalCenter = 0;
		this.alertView.verticalCenter = 0;

		this.connect(_path, _queryStr)

		//添加链接打开侦听，连接成功会调用此方法
		this.socket.on('connect', this.onSocketConnect);
		this.socket.on('connect_failed', this.onSocketConnectFailed);
		//添加收到数据侦听，收到数据会调用此方法
		this.socket.on('message', (data => {
			this.onSocketData(data)
		}));
		//添加异常侦听，出现异常会调用此方法
		this.socket.on('error', (data => {
			this.onSocketError(data);
		}))
		//添加链接关闭侦听，手动关闭或者服务器关闭连接会调用此方法
		this.socket.on('disconnect', this.onSocketClose)

		this.socket.on('reconnecting', this.onSocketReconnecting);
		this.socket.on('reconnect', this.onSocketReconnect);
		this.socket.on('reconnect_failed', this.onSocketReconnectFailed);
	}

	public setConnectHandler(_func: Function, _obj: Object) {
		this.cbConnect = [_obj, _func];
	}

	public setCloseHandler(_func: Function, _obj: Object) {
		this.cbClose = [_obj, _func];
	}

	public setErrorHandler(_func: Function, _obj: Object) {
		this.cbError = [_obj, _func];
	}

	public connect(_path: string, _queryStr: string) {
		this.state = 0;
		this.path = _path;
		this.queryStr = _queryStr;
		if (_queryStr) {
			this.socket = io.connect(_path, {query: _queryStr});
	} else {
			this.socket = io.connect(_path);
	}
		// console.log(_host + ":" + _port + '', {query: 'token=1234b'})
		// this.socket = io.connect('http://192.168.31.160:9090/msg1/?token=1234b');
	}

	public isConnected() {
		return this.state == 1;
	}

	public send(c: string, m: string, data: any) {
		let obj: Object = {
			"c": c,
			"m": m,
			"data": data
		};
		console.log("send -->", JSON.stringify(obj))
		this.socket.emit('message', JSON.stringify(obj));
	}

	public bind(name: string, func: Function, obj: Object) {
		this.handler[name] = [obj, func];
	}

	private onSocketConnect(): void {
		if (Network.instance.cbConnect.length > 0) {
			let obj: Object = Network.instance.cbConnect[0];
			let func: Function = Network.instance.cbConnect[1];
			func.call(obj);
		}
		Network.instance.state = 1;
	}

	private onSocketConnectFailed(): void {
		console.log("socket.io connect failed");
		Alert.show("socket.io connect failed", false)
		Network.instance.state = 0;
	}


	private onSocketClose(): void {
		// console.log("socket.io closed");
		Alert.show("socket.io closed", false)
		if (Network.instance.cbClose.length > 0) {
			let obj: Object = Network.instance.cbClose[0];
			let func: Function = Network.instance.cbClose[1];
			func.call(obj);
		}
	}

	private onSocketReconnecting(): void {
		console.log("socket.io reconnecting");
		Network.instance.state = 0;
	}

	private onSocketReconnect(): void {
		console.log("socket.io reconnected");
		if (Network.instance.cbConnect.length > 0) {
			let obj: Object = Network.instance.cbClose[0];
			let func: Function = Network.instance.cbClose[1];
			func.call(obj);
		}
	}

	private onSocketReconnectFailed(): void {
		console.log("socket.io reconnect failed");
		Network.instance.state = 0;
	}

	private onSocketError(error): void {
		console.log("socket.io error");
		console.log(error)
		if (Network.instance.cbError.length > 0) {
			let obj: Object = Network.instance.cbError[0];
			let func: Function = Network.instance.cbError[1];
			func.call(obj);
		}
	}

	private onSocketData(data): void {
		console.log(data)
		console.log("recv -->", data);
		let packet: Object = JSON.parse(data);
		this.dispatch(packet);
	}

	private dispatch(msg: Object) {
		//data handler
		let error: number = msg["err"];
		let name: string = error ? "Error" : msg["c"] + "." + msg["m"];
		let cb: Array<any> = this.handler[name];
		if (cb) {
			let obj: Object = cb[0];
			let func: Function = cb[1];
			func.call(obj, msg["data"]);
		} else {
			console.log("not found handler --> " + name)
		}
	}

}