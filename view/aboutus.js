const aboutus = {
    data: () => ({
    }),
    template: `<div id="index" style="background-image: url(./image/indexBg.png);">
    <div id="indexTop">
        <img src="./image/indexmenu.png" style="width:43px;height:23px;" />
        <div class="menu">
            <a>HOME</a>
            <a>About us</a>
            <a>Our case</a>
        </div>
        <div class="menuRight">
            <div class="lineCurrent"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
        <div class="circleDiv">
            <div class="ring">
                    <div class="circle"></div>
            </div>
            <span>诚信</span>
        </div>
    </div>
    <img src="./image/indexLogo.png"  style="width:10.95rem;height:1.8rem;position:absolute;right:11%;top:33%;z-index:4"/>
    <img src="./image/indexLogo2.png"  style="width:4.86rem;height:3.98rem;position:absolute;right:0%;top:30%;z-index:3" />
    <div id="indexRight"></div>
    <div id="indexBottom">
        <img src="./image/xiayiye.png" style="width:1.85rem;height:0.98rem;margin-right: 17%;cursor: pointer;" >
    </div>
</div>`,
    methods: {
    },
    mounted: function () {},
    created: function () {
    }
}