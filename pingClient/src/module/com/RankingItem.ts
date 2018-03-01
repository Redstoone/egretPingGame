module uiComponent {
	export class RankingItem extends eui.ItemRenderer {
		private ranking_lab: eui.Label;
		private name_lab: eui.Label;
		private avatar_img: eui.Image;
		private wins_lab: eui.Label;
		private ranking_NoBg: eui.Image;
		private shpMask: egret.Shape;

		public constructor() {
			super();

			this.ranking_NoBg = new eui.Image();
			this.ranking_NoBg.width = 58;
			this.ranking_NoBg.height = 60;
			this.ranking_NoBg.left = 0;
			this.ranking_NoBg.verticalCenter = 0;
			this.ranking_NoBg.source = "ranking_no_bg_png";
			this.addChildAt(this.ranking_NoBg, 1);

			this.avatar_img = new eui.Image();
			this.avatar_img.width = this.avatar_img.height = 78;
			this.avatar_img.top = 12;
			this.avatar_img.left = 61;
			this.addChildAt(this.avatar_img, 1);

			this.ranking_lab = new eui.Label();
			this.ranking_lab.width = 58;
			this.ranking_lab.left = 0;
			this.ranking_lab.size = 20;
			this.ranking_lab.textColor = 0xffffff;
			this.ranking_lab.strokeColor = 0x000000;
			this.ranking_lab.stroke = 1;
			this.ranking_lab.verticalCenter = 0;
			this.ranking_lab.textAlign = "center";
			this.addChild(this.ranking_lab);

			this.name_lab = new eui.Label();
			// this.ranking_lab.width = 58;
			this.name_lab.left = 152;
			this.name_lab.top = 20;
			this.name_lab.size = 26;
			this.name_lab.textColor = 0x74738C;
			this.addChild(this.name_lab);

			this.wins_lab = new eui.Label();
			this.wins_lab.left = 152;
			this.wins_lab.bottom = 20;
			this.wins_lab.size = 20;
			this.wins_lab.textColor = 0x546388;
			this.addChild(this.wins_lab);

			this.shpMask = new egret.Shape();
			this.shpMask.graphics.beginFill(0x1122cc);
			this.shpMask.graphics.drawRoundRect(62, 13, 76, 76, 20, 20);
			this.shpMask.graphics.endFill();
			this.addChildAt(this.shpMask, 2);
			this.avatar_img.mask = this.shpMask;
		}

		public dataChanged(): void {
			console.log(this.data, [1, 2, 3].indexOf(this.data.ranking))
			// if ([1, 2, 3].indexOf(this.data.ranking) >= 0) {
				// this.ranking_lab.text = '11111';
				// console.log(this.ranking_NoBg)
				// this.ranking_NoBg.visible = false;
			// } else {
				this.ranking_lab.text = this.data.ranking;
				// this.addChildAt(this.ranking_NoBg, 1);
			// 	this.ranking_NoBg.visible = false;
			// }
			this.avatar_img.source = this.data.avatar;
			this.name_lab.text = this.data.name;
			this.wins_lab.text = '胜场：' + this.data.wins + '场';
		}
	}
}