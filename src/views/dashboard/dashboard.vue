<style src="./dashboard.css"></style>

<script lang="ts" src="./dashboard.ts"></script>

<template>
    <div class="dashboard-container">
        <div class="background-feature d-flex flex-column">
            <Header />
            <div class="d-flex flex-row gap-5" style="height: calc( 100vh - 66px); overflow: scroll;">
                <NavigationBar class="col-2" />

                <div class="d-flex flex-column px-3 mt-3 w-100">
                    <div class="d-flex flex-row justify-content-start align-items-center gap-5">
                        <StatisticCard v-for="(item, index) in statisticCardData" :key="index" :title="item.title" :value="item.value" :percent="item.percent"/>
                    </div>

                    <div class="mt-4 d-flex align-items-center gap-4">
                        <BarChart />
                        <DoughnutChart/>
                    </div>

                    <div class="d-flex flex-column justify-content-start align-items-start mt-3 top-10-movies">
                        <h3>Top 10 Movies With Highest Profit</h3>
                        <TopMovieItem v-for="(item, index) in top10Movies" :key="index" :movieData="item"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
