<template>
  <div>
    <v-container>
      <v-row no-gutters
             style="height: 95vh;">
        <v-col align-self="center">
          <v-card class="mx-auto rounded-lg"
                  max-width="388"
                  outlined>
            <v-card-text>
              <v-row align="center"
                     justify="center">
                <v-col>
                  <div class="mb-1 text-center pt-5 pb-3">
                    <img src="@/assets/img/logo.png"
                         alt=""
                         width="85">
                    <h1 class="headline pt-5 pb-2 grey--text text--darken-4">
                      登录
                    </h1>
                    <span class="mb-1 text-body-1 grey--text text--darken-4 ">
                      使用您的 CrTab KEY
                    </span>
                  </div>
                  <div class="px-3">
                    <v-alert icon="mdi-alert-circle-outline "
                             text
                             type="error"
                             v-if="loginResult.error">
                      <p class="mb-2">校验失败！用户名或密码错误。</p><span class="font-weight-thin">错误代码：-2</span>
                    </v-alert>
                    <v-alert icon="mdi-shield-lock-outline"
                             text
                             type="success"
                             v-if="loginResult.success">
                      校验成功！用户：Player
                    </v-alert>
                    <v-alert icon="mdi-alert-circle-check-outline "
                             text
                             type="warning"
                             v-if="loginResult.warning">
                      由于网页尚未搭建完成，非管理员仅允许登录测试，暂不提供访问。
                    </v-alert>
                  </div>

                  <v-form ref="form"
                          v-model="valid"
                          lazy-validation>
                    <div class="px-3">
                      <v-text-field label="用户名"
                                    prepend-inner-icon="mdi-account"
                                    outlined
                                    v-model="username"></v-text-field>
                      <v-text-field label="密钥"
                                    outlined
                                    v-model="password"
                                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                    :type="showPassword ? 'text' : 'password'"
                                    @click:append="showPassword = !showPassword"
                                    prepend-inner-icon="mdi-key-chain "></v-text-field>
                    </div>

                    <div class="px-3 mt-6">
                      <!-- <v-btn type="submit"
                             class="my-4 white--text"
                             color="blue darken-1"
                             block
                             :disabled="!valid"
                             @click="login">登录</v-btn> -->
                      <!-- <v-divider /> -->
                      <v-row>
                        <v-col cols="auto"
                               class="mr-auto">
                          <v-btn text
                                 color="blue accent-3"
                                 large
                                 onclick="alert('活该')">忘记密钥</v-btn>
                          <v-spacer />
                        </v-col>
                        <v-col cols="auto">
                          <v-btn type="submit"
                                 class="white--text"
                                 color="blue accent-3 px-8"
                                 large
                                 :disabled="!valid"
                                 @click="login">登录</v-btn>
                        </v-col>
                      </v-row>
                      <!-- <div class="text-center">
                        <v-btn text>用户协议</v-btn>
                      </div> -->
                    </div>

                  </v-form>
                </v-col>
              </v-row>
            </v-card-text>

            <v-card-actions>

            </v-card-actions>
          </v-card>
          <v-card class="mx-auto mt-4"
                  elevation="0"
                  max-width="388">
            <v-row>
              <!-- <div class="mx-auto"
                 max-width="388"> -->
              <v-col cols="auto"
                     class="mr-auto px-4">
                <a class="grey--text text--darken-1"
                   color="blue darken-1">帮助</a>
              </v-col>
              <v-col cols="auto"
                     class="px-4">
                <a class="grey--text text--darken-1"
                   color="blue darken-1">用户条款</a>
              </v-col>
              <!-- </div> -->
            </v-row>
          </v-card>

        </v-col>
      </v-row>
    </v-container>

  </div>
</template>

<script>
import { login, verifyToken } from '../api/account'
export default {
  name: 'Login',
  // components: {
  //   HelloWorld
  // }
  data () {
    return {
      alignments: [
        'start',
        'center',
        'end',
      ],
      valid: '',
      username: '',
      password: '',
      showPassword: false,
      loginResult: {
        success: false,
        error: false,
        warning: false
      }
    }
  },
  methods: {
    switchThemes: function () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      console.log(
        `%c [切换主题] 当前主题 %c ${this.$vuetify.theme.dark == false ? "light" : "dark"} %c`,
        'background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
        'background:#41b883 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff',
        'background:transparent'
      )
    },
    login: function () {
      event.preventDefault() || (event.returnValue = false);
      // 写入token并跳转
      // localStorage.setItem('token', 'test1')
      // localStorage.setItem('username', this.username)
      // this.$router.replace('/')

      // 判断密码
      // if (this.username + this.password === "playerpublic") {
      //   this.loginResult.success = true
      //   this.loginResult.warning = true
      //   this.loginResult.error = false
      // } else if (this.username + this.password === "admin") {
      //   console.log(login(this.username, this.password))
      //   // console.log(login(this.username, this.password))
      //   // alert()
      // } else {
      //   this.loginResult.success = false
      //   this.loginResult.warning = false
      //   this.loginResult.error = true
      // }
      let loginCode = login(this.username, this.password)
      switch (loginCode) {
        case 200:
          this.$router.replace('/')
          this.loginResult.success = true
          this.loginResult.warning = false
          this.loginResult.error = false
          break
        case -1:
          this.loginResult.success = false
          this.loginResult.warning = false
          this.loginResult.error = true
          break
        case -2:
          this.loginResult.success = false
          this.loginResult.warning = false
          this.loginResult.error = true
          break
      }
      // console.log(verifyToken("1"))
    }
  }
}
</script>

<style>
</style>