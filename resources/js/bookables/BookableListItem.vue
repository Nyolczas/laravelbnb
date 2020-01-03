<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ itemTitle }}</h5>
      <p class="card-text">{{ itemDescription }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: { itemTitle: String, itemDescription: String, price: Number }
}
</script>

<style scoped>
    .card {
        box-shadow : 0 0 12px rgba(0, 0, 0, .2);
        margin-bottom: 2rem;
        height: calc(100% - 2rem);
    }
</style>
