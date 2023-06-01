

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
                store,
                currentPage: 1,
                lastPage: null
            }
        },
        methods:{
            getProjects(goToPage){
                axios.get(`${this.store.baseUrl}/api/project`,
                {
                    params: {
                        page: goToPage
                    }
                }
                )
                .then(response => {
                    this.projects = response.data.results.data;
                    this.currentPage = response.data.results.current_page;
                    this.lastPage = response.data.results.last_page;
                })
            }
        },
        mounted(){
            this.getProjects(1);
        }   
    }
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-4" v-for="project in projects">
                <AppCard :project="project"></AppCard>
            </div>


        </div>
        <br>
        <div class="row">
            <div class="col d-flex justify-content-center">
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item">
                            <button @click="getProjects(currentPage - 1)" :class="{'disabled' : currentPage == 1, 'page-link': true}">
                                Prima
                            </button>
                        </li>

                        <li class="page-item" v-for="page in lastPage" :class="{'active': page==currentPage}">
                            <button @click="getProjects(page)" :class="{'page-link': true}">
                                {{ page }}
                            </button>
                        </li>

                        <li class="page-item">
                            <button @click="getProjects(currentPage + 1)" :class="{'disabled' : currentPage == lastPage, 'page-link': true}">
                                Dopo
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>

</template>



<style>

</style>