module game {
	/**
	 *
	 * @author redstoone
	 *
	 */

	export class Ranking extends BaseComponent {
		private static instance: Ranking;
		private tabActive: eui.Image;
		private viewStack: eui.ViewStack;
		private radioBtn: eui.RadioButton;
		public currIndex: number = 0

		private douList: eui.List;
		private pingList: eui.List;

		private douListData: Array<any> = [
			{ ranking: 1, avatar: "/resource/assets/ranking/ranking_user.jpg", wins: 180, name: "小鱼儿的记忆" },
			{ ranking: 2, avatar: "/resource/assets/ranking/ranking_user.jpg", wins: 20, name: "Ambar" },
			{ ranking: 3, avatar: "/resource/assets/ranking/ranking_user.jpg", wins: 40, name: "六号宝宝" },
			{ ranking: 4, avatar: "/resource/assets/ranking/ranking_user.jpg", wins: 60, name: "小鱼儿的记忆2号" },
			{ ranking: 5, avatar: "/resource/assets/ranking/ranking_user.jpg", wins: 20, name: "任任任1234" },
			{ ranking: 6, avatar: "/resource/assets/ranking/ranking_user.jpg", wins: 880, name: "nickname6" }
		]; //数据,可动态生成

		private pingListData: Array<any> = [
			{ ranking: 1, avatar: "/resource/assets/ranking/ranking_user.jpg", wins: 180, name: "小鱼儿的记忆" },
			{ ranking: 2, avatar: "/resource/assets/ranking/ranking_user.jpg", wins: 20, name: "Ambar" },
			{ ranking: 3, avatar: "/resource/assets/ranking/ranking_user.jpg", wins: 40, name: "六号宝宝" },
		]; //数据,可动态生成

		private douConllection: eui.ArrayCollection = new eui.ArrayCollection();
		private pingConllection: eui.ArrayCollection = new eui.ArrayCollection();

		public constructor() {
			super();
			Ranking.instance = this;
			this.load("index/RankingSkin.exml");

			// this.skinName = "RankingSkin";
			// 默认显示斗地主排行榜

			this.douListShow()

			var inst = Ranking.instance;
			inst.x = 38;
			inst.y = 118;
			// Main.getInstance().addChild(inst);
		}

		protected initComponent() {
			this.radioBtn.group.addEventListener(eui.UIEvent.CHANGE, this.onChange, this);
		}

		private onChange(e: eui.UIEvent) {
			let radioGroup: eui.RadioButtonGroup = e.target;
			this.currIndex = radioGroup.selectedValue

			var tw = egret.Tween.get(this.tabActive);
			tw.to({ x: this.currIndex * 170.5 + 13 }, 200);

			this.viewStack.selectedIndex = this.currIndex;

			if (this.currIndex == 1) {
				this.pingListShow()
			} else {
				this.douListShow()
			}
		}

		private pingListShow() {
			this.pingConllection.source = this.pingListData;
			this.pingList.dataProvider = this.pingConllection;
			this.pingList.itemRenderer = game.RankingItem;
		}

		private douListShow() {
			this.douConllection.source = this.douListData;
			this.douList.dataProvider = this.douConllection;
			this.douList.itemRenderer = game.RankingItem;
		}
	}
}