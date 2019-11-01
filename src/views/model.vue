<template>
    <div>
        model:{{model}}
        <ModelComponent v-model="model"></ModelComponent>
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
                model:true
            }
        }

    }
</script>
<style scoped >

</style>