<template>
	<div class="activityinfo">
		<mt-header title="填写活动信息">
			<router-link to="/" slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
		</mt-header>
        <div class="coverPlan" @click="uploadimg">
            <img v-if="addFrom.coverImg" :src="addFrom.coverImg" alt="">
            <div v-else>
                <span class="submit-btn-draw">上传/选择封面图</span>
                <p>图片尺寸840*480，.jpg或.png格式，不超过2M</p>
            </div>
        </div>
        <div class="yh-group">
            <span class="l">活动名称</span>
            <div class="textarea-wrapper">
                <!--pre 文本通常会保留空格和换行符。-->
                <div class="content">{{addFrom.name}}</div>
                <textarea
                    v-model="addFrom.name"
                    placeholder="请填写(不超过30个字)"
                    maxlength="30"
                ></textarea>
            </div>
        </div>
        <div class="yh-group">
            <span class="l">活动副标题</span>
            <div class="textarea-wrapper">
                <!--pre 文本通常会保留空格和换行符。-->
                <div class="content">{{addFrom.subTitle}}</div>
                <textarea
                    v-model="addFrom.subTitle"
                    placeholder="选填(不超过30个字)"
                    maxlength="30"
                ></textarea>
            </div>
        </div>
        <div class="profile">
            <div class="profiletop">
                <p class="profiletopintro">活动简介<span>(不超过500个字)</span></p>
                <p class="profiletophint">手机端仅支持简单的图文编辑，如果想编辑的内容更丰富，请到电脑上操作。</p>
            </div>
            <div class="vueditor">
                <vue-editor v-model="addFrom.demo"></vue-editor>
            </div>
        </div>
        <div class="yh-group">
            <span class="l">活动日期<i class="iconfont icon-wenhao" @click="reminder"></i></span>
            <div>
                <span>1
                    <mt-datetime-picker
                    v-model="addFrom.startDay"
                    type="date"
                    ref="picker"
                    @confirm="handleConfirm">
                    </mt-datetime-picker>    
                </span>至<span>结束时间</span>
            </div>
        </div>
        <div class="yh-group">
            <span class="l">活动地点</span>
            <div>
                请在常用地址库中选择》
            </div>
        </div>
        <div class="yh-group">
            <span class="l">咨询人姓名</span>
            <input type="text" placeholder="请填写">
        </div>
        <div class="yh-group">
            <span class="l">咨询电话</span>
            <input type="text" placeholder="请填写">
        </div>
        <div class="optional">活动参与方（选填）</div>
        <div class="yh-group">
            <span class="l">主办单位</span>
            <div>
                默认是本机构，可修改为其他机构>
            </div>
        </div>
        <div class="yh-group">
            <span class="l">联办单位</span>
            <div>
                请选择》
            </div>
        </div>
        <div class="yh-group">
            <span class="l">协办单位</span>
            <div>
                请选择》
            </div>
        </div>
        <div class="yh-group">
            <span class="l">指导单位</span>
            <div>
                请选择》
            </div>
        </div>
        <div class="yh-group">
            <span class="l">爱心支持单位</span>
            <div>
                请选择》
            </div>
        </div>
        <div class="yh-group">
            <span class="l">媒体支持单位</span>
            <div>
                请选择》
            </div>
        </div>
		<button class="submit-btn-tint" @click="jump">下一步</button>
	</div>
</template>

<script>
import { VueEditor} from 'vue2-editor';

export default {
    components: {
        VueEditor
    },
    data () {
        return {
            value: '',
            logo: require('@/assets/images/prove-head.png'),
            addFrom: {
                coverImg: null, // 封面图片url
                addressId: null, // 地址id
                contactName: null, // 咨询人姓名
                contactPhone: null, // 咨询人电话
                name: null, // 活动名称
                orgCode: null, // 法人三类标识
                startDay: null, // 开始日期
                endDay: null, // 结束日期
                demo: null, // 活动简介
                subTitle: null, // 副标题
                state: null, // 状态 -10待发布 10未开始
                activityUniteParamList: {} // 单位
            },
            list: [],
            allLoaded: false,
            bottomvalue: '上拉加载更多...',
            passport: null,
            un: null
        };
    },
    created () {
        this.init();
    },
    methods: {
        init () {
            this.addFrom.coverImg = this.$route.query.url;
        },
        uploadimg () {
            this.$router.push({name: 'activitybanner'});
        },
        reminder () {
            this.$mint.MessageBox({
                title: '',
                message: `1、发布活动时，活动的日期自行选择。
                2、如该活动下的票证日期，不在活动日期的范围内，系统将自动调整活动日期。例：活动日期为：9月7日至9月10日，
                票证日期为9月9日、9月10日、9月11日，系统调整后的活动日期为9月7日至9月11日。
                3、如该活动下有挂靠的岗位、任务，且岗位、任务的日期不在活动日期的范围内，系统将自动调整活动日期。调整规则同第2条。`
            });
        },
        openPicker () {
            this.$refs.picker.open();
        },
        handleConfirm () {
            alert(1);
        },
        jump () {
            let token = localStorage.getItem('token');
            if (!token) {
                this.$mint.Toast({
                    message: '请先登录',
                    position: 'top',
                    duration: 1000
                });
                return false;
            }
            if (!this.un) {
                this.$mint.Toast({
                    message: '请先实名认证',
                    position: 'top',
                    duration: 1000
                });
                return false;
            }
            this.$router.push({name: 'applyFor'});
        }
    }
};
</script>
<style scoped lang="scss">
.activityinfo {
	padding-bottom: px2rem(100);
    font-size: 14px;
    .coverPlan{
        width: 100%;
        height: px2rem(214);
        border: 1px solid #BBBBBB;
        text-align: center;
        img{
            width: 100%;
            height: 100%;
        }
        .submit-btn-draw{
            margin: px2rem(70) 0 px2rem(10) 0;
        }
    }
    .profile{
        width: 100%;
        font-size: 16px;
        color: #101010;
        .profiletop{
            padding: px2rem(10);
            .profiletopintro{
                span{
                    color: #828282;
                    font-size: 14px;
                    padding-left: 5px;
                }
            }
            .profiletophint{
                color: #FF9800;
                font-size: 12px;
            }
        }
    }
    .optional{
        color: #828282;
        padding: px2rem(10) 0 px2rem(2) px2rem(10);
        border-bottom: 1px solid #BBBBBB;

    }
}
</style>
