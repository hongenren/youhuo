<template>
	<div class="postActivity">
		<mt-header title="发布活动">
			<router-link to="/" slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
		</mt-header>
		<div class="lc-tip row">
			<span class="block"></span>
			<span>活动信息<span class="shallow">（必填）</span></span>
		</div>
		<mt-cell title="设置活动信息" to="/activityInfo" is-link>
			<span>请设置</span>
		</mt-cell>
		<div class="lc-tip row">
			<span class="block"></span>
			<span>票证信息<span class="shallow">（仅供发放票证使用，没有票证无需设置）</span></span>
		</div>
		<div>
			<mt-cell title="设置票证日期" is-link>
				<span>请设置</span>
			</mt-cell>
			<div class="newperiod">
				<div class="periodtop">
					<div><span style="font-size:20px;"> + </span> <span>添加新场次</span></div>
					<div><span style="color: #73B81F;padding-right: 10px;">复制</span><span style="color:#F0676C;">删除</span></div>
				</div>
				<div class="periodinfo">
					<div class="periodtime">
						<span>设置场次开始时间</span>
						<span>设置场次结束时间</span>
					</div>
					<div class="periodcenter">
						<mt-cell title="设置该场次下的票证信息" is-link></mt-cell>
					</div>
					<div>
						<mt-cell title="设置该场次下的票证核销管理员" is-link></mt-cell>
						<div class="hintinfo">TA拥有2个权限：1、可通过管理功能的“扫一扫”，去核销本场次活动的票证 2、可增加临时管理员（TA只有可核销本场次活动的票证的权限）</div>
					</div>
				</div>
			</div>
		</div>
		<div class="hintsubmit">提示：场次信息如未设置完整，该场次默认不提交。</div>
		<button class="submit-btn-tint" @click="jump">发布活动</button>
	</div>
</template>

<script>
export default {
    data () {
        return {
            logo: require('@/assets/images/prove-head.png'),
            form: {
                personFirstAccount: null, // '72-00001666-5'
                pageNumber: 1,
                pageSize: 10
            },
            list: [],
            allLoaded: false,
            bottomText: '上拉加载更多...',
            passport: null,
            un: null
        };
    },
    created () {
        // this.init();
    },
    methods: {
        init () {
            let pfa = localStorage.getItem('personFirstAccount');
            pfa && (this.form.personFirstAccount = pfa);
            this.un = JSON.parse(localStorage.getItem('appUserInfo')).cookieResp.un;
            this.$http.post(this.$api.passport.apply, this.form).then(res => {
                if (res.data.code === 0) {
                    this.list = res.data.data.records;
                }
            });
        },
        loadBottom: function () {
            if (this.list.length < 10) {
                this.$refs.loadmore.onBottomLoaded();
                this.allLoaded = true;
                return false;
            }
            this.form.pageNumber += 1;
            setTimeout(() => {
                this.$http.post(this.$api.passport.apply, this.form).then(res => {
                    if (res.data.code === 0) {
                        this.list = this.list.concat(res.data.data.records);
                        this.$refs.loadmore.onBottomLoaded();
                        if (res.data.data.records.length === 0) {
                            this.allLoaded = true;
                        }
                    }
                });
            }, 500);
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
.postActivity {
	padding-bottom: px2rem(100);
	font-size: 14px;
	.newperiod{
		padding: 0 px2rem(10);
		.periodtop{
			font-weight: bold;
			padding: 0 px2rem(10) px2rem(5) px2rem(10);
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		.periodinfo{
			border-radius: 5px;
			background: #F0676C;
			padding: px2rem(10);
		}
		.periodtime{
			display: flex;
			justify-content: space-between;
			span{
				width: px2rem(160);
				height: px2rem(44);
				line-height: px2rem(44);
				text-align: center;
				background: #ffffff;
			}
		}
		.periodcenter{
			margin: px2rem(10) 0;
		}
		.hintinfo{
			background: #ffffff;
			font-size: 12px;
			color: #828282;
			padding: 0 px2rem(10) px2rem(10) px2rem(10);
			font-weight: bold;
		}
	}
	.hintsubmit{
		position: fixed;
		bottom: px2rem(54);
		left: px2rem(10);
		color: #828282;
		font-weight: bold;
	}
}
</style>
