<template>
    <div class="px-3 py-10 md:px-10">
        <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">
          
          <TodoSpinner v-if="loading"></TodoSpinner>

          <template v-else>
            <TodoForm></TodoForm>

            <TodoItems></TodoItems>

            <TodoEmpty></TodoEmpty>
          </template>
          
        </div>
    </div>
</template>

<script setup>
  import TodoSpinner from '@/components/TodoSpinner.vue'
  import TodoForm from '@/components/TodoForm.vue'
  import TodoItems from '@/components/TodoItems.vue'
  import TodoEmpty from '@/components/TodoEmpty.vue'

  import { ref } from 'vue';
  import { useStore } from 'vuex';

  const store = useStore();

  const loading = ref(true);

  store.dispatch('getTodos')
    .then(() => loading.value = false)
  


</script>

<style>
</style>
