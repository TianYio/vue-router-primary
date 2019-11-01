<template>
    <div>
        model:{{model}}
        title:{{title}}
        <ModelComponent v-model="model" v-bind:title.sync="title"></ModelComponent>
    </div>
</template>
<script>
    import ModelComponent from "../components/ModelComponent";
    export default {
        name:'model',
        components:{
            ModelComponent
        },
        data(){
            return {
                model:1,
                title:'123'
            }
        }

    }
</script>
<style scoped >

</style>