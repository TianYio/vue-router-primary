<template>
    <div>
        <!--<input
                type="checkbox"
                v-bind:checked="checked"
                v-on:change="$emit('change', $event.target.checked)"
        >-->
        <button @click="emit">{{checked}}+{{title}}</button>
    </div>
</template>
<script>
    export default {
        name: 'ModelComponent',
        model: {
            prop: 'checked',
            event: 'change'
        },
        props: ['checked','title'],
        data() {
            return {}
        },
        methods: {
            emit() {
                this.$emit('update:title',this.title*2)
                this.$emit('change', this.checked + 1)
            }
        }
    }
</script>
<style scoped lang="scss"></style>