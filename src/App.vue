<template>
    <div id="app">
        <h1>Route props</h1>

        <div>
            <router-link to="/" >/</router-link>
        </div>
        <!--<div>
            <router-link to="/hello/you" v-slot="{href,route,navigate,isActive,isExactActive}">
                <div :class="[isActive&&'router-link-active',isExactActive&&'router-link-exact-active']">
                    <a :href="href" @click="navigate">{{route.fullPath}}</a>
                </div>
            </router-link>
        </div>-->
        <div>
            <router-link to="/static">/static</router-link>
        </div>
        <div>
            <router-link to="/dynamic/1">/dynamic/1</router-link>
        </div>
        <div>
            <router-link to="/attrs">/attrs</router-link>
        </div>

        <router-view class="view" foo="123"></router-view>
    </div>
</template>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
