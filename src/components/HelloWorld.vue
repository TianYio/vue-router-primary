<template>
    <div class="hello">
        <slot name="title" :user1="user" :auth="auth">
            <h1>{{ user.lastName }}</h1>
        </slot>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
        data() {
            return {
                user: {
                    firstName: 'BalaBalala',
                    lastName: 'Ali'
                },
                auth: 'Tian'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
