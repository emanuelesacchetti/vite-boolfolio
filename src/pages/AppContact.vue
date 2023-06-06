<script>
import axios from 'axios';
import {store} from '../store.js';

    export default{
        name: 'AppContact',
        data(){
            return{
                store,
                email: '',
                name: '',
                content: '',
                success: false,
                sending: false,
                errors: {}
            }
        },
        methods: {
            sendForm(){

                this.success = false,
                this.sending = true,
                this.errors = {}

                const form_data = {
                    name: this.name,
                    email: this.email,
                    content: this.content
                }

                axios.post('http://localhost:8000/api/contacts', form_data)
                    .then(response => {
                        console.log(response);
                        if(response.data.success){
                            this.name = '';
                            this.email = '';
                            this.content = '';
                            this.success = true;
                        }else{
                            this.errors = response.data.errors;
                            
                        }

                        this.sending = false;

                    }).catch(error => {
                        this.sending = false;
                    });
                
            }
        }
    }
</script>



<template>
    <div class="container">
        <div class="row">
            <h1 class="text-center" style="color:yellow">Contattaci</h1>

            <div v-if="success" class="alert alert-success" role="alert">
                Grazie di avermi contattato, ti risponderò entro 48 ore lavorative!
            </div>

            <form @submit.prevent="sendForm()">
                <div class="mb-3">
                    <label for="email" class="form-label" style="color:yellow">Email address</label>
                    <input type="email" class="form-control" :class="{'is-invalid': errors.email}" id="email" v-model="email">
                    <div class="invalid-feedback" v-for="error in errors.email">
                        {{ error }}
                    </div>
                </div>
                <div class="mb-3">
                    <label for="name" class="form-label" style="color:yellow">Nome e cognome</label>
                    <input type="text" class="form-control" :class="{'is-invalid': errors.name}" id="name" v-model="name">
                    <div class="invalid-feedback" v-for="error in errors.name">
                        {{ error }}
                    </div>
                </div>
                <div class="mb-3">
                    <label for="content" class="form-label" style="color:yellow">Messaggio</label>
                    <textarea class="form-control" id="content" :class="{'is-invalid': errors.content}" rows="3" v-model="content"></textarea>
                    <div class="invalid-feedback" v-for="error in errors.content">
                        {{ error }}
                    </div>
                </div>

                <button type="submit" class="btn btn-warning" :disabled="sending">
                    {{sending?'Invio in corso...':'Invia messaggio'}}
                </button>
            </form>
        </div>
    </div>
</template>