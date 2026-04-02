<template>
    
    <form class="flex items-center px-4 bg-gray-900 h-15 
rounded-sm border-l-2 border-green-400 mb-3">
                <input
                    v-model="todoContent.title"
                    placeholder="Adicione um novo item ..."
                    type="text"
                    class="bg-gray-900 placeholder-gray-500 text-gray-500 
font-light focus:outline-none block w-full appearance-none leading-normal 
py-3 pr-3"
                >

                <button
                    class="text-green-400 text-xs font-semibold 
focus:outline-none"
                    type="submit"
                    @click="submitForm"
                >
                    ADICIONAR
                </button>
            </form>
</template>

<script setup>
    import { ref } from 'vue';
    import { useStore } from 'vuex';

    const todoContent = ref({title:'', completed: false});
    const store = useStore();

    const submitForm = (e) => {
        e.preventDefault();
        if(todoContent.value.title.trim() === '') return;

        store.dispatch('addTodo',todoContent.value)
            .catch(err => console.error(err))
            .finally(() => todoContent.value = {title:'', completed: false})
    }

    
</script>