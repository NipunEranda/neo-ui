import * as components from './components';
import './assets/tailwind.css'

const componentsList = components?.default;
const customComponents = {
    install(Vue) {
        Object.keys(componentsList).forEach(name => {
            Vue.component(name, componentsList[name]);
        })
    }
}

export default customComponents;