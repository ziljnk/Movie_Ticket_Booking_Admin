import { Vue,Options } from 'vue-class-component'
import NavigationBar from '@/components/navigationBar/navigationBar.vue'
import Header from '@/components/header/header.vue'
import ModalCreateNews from './components/modal-create-news/modal-create-news.vue'
import ModalUpdateNews from './components/modal-update-news/modal-update-news.vue'
import { MutationTypes } from '@/store/mutation-types'
import { toast } from 'vue3-toastify'

@Options({
    components: {
        NavigationBar,
        Header,
        ModalCreateNews,
        ModalUpdateNews
    }
})
export default class ManageNews extends Vue {
    public allNews: any = []

    beforeMount(): void {
        this.fetchAllNews(1, 10)
    }

    public async fetchAllNews(page: number, pageSize: number) {
        await this.$store.dispatch(MutationTypes.GET_ALL_NEWS, {
            page: page,
            pageSize: pageSize
        }).then((res: any) => {
            this.allNews = res.data.data
            console.log(this.allNews)
        }).catch((err: any) => {     
            toast.error('Get all news failed')   
            console.log(err)
        })
    }

    public handleOpenCreateNews() {
        (this.$refs['modal-create-news-component'] as any).openModal()
    }

    public handleChooseNews(item: any) {
        this.$store.commit('setChosenNews', item);
        (this.$refs['modal-update-news-component'] as any).openModal()
    }
}