<template>
    <div class="container">
        <div class="row">
            <div class="text-orange text-center">Contattami!</div>
            <div class="description text-center">Per domande o preventivi</div>
            <form @submit.prevent="sendEmail" class="email-form">
                <label for="name" class="description">Nome e Cognome:</label>
                <input type="text" v-model="name" required />
                <div class="my-4">

                    <label for="email" class="description">Email:</label>
                    <input type="email" v-model="email" required />

                </div>
                <label for="message" class="description">Messaggio:</label>
                <textarea v-model="message" required></textarea>

                <button type="submit">Invia</button>
            </form>
        </div>
    </div>


</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            name: '',
            email: '',
            message: ''
        };
    },
    methods: {
        sendEmail() {
            const mailtoLink = `mailto:cruciata9748@gmail.com?subject=${encodeURIComponent(`Messaggio da ${this.name}`)}&body=${encodeURIComponent(this.message)}`;
            window.location.href = mailtoLink;
        }
    }
};
</script>


<style scoped lang="scss">
@use '../style/partials/palette' as *;
@use '../style/general';

.text-orange {
    color: $orange;
    font-size: 35px;
    font-weight: 700;
    
}


.description {
    color: white;
    font-weight: 600;
    font-size: 18;
}

.email-form {
    color: $black;
    background-color: $green;
    padding: 20px;
    // border-radius: 5px;
}

input,
textarea {
    border: 1px solid $orange;
    padding: 10px;
    margin-bottom: 10px;
    width: 100%;
}

button {
    background-color: $orange;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: $blue;

}
</style>