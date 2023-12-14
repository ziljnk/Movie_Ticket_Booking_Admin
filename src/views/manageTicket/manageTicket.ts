import { Vue, Options } from "vue-class-component";
import NavigationBar from "@/components/navigationBar/navigationBar.vue";
import Header from "@/components/header/header.vue";
import ModalDetailTicket from "./components/modal-detail-ticket/modal-detail-ticket.vue";
import { MutationTypes } from "@/store/mutation-types";
@Options({
  components: {
    NavigationBar,
    Header,
    ModalDetailTicket,
  },
  watch: {
    searchQuery: 'handleSearchQueryChange',
}
})
export default class ManageTickets extends Vue {
  public searchQuery: any = null;
  public currentPage: any = 1;
  public totalPage: any = 1;
  public tickets: any = [];

  async beforeMount() {
    await this.fetchTickets();
  }

  public async fetchTickets() {
    let res = await this.$store.dispatch(MutationTypes.GET_ALL_TICKETS, {
      page: this.currentPage,
      pageSize: 1000,
    });
    this.totalPage = res.data.totalPages;
    this.tickets = res.data.data;
  }

  public handleNextPage(index: any) {
    this.currentPage = index + 1;
    this.fetchTickets();
  }

  public handleDetaiTicket(item: any) {
    this.$store.commit("setTicket", item);
  }

  public handleSearchQueryChange(val: string, oldVal: string) {
    if (val === "") {
      this.fetchTickets();
    } else {
      this.searchVoucher();
    }
  }
  public async searchVoucher() {
    let res = await this.$store.dispatch(MutationTypes.SEARCH_TICKET, {
      ticketId: this.searchQuery,
    });

    this.totalPage = 1;
    this.tickets = res.data;
  }
}
