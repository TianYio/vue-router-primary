<template>
    <div id="app">
        <h1>Route props</h1>

        <div>
            <router-link to="/">
                url:/;route:{path: '/',name: 'home',component: Home}
            </router-link>
        </div>

        <div>
            <router-link to="/hello/you">
                url:/hello/you;route:{ path: '/hello/:name',component: Home,props: true}
            </router-link>
        </div>

        <div>
            <router-link to="/static">
                url:/static;route:{path: '/static',component: Home,props: {name: 'world'}}
            </router-link>
        </div>

        <div>
            <router-link to="/dynamic/1">
                url:/dynamic/1;route:{ path: '/dynamic/:years',component: Home,props: dynamicPropsFn}
            </router-link>
        </div>

        <div>
            <router-link to="/attrs">
                url:/attrs;route{path: '/attrs',component: Home,props: {name: 'attrs'}}
            </router-link>
        </div>

        <div>
            <router-link to="/about" v-slot="{href,route,navigate,isActive,isExactActive}">
                <div :class="[isActive&&'router-link-active',isExactActive&&'router-link-exact-active']">
                    <a :href="href" @click="navigate">{{route.fullPath}}</a>
                </div>
            </router-link>
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
