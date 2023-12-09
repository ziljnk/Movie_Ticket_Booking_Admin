import { Vue,Options } from 'vue-class-component'
import NavigationBar from '@/components/navigationBar/navigationBar.vue'
import Header from '@/components/header/header.vue'
import StatisticCard from '@/components/statisticCard/statisticCard.vue'
import MonthlyRevenue from '@/components/monthlyRevenue/monthlyRevenue.vue'
import BookingsAmount from '@/components/bookingsAmount/bookingsAmount.vue'
import PieChart from '@/components/pieChart/pieChart.vue'

@Options({
    components: {
        NavigationBar,
        Header,
        StatisticCard,
        MonthlyRevenue,
        BookingsAmount,
        PieChart
    }
})
export default class Dashboard extends Vue {

}