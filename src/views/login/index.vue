<template>
  <div class="login-container">
    <el-form ref="loginForm" class="login-form">
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
        <span class="show-pwd">
          <svg-icon icon-class="eye" />
        </span>
      </el-form-item>
      <el-form-item>
        <el-button class="loginButton">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>

export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        username: 'admin1',
        password: 'admin'
      },
      passwordType: 'password'
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
}
</style>
