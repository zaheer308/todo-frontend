<template>
  <div class="container-fluid">
    <div class="card">
      <div class="card-header">
        <slot name="header"></slot>
        <div class="row">
          <div class="col-md-4">Welcome! {{ user.name }}</div>
          <div class="col-md-4 offset-md-4 text-right">
            <button @click="logout()">Logout</button>
          </div>
        </div>

        <div class="row mt-2" v-if="checkveify()">
          <div class="col-md-4">Email not Verified!</div>

          <div class="col-md-4 offset-md-2 text-right" >Enter Code , Received through Email</div>
           <div class="col-md-1  text-right">
          <input class="form-control" type="number" v-model="verify.verification" />
        </div>
          <div class="col-md-1 text-right">
            <button @click="verification()">Verify</button>
          </div>
        </div>
      </div>
      <div class="card-body">
        <slot />
      </div>
    </div>
  </div>
</template>

<script src="./page.ts">
</script>
