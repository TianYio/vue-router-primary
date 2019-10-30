<template>
    <div id="app">
        <h1>Route props</h1>
        <ul>
            <li>
                <router-link to="/">/</router-link>
            </li>
            <li>
                <router-link to="/hello/you">/hello/you</router-link>
            </li>
            <li>
                <router-link to="/static">/static</router-link>
            </li>
            <li>
                <router-link to="/dynamic/1">/dynamic/1</router-link>
            </li>
            <li>
                <router-link to="/attrs">/attrs</router-link>
            </li>
        </ul>
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
