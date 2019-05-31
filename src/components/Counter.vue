<template>
    <div>
        <button class="btn btn-primary" @click="increment">Increment</button>
        <br><br>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
    </div>
</template>

<script>

import { mapMutations } from 'vuex'

    export default {
        methods: {
            ...mapMutations([
                'increment',
                'decrement'
            ])
        }
    }
</script>