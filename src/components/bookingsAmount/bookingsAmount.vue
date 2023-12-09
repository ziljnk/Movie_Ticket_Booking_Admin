<style src="./bookingsAmount.css"></style>

<script lang="ts" src="./bookingsAmount.ts"></script>

<template>
    <div class="bookings-amount-card">
        <div class="between-row">
            <h2 class="chart-title">Amount of Bookings</h2>
        </div>
        <Spin spinning="loading">
            <h1>{{ msg }}</h1>
            <canvas id="myChart" width="200px" height="200"></canvas>
        </Spin>
    </div>
</template>