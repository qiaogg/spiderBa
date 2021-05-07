<template>
    <div id="Main">
        <div class="content">
            <el-input class="content-url" v-model="url" clearable></el-input>
            <!-- <el-button @click="fun">提交</el-button> -->
            <iframe class="iframe" :src="url"></iframe>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            url: ''
        }
    },
    mounted() {
        this.$nextTick( ()=>{
            this.getUrl(1);
            // this.getText(1)
        });
    },

    mounted () {
        window.addEventListener('mouseup',this.handleMouseup)
    },
    methods: {
        getUrl() {
            this.url = this.$route.params.search;
        },
        handleMouseup() {
            var iframe = document.getElementsByClassName("iframe");
            console.log(333)
            console.log(32323)
            console.log(iframe.contentWindow)
        }
    }
}
</script>
<style lang="less" scoped>
#Main {
    .content {
        margin-bottom: 10px;
        .content-url {
            width: 500px;
        }
    }
    .iframe {
        width: 82vw;
        height: 72vh;
        margin-top: 15px;
    }
}
</style>