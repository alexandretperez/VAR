<template>
    <div class="ui segment">
        <div class="ui top left attached label">HeroesList</div>
        <h5>Heroes Team</h5>
        <div class="scroller">
            <div class="ui inverted dimmer" :class="{ 'active': loading }">
                <div class="ui loader"></div>
            </div>
            <div class="ui divided selection list">
                <div
                    class="item"
                    v-for="hero in heroes"
                    :key="hero.id"
                    :class="{'active': selectedHero && selectedHero.id === hero.id}"
                    @click="onSelect(hero)"
                >
                    {{hero.name}}
                    <br>
                    <small>{{hero.id}}</small>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { HeroService } from "@/services/HeroService";

const heroService = new HeroService();

export default {
    data() {
        return {
            heroes: [],
            loading: false,
            selectedHero: null
        };
    },
    methods: {
        async loadHeroes() {
            this.loading = true;
            this.heroes = await heroService.getHeroes();
            this.loading = false;
        },
        onSelect(hero) {
            this.selectedHero = hero;
            this.$emit("selected", hero);
        }
    },
    mounted() {
        this.loadHeroes();
    }
};
</script>


<style lang="stylus" scoped>
.scroller
    height 280px
    overflow-y scroll
</style>
