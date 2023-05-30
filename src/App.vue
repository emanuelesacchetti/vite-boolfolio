<script>
    import axios from 'axios';
    import Header from '../src/components/Header.vue';
    import AppMain from '../src/components/AppMain.vue';

    export default {
        components:{
            Header,
            AppMain
        },
    }
</script>


<template>
    <Header></Header>
    <AppMain></AppMain>
</template>


<style scoped>
    @import './styles/general.scss'
</style>
