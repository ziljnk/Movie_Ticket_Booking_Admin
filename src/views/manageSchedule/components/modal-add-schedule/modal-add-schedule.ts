import { Vue, Options } from "vue-class-component";
import { MutationTypes } from "@/store/mutation-types";
import { toast } from "vue3-toastify";
@Options({
  watch: {
    movieInput: {
      handler(val, oldVal) {
        this.handleSearch();
      },
      deep: true,
    },
  },
})
export default class ModalAddSchedule extends Vue {
  public isShowModalCategories: any = false;
  public selectMovie: any = null;
  public movieInput: any = null;
  public suggest: any = [];

  public allTheatres: any = [];
  public scheduleInput: any = {
    startTime: null,
    endTime: null,
    startTimeDate: null,
    endTimeDate: null,
    movie: null,
    theatre: null,
    price: null,
    total: 0,
    bookedSeat: [],
  };
  async beforeMount() {
    await this.fetchSchedules();
  }

  public async fetchSchedules() {
    let res = await this.$store.dispatch(MutationTypes.GET_ALL_THEATRES, {
      pageSize: 200,
    });

    this.allTheatres = res.data.data;
  }

  public handleRemoveMovie() {
    this.selectMovie = null;
    this.movieInput = "";
  }

  public handleSelectMovie(item: any) {
    this.selectMovie = item;
    this.scheduleInput.movie = item.id;
    this.movieInput = "";
  }

  public async handleSearch() {
    if (this.movieInput === "") return;
    let payload = {
      query: this.movieInput,
    };
    let res = await this.$store.dispatch(MutationTypes.SEARCH_MOVIE, payload);
    if (res.status === 200) {
      this.suggest = res.data.data;
    }
  }

  public async handleClickActionBtn() {
    let res = await this.$store.dispatch(MutationTypes.CREATE_SCHEDULE, {
      startTime:
        this.scheduleInput.startTimeDate + "T" + this.scheduleInput.startTime,
      endTime:
        this.scheduleInput.endTimeDate + "T" + this.scheduleInput.endTime,
      movie: this.scheduleInput.movie,
      theatre: this.scheduleInput.theatre,
      price: this.scheduleInput.price,
      total: 0,
      bookedSeat: [],
    });

    if (res.status === 201) {
      console.log(res.data);
      // toast.success("Successfully created schedule!");
      // setTimeout(() => {
      //     window.location.reload();
      // }, 2000);
    } else {
      toast.error(res.data.message);
    }
  }
}
