

<script>
    import axios from 'axios';
    import AppCard from '../components/AppCard.vue';

    export default {
        components:{
            AppCard
        },
        name: 'AppMain',
        data(){
            return{
                projects: []
            }
        },
        methods:{
            getProjects(){
                axios.get('http://localhost:8000/api/project')
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
            <div class="col-3" v-for="project in this.projects">
                <div class="card" style="width: 18rem;">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{ project.title }}</h5>
                        <p class="card-text">{{ project.slug}}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>



<style>

</style>