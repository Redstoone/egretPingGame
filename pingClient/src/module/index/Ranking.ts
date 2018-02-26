module uiComponent {
	export class Ranking extends BaseComponent {
		public currIndex: number = 0;

		private tabActive: eui.Image = null;
		private radioBtn: eui.RadioButton = null;
		private viewStack: eui.ViewStack = null;
		private douList: eui.List = null;
		private pingList: eui.List = null;

		private douListData: Array<any> = [
			{ ranking: 1, avatar: "/resource/pingGame/com/ranking_user.jpg", wins: 180, name: "小鱼儿的记忆" },
			{ ranking: 2, avatar: "/resource/pingGame/com/ranking_user.jpg", wins: 20, name: "Ambar" },
			{ ranking: 3, avatar: "/resource/pingGame/com/ranking_user.jpg", wins: 40, name: "六号宝宝" },
			{ ranking: 4, avatar: "/resource/pingGame/com/ranking_user.jpg", wins: 60, name: "小鱼儿的记忆2号" },
			{ ranking: 5, avatar: "/resource/pingGame/com/ranking_user.jpg", wins: 20, name: "任任任1234" },
			{ ranking: 6, avatar: "/resource/pingGame/com/ranking_user.jpg", wins: 880, name: "nickname6" }
		]; //数据,可动态生成

		private pingListData: Array<any> = [
			{ ranking: 1, avatar: "/resource/pingGame/com/ranking_user.jpg", wins: 180, name: "小鱼儿的记忆" },
			{ ranking: 2, avatar: "/resource/pingGame/com/ranking_user.jpg", wins: 20, name: "Ambar" },
			{ ranking: 3, avatar: "/resource/pingGame/com/ranking_user.jpg", wins: 40, name: "六号宝宝" },
		]; //数据,可动态生成

		private douConllection: eui.ArrayCollection = new eui.ArrayCollection();
		private pingConllection: eui.ArrayCollection = new eui.ArrayCollection();

		public constructor() {
			super();
			this.load("index/RankingSkin.exml");

			this.x = 38;
			this.y = 118;
		}

		protected initComponent() {
			// 默认显示斗地主排行榜
			this.douListShow()

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
			this.pingList.itemRendererSkinName = Main.resUrl + "com/RankingItemSkin.exml";
			this.pingList.itemRenderer = uiComponent.RankingItem;
			this.pingList.dataProvider = this.pingConllection;
		}

		private douListShow() {
			this.douConllection.source = this.douListData;
			this.douList.itemRendererSkinName = Main.resUrl + "com/RankingItemSkin.exml";
			this.douList.itemRenderer = uiComponent.RankingItem;
			this.douList.dataProvider = this.douConllection;
		}
	}
}