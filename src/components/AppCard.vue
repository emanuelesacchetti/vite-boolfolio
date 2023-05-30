
<script>
        export default {
        name: 'AppCard',
        props: {
            projects: Array
        }
    }
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-3" v-for="project in projects">
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