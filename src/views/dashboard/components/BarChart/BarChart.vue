<template>
    <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
      :style="myStyles"
      v-if="loaded"
    />
  </template>
  
  <script>
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  import { MutationTypes } from '@/store/mutation-types';
  
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  
  export default {
    name: 'BarChart',
    components: { Bar },
    data() {
      return {
        chartData: {
            labels: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
            datasets: [ 
                { 
                    label: "Total movies per month",
                    data: [] ,
                    backgroundColor: '#FF9F40',
                } 
            ]
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
        width: '700px',
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '16px',
        position: 'relative',
      }
    }
  },
  async mounted() {
    const response = await this.$store.dispatch(MutationTypes.GET_MOVIES_PER_MONTH);
    if (response.status === 200) {
      this.chartData.datasets[0].data = response.data
      this.loaded = true;
    }
  }
}
</script>