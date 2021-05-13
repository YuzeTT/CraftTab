<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <Navbar /> -->
    <div>
      <!-- <v-card elevation="0" 
            max-width="574"
            class="mx-auto mt-2" 
            color="homeCardColor">
        <v-card-title>Running...</v-card-title>
      </v-card> -->
      <v-card elevation="0" 
              max-width="420px"
              class="mx-auto mt-5 pa-1" 
              style="border-radius: 30px;width:calc(100% - 3em)"
              color="homeCardColor">
        <!-- <v-card-title>qwq</v-card-title> -->
        <v-card-text>
<!-- :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'" -->
          <div
            class="d-flex justify-space-between mb-3"
            flat
            tile
          >
            <div class="white--text text-subtitle-1">
              Encryption / Decryption
            </div>
            <div class="">
              <v-btn icon small>
                <v-icon dense color="rgb(195, 197, 203)">mdi-cog-outline</v-icon>
              </v-btn>
            </div>
          </div>

          <div>
            <v-card 
              outlined 
              class="pa-4" 
              style="background:#1E2026;
                      border:1px solid rgb(44, 47, 54);
                      border-radius: 20px;">
              <div>
                <p class="mb-2">From</p>
                <input type="text" class="homeInput" placeholder="Text">
              </div>
            </v-card>
            <div class="text-center py-4">
              <v-icon style="font-size:16px;color:rgb(195, 197, 203)">mdi-arrow-down</v-icon>
            </div>
            <v-card 
              outlined 
              class="pa-4" 
              style="background:#1E2026;
                      border:1px solid rgb(44, 47, 54);
                      border-radius: 20px;">
              <div>
                <p class="mb-2">To</p>
                <input type="text" class="homeInput" placeholder="Text">
              </div>
            </v-card>
            <v-btn
              class="mt-8 homeButtonTextColor--text"
              block
              height="64px"
              elevation="0"
              style="border-radius: 20px;text-transform: none;font-weight: 400;"
              :loading="inHomeButtonLoding"
              :disabled="inHomeButtonLoding"
              @click="inHomeButtonLoding = true"
              color="homeButtonColor"
            >Swap Now</v-btn>
          </div>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<style scoped>
/* body {
  color: unset;
  background-color: transparent;
  background-position: 0px -30vh;
  background-repeat: no-repeat;
  background-image: radial-gradient(100% 50% at 50% 50%, rgba(33, 114, 229, 0.3) 0%, rgba(33, 36, 41, 0) 100%) !important;
} */
.homeInput {
  outline: none;
  color: #fff;
  font-size: 24px;
  max-width: 100%;
  font-weight: 500;
}
</style>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Home',
  // components: {
  //   Navbar
  // },
  data () {
    return {
      inHomeButtonLoding: false
    }
  },
  methods: {

  }
}
</script>
