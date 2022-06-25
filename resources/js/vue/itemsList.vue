<template>
  <div>
    <div v-for="(item, index) in items" :key="index">
        <item
            :item="item"
            class="item"
        />
    </div>
  </div>
</template>

<script>
import item from './item';

export default {
    props: ['items'],
    components: {
        item
    }
}
</script>

<style scoped>
.item {
    background: #e6e6e6;
    padding: 5px;
    margin-top: 5px;
}
</style>
