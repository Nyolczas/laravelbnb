<template>
  <div>
    <div v-if="bookables == null">Betöltés...</div>
    <div v-else>
      <div class="row" v-for="row in rows" :key="'row' + row">
        <div class="col" v-for="(bookable, column) in itemsInRow(row)" :key="'row' + row + column">
          <bookable-list-item
            :item-title="bookable.title"
            :item-description="bookable.description"
            :price="1000"
          ></bookable-list-item>
        </div>
        <div class="col" v-for="p in placeholdersInRow(row)" :key=" 'placeholder' + row + p"></div>
      </div>
    </div>
  </div>
</template>

<script>
import BookableListItem from "./BookableListItem";
export default {
  components: {
    BookableListItem
  },
  data() {
    //--- reaktív
    return {
      bookables: null,
      loading: false,
      columns: 3
    };
  },
  computed: {
    rows() {
      return this.bookables === null
        ? 0
        : Math.ceil(this.bookables.length / this.columns);
    }
  },
  methods: {
    itemsInRow(row) {
      return this.bookables.slice((row - 1) * this.columns, row * this.columns);
    },
    placeholdersInRow(row) {
      return this.columns - this.itemsInRow(row).length;
    }
  },
  created() {
    const p = new Promise((resolve, reject) => {});

    const request = axios
      .get("api/bookables")
      .then(response => {this.bookables = response.data});
  }
};
</script>
