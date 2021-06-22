
<template>
<div class="loading" v-if="isLoading">Loading&#8230;</div>

  <div class="position-relative">
    <div class="login-wrapper l-container">
      <div class="col-md-4 offset-md-4">
        <h4 class="text-center mb-4">TODO LIST</h4>
        <h6>Log In</h6>
        <div class="form-group">
          <label class="d-block"> Email</label>
          <input class="form-control" type="text" v-model="user.username" v-on:keyup.enter="login()" />
        </div>
        <div class="form-group">
          <label class="d-block"> Password</label>
          <input class="form-control" type="password" v-model="user.password" v-on:keyup.enter="login()"/>
        </div>
        <div class="text-center">
          <button @click="login()" :disabled="validation()">Login</button>
        </div>
        <div class="text-center">
          Don't have an Account?
          <router-link to="signup">Create Account</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./login.ts"></script>


<style scoped>
.login-wrapper {
  width: 100%;
  height: 100%;
  margin-top: 10%;
}
</style>
