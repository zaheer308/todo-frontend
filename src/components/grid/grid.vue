<template>
  <div class="row">
    <div class="col-md-3">
      <div class="form-group">
        <div class="kt-input-icon kt-input-icon--left">
          <input
            type="text"
            id="grid_search"
            ref="grid_search"
            class="form-control form-control-sm"
            v-model="searchQuery"
            placeholder="Search..."
          />
          <span class="kt-input-icon__icon kt-input-icon__icon--left">
            <span><i class="la la-search"></i></span>
          </span>
        </div>
      </div>
    </div>
    <div class="col-md-6 offset-md-3 text-right">
      <slot name="action-area"></slot>
    </div>

    <template v-if="dataE">
      <template v-if="dataE.length > 0">
        <div class="col-md-12">
          <div class="table-responsive">
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Sr No.</th>
                  <th v-for="key in columns" :key="key.id" :width="key.width">
                    <template
                      v-if="typeof $slots[key.key + '-header'] !== 'undefined'"
                      class="align-middle"
                    >
                      <slot :name="key.key + '-header'" :field="key.key"></slot>
                    </template>
                    <template v-else class="align-middle">
                      <template v-if="key.sort" class="align-middle">
                        {{ key.caption }}
                        <span
                          class="fa fa-sort"
                          @click="sortBy(key.key)"
                        ></span>
                      </template>
                      <template v-else class="align-middle">
                        {{ key.caption }}
                      </template>
                    </template>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in dataPerPage" :key="item.id">
                  <td class="align-middle">{{ serialNumber(index) }}</td>
                  <template v-for="field in columns" :key="field.id">
                    <td v-if="item[field.key] == ''" class="align-middle">
                      <slot name="check" :field="field.key" :row="item"></slot>
                    </td>
                    <td v-else class="align-middle">
                      <span v-html="item[field.key]"></span>
                    </td>
                  </template>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col-md-4 mt-2">
          <div v-if="dataE.length > rowsPerPage">
      

            <a class="mr-4" title="Previous" @click.prevent="movePages(-1)">
              <i class="fa fa-arrow-left text-primary"></i>
            </a>

            <a href="#">
              {{ startRow / rowsPerPage + 1 }} /
              {{ Math.ceil(filteredData.length / rowsPerPage) }}
            </a>

 

            <a class="ml-4" title="Next" @click.prevent="movePages(1)">
              <i class="fa fa-arrow-right text-primary"></i>
            </a>
          </div>
        </div>
        <div class="col-md-4 text-center mt-2">
          Showing
          <strong>{{ startRow + 1 }} to {{ startRow + rowsPerPage }} </strong>
          of {{ Math.ceil(dataE.length)
          }}{{ Math.ceil(dataE.length) == 1 ? " entry" : " entries" }}
        </div>
        <div class="col-md-2 offset-md-2 mt-2">
          <select class="form-control form-control-sm" v-model="rowsPerPage">
            <option :value="item" v-for="item in pageSizeMenu" :key="item.id">
              {{ item }}
            </option>
          </select>
        </div>
      </template>
      <template v-else>
        <div class="row">
          <div class="col-md-12 text-center">There is no record.</div>
        </div>
      </template>
    </template>
  </div>
</template>

<script src="./grid.ts">
</script>

