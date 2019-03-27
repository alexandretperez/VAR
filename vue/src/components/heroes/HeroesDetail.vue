<template>
    <div class="ui card form" v-if="hero" :class="{ loading: loading }">
        <div class="ui top left attached label">HeroesDetail</div>
        <div class="content">
            <div class="header">Hero Details</div>
            <div class="description">
                <table class="ui definition table">
                    <tbody>
                        <tr>
                            <td>ID</td>
                            <td>{{ hero.id }}</td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>
                                <div class="field">
                                    <input
                                        type="text"
                                        v-model="hero.name"
                                        placeholder="Enter hero's name..."
                                    >
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="ui basic buttons">
                    <div class="ui icon button" @click="onSave(hero)">
                        <i class="check icon"></i>
                        Save
                    </div>
                    <div class="ui icon button" @click="onDelete(hero)">
                        <i class="trash icon"></i>
                        Delete
                    </div>
                    <div class="ui icon button" @click="onCancel(hero)">
                        <i class="ban icon"></i>
                        Cancel
                    </div>
                </div>
                <div class="ui custom message">
                    <span class="header">{{ hero.name }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { HeroService } from "@/services/HeroService";

const heroService = new HeroService();

export default {
    props: {
        hero: {
            required: true,
            validation: value => {
                return "id" in value && "name" in value;
            }
        }
    },
    data() {
        return {
            loading: false
        };
    },
    methods: {
        onCancel() {
            this.$emit("canceled");
        },
        async onDelete() {
            this.loading = true;
            await heroService.delete(this.hero);
            this.loading = false;
            this.$emit("deleted");
        },
        async onSave() {
            this.loading = true;
            const hero = await heroService.save(this.hero);
            this.loading = false;
            this.$emit("saved", hero);
        }
    }
};
</script>


<style lang="stylus" scoped>
.ui.card.form
    width auto !important

.ui.custom.message .header
    font-size 36px
    padding 1em
</style>
