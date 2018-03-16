<template>
    <v-flex xs12 sm6 offset-sm3>
        <v-card class="cardStyle">
            <v-card-title primary-title>
                <div>
                    <h1 class="headline">Q. {{questionData}}</h1>
                </div>
            </v-card-title>
            <div class="optionContainer">
                <v-btn color="orange" @click="emitData(true)">Yes</v-btn>
                <v-btn color="orange" @click="emitData(false)">No</v-btn>
            </div>
        </v-card>
    </v-flex>
</template>


<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {}
        },
        methods: {
            emitData(answer) {
                this.$emit('answer', answer);
            }
        },
        props: [
            'questionData'
        ]
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .cardStyle {
        min-width: 350px;
        max-width: 450px;
        margin-top: 20px;
    }
    .optionContainer {
        min-width: 350px;
        max-width: 450px;
        align-content: center !important;
    }
</style>
