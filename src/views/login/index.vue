<template>
  <div class="login-container">
    <el-form ref="loginForm" :rules="loginRules" :model="loginForm" class="login-form">
      <h3 class="title">欢迎来到神奇的世界</h3>
      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input v-model="loginForm.username" name="username" type="text" auto-complete="on" placeholder="username" />
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input v-model="loginForm.password" :type="passwordType" name="password" placeholder="password" />
        <span class="show-pwd" @click="showPassword()">
          <svg-icon icon-class="eye" />
        </span>
      </el-form-item>
      <el-form-item>
        <el-button :disabled="loading" :loading="loading" type="primary" class="login-button" @click="handleLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { isValidUserName, isValidPassword } from '@/utils/validate'
import { Message } from 'element-ui'

export default {
  name: 'Login',
  data() {
    const usernameValidator = (rule, value, callback) => {
      if (!isValidUserName(value)) {
        callback(new Error('请输入正确的用户名'))
      } else {
        callback()
      }
    }

    const passwordValidator = (rule, value, callback) => {
      if (!isValidPassword(value)) {
        callback(new Error('请输入正确的密码'))
      } else {
        callback()
      }
    }

    return {
      loginForm: {
        username: 'admin',
        password: 'password'
      },
      loginRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { validator: usernameValidator, trigger: 'blur' }
        ],
        password: [
          { required: true, trigger: 'blur' },
          { validator: passwordValidator, trigger: 'blur' }
        ]
      },
      passwordType: 'password',
      loading: false
    }
  },
  methods: {
    showPassword() {
      if (this.passwordType === 'password') {
        this.passwordType = 'text'
      } else {
        this.passwordType = 'password'
      }
    },
    handleLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('Login', this.loginForm).then(() => {
            Message({
              message: '登录成功',
              type: 'success',
              duration: 5 * 1000
            })
            this.loading = false
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('login error')
          Message({
            message: '请输入正确的用户名和密码',
            type: 'warning',
            duration: 5 * 1000
          })
          return false
        }
      })
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
$bg: #2d3a4b;
$light_gray: #eee;
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: #fff !important;
      }
    }
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>
<style rel="stylesheet/scss" lang="scss" scoped>
$bg: #1f1817;
$dark_gray: #889aa4;
$light_gray: #eee;
.login-container {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: $bg;
  .login-form {
    position: relative;
    left: 0;
    right: 0;
    width: 520px;
    max-width: 100%;
    margin: 120px auto;
    padding: 35px 35px 15px 35px;
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }
  .title {
    font-size: 26px;
    font-weight: 400;
    color: $light_gray;
    text-align: center;
    font-weight: bold;
    margin: 0px auto 40px auto;
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
  .login-button {
    width: 100%;
  }
}
</style>
