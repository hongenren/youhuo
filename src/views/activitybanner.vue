<template>
    <div class="activitybanner">
        <mt-header title="活动封面图">
			<router-link to="/" slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
		</mt-header>
        <div class="banner" v-for="(item, index) in recordList" :key="index">
            <img :src="item.url" alt="">
            <div class="selectbtn pattern" @click="selectImg(item.url)">选择</div>
            <div class="bannertype pattern">{{item.note}}</div>
        </div>
        <label for="file1"  class="submit-btn">从本地相册中选择</label>
        <input type="file" id="file1" runat="server" ref="inputer1" accept="image/*" class="inputfile" @change="uploadImg(addFrom.url)" />
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data () {
        return {
            fil: null,
            recordList: [],
            addFrom: {
                org: 'AAA789', // 机构标识
                url: null
            },
            searchFrom: {
                org: 'AAA789', // 机构标识
                current: 1, // 当前页
                size: 20 // 页容量	
            }
        };
    },
    created () {
        // this.init();
        this.getcoverImg();
    },
    methods: {
        init (){
            // 线上
            this.addFrom.org = JSON.parse(localStorage.getItem('appUserInfo')).cookieResp.un && 'AAA789';
        },
        getcoverImg () {
            this.$http.post(this.$api.activity.coverImg, this.searchFrom)
                .then((res) => {
                    this.recordList = res.data.data.records;
                })
        },
        uploadImg (url) {
            let inputDOM;
            inputDOM = this.$refs.inputer1;
            // 通过DOM取文件数据
            this.fil = inputDOM.files;
            console.log(inputDOM, this.fil);
            let formData = new FormData();
            let headers = {
                'Content-Type': 'multipart/form-data'
            };
            formData.append('file', this.fil[0]);
            formData.append('storage', 'platform-mgmt');
            formData.append('fileName', this.fil[0].name);
            this.$http.post('https://news.shcvs.cn/cm/upload/uploadImgFolderOSS?folderName=insurance', formData, headers).then(res => {
                if (res.data.errorcode === 0) {
                    url= res.data.data;
                    this.$router.push({name: 'activityInfo', query:{url: res.data.data}})
                }
            }).catch((e) => {
                alert(e);
            });
        },
        selectImg (url) {
            this.$router.push({name: 'activityInfo', query:{url: url}})
        }
    }
};
</script>

<style lang="scss">
    .activitybanner {
        padding-bottom: px2rem(100);
        font-size: 14px;
        .inputfile {
            position:absolute;
            clip:rect(0 0 0 0);
        }
        .banner{
            width: 100%;
            height: px2rem(214);
            position: relative;
            margin-bottom: 5px;
            img{
                height: 100%;
            }
            .pattern{
                color: #ffffff;
                padding: px2rem(5) px2rem(10);
                font-weight: bold;
                position: absolute;
                background: #0F0F0F;
                opacity: .5;
            }
            .selectbtn{
                top: 45%;
                right: 10px;
            }
            .bannertype{
                bottom: 10px;
                left: 16px;
            }
        }
    }
</style>
