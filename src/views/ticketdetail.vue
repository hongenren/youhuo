<template>
    <div class="ticketdetail">
        <mt-header title="活动详情">
			<router-link to="" slot="left">
				<mt-button icon="back" @click="$router.go(-1)"></mt-button>
			</router-link>
		</mt-header>
        <div class="period">场次：2019年10月11日 08:00-12:00</div>
        <div class="ticketdinfo">
            <p>票证名称：南京东路慈善超市参观门票</p>
            <p class="blod">票证地点：上海市长宁区金钟路658弄11号2楼东华大学科技园</p>
            <p class="blod mt30">已领10/共100张   领取无需审核 </p>
            <p>领取票证需支付1积分，票证核销后赠送3积分</p>
            <p class="mt30">指定机构成员领取：</p>
            <p>上海市公益服务促进中心</p>
            <p>上海市公益服务促进中心南京路慈善超市</p>
            <p>上海市公益服务促进中心南京路慈善超市2</p>
        </div>
        <button class="submit-btn">立即领取</button>
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
    .ticketdetail {
        padding-bottom: px2rem(100);
        font-size: 14px;
        .ticketdinfo{
            padding: px2rem(25) px2rem(22);
            p{
                padding: px2rem(4) 0;
            }
        }
        .blod{
            font-weight: bold;
        }
        .mt30{
            margin-top: px2rem(25);
        }
        .submit-btn{
            bottom: px2rem(4);
            width: px2rem(355);
            margin: 0 px2rem(10);
        }
    }
</style>
