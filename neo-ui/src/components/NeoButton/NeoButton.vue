<template>
  <button type="button" :class="buttonStyles" class="inline-flex items-center">
    <img v-if="customIcon" :src="customIcon" class="mr-2" :class="sizeValue.customIcon" />
    <font-awesome-icon :class="sizeValue.fontSize" v-if="icon && iconPosition.toLowerCase() == 'start' && !customIcon"
      :icon="icon" />
    <span v-if="text" v-text="text" :class="textStyles + ' ' + sizeValue.fontSize"></span>
    <font-awesome-icon :class="sizeValue.fontSize" v-if="icon && iconPosition.toLowerCase() == 'end' && !customIcon"
      :icon="icon" />
    <slot v-if="!text" />
  </button>
</template>

<script>
import utils from '@/utils';
export default {
  name: 'NeoButton',
  data() {
    return {
      colors: utils.mainColors()
    }
  },
  props: {
    text: String,
    theme: String,
    varient: String,
    icon: String,
    customIcon: String,
    customIconSize: Number,
    iconPosition: {
      type: String,
      default: 'start'
    },
    size: {
      type: String,
      default: 'md'
    },
    bold: String
  },
  computed: {
    buttonStyles() {
      return `${this.variantValue} ${this.icon} ${this.boldValue} ${this.backgroundStyles}`
    },
    textStyles() {
      return this.icon && this.text ? this.iconPosition == 'start' ? 'ml-2' : 'mr-2' : '';
    },
    variantValue() {
      switch (this.varient) {
        case undefined:
          return "p-2 pl-3 pr-3 drop-shadow-md hover:drop-shadow-lg shadow-sm tracking-[0.1em] rounded";
        case 'outlined': {
          const borderColor = 'yellow';
          return `p-2 pl-3 pr-3 borde border border-${borderColor}-400 tracking-[0.1em] rounded`
        }
        case 'text':
          return "p-2 pl-3 pr-3 tracking-[0.1em] rounded"
        case 'plain':
          return "p-2 pl-3 pr-3 tracking-[0.1em] rounded"
        default:
          return "";
      }
    },
    sizeValue() {
      switch (this.size) {
        case 'xs':
          return { customIcon: 'w-3', fontSize: `text-[0.6em]` }
        case 'sm':
          return { customIcon: 'w-3', fontSize: `text-[0.75em]` }
        case 'md':
          return { customIcon: 'w-3.5', fontSize: `text-[0.9em]` }
        case 'lg':
          return { customIcon: 'w-4', fontSize: `text-[1.05em]` }
        case 'xl':
          return { customIcon: 'w-4', fontSize: `text-[1.2em]` }
        default:
          return {};
      }
    },
    boldValue() {
      if (this.bold)
        return this.bold == 'true' ? 'font-bold' : 'font-medium'
      else
        return 'font-medium'
    },
    backgroundStyles() {
      const tempTheme = this.theme ? this.theme.toLowerCase() : 'dark';
      return `${this.colors[tempTheme].bgMain} ${this.colors[tempTheme].bgHover} ${this.colors[tempTheme].bgShadow} ${this.colors[tempTheme].textMain} dark:${this.colors[tempTheme].bgMain} dark:${this.colors[tempTheme].bgHover} dark:${this.colors[tempTheme].bgShadow} dark:${this.colors[tempTheme].textMain}`;
    }
  }
}
</script>