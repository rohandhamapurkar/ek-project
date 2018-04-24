<template>
    <div class="Questions">
        <v-layout v-if="showQuestionCard">
            <question @answer="updateAnswer" :questionData="question"></question>
            <!-- h1 v-else>The test is now complete click here to get your pin to talk to our DR. Bot below are your scores and personality result have a nice day</h1-->
        </v-layout>
        <v-layout v-else>
            <v-flex xs12 sm6 offset-sm3>
                <v-card class="testComplete">
                    <v-card-title primary-title>
                        <h1 class="headline">{{pin}}</h1>
                    </v-card-title>
                    <div class="optionContainer">
                        <v-btn @click.native="show = !show">Show Result</v-btn>
                        <v-btn v-if="lie" href="http://m.me/Beproject-1792068264420337">Talk to the bot</v-btn>
                        <v-btn v-else @click="restartTest">Retake Test</v-btn>
                    </div>
                    <v-card-text v-show="show">
                        <h1>{{result}}</h1>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>


<script>
    import Question from '@/components/Question'
    export default {
        name: 'Questions',
        data() {
            return {
                show: false,
                // questions: ['1.Do you often long for excitement?',
                //     '2.Do you often need understanding friends to cheer you up?',
                //     '3.Are you usually carefree?',
                //     '4.Do you find it very hard to take no for an answer?',
                //     '5.Do you stop and think things over before doing anything?',
                //     '6.If you say you will do something do you always keep your promise, no matter how inconvenient it might be to do so?',
                //     '7.Do your moods go up and down?',
                //     '8.Do you generally do and say things quickly without stopping to think?',
                //     '9.Do you ever feel just miserable for no good reason?',
                //     '10.Would you do almost anything for a dare?',
                //     '11.Do you suddenly feel shy when you want to talk to an attractive stranger?',
                //     '12.Once in a while do you lose your temper and get angry?',
                //     '13.Do you often do things on the spur of the moment?',
                //     '14.Do you often worry about things you should have done or said?',
                //     '15.Generally do you prefer reading to meeting people?',
                //     '16.Are your feelings rather easily hurt?',
                //     '17.Do you like going out a lot?',
                //     '18.Do you occasionally have thoughts and ideas that you would not like other people to know about?',
                //     '19.Are you sometimes bubbling over with energy and sometimes very sluggish?',
                //     '20.Do you prefer to have few but special friends?',
                //     '21.Do you daydream a lot?',
                //     '22.When people shout at you do you shout back?',
                //     '23.Are you often troubled about feelings of guilt?',
                //     '24.Are all your habits good and desirable ones?',
                //     '25.Can you usually let yourself go and enjoy yourself a lot at a lively party?',
                //     '26.Would you call yourself tense or highly strung?',
                //     '27.Do other people think of you as being very lively?',
                //     '28.After you have done something important, do you come away feeling you could have done better?',
                //     '29.Are you mostly quiet when you are with other people?',
                //     '30.Do you sometimes gossip?',
                //     '31.Do ideas run through your head so that you cant sleep?',
                //     '32.If there is something you want to know about, would you rather look it up in a book than talk to someone about it?',
                //     '33.Do you get palpitations or thumping in your heart?',
                //     '34.Do you like the kind of work that you need to pay close attention to?',
                //     '35.Do you get attacks of shaking or trembling?',
                //     '36.Would you always declare everything at customs, even if you knewyou could never be found out?',
                //     '37.Do you hate being with a crowd who play jokes on one another?',
                //     '38.Are you an irritable person?',
                //     '39.Do you like doing things in which you have to act quickly?',
                //     '40.Do you worry about awful things that might happen?',
                //     '41.Are you slow and unhurried in the way you move?',
                //     '42.Have you ever been late for an appointment or work?',
                //     '43.Do you have many nightmares?',
                //     '44.Do you like talking to people so much that you never miss a chance of talking to a stranger?',
                //     '45.Are you troubled by aches and pains?',
                //     '46.Would you be very unhappy if you could not see lots of people most of the time?',
                //     '47.Would you call yourself a nervous person?',
                //     '48.Of all the people you know, are there some whom you definitely do not like?',
                //     '49.Would you say that you were fairly self-confident?',
                //     '50.Are you easily hurt when people find fault with you or your work?',
                //     '51.Do you find it hard to really enjoy yourself at a lively party?',
                //     '52.Are you troubled by feelings of inferiority?',
                //     '53.Can you easily get some life into a dull party?',
                //     '54.Do you sometimes talk about things you know nothing about?',
                //     '55.Do you worry about your health?',
                //     '56.Do you like playing pranks on others?',
                //     '57.Do you suffer from sleeplessness?'
                // ],
                questions: [{
                        question: 'Do you often long for excitement?',
                        index: '0'
                    },
                    // {
                    //     question: 'Do you often need understanding friends to cheer you up?',
                    //     index: '1'
                    // },
                    {
                        question: 'Are you usually carefree?',
                        index: '2'
                    },
                    // {
                    //     question: 'Do you find it very hard to take no for an answer?',
                    //     index: '3'
                    // },
                    {
                        question: 'Do you stop and think things over before doing anything?',
                        index: '4'
                    },
                    {
                        question: 'If you say you will do something do you always keep your promise, no matter how inconvenient it might be to do so?',
                        index: '5'
                    },
                    // {
                    //     question: 'Do your moods go up and down?',
                    //     index: '6'
                    // },
                    {
                        question: 'Do you generally do and say things quickly without stopping to think?',
                        index: '7'
                    },
                    // {
                    //     question: 'Do you ever feel just miserable for no good reason?',
                    //     index: '8'
                    // },
                    {
                        question: 'Would you do almost anything for a dare?',
                        index: '9'
                    },
                    // {
                    //     question: 'Do you suddenly feel shy when you want to talk to an attractive stranger?',
                    //     index: '10'
                    // },
                    {
                        question: 'Once in a while do you lose your temper and get angry?',
                        index: '11'
                    },
                    {
                        question: 'Do you often do things on the spur of the moment?',
                        index: '12'
                    },
                    // {
                    //     question: 'Do you often worry about things you should have done or said?',
                    //     index: '13'
                    // },
                    {
                        question: 'Generally do you prefer reading to meeting people?',
                        index: '14'
                    },
                    // {
                    //     question: 'Are your feelings rather easily hurt?',
                    //     index: '15'
                    // },
                    {
                        question: 'Do you like going out a lot?',
                        index: '16'
                    },
                    {
                        question: 'Do you occasionally have thoughts and ideas that you would not like other people to know about?',
                        index: '17'
                    },
                    // {
                    //     question: 'Are you sometimes bubbling over with energy and sometimes very sluggish?',
                    //     index: '18'
                    // },
                    {
                        question: 'Do you prefer to have few but special friends?',
                        index: '19'
                    },
                    // {
                    //     question: 'Do you daydream a lot?',
                    //     index: '20'
                    // },
                    {
                        question: 'When people shout at you do you shout back?',
                        index: '21'
                    },
                    // {
                    //     question: 'Are you often troubled about feelings of guilt?',
                    //     index: '22'
                    // },
                    {
                        question: 'Are all your habits good and desirable ones?',
                        index: '23'
                    },
                    {
                        question: 'Can you usually let yourself go and enjoy yourself a lot at a lively party?',
                        index: '24'
                    },
                    // {
                    //     question: 'Would you call yourself tense or highly strung?',
                    //     index: '25'
                    // },
                    {
                        question: 'Do other people think of you as being very lively?',
                        index: '26'
                    },
                    // {
                    //     question: 'After you have done something important, do you come away feeling you could have done better?',
                    //     index: '27'
                    // },
                    {
                        question: 'Are you mostly quiet when you are with other people?',
                        index: '28'
                    },
                    {
                        question: 'Do you sometimes gossip?',
                        index: '29'
                    },
                    // {
                    //     question: 'Do ideas run through your head so that you cant sleep?',
                    //     index: '30'
                    // },
                    {
                        question: 'If there is something you want to know about, would you rather look it up in a book than talk to someone about it?',
                        index: '31'
                    },
                    // {
                    //     question: 'Do you get palpitations or thumping in your heart?',
                    //     index: '32'
                    // },
                    {
                        question: 'Do you like the kind of work that you need to pay close attention to?',
                        index: '33'
                    },
                    // {
                    //     question: 'Do you get attacks of shaking or trembling?',
                    //     index: '34'
                    // },
                    {
                        question: 'Would you always declare everything at customs, even if you knewyou could never be found out?',
                        index: '35'
                    },
                    {
                        question: 'Do you hate being with a crowd who play jokes on one another?',
                        index: '36'
                    },
                    // {
                    //     question: 'Are you an irritable person?',
                    //     index: '37'
                    // },
                    {
                        question: 'Do you like doing things in which you have to act quickly?',
                        index: '38'
                    },
                    // {
                    //     question: 'Do you worry about awful things that might happen?',
                    //     index: '39'
                    // },
                    {
                        question: 'Are you slow and unhurried in the way you move?',
                        index: '40'
                    },
                    {
                        question: 'Have you ever been late for an appointment or work?',
                        index: '41'
                    },
                    // {
                    //     question: 'Do you have many nightmares?',
                    //     index: '42'
                    // },
                    {
                        question: 'Do you like talking to people so much that you never miss a chance of talking to a stranger?',
                        index: '43'
                    },
                    // {
                    //     question: 'Are you troubled by aches and pains?',
                        // index: '44'
                    // },
                    {
                        question: 'Would you be very unhappy if you could not see lots of people most of the time?',
                        index: '45'
                    },
                    // {
                    //     question: 'Would you call yourself a nervous person?',
                    //     index: '46'
                    // },
                    {
                        question: 'Of all the people you know, are there some whom you definitely do not like?',
                        index: '47'
                    },
                    {
                        question: 'Would you say that you were fairly self-confident?',
                        index: '48'
                    },
                    // {
                    //     question: 'Are you easily hurt when people find fault with you or your work?',
                    //     index: '49'
                    // },
                    {
                        question: 'Do you find it hard to really enjoy yourself at a lively party?',
                        index: '50'
                    },
                    // {
                    //     question: 'Are you troubled by feelings of inferiority?',
                    //     index: '51'
                    // },
                    {
                        question: 'Can you easily get some life into a dull party?',
                        index: '52'
                    },
                    {
                        question: 'Do you sometimes talk about things you know nothing about?',
                        index: '53'
                    },
                    // {
                    //     question: 'Do you worry about your health?',
                    //     index: '54'
                    // },
                    {
                        question: 'Do you like playing pranks on others?',
                        index: '55'
                    },
                    // {
                    //     question: 'Do you suffer from sleeplessness?',
                    //     index: '56'
                    // }
                ],
                question: '',
                quesIndex: 0,
                selectedAnswers: [],
                evaluationIndex1: {
                    '0': true,
                    '2': true,
                    '7': true,
                    '9': true,
                    '12': true,
                    '16': true,
                    '21': true,
                    '24': true,
                    '26': true,
                    '38': true,
                    '43': true,
                    '45': true,
                    '48': true,
                    '52': true,
                    '55': true,
                    '4': false,
                    '14': false,
                    '19': false,
                    '28': false,
                    '31': false,
                    '33': false,
                    '36': false,
                    '40': false,
                    '50': false,
                }, // extro intro
                evaluationIndex2: {
                    '1': true,
                    '3': true,
                    '6': true,
                    '8': true,
                    '10': true,
                    '13': true,
                    '15': true,
                    '18': true,
                    '20': true,
                    '22': true,
                    '25': true,
                    '27': true,
                    '30': true,
                    '32': true,
                    '34': true,
                    '37': true,
                    '39': true,
                    '42': true,
                    '44': true,
                    '46': true,
                    '49': true,
                    '51': true,
                    '54': true,
                    '56': true
                }, // emotional stability
                evaluationIndex3: {
                    '5': true,
                    '23': true,
                    '35': true,
                    '11': false,
                    '17': false,
                    '29': false,
                    '41': false,
                    '47': false,
                    '53': false,
                }, // lie detector
                counter1: 0,
                counter2: 0,
                counter3: 0,
                showQuestionCard: true,
                pin: '',
                result: '',
                lie: true
            }
        },
        created() {
            this.questions = this.shuffleArray(Object.assign([], this.questions));
            this.question = this.questions[0];
        },
        methods: {
            updateAnswer(data) {
                this.quesIndex++;
                this.selectedAnswers.push(data);
                if (this.evaluationIndex1.hasOwnProperty(data.index)) {
                    if (this.evaluationIndex1[data.index] === data.answer) {
                        this.counter1++;
                    }
                } else if (this.evaluationIndex2.hasOwnProperty(data.index)) {
                    if (this.evaluationIndex2[data.index] === data.answer) {
                        this.counter2++;
                    }
                } else {
                    if (this.evaluationIndex3[data.index] === data.answer) {
                        this.counter3++;
                    }
                }
                this.question = this.questions[this.quesIndex];
                if (this.quesIndex == this.questions.length) {
                    if (this.counter3 < 4) {
                        if (this.counter1 >= 18) {
                            this.result = 'Your personality is of a Strong Extrovert'
                            this.pin = "The personality test is now complete your session pin is: "+ (Math.floor(Math.random() * 498)+ 501);
                        } else if (this.counter1 >= 12 && this.counter1 < 18) {
                            this.result = 'Your personality is of an Extrovert'
                            this.pin = "The personality test is now complete your session pin is: "+ (Math.floor(Math.random() * 498)+ 501);
                        } else if (this.counter1 >= 7 && this.counter1 < 12) {
                            this.result = 'Your personality is of an Introvert'
                            this.pin = "The personality test is now complete your session pin is: "+ Math.floor(Math.random() * 500);
                        } else {
                            this.result = 'Your personality is of a Strong Introvert'
                            this.pin = "The personality test is now complete your session pin is: "+ Math.floor(Math.random() * 500);
                        }
                    } else {
                        this.result = "You were not true with the test";
                        this.pin = "The personality test is now complete you can check your result";
                        this.lie = false;
                    }
                    this.showQuestionCard = false;
                }
            },
            /**
             * Randomize array element order in-place.
             * Using Durstenfeld shuffle algorithm.
             */
            shuffleArray(array) {
                for (var i = array.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
                return array
            },
            restartTest() {
                this.question =  '';
                this.selectedAnswers = [];
                this.quesIndex= 0;
                this.counter1 = 0;
                this.counter2 = 0;
                this.counter3 = 0;
                this.result = "";
                this.pin = "";
                this.lie = true;
                this.showQuestionCard = true;
                this.questions = this.shuffleArray(Object.assign([], this.questions));
                this.question = this.questions[0];
            }
        },
        components: {
            'question': Question
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .testComplete {
        min-width: 350px;
        margin-top: 27%;
        background-color: #aeeaea;
    }
</style>