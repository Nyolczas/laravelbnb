<template>
  <div class="card">
    <div class="card-body">
      <router-link :to="{name: 'bookable', params: { id } }">
        <h5 class="card-title">{{ title }}</h5>
      </router-link>
      <p class="card-text">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: { title: String, description: String, id: Number }
};
</script>

<style scoped>
.card {
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
  margin-bottom: 2rem;
  height: calc(100% - 2rem);
}
</style>
