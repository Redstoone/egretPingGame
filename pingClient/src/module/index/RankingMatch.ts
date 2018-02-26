module uiComponent {
  export class RankingMatch extends BaseComponent {
    public viewStack: eui.ViewStack;
    public rankingList: eui.List;
    private rankingConllection: eui.ArrayCollection = new eui.ArrayCollection();

    private rankingListData: Array<any> = [
      { ranking: 1, avatar: "/resource/pingGame/com/ranking_user.jpg", wins: 180, name: "小鱼儿的记忆" },
      { ranking: 2, avatar: "/resource/pingGame/com/ranking_user.jpg", wins: 20, name: "Ambar" },
      { ranking: 3, avatar: "/resource/pingGame/com/ranking_user.jpg", wins: 40, name: "六号宝宝" },
      { ranking: 4, avatar: "/resource/pingGame/com/ranking_user.jpg", wins: 60, name: "小鱼儿的记忆2号" },
      { ranking: 5, avatar: "/resource/pingGame/com/ranking_user.jpg", wins: 20, name: "任任任1234" },
      { ranking: 6, avatar: "/resource/pingGame/com/ranking_user.jpg", wins: 880, name: "nickname6" }
    ]; //数据,可动态生成

    public constructor() {
      super();
      this.load("index/RankingMatchSkin.exml");

      this.x = 38;
      this.y = 138;
    }

    protected initComponent() {
      this.rankingConllection.source = this.rankingListData;
			this.rankingList.itemRendererSkinName = Main.resUrl + "com/RankingItemSkin.exml";
			this.rankingList.itemRenderer = uiComponent.RankingItem;
			this.rankingList.dataProvider = this.rankingConllection;
    }
  }
}