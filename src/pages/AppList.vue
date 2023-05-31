

<script>
    import axios from 'axios';
    import AppCard from '../components/AppCard.vue';
    import {store} from '../store.js';

    export default {
        components:{
            AppCard
        },
        name: 'AppList',
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

                        this.projects = response.data.results;

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
            <div class="col-3" v-for="project in projects">
                <AppCard :project="project"></AppCard>
            </div>
        </div>
    </div>

</template>



<style>

</style>