<template>
    <div class="container">

    <header class="d-flex justify-content-center py-3">

      <ul class="nav nav-pills">
        <li class="nav-item" v-for="item in menuItems">
            <router-link :to="{name: item.routeName}" class="nav-link">{{item.label}}</router-link>
        </li>
      </ul>
    </header>
  </div>
</template>


<script>
    export default {
        name: 'AppHeader',
        data() {
            return {
                menuItems: [
                    {
                        label: 'Home',
                        routeName: 'home'
                    },
                    {
                        label: 'Projects',
                        routeName: 'projects'
                    },
                    {
                        label: 'Contact Us',
                        routeName: 'contact'
                    },
                ]
            }
        }
    }
</script>


<style>

</style>