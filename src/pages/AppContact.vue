<template>
    <div class="container mt-4">
        <div class="row">
            <div class="text-orange text-center">Contattami</div>
            <div class="description text-center">Per info domande e preventivi</div>
            <form @submit.prevent="sendEmail" class="email-form">
                <label for="name" class="description">Nome e Cognome:</label>
                <input type="text" v-model="name" required placeholder="Nome e Cognome..."/>
                <div class="my-4">
                    <label for="email" class="description">Email:</label>
                    <input type="email" v-model="email" required placeholder="Email..."/>
                </div>
                <label for="message" class="description">Messaggio:</label>
                <textarea v-model="message" required placeholder="Messaggio..."></textarea>
                <button type="submit">Invia</button>
            </form>
            <div v-if="statusMessage" :style="{ color: statusColor }" class="mt-2 status">
                {{ statusMessage }}
            </div>
        </div>
    </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
    data() {
        return {
            name: '',
            email: '',
            message: '',
            statusMessage: '',
            statusColor: ''
        };
    },
    methods: {

        sendEmail() {

            const templateParams = {
                from_name: this.name,
                message: this.message,
                reply_to: this.email
            };

            emailjs.send('service_7a0raid', 'template_inmrfar', templateParams, '0HK0BPTDs0Iw9PHf5')
                .then((response) => {
                    this.statusMessage = 'Messaggio inviato con successo!';
                    this.statusColor = 'white';
                    this.name= '';
                    this.email= '';
                    this.message= '';
                }, (error) => {
                    this.statusMessage = 'Errore nell\'invio del messaggio.';
                    this.statusColor = 'red';
                });
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
    font-size: 18px;
}

.email-form {
    color: $black;
    background-color: $green;
    padding: 20px;

}

input,
textarea {
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

.status {

    color: white;
    text-align: center;
    padding: 5px;
    border-radius: 10px;
    color: white;
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 30px;
    box-shadow: 0 8px 16px black;
}
</style>