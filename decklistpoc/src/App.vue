<script setup>
import { onMounted, ref } from 'vue';
import descklistDisplay from './components/descklistDisplay.vue'
import { getRichDecklistFromPlaintext } from './getCardImages';

onMounted(async () => {
  const start = performance.now()
  myRichDecklist.value = await getRichDecklistFromPlaintext(myDecklist);
  const end = performance.now()
  loadTime.value = Math.round(end - start)
});
const myRichDecklist = ref([]);
const loadTime = ref(null)
const myDecklist = `4 Lightning Bolt
4 Lava Spike
4 Rift Bolt
4 Skewer the Critics
4 Monastery Swiftspear
4 Goblin Guide
4 Eidolon of the Great Revel
4 Searing Blaze
4 Boros Charm
4 Skullcrack
4 Atarka's Command
4 Destructive Revelry
4 Searing Blood
4 Fireblast
4 Chain Lightning
4 Fire // ice
4 Magma Jet
4 Searing Spear
4 Exquisite Firecraft
4 Grim Lavamancer
4 Sulfuric Vortex
4 Chandra, Torch of Defiance
4 Chandra, Pyromaster
4 Chandra, Acolyte of Flame`


</script>

<template>
  <div v-if="loadTime !== null">
    We loaded all these images in {{ loadTime }} ms
  </div>
  <br /><br />
  <div class="wrapper">
    <descklistDisplay :decklist="myRichDecklist" />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
