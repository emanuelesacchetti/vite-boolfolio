<script>
    import axios from 'axios';
    import { store } from '../store.js';

    export default{
        name: 'SingleProject',
        data(){
            return{
                store,
                oneProject: [],
               
            }
        },
        
        mounted() {
            const slug = this.$route.params.slug;
            
            console.log(slug);

            axios.get(`http://localhost:8000/api/project/${slug}`)
            .then(response => {
                this.oneProject = response.data.project;
                
                console.log(this.oneProject);
            });

        }
    }
</script>

<template>

    <div class="container">
        <div class="row">
            <div class="col-6">
                <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
                    <div class="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                        <div class="my-3 py-3">
                            <h2 class="display-5"></h2>
                        </div>
                        <img v-if="this.oneProject['cover_img']" :src="`${this.store.baseUrl}/storage/${this.oneProject['cover_img']}`" class="card-img-top card_img">
                        <div class="bg-body-tertiary shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"></div>
                    </div>
                </div>
            </div>
            <div class="col-6">
                    <div class="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden text-light">
                        <div class="my-3 p-3">
                            <h1 class="display-1">{{this.oneProject['title']}}</h1>
                            <p class="lead">{{this.oneProject['content']}}</p>
                            <br>
                            
                            <div v-if="this.oneProject['technologies']">
                                tecnologie usate:
                                <h6 v-for="tech in this.oneProject['technologies']">
                                    {{ tech.name }}
                                </h6>
                            </div>

                            <div v-if="this.oneProject['type']">
                                tipologia:
                                <h6 >
                                    {{ this.oneProject['type']['name'] }}
                                </h6>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>

</template>