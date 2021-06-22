<template>

<!-- Welcome Screen Component -->
  <welcome-view v-if="iswelcome"></welcome-view>   

  <div v-else>

    <!-- CSS loader -->

    <div class="loading" v-if="isLoading">Loading&#8230;</div>


    <!-- page-view : Component Containing user info and logout nav  -->

    <page-view>
      <div class="row" v-if="!isEditing">
        <div class="col-md-6 offset-md-3 text-center">
          <h2>Todo List</h2>
        </div>
      </div>

      <div class="col-md-6 offset-md-3 text-right">
        <a v-if="!isEditing" title="Add" class="btn btn-primary" @click="new">
          <i class="fa fa-plus"></i>
        </a>
      </div>

      <div class="col-md-6 offset-md-3 mt-4" v-if="!isEditing">
        

    <!-- grid : Component for search and pagination   -->

        <grid :dataE="list" :columns="columns">
          <template v-slot:check="slotProps">
            <span style="overflow: visible; position: relative; width: 125px">
              <a class="ml-4" title="Edit details" @click="edit(slotProps.row)">
                <i class="fa fa-edit text-primary"></i>
              </a>
              <a class="ml-3" title="Delete" @click="remove(slotProps.row)">
                <i class="fa fa-trash text-danger"></i>
              </a>
            </span>
          </template>
        </grid>
      </div>
                               <!-- Add and edit item component -->
      <add-edit
        v-else
        :item="item"
        :isNew="isNew"
        @save="save"
        @cancel="cancel"
      ></add-edit>
    </page-view>
  </div>
</template>

<script src="./Home.ts">
</script>