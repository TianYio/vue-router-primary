import demo from "./demo";

export const Demo = {
    install: (Vue) => {
        Vue.directive(demo.name, demo.directive)
    }
}