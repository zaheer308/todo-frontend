<template>
  <div>
    <div class="card-header flex-wrap border-0 pt-6 pb-0">
      <div class="card-title">
        <h3 class="card-label">
          Todo List

          <span class="text-muted pt-2 font-size-sm d-block"
            >{{record}}</span
          >
        </h3>
      </div>
    </div>
    <div class="card-body">
      <div class="col-md-3">
        <div class="form-group">
          <label>Title</label>
          <input
            type="text"
            class="form-control form-control-sm"
            v-model="item.title"
          />
        </div>
      </div>
      <div class="col-md-3">
        <div class="form-group">
          <label>Description</label>
          <input
            type="text"
            class="form-control form-control-sm"
            v-model="item.description"
          />
        </div>
      </div>
    </div>
    <div class="card-footer">
      <button type="submit" class="btn btn-primary mr-2" @click="$emit('save')" :disabled="validation()">
        Submit
      </button>
      <button type="reset" class="btn btn-secondary" @click="$emit('cancel')">
        Cancel
      </button>
    </div>
  </div>
</template>

<script src="./index.ts"></script>
