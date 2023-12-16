import { Vue,Options } from 'vue-class-component'
import NavigationBar from '@/components/navigationBar/navigationBar.vue'
import Header from '@/components/header/header.vue'
import BarChart from './components/BarChart/BarChart.vue'
import DoughnutChart from './components/DoughnutChart/DoughnutChart.vue'
import StatisticCard from '@/components/statisticCard/statisticCard.vue'
import { MutationTypes } from '@/store/mutation-types'
import TopMovieItem from './components/TopMovieItem/TopMovieItem.vue'

@Options({
    components: {
        NavigationBar,
        Header,
        StatisticCard,
        BarChart,
        DoughnutChart,
        TopMovieItem
    }
})
export default class Dashboard extends Vue {
    public userList: any = []
    public statisticCardData: any = []
    public top10Movies: any = []
    public quantityMovies: any = 0
    public quantityTickets: any = 0

    beforeMount(): void {
        this.statisticCardData = [
            {
                title: "Total Users",
                value: "281",
                percent: 3
            },
            {
                title: "Total Movies",
                value: 0,
                percent: 5
            },
            {
                title: "Total Ticket Sold",
                value: 0,
                percent: 4
            },
        ]

        this.getTop10Movies()
        this.getQuantityMovies()
        this.getQuantityTickets()
        this.getQuantityTheatres()
    }

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

    public async getTop10Movies() {
        let response = await this.$store.dispatch(MutationTypes.GET_TOP_10_MOVIES)
        if (response.status === 200) {
            this.top10Movies = response.data
        } 
    }

    public async getQuantityMovies() {
        let response = await this.$store.dispatch(MutationTypes.GET_QUANTITY_MOVIES)
        if (response.status === 200) {
            this.quantityMovies = response.data.totalQuantity
            this.statisticCardData[1].value = this.quantityMovies
        }
    }

    public async getQuantityTickets() {
        let response = await this.$store.dispatch(MutationTypes.GET_QUANTITY_TICKETS)
        if (response.status === 200) {
            this.quantityTickets = response.data.totalQuantity
            this.statisticCardData[2].value = this.quantityTickets
        }
    }

    public async getQuantityTheatres() {
        let response = await this.$store.dispatch(MutationTypes.GET_QUANTITY_THEATRES)
        if (response.status === 200) {
            this.statisticCardData[0].value = response.data.totalQuantity
        }
    }
}