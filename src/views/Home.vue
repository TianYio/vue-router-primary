<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <div v-demo:foo.a="1+1"></div>
        <HelloWorld msg="Welcome to Your Vue.js App">
            <template #title="{user1,auth}">
                {{user1.firstName}}+{{auth | isTrue}}
            </template>
        </HelloWorld>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'

    export default {
        name: 'home',
        components: {
            HelloWorld
        }
    }
</script>
