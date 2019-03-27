<template>
    <div class="ui grid">
        <div class="ui top left attached label">Heroes</div>
        <div class="row">
            <div class="ten wide column">
                <div
                    class="ui massive circular icon green button"
                    v-if="!selectedHero"
                    @click="onAdd"
                >
                    <i class="plus icon"></i>
                </div>
                <heroes-detail
                    :hero="selectedHero"
                    @saved="onSaved"
                    @deleted="onDeleted"
                    @canceled="onCanceled"
                    v-else
                ></heroes-detail>
            </div>
            <div class="six wide column">
                <heroes-list @selected="onSelected" ref="heroesList"></heroes-list>
            </div>
        </div>
    </div>
</template>

<script>
import HeroesDetail from "./HeroesDetail";
import HeroesList from "./HeroesList";

export default {
    components: {
        HeroesList,
        HeroesDetail
    },
    data() {
        return {
            selectedHero: null
        };
    },
    methods: {
        onSelected(hero) {
            this.selectedHero = { ...hero };
        },
        onAdd() {
            this.selectedHero = { id: null, name: "" };
        },
        onSaved(hero) {
            console.log("Hero saved!", hero);
            this.selectedHero = { ...hero };
            this.$refs.heroesList.loadHeroes();
        },
        onDeleted() {
            console.log("Hero deleted!");
            this.selectedHero = null;
            this.$refs.heroesList.loadHeroes();
        },
        onCanceled() {
            console.log("Changes canceled!");
            this.selectedHero = null;
        }
    }
};
</script>



