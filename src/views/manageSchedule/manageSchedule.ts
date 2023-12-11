import { Vue, Options } from "vue-class-component";
import NavigationBar from "@/components/navigationBar/navigationBar.vue";
import Header from "@/components/header/header.vue";
import ModalAddSchedule from "./components/modal-add-schedule/modal-add-schedule.vue";
import ModalDetailSchedule from "./components/modal-detail-schedule/modal-detail-schedule.vue";
import { MutationTypes } from "@/store/mutation-types";
@Options({
  components: {
    NavigationBar,
    Header,
    ModalAddSchedule,
    ModalDetailSchedule,
  },
})
export default class ManageSchedule extends Vue {
  public searchQuery: any = null;
  public currentPage: any = 1;
  public totalPage: any = 1;
  public allSchedules: any = [];

  async beforeMount() {
    await this.fetchSchedules();
  }

  public async fetchSchedules() {
    let res = await this.$store.dispatch(MutationTypes.GET_ALL_SCHEDULES, {
      page: this.currentPage,
      pageSize: 5,
    });

    this.allSchedules = res.data.data;
    console.log(this.allSchedules)
  }
  public handleDetaiSchedule(item:any){
    (this.$refs['detailSchedule'] as any).openModal()
    this.$store.commit("setSchedule", item);
  }
}
