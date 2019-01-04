const aboutus = {
    data: () => ({
    }),
    template: `<div class="main">
    <div id="header">
        <a style="opacity:1;cursor: auto;"><img src="./image/indexmenu.png" style="width:0.42rem;height:0.22rem;" /></a>
        <a>首页</a>
        <a style="opacity:1">关于我们</a>
        <a>我们的案例</a>
    </div>
    <div id="body">
        <div class='leftBox'>
            <div style="width:11.74rem;height: 2.5rem;background: url(./image/aboutbody.png) 100% 100% no-repeat;"></div>
            <div style="width:11.74rem;height: 5.4rem;background: #fff;">
                <span style="width:100%;height: 1.7rem;text-align:center;display: block;color:#4F4E56;font-weight:600;font-size:0.18rem;vertical-align:middle;line-height: 1.7rem;border-bottom: 1px solid #E7E7E7">坚持创新策划设计，以专业的经验和诚意的服务，为客户提供全方位，一站式服务</span>
                <span style="font-size:0.31rem;display:block;margin-left: 1rem;margin-top:0.37rem;color: #646CA1;font-weight: 600">我们能做什么</span>
                <div style="margin-top: 0.68rem;display: flex;flex-direction: row;justify-content:flex-start;">
                    <div style="width:25%; display: flex;justify-content: flex-start;align-items: center;flex-direction: column;">
                        <img src="./image/item1.png" style="height:0.6rem;" />
                        <span style="font-size: 0.18rem;color:#57565E;font-weight: 600;text-align: center;margin-top: 0.36rem;margin-bottom: 0.24rem;">会议会务</span>
                        <span style="font-size: 0.2rem;color: #707070;font-weight: 600;">Conference Meeting</span>
                    </div>
                    <div style="width:25%; display: flex;justify-content: flex-start;align-items: center;flex-direction: column;">
                        <img src="./image/item2.png" style="height:0.6rem;" />
                        <span style="font-size: 0.18rem;color:#57565E;font-weight: 600;text-align: center;margin-top: 0.36rem;margin-bottom: 0.24rem;">礼仪庆典</span>
                        <span style="font-size: 0.2rem;color: #707070;font-weight: 600;">Cremonies Celebrations</span>
                    </div>
                    <div style="width:25%; display: flex;justify-content: flex-start;align-items: center;flex-direction: column;">
                        <img src="./image/item3.png" style="height:0.6rem;" />
                        <span style="font-size: 0.18rem;color:#57565E;font-weight: 600;text-align: center;margin-top: 0.36rem;margin-bottom: 0.24rem;">活动策划</span>
                        <span style="font-size: 0.2rem;color: #707070;font-weight: 600;">Event Planning</span>
                    </div>
                    <div style="width:25%; display: flex;justify-content: flex-start;align-items: center;flex-direction: column;">
                        <img src="./image/item4.png" style="height:0.6rem;" />
                        <span style="font-size: 0.18rem;color:#57565E;font-weight: 600;text-align: center;margin-top: 0.36rem;margin-bottom: 0.24rem;">展台搭建</span>
                        <span style="font-size: 0.2rem;color: #707070;font-weight: 600;">Booth Build</span>
                    </div>
                </div>
            </div>
        </div>
        <div class='rightBox'>
            <div style="width:6.22rem;height: 5.6rem;background: #646CA1;position: relative">
                <img src="./image/page02.png" style="height:3.93rem; position: absolute;top: 0.39rem;right: 0;" />
            </div>
            <div style="width:6.22rem;height: 2.3rem;background: #4F4E56;display: flex;flex-direction: row; justify-content: flex-start;align-items: center">
                    <img src="./image/left.png"  style="height:1.1rem;margin-left: 1.04rem;padding-right: 0.53rem;border-right: 1px solid #D6D5D7;padding-top: 0.15rem;padding-bottom: 0.15rem;"/>
                    <img src="./image/right-light.png" style="height:1.1rem;margin-left: 0.53rem;" />
            </div>
        </div>
    </div>
    <div id="foot">
        <div style="color:#fff;font-size: 0.18rem;margin-top: 0.33rem;">联系我们</span>
            <div style="color:#fff;font-size: 0.14rem;margin-top: 0.2rem;"><img src="./image/smalllogo.png"
                    style="width: 0.19rem;height: 0.19rem;" />上海赫耐会务服务有限公司</div>
            <div style="color:#fff;font-size: 0.14rem;margin-top: 0.08rem;">联系人：Karry</div>
            <div style="color:#fff;font-size: 0.14rem;margin-top: 0.08rem;">手机：15372025263</div>
            <div style="color:#fff;font-size: 0.14rem;margin-top: 0.08rem;">地址：上海市漕溪公路18号上实大厦14楼A座</div>
        </div>
    </div>
</div>`,
    methods: {
    },
    mounted: function () {
        const that = this
        $('.main').css('min-height', $(window).height() + 'px')
        window.onresize = () => {
            return (() => {
                $('.main').css('min-height', $(window).height() + 'px')
            })()
        }
    },
    created: function () {
    }
}