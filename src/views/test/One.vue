<template>
    <div>
        <div  ref="handle" @click="handleAdd"></div>
        <div id="result">{{key}}</div>
        <div ref="proxyCall" @click="proxyCall">change</div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            key: '12'
        }
    },
    methods: {
        handleAdd () {
            this.key = 33
        },

        change (n) {

        },

        proxyCall () {
            this.change(123)
        }
    }

}
</script>

<style lang="scss" scoped>

</style>
