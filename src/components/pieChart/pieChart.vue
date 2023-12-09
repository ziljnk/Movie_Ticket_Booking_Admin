<style src="./pieChart.css"></style>

<script lang="ts" src="./pieChart.ts"></script>

<template>
    <div class="pie-chart-card">
        <div class="between-row">
            <h2 class="chart-title">Revenue and Expenditure Ratio</h2>
        </div>
        <Spin spinning="loading">
            <h1>{{ msg }}</h1>
            <canvas id="myChart" width="200px" height="200"></canvas>
        </Spin>
    </div>
</template>