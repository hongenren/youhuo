<template>
    <div class="setadministrator">
        <mt-header title="设置管理员">
			<router-link to="/" slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
		</mt-header>
        <div class="period">场次：2019年10月11日 08:00-12:00</div>
        <div class="yh-group" style="border-top: 1px solid #bbb;">
            <span class="l">报到地点</span>
            <span>请在常用地址库中选择</span>
        </div>
        <div class="yh-group-bolster">
            <div class="t">管理员工作提示<span>(选填，不超过300个汉字)</span></div>
            <div><textarea placeholder="例如：1、必须在场次开始前半小时到达报到地点2、活动当天尽量上传正装"></textarea></div>
        </div>
        <div class="yh-group" style="border: none">
            <span class="l">积分赠送<span style="color:#bbbbbb;">（每人每次）</span></span>
            <div class="jiajian">
                <i class="iconfont icon-jianhao"></i>
                <input type="text" class="feedin">
                <i class="iconfont icon-add"></i>
            </div>
        </div>
        <div class="integral">
            <span>票证核销后赠送给用户的积分</span>
            <span>可用积分：<span style="color:#73B81F;">1000</span></span>
        </div>
        <div class="yh-group">
            <span class="l">选择管理员</span>
            <span>请在常用地址库中选择</span>
        </div>
        <button class="submit-btn-tint">保存提交</button>
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
        chakan(){
            this.$router.push({name: 'pdf'});
        }
    }
};
</script>

<style lang="scss">
    .setadministrator {
        padding-bottom: px2rem(100);
        font-size: 14px;
        .period{
            margin-bottom: px2rem(10);
        }
        .integral{
            border-bottom: 1px solid #bbbbbb;
            padding-bottom: px2rem(5);
        }
    }
</style>
