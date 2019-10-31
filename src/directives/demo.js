const directive = {
    bind: function (el, {name, value, oldValue, expression, arg, modifiers}, vnode, oldVnode) {
        el.innerHTML = `
                        name:${name}<br>
                        value:${value}<br>
                        oldValue:${oldValue}<br>
                        expression:${expression}<br>
                        arguments:${arg}<br>
                        modifiers:${JSON.stringify(modifiers)}<br>`;
    }
};
export default {name: 'demo', directive}