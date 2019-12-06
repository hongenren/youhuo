<template>
    <div class="activitybanner">
        <mt-header title="活动详情">
			<router-link to="" slot="left">
				<mt-button icon="back" @click="$router.go(-1)"></mt-button>
			</router-link>
		</mt-header>
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
    .activitybanner {
        padding-bottom: px2rem(100);
        font-size: 14px;
    }
</style>
