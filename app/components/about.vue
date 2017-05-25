<template>
    <div class="about">
        这是{{page}}页面
    </div>
</template>
<style lang="css">
    .about {
        color: red
    }
</style>
<script>
    export default {
        data () {
            return {
                page: 'about'
            }
        }
    }
</script>