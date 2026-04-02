<template>
    <div class="space-y-2">
        <TodoItem
            v-for="todo in computedTodos"
            :key="todo.id"
            :todo="todo"
            ></TodoItem>
    </div>
</template>
<script setup>
    import TodoItem from '@/components/TodoItem.vue'
    import { useStore } from 'vuex';
    import { computed } from 'vue';

    const store = useStore();
    const computedTodos = computed(() => store.state.todos);
</script>