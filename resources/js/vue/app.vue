<template>
    <div class="app-container">
        <div class="top-section">
            <h2 id="title">List App</h2>
            <itemForm/>
        </div>
        <itemsList/>
    </div>
</template>

<script>
import itemForm from './itemForm';
import itemsList from './itemsList';

export default {
    components: {
        itemForm,
        itemsList
    }
}
</script>

<style scoped>
    .app-container {
        width: 350px;
        margin: auto;
    }

    .top-section {
        background: #e6e6e6;
        padding: 10px;
    }

    #title {
        text-align: center;
    }
</style>
