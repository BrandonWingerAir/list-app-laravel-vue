<template>
  <div class="item">
    <input
        type="checkbox"
        @change="toggleStatus()"
        v-model="item.completed"
    />
    <span :class="[item.completed ? 'completed' : '', 'itemText']">
        {{ item.name }}
    </span>
    <button @click="removeItem()" class="deleteBtn">
        <font-awesome-icon icon="trash"/>
    </button>
  </div>
</template>

<script>
export default {
    props: ['item'],
    methods: {
        toggleStatus() {
            axios.put('api/item/' + this.item.id, {
                item: this.item
            })
            .then(response => {
                if (response.status == 200) {
                    this.$emit('itemStatus');
                }
            })
            .catch(error => {
                console.log(error);
            });
        },
        removeItem() {
            axios.delete('api/item/' + this.item.id)
            .then(response => {
                if (response.status == 200) {
                    this.$emit('itemStatus');
                }
            })
            .catch(error => {
                console.log(error);
            });
        }
    }
}
</script>

<style scoped>
.item {
    display: flex;
    justify-content: center;
    align-items: center;
}

.completed {
    text-decoration: line-through;
    color: #999999;
}

.itemText {
    width: 100%;
    margin-left: 20px;
}

.deleteBtn {
    background: #e6e6e6;
    border: none;
    color: #FF0000;
    outline: none;
}
</style>
