<script>

    import AppHeader from '../src/components/AppHeader.vue';

    export default {
        components:{
            AppHeader,
        },
    }
</script>


<template>
    <AppHeader></AppHeader>
    <router-view></router-view>
</template>


<style lang="scss">
    @use './styles/general.scss';
</style>
