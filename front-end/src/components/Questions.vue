<template>
    <v-layout>
        <question @answer="updateAnswer" :questionData="question"></question>
    </v-layout>
</template>


<script>
    import Question from '@/components/Question'
    export default {
        name: 'Questions',
        data() {
            return {
                questions: ['1','2','3'],
                question: '',
                quesIndex: 0
            }
        },
        created() {
            this.question = this.questions[0];
        },
        methods: {
            updateQuestion() {
                this.quesIndex++;
                this.question = this.questions[this.quesIndex];
            },
            updateAnswer(data) {
                console.log(data);
                this.updateQuestion();
            }
        },
        components: {
            'question': Question
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
