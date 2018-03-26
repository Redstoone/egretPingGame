//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class LoadingUI extends BaseComponent {
	public proBarActive: eui.Image;
	public proActive: eui.Image;
	public progressLab: eui.Label;

	// private textField: egret.TextField;
	private bar: egret.Shape;
	private sec: number = 0;
	private perNumber: number = 0;

	public constructor() {
		super();
		this.load("loading/LoadingUISkin.exml");
		// this.addEventListener(egret.Event.ADDED_TO_STAGE, this.createView, this);
	}

	protected initComponent() {
		let height = egret.Capabilities.boundingClientHeight;
		let width = egret.Capabilities.boundingClientWidth;
		let barBg = new egret.Shape();

		barBg.graphics.beginFill(0x666666);
		barBg.graphics.drawRoundRect(0, 0, 800, 10, 5);
		barBg.graphics.endFill();
		// this.addChild(barBg);

		this.bar = new egret.Shape();
		this.bar.graphics.beginFill(0xffffff);
		this.bar.graphics.drawRoundRect(0, 0, 800, 10, 5);
		this.bar.graphics.endFill();
		// this.addChild(this.bar);

		// barBg.x = width / 2 - barBg.width / 2;
		// barBg.y = 580;

		// this.bar.x = barBg.x;
		// this.bar.y = barBg.y;
	}

	public setProgress(current: number, total: number): void {
		if (current == 1) {
			this.perNumber = total / 10;
		}
		this.sec = (current / this.perNumber) * 10;

		// let secs: any = this.sec.toFixed(0);
		// secs = secs / 100;
		// this.bar.scaleX = current / total;
		// this.textField.text = this.sec.toFixed(0) + " %";


		this.progressLab.text = this.sec.toFixed(0) + "%";
		// egret.Tween.get(this.proActive).to({x: 1040*current / total}, 100)
		// egret.Tween.get(this.proBarActive).to({x: 1040*current / total}, 100)
	}
}
