<template>
  <div class="card mb-4">
    <div class="card-body">
      <h5 class="card-title">{{ itemTitle }}</h5>
      <p class="card-text">{{ itemContent }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: { itemTitle: String, itemContent: String, price: Number }
}
</script>

<style scoped>
    .card {
        box-shadow : 0 0 12px rgba(0, 0, 0, .2);
    }
</style>
