// 引入子路由
// import Sub from '../frame/subroute.vue';

// 发布活动 (主页)
import postActivity from '../views/postActivity.vue';
// 填写活动信息
import activityInfo from '../views/activityinfo.vue';

// 活动封面图
import activitybanner from '../views/activitybanner.vue';

// 活动封面图
import addresslibrary from '../views/addresslibrary.vue';

// 选择活动参与方
import searchcompany from '../views/searchcompany.vue';

// 票证信息
import ticketinformation from '../views/ticketinformation.vue';

// 设置管理员
import setadministrator from '../views/setadministrator.vue';
// 活动详情
import activitydetail from '../views/activitydetail.vue';
//
import ticketdetail from '../views/ticketdetail.vue';
// 活动订单
import activityorder from '../views/activityorder.vue';

export default [
    {
        path: '/',
        name: 'postActivity',
        component: postActivity,
        meta: {
            title: '发布活动'
        }
    },
    {
        path: '/activityInfo',
        name: 'activityInfo',
        component: activityInfo,
        meta: {
            title: '填写活动信息'
        }
    },
    {
        path: '/activitybanner',
        name: 'activitybanner',
        component: activitybanner,
        meta: {
            title: '活动封面图'
        }
    },
    {
        path: '/addresslibrary',
        name: 'addresslibrary',
        component: addresslibrary,
        meta: {
            title: '常用地址库'
        }
    },
    {
        path: '/searchcompany',
        name: 'searchcompany',
        component: searchcompany,
        meta: {
            title: '选择活动参与方'
        }
    },
    {
        path: '/ticketinformation',
        name: 'ticketinformation',
        component: ticketinformation,
        meta: {
            title: '票证信息'
        }
    },
    {
        path: '/setadministrator',
        name: 'setadministrator',
        component: setadministrator,
        meta: {
            title: '设置管理员'
        }
    },
    {
        path: '/activitydetail',
        name: 'activitydetail',
        component: activitydetail,
        meta: {
            title: '活动详情'
        }
    },
    {
        path: '/ticketdetail',
        name: 'ticketdetail',
        component: ticketdetail,
        meta: {
            title: '活动详情'
        }
    },
    {
        path: '/activityorder',
        name: 'activityorder',
        component: activityorder,
        meta: {
            title: '活动订单'
        }
    }
];
