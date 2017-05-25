<template>
    <div id="app">
        <h1>{{title}}</h1>
        <div>
            <router-link to="/about">about</router-link>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                title: 'Main page'
            }
        }
    }
</script>