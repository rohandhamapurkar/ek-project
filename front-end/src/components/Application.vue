<template>
    <div class="Application">
        <!--v-toolbar dark color="primary">
            <v-toolbar-title class="white--text">Personality Test</v-toolbar-title>
        </v-toolbar-->
        <router-view></router-view>
        <v-footer height="auto" :fixed=true>
            <v-card flat tile class="black white--text text-xs-center" style="width:100%">
                <v-card-text class="white--text">
                    &copy;2018 — <strong>Vuetify</strong><br>
                    <strong><a style="text-decoration:none;" href="http://youtube.com">Back Home</a></strong>
                </v-card-text>
            </v-card>
        </v-footer>
    </div>
</template>

<script>
    import router from '../router'
    export default {
        name: 'Application',
        data() {
            return {
            }
        },
        created() {
            router.replace('/questions');
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
