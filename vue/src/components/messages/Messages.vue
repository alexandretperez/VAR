<template>
    <div class="ui message">
        <div class="ui top left attached label">Messages</div>
        <h5>Messages</h5>
        <div class="ui list">
            <div class="item" v-for="(message, index) in messages" :key="index">{{message}}</div>
        </div>
        <div class="ui small button" @click="clear">Clear</div>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
    computed: {
        ...mapState(["messages"])
    },
    methods: {
        ...mapActions({
            clear: "clearMessages"
        })
    }
};
</script>
