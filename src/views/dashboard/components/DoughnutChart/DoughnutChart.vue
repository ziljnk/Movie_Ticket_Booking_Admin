<template>
    <Doughnut
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
      :style="myStyles"
      v-if="loaded"
    />
  </template>
  
  <script>
  import { Doughnut } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js'
  import { MutationTypes } from '@/store/mutation-types';
  
  ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale)
  
  export default {
    name: 'DoughnutChart',
    components: { Doughnut },
    data() {
      return {
        chartData: {
            labels: [],
            datasets: [{
                label: 'Profit',
                data: [],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(255, 159, 64, 0.7)',
                    'rgba(245, 74, 138, 0.7)',
                    'rgba(40, 180, 99, 0.7)',
                    'rgba(102, 102, 102, 0.7)',
                    'rgba(255, 128, 0, 0.7)'
                ],
                hoverOffset: 4,
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(245, 74, 138, 1)',
                    'rgba(40, 180, 99, 1)',
                    'rgba(102, 102, 102, 1)',
                    'rgba(255, 128, 0, 1)'
                ]
            }]
        },
        chartOptions: {
          responsive: false
        },
        loaded: false
    }
  },
  computed: {
    myStyles () {
      return {
        height: '370px',
        width: 'calc(100% - 700px)',
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '16px',
        position: 'relative',
      }
    }
  },
  async mounted() {
    const response = await this.$store.dispatch(MutationTypes.GET_MOVIES_PROFIT);
    if (response.status === 200) {
      this.chartData.datasets[0].data = response.data.profits;
      this.chartData.labels = response.data.names;
      this.loaded = true;
    }
  }
}
</script>