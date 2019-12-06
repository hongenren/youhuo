<template>
    <div class="addresslibrary">
        <mt-header title="常用地址库">
			<router-link to="/" slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
		</mt-header>
        <div class="yh-title">新增地址</div>
        <div class="yh-group">
            <span class="l">地址</span>
            <div>请在地图上选择地址></div>
        </div>
        <div class="yh-group">
            <span class="l">门牌号（选填）</span>
            <input type="text" placeholder="例：11号楼201室">
        </div>
        <div class="yh-group">
            <span class="l">街/镇（选填）</span>
            <div>请选择></div>
        </div>
        <div class="yh-group">
            <span class="l">居/村委（选填）</span>
            <div>请选择></div>
        </div>
        <div class="confirmbtn">
            <div class="submit-btn-draw">确定</div>
        </div>
        <div class="yh-title">常用地址库</div>
        <div class="yh-group">
            <span class="l">上海市长宁区东华大学科技园东华大学科金钟路658弄11号2楼</span>
            <span><i class="iconfont icon-shanchu"></i></span>
        </div>
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
    .addresslibrary {
        padding-bottom: px2rem(100);
        font-size: 14px;
        .yh-title{
            font-weight: bold;
            padding: px2rem(10);
            font-size: 16px;
            border-bottom: 1px solid #BBBBBB;
        }
        .confirmbtn{
            height: px2rem(60);
            width: 100%;
            text-align: center;
            line-height: px2rem(60);
        }
    }
</style>
