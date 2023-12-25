<template>
    <button type="button" :class="variantValue" class="">
      <span v-if="text" v-text="text"></span>
      <slot v-if="!text"/>
    </button>
</template>

<script>
export default {
  name: 'App',
  props: {
    text: String,
    varient: String,
  },
  computed: {
    variantValue(){
      switch(this.varient){
        case undefined:
          return "p-2 pl-3 pr-3 bg-stone-50 hover:bg-stone-200 shadow-stone-500 drop-shadow-md hover:drop-shadow-lg dark:bg-stone-900 dark:hover:bg-stone-800 dark:shadow-black dark:text-stone-50 shadow-sm tracking-[0.2em] text-sm rounded font-medium"
        case 'outlined':
          return "p-2 pl-3 pr-3 dark:bg-stone-900 dark:border-stone-50 dark:hover:bg-stone-800 dark:text-stone-50 border tracking-[0.2em] text-sm rounded font-medium"
        case 'text':
          return "p-2 pl-3 pr-3 dark:bg-stone-900 dark:text-stone-50 dark:hover:bg-stone-800 tracking-[0.2em] text-sm rounded font-medium"
        case 'plain':
          return "p-2 pl-3 pr-3 dark:bg-stone-900 dark:text-stone-50 tracking-[0.2em] text-sm rounded font-medium"
        default:
          return "";
      }
    }
  }
}
</script>