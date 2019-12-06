<template>
    <div class="ticketinformation">
        <mt-header title="票证信息">
			<router-link to="/" slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
		</mt-header>
        <div class="period">场次：2019年10月11日 08:00-12:00</div>
        <div class="addticketbox">
            <div class="addtickettitle"><i class="iconfont icon-jiahao"></i>添加新票证</div>
            <div class="addticketinfo">
                <div class="yh-group">
                    <span class="l">票证名称</span>
                    <div>例：公众门票/嘉宾证/媒体证<i class="iconfont icon-youjiantou"></i></div>
                </div>
                <div class="yh-group">
                    <span class="l">票证地点</span>
                    <div>请在常用地址库中选择<i class="iconfont icon-youjiantou"></i></div>
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
                <div class="getway">
                    <span>公开领取</span><span>指定发放</span>
                </div>
                <!-- 公开领取 -->
                <div v-if="false">
                    <div class="yh-group">
                        <span class="l">票证数量</span>
                        <div class="jiajian">
                            <i class="iconfont icon-jianhao"></i>
                            <input type="text" class="feedin">
                            <i class="iconfont icon-add"></i>
                        </div>
                    </div>
                    <div class="yh-group" style="border: none;">
                        <span class="l">票证积分价格</span>
                        <div class="jiajian">
                            <i class="iconfont icon-jianhao"></i>
                            <input type="text" class="feedin">
                            <i class="iconfont icon-add"></i>
                        </div>
                    </div>
                    <div class="integral" style="border-bottom: 1px solid #BBBBBB;">
                        <span style="padding-bottom: 5px;">用户领取票证时需支付的积分</span>
                    </div>
                    <div class="yh-group">
                        <span class="l" style="line-height: 32px;">领取需审核</span>
                        <mt-switch v-model="value"></mt-switch>
                    </div>
                    <div class="yh-group">
                        <span class="l" style="line-height: 32px;">仅限本机构/活动联办方成员领取</span>
                        <mt-switch v-model="value"></mt-switch>
                    </div>
                    <div class="yh-group">
                        <span class="l">指定机构成员领取</span>
                        <span>请选择</span>
                    </div>
                </div>
                <!-- 指定发放 -->
                <div>
                    <div class="tishi">如指定用户是系统中已实名注册用户，在Ta的个人订单中将会生成一张票证订单；如指定用户是非系统实名用户，系统将会以短信形式发送给Ta。</div>
                    <div class="addtickettitle"><i class="iconfont icon-jiahao"></i>添加新用户</div>
                    <div class="yh-group">
                        <span class="l">手机号</span>
                        <input type="text">
                    </div>
                    <div class="yh-group">
                        <span class="l">姓名</span>
                        <input type="text">
                    </div>
                    <div class="yh-group">
                        <span class="l">所在单位名称</span>
                        <input type="text">
                    </div>
                </div>
            </div>
        </div>
        <button class="submit-btn">保存提交</button>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data () {
        return {
            token: 'eyJhbGciOiJIUzI1NiJ9.--.ZKHIL4d93AJjwsumlXwXAQm_XhJtW-dKc2V6Ghj0r2U',
            value: true
        };
    },
    created () {
    }
};
</script>

<style lang="scss">
    .ticketinformation {
        padding-bottom: px2rem(100);
        font-size: 14px;
        .addticketbox{
            padding: 0 px2rem(10);
            .addtickettitle{
                color: #0F0F0F;
                font-weight: bold;
                padding-bottom: px2rem(5);
                i{
                    padding: 0 px2rem(5);
                }
            }
            .addticketinfo{
                padding: 0 px2rem(10) px2rem(15) px2rem(10);
                line-height: 20px;
                border-radius: 5px;
                background-color: rgba(255, 255, 255, 1);
                border: 1px solid rgba(187, 187, 187, 1);
            }
        }
        .getway{
            border-radius: 4px;
            border: 1px solid #73b81f;
            margin: px2rem(20) 0 px2rem(10) 0;
            span{
                width: 50%;
                display: inline-block;
                height: px2rem(30);
                line-height: px2rem(30);
                background-color: rgba(115, 184, 31, 1);
                text-align: center;
            }
        }
        .tishi {
            padding: 0 px2rem(5) px2rem(10) px2rem(5);
            color: rgba(130, 130, 130, 1);
            font-size: 12px;
        }
    }
</style>
