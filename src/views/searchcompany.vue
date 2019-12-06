<template>
    <div class="searchcompany">
        <mt-header title="选择活动参与方">
			<router-link to="/" slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
		</mt-header>
        <div class="screenButList">
            <input type="text" placeholder="请输入机构名称进行查询"><i class="iconfont icon-search"></i>
        </div>
        <div>
            <div class="yh-group">
                <span class="l">上海悠活网络科技有限公司</span>
                <i class="iconfont icon-duigou"></i>
            </div>
        </div>
		<button class="submit-btn" @click="jump">添加</button>
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
    .searchcompany {
        padding-bottom: px2rem(100);
        font-size: 14px;
        .screenButList{
            padding: px2rem(10);
            input{
                vertical-align: middle;
                padding: px2rem(6);
                width: 85%;
                text-align: left;
                border: 1px solid #3BAE3A;
            }
            i{
                width: 15%;
                display: inline-block;
                background: #3BAE3A;
                color: #ffffff;
                padding: px2rem(6) 0;
                text-align: center;
            }
        }
        .yh-group{
            color: #101010;
            padding: px2rem(10) px2rem(20) px2rem(10) px2rem(20);
            &:first-child{
                border-top: 1px solid #bbbbbb;
            }
            .l{
                font-size: 14px;
            }
        }
    }
</style>
