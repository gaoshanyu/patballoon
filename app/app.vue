<template>
    <div id="app">
        <h1>{{title}}</h1>
        <div>
            <router-link to="/about">about</router-link>
            <router-link to="/test">test</router-link>
        </div>
        <div>
            <keep-alive>
            <router-view></router-view>
            </keep-alive>
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