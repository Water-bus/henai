
    // 定义路由组件
    var router = new VueRouter({
        routes:[
            { path: '/index',name:'index', component: index, alias: '/' },
            { path: '/aboutus',name:'about', component: aboutus, },
        ],
    });