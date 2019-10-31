import isTrue from "./isTrue";

export const IsTrue = {
    install: (Vue) => {
        Vue.filter(isTrue.name, isTrue.filter)
    }
}