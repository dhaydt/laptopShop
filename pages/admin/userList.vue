<template>
  <div class="userList">
    <NavAdmin></NavAdmin>
    <div class="container-panel">
      <b-card no-body class="card-panel">
        <div class="card-title">User Management</div>
        <b-container>
          <b-row class="justify-content-between">
            <b-col sm="2" md="3" class="my-1">
              <b-form-group class="mb-0">
                <div class="select-form d-flex align-items-center">
                  <b-form-select
                    id="per-page-select"
                    v-model="perPage"
                    :options="pageOptions"
                    size="sm"
                    class="col-lg-3"
                  ></b-form-select>
                  <label
                    for="per-page-select"
                    class="
                      col-form-label col-form-label-sm
                      text-sm-left
                      ml-2
                      bold-600
                      pb-0
                    "
                  >
                    Row Per Page
                  </label>
                </div>
              </b-form-group>
            </b-col>
            <b-col
              lg="5"
              md="5"
              sm="6"
              class="my-1 d-flex align-items-center justify-content-end"
            >
              <b-form-group class="mb-0">
                <div class="filter-row d-flex align-items-center">
                  <label for="filter-input" class="bold-600 mb-0 mr-2"
                    >Filter</label
                  >
                  <b-input-group size="sm">
                    <b-form-input
                      id="filter-input"
                      v-model="filter"
                      type="search"
                      placeholder="Type to Search"
                    ></b-form-input>

                    <b-input-group-append>
                      <b-button :disabled="!filter" @click="filter = ''"
                        >Clear</b-button
                      >
                    </b-input-group-append>
                  </b-input-group>
                </div>
              </b-form-group>
            </b-col>
          </b-row>
          <b-table
            striped
            sticky-header
            hover
            :items="items"
            :fields="fields"
            :sort-by.sync="sortBy"
            sort-icon-left
            responsive="sm"
            :current-page="currentPage"
            :per-page="perPage"
            :filter="filter"
            :filter-included-fields="filterOn"
            @filtered="onFiltered"
          ></b-table>

          <b-row class="justify-content-end">
            <b-col class="my-1">
              <b-pagination
                v-model="currentPage"
                :total-rows="totalRows"
                :per-page="perPage"
                pills
                align="right"
                size="md"
                hide-goto-end-buttons
                class="my-0"
              ></b-pagination>
            </b-col>
          </b-row>
        </b-container>
      </b-card>
    </div>
  </div>
</template>

<script>
import NavAdmin from "../../components/partials/NavAdmin";
export default {
  data() {
    return {
      items: [],
      sortBy: "id",
      fields: [
        {
          key: "id",
          sortable: true,
          label: "ID",
        },
        {
          key: "name",
          sortable: true,
          label: "Nama",
        },
        {
          key: "email",
          sortable: true,
          label: "E-Mail",
        },
        {
          label: "Actions",
        },
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 20, 50, 100],
      filter: null,
      filterOn: [],
    };
  },
  components: { NavAdmin },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      const resp = await this.$axios.get("/usersAll");
      console.log(resp.data.user);
      this.items = resp.data.user;
      this.totalRows = this.items.length;
    },

    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
  },
};
</script>

<style lang="scss" scoped>
.card-panel {
  padding: 20px;
  width: 100%;
}
</style>
