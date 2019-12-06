<template>
    <section class="container-fluid">
        <router-view
          keep-alive
          transition
          transition-mode="out-in">
        </router-view>
    </section>
</template>

<script>
import axios from 'axios';
export default {
    data () {
        return {
            token: 'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxMTQ5NTMyIiwic3ViIjoiMTE0OTUzMjs3Mi0wMDE0NDkyNi04OzE4NTAxMDcwMDAyIiwiaXNzIjoi5LiK5rW35biC5b-X6Laj5YWs55uK5Z-66YeR5LyaIiwiaWF0IjoxNTU0MTc2OTYzLCJleHAiOjE1NTU0NzI5NjN9.ZKHIL4d93AJjwsumlXwXAQm_XhJtW-dKc2V6Ghj0r2U',
            userNo: '72-00001666-5'
        };
    },
    created () {
        // 本地
        axios.defaults.headers.token = this.token;
        localStorage.setItem('personFirstAccount', this.userNo);
        localStorage.setItem('token', this.toke);
        // 线上
        // let storage = localStorage.getItem('appUserInfo');
        // if (storage) {
        //     storage = JSON.parse(storage);
        //     axios.defaults.headers.token = storage.cookieResp.token;
        //     localStorage.setItem('token', storage.cookieResp.token);
        //     localStorage.setItem('personFirstAccount', storage.userNo);
        // }
    }
};
</script>

<style lang="scss">
    @import './styles/app';
    .container-fluid {
      height: 100%;
    }
</style>
