<template>
    <div class="activitydetail">
        <mt-header title="活动详情">
			<router-link to="" slot="left">
				<mt-button icon="back" @click="$router.go(-1)"></mt-button>
			</router-link>
		</mt-header>
        <div class="activitypic">
            <img src="../assets/images/pws_153.png" alt="" srcset="">
            <div class="pictext">礼让斑马线，文明伴我行，喜迎进博，引导交通</div>
        </div>
        <div class="activitime">
            <p>时间：19/11/03 08:00 至 19/11/10 08:00</p>
            <p>地点：上海长宁区金钟路680弄明基广场</p>
            <p>咨询人：刘老师  17702898066</p>
        </div>
        <div class="activitmark">
            这是活动简介，这是活动简介，这是活动简介，这是活动简介，这是活动简介，这是活动简介，这是活动简介，这是活动简介
        </div>
        <div class="yh-group">
            <span class="l">票证</span>
            <span>查看更多</span>
        </div>
        <ul>
            <li class="ticketlist">
                <div class="ticketleft">
                    <p>南京东路慈善超市参观门票</p>
                    <p>19/6/6 08:00 至 12:00 </p>
                    <p>上海市长宁区金钟路658弄11号2楼东华大学科技园内11号2楼</p>
                </div>
                <div class="ticketright">
                    <p>已领10/共100张</p>
                    <span>立即领取</span>
                </div>
            </li>
        </ul>
        <div class="yh-group">
            <span class="l">岗位</span>
            <span>查看更多</span>
        </div>
        <ul>
            <li class="ticketlist">
                <div class="ticketleft">
                    <p>南京东路慈善超市参观门票</p>
                    <p>19/6/6 08:00 至 12:00 </p>
                    <p>上海市长宁区金钟路658弄11号2楼东华大学科技园内11号2楼</p>
                </div>
                <div class="ticketright">
                    <p>已领10/共100张</p>
                    <span>立即领取</span>
                </div>
            </li>
        </ul>
        <div class="yh-group">
            <span class="l">任务</span>
            <span>查看更多</span>
        </div>
        <ul>
            <li class="ticketlist">
                <div class="ticketleft">
                    <p>南京东路慈善超市参观门票</p>
                    <p>19/6/6 08:00 至 12:00 </p>
                    <p>上海市长宁区金钟路658弄11号2楼东华大学科技园内11号2楼</p>
                </div>
                <div class="ticketright">
                    <p>已领10/共100张</p>
                    <span>立即领取</span>
                </div>
            </li>
        </ul>
        <div class="yh-group">
            <span class="l">发布方</span>
        </div>
        <ul>
            <li class="affiliationc">
                <img src="../assets/images/prove-head.png" alt="">
                <span>上海市公益服务促进中心</span>
            </li>
        </ul>
        <div class="yh-group">
            <span class="l">所属项目</span>
        </div>
        <ul>
            <li class="affiliationx">
                <img src="../assets/images/prove-head.png" alt="">
                <div class="companyname">
                    <p>上海市公益服务促进中心</p>
                    <p>2019/09/03 至2019/09/07</p>
                </div>
            </li>
            <li class="affiliationx">
                <img src="../assets/images/prove-head.png" alt="">
                <div class="companyname">
                    <p>上海市公益服务促进中心</p>
                    <p>2019/09/03 至2019/09/07</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data () {
        return {
            token: 'eyJhbGciOiJIUzI1NiJ9.--.ZKHIL4d93AJjwsumlXwXAQm_XhJtW-dKc2V6Ghj0r2U',
            userNo: '72-00001666-5'
        };
    },
    created () {
    },
    methods: {
        go () {
            alert(1);
        }
    }
};
</script>

<style lang="scss">
    .activitydetail {
        padding-bottom: px2rem(100);
        font-size: 14px;
        color: #101010;
        .activitypic{
            position: relative;
            width: 100%;
            height: px2rem(160);
            img{
                width: 100%;
                height: 100%;
            }
            .pictext{
                position: absolute;
                width: 100%;
                bottom: 0;
                height: px2rem(44);
                line-height: px2rem(44);
                opacity: 0.5;
                background-color: rgba(15, 15, 15, 1);
                text-align: center;
                color: rgba(255, 255, 255, 1);
                font-size: 16px;
            }
        }
        .activitime{
            padding: px2rem(8) px2rem(14) px2rem(8) px2rem(14);
            p{
                padding: px2rem(3);
            }
        }
        .activitmark{
            padding: px2rem(8) px2rem(14) px2rem(8) px2rem(14);
        }
        .yh-group{
            color: #101010;
            font-weight: bold;
            border-bottom: none;
            padding-bottom: px2rem(10);
            .l{
                font-size: 14px;
            }
        }
        .affiliationc{
            span{
                display: inline-block;
                width: px2rem(176);
                height: px2rem(22);
                color: rgba(16, 16, 16, 1);
                font-size: 16px;
            }
            img{
                width: px2rem(60);
                height: px2rem(60);
                border-radius: px2rem(30);
                margin: px2rem(10);
            }
        }
        .affiliationx{
            padding: 0 0 px2rem(4) px2rem(10);
            .companyname{
                display: inline-block;
                vertical-align: top;
                padding-left: px2rem(12);
                p{
                    &:first-child{
                        padding: px2rem(8) 0;
                        color: #101010;
                    }
                    &:nth-child(2){
                        color: #828282;
                    }
                }
            }
            img{
                width: px2rem(140);
                height: px2rem(87);
            }
        }
    }
</style>
