
<script>
        import {store} from '../store.js';


        export default {
        name: 'AppCard',
        data(){
            return{
                store
            }
            
            
        },
        props: ['project'],
    }
</script>

<template>

        <div class="card" style="width: 18rem;">
            <img v-if="project.cover_img" :src="`${this.store.baseUrl}/storage/${project.cover_img}`" class="card-img-top card_img">
            <div class="card-body">
                <h5 class="card-title">{{ project.title }}</h5>
                <p class="card-text">{{ project.slug}}</p>
                <router-link :to="{name: 'single-project', params: {slug: project.slug}}" class="btn btn-primary">
                    Vedi post completo
                </router-link>
            </div>
        </div>


</template>




<style>

</style>