<script>

    import AppHeader from '../src/components/AppHeader.vue';
    import AppMain from '../src/components/AppMain.vue';

    export default {
        components:{
            AppHeader,
            AppMain
        },
    }
</script>


<template>
    <AppHeader></AppHeader>
    <AppMain></AppMain>
</template>


<style lang="scss">
    @use './styles/general.scss';
</style>
