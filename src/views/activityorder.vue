<template>
    <div class="activityorder">
        <mt-header title="活动订单">
			<router-link to="" slot="left">
				<mt-button icon="back" @click="$router.go(-1)"></mt-button>
			</router-link>
		</mt-header>
        <div class="nav">
            <span>活动订单</span>
            <span>活动订单</span>
            <span>活动订单</span>
            <span>活动订单</span>
        </div>
        <div class="ctivityButList">
            <input type="text" placeholder="请输入活动名称进行查询"><i class="iconfont icon-search"></i>
        </div>
        <ul>
            <li class="ticketstate">

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
    }
};
</script>

<style lang="scss">
    .activityorder {
        padding-bottom: px2rem(100);
        font-size: 14px;
        .nav{
            width: 100%;
            overflow: hidden;
            text-align: center;
            border-top: 1px solid #bbbbbb;
            color: #111111;
            span{
                display: inline-block;
                border-bottom: 2px solid #73B81F;
                padding-bottom: px2rem(2);
                margin: px2rem(10) px2rem(15);
            }
        }
        .ctivityButList{
            padding: 0 px2rem(10);
            input{
                vertical-align: middle;
                padding: px2rem(3);
                width: 85%;
                text-align: left;
                border: 1px solid #3BAE3A;
                border-radius: 3px 0 0 3px;
            }
            i{
                width: 15%;
                display: inline-block;
                background: #73B81F;
                color: #ffffff;
                padding: px2rem(3) 0;
                text-align: center;
                border-radius: 0 3px 3px 0;
            }
        }
        .ticketstate{
            
        }
    }
</style>
