<template>
    <div class="home">

        <div>
            <h2 class="hello">Hello + {{name}} + {{ $attrs }}</h2>
        </div>

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
        },
        props: {
            name: {
                type: String,
                default: 'Vue!'
            }
        },
        created() {
            console.log(123, this.$options.name)
        }
    }
</script>
