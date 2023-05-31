

<script>
    import axios from 'axios';
    import AppCard from '../components/AppCard.vue';
    import {store} from '../store.js';

    export default {
        components:{
            AppCard
        },
        name: 'AppMain',
        data(){
            return{
                projects: [],
                store
            }
        },
        methods:{
            getProjects(){
                axios.get(`${this.store.baseUrl}/api/project`)
                    .then(response => {
                        console.log(response)
                        this.projects = response.data.results;
                        console.log(response.data.results)
                    })
            }
        },
        mounted(){
            this.getProjects();
        }   
    }
</script>

<template>
    <div class="container">
        <div class="row">
            <AppCard :projects="this.projects"></AppCard>
        </div>
    </div>

</template>



<style>

</style>