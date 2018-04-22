<template>
    <v-flex xs12 sm6 offset-sm3>
        <v-card class="cardStyle">
            <v-card-title primary-title>
                <!--h1 class="headline white--text">Q. {{questionData.question}}</h1-->
                <h1 class="headline">Q. {{questionData.question}}</h1>
            </v-card-title>
            <div class="optionContainer">
                <v-btn class="teal lighten-2" @click="emitData(true)">Yes</v-btn>
                <v-btn class="teal lighten-2" @click="emitData(false)">No</v-btn>
            </div>
        </v-card>
    </v-flex>
</template>

<script>
    export default {
        name: 'Question',
        data() {
            return {}
        },
        methods: {
            emitData(answer) {
                let temp = Object.assign({}, this.questionData)
                temp.answer = answer
                this.$emit('answer', temp);
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
        /* min-height: 500px; */
        /* max-width: 450px; */
        margin-top: 35%;
        background-color: #fafafa;
    }
    /* .innerCardStyle {
        min-width: 350px;
        max-width: 450px;
        margin-top: 20px;
        opacity:0.7;
        box-shadow:aqua !important;
        
    } */

    .bgColor {
        background-color: #d9b310 !important;
    }

    .optionContainer {
        min-width: 350px;
        /* max-height: 500px; */
        align-content: center !important;
    }
</style>
