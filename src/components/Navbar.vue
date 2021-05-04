<template>
  <div class="home">
    <!-- <v-system-bar app
                  color="primary"></v-system-bar> -->
    <!-- <v-card class="overflow-hidden"> -->
    <v-app-bar absolute
               elevate-on-scroll
               color="navbarColor"
               scroll-target="#scrolling-techniques-7">
      <v-app-bar-nav-icon v-if="!inBanMenuRoutes"
                          @click.stop="drawer = !drawer" />

      <v-toolbar-title>CraftTab</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon
             @click="switchThemes()">
        <v-icon>mdi-brightness-6</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <v-sheet id="scrolling-techniques-7"
             class="overflow-y-auto"
             max-height="600">
      <v-container style="height: 60px;">
      </v-container>
    </v-sheet>
    <!-- </v-card> -->

    <v-navigation-drawer v-model="drawer"
                         absolute
                         left
                         temporary>
      <v-list nav
              dense>
        <v-list-item-group v-model="currentPage">
          <v-list-item v-for="(item, i) in $ctConfig.navItems"
                       :key="i"
                       @click.stop="$router.replace(item.route)"
                       :disabled="i == currentPage">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Navbar',
  // components: {
  //   HelloWorld
  // }
  data () {
    return {
      drawer: false,
      group: '',
      currentPage: 0,
      inBanMenuRoutes: true,
    }
  },
  methods: {
    switchThemes: function () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      // console.log(
      //   `%c [切换主题] 当前主题 %c ${this.$vuetify.theme.dark == false ? "light" : "dark"} %c`,
      //   'background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
      //   'background:#41b883 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff',
      //   'background:transparent'
      // )
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler: function () {
        // this.isDarkTheme = matchMedia('(prefers-color-scheme: dark)').matches
        // matchMedia('(prefers-color-scheme: dark)').addEventListener(
        //   'change',
        //   (event) => {
        //     this.isDarkTheme = event.matches
        //   }
        // )
        // this.inAllowBackRoutes = (() => {
        //   const currentRoute = this.$router.currentRoute.name
        //   var i
        //   for (i of this.$feConfig.allowBackRoutes) {
        //     if (currentRoute == i) {
        //       return true
        //     }
        //   }
        //   return false
        // })()
        this.inBanMenuRoutes = (() => {
          const currentRoute = this.$route.name
          var i
          for (i of this.$ctConfig.banMenuRoutes) {
            if (currentRoute == i) {
              return true
            }
          }
          return false
        })()
        // this.username = localStorage.getItem('username')
      },
    },
  },
}
</script>
