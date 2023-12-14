import { Vue,Options } from 'vue-class-component'
import NavigationBar from '@/components/navigationBar/navigationBar.vue'
import Header from '@/components/header/header.vue'

import StatisticCard from '@/components/statisticCard/statisticCard.vue'
import MonthlyRevenue from '@/components/monthlyRevenue/monthlyRevenue.vue'
import BookingsAmount from '@/components/bookingsAmount/bookingsAmount.vue'
import PieChart from '@/components/pieChart/pieChart.vue'

import { MutationTypes } from '@/store/mutation-types'


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
    public userList: any = []
    public async fetchUsers() {
        const payload = {
            page: 1,
            pageSize: 10
        }

        let response = await this.$store.dispatch(MutationTypes.GET_ALL_USERS, payload)
        console.log("response", response)
        if (response.status === 200) {
            this.userList = response.data.data
        }
    }
}