<script setup>
defineProps({
  decklist: Array
})
</script>

<template>
  <div 
      v-for="(card, index) in decklist" 
      :key="index"
      class="hover-container"
    >
      {{ card.name }}
      <img 
        :src="card.image" 
        class="hover-image"
      />
    </div>
</template>

<style scoped>
.hover-container {
  position: relative;
}

.hover-image {
  display: none;
  position: fixed; /* 👈 key change */
  top: 10px;      /* same spot for all */
  left: 10px;
  width: 200px;
  z-index: 999;
}

.hover-container:hover .hover-image {
  display: block;
}
</style>
