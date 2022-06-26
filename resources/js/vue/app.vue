<template>
    <div class="app-container">
        <div class="top-section">
            <h2 id="title">List App</h2>
            <item-form
                v-on:reloadItems="getItems()"
            />
        </div>
        <items-list
            :items="items"
            v-on:reloadItems="getItems()"
        />
    </div>
</template>

<script>
import itemForm from './itemForm';
import itemsList from './itemsList';

export default {
    components: {
        itemForm,
        itemsList
    },
    data: function() {
        return {
            items: []
        }
    },
    methods: {
        getItems() {
            axios.get('api/items')
            .then(response => {
                this.items = response.data
            })
            .catch(error => {
                console.log(error);
            });
        }
    },
    created() {
        this.getItems();
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
