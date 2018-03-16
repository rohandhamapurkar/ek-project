<template>
    <div class="Application">
        <v-toolbar dark color="primary">
            <v-toolbar-title class="white--text">Personality Test</v-toolbar-title>
            <v-spacer></v-spacer>
            <!--v-btn icon>
                <v-icon>search</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>apps</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>refresh</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>more_vert</v-icon>
            </v-btn-->
        </v-toolbar>
        <router-view></router-view>
        <v-footer height="auto" :fixed=true >
            <v-card flat tile class="indigo lighten-1 white--text text-xs-center" style="width:100%">
                <v-card-text>
                    <v-btn v-for="icon in icons" :key="icon" icon class="mx-3 white--text">
                        <v-icon size="24px">{{ icon }}</v-icon>
                    </v-btn>
                </v-card-text>
                <v-card-text class="white--text pt-0">
                    Phasellus feugiat arcu sapien, et ia
                </v-card-text>
                <v-card-text class="white--text">
                    &copy;2018 — <strong>Vuetify</strong>
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
                icons: ['fab fa-facebook', 'fab fa-twitter', 'fab fa-google-plus', 'fab fa-linkedin', 'fab fa-instagram']
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
