<template>
    <div>
        <div class="ui top left attached label">Television</div>
        <div class="ui form">
            <div class="field">
                <div class="ui icon input" :class="{ loading: loading }">
                    <input
                        type="text"
                        placeholder="Enter name or keywords. eg.: action, cars, music..."
                        v-model="query"
                        @keydown.enter="onSearch"
                    >
                    <i class="circular search link icon" @click="onSearch"></i>
                </div>
            </div>
            <div class="ui divided items">
                <div class="item" v-for="show in shows" :key="show.id">
                    <img :src="show.image.medium" v-if="show.image" alt class="image">
                    <div class="content">
                        <div class="header">{{ show.name }}</div>
                        <div class="description" v-html="show.summary"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { TelevisionService } from "@/services/TelevisionService";

const televisionService = new TelevisionService();

export default {
    data() {
        return {
            query: "",
            shows: [],
            loading: false
        };
    },

    methods: {
        async onSearch() {
            this.loading = true;
            const response = await televisionService.getShows(this.query);
            this.shows = response.map(p => p.show);
            this.loading = false;
        }
    }
};
</script>
