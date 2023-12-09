<style src="./monthlyRevenue.css"></style>

<script lang="ts" src="./monthlyRevenue.ts"></script>

<template>
  <div class="chart-card">
    <div class="between-row">
      <h2 class="chart-title">Monthly Revenue</h2>
    </div>
    <Spin spinning="loading">
      <h1>{{ msg }}</h1>
      <canvas id="myChart" width="200px" height="200"></canvas>
    </Spin>
  </div>
</template>