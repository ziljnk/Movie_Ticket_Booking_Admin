import { Vue, Options } from "vue-class-component";
import NavigationBar from "@/components/navigationBar/navigationBar.vue";
import Header from "@/components/header/header.vue";
import ModalAddTheatre from "./components/modal-add-theatre/modal-add-theatre.vue";
import ModalDetailTheatre from "./components/modal-detail-theatre/modal-detail-theatre.vue";
import { MutationTypes } from "@/store/mutation-types";
@Options({
  components: {
    NavigationBar,
    Header,
    ModalAddTheatre,
    ModalDetailTheatre,
  },
  watch: {
    searchQuery: 'handleSearchQueryChange',
},
})
export default class ManageTheatres extends Vue {
  public searchQuery: any = null;
  public currentPage: any = 1;
  public totalPage: any = 1;
  public theatres: any = [];
  async beforeMount() {
    await this.fetchTheatres();
  }

  public async fetchTheatres() {
    let res = await this.$store.dispatch(MutationTypes.GET_ALL_THEATRES, {
      page: this.currentPage,
      pageSize: 7,
    });
    this.theatres = res.data.data;
  }

  public handleDetaiTheatre(item:any){
    (this.$refs['detailTheatre'] as any).openModal()
    this.$store.commit("setTheatre", item);
  }

  public handleSearchQueryChange(val: string, oldVal: string) {
    if (val === '') {
      this.fetchTheatres();
  } else {
      this.searchMovie();
  }
}
  public async searchMovie() {
    let res = await this.$store.dispatch(MutationTypes.SEARCH_THEATRE, {
     query:this.searchQuery,
     page: this.currentPage,
     pageSize:5,
    })

    this.totalPage = res.data.totalPages
    this.theatres = res.data.data
  }
}
