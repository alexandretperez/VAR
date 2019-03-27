<template>
    <div class="ui fluid container">
        <div class="ui top attached label">MainLayout</div>
        <h1 class="title">Vue App</h1>
        <div class="ui menu">
            <router-link class="item" to="/heroes">Heroes</router-link>
            <router-link class="item" to="/tv">Television</router-link>
            <router-link class="item" to="/about">About</router-link>
        </div>

        <section class="ui grid">
            <div class="ten wide column">
                <div class="ui segment">
                    <router-view></router-view>
                </div>
            </div>
            <div class="six wide column">
                <messages></messages>
            </div>
        </section>
    </div>
</template>

<script>
import Messages from "@/components/messages/Messages";
export default {
    components: {
        Messages
    }
};
</script>

<style lang="stylus" scoped>
.ui.container
    position relative
    border 1px solid #ddd
    padding 20px

h1
    padding-top 20px
</style>
