import { Vue, Options } from "vue-class-component";
import { MutationTypes } from "@/store/mutation-types";
import { toast } from "vue3-toastify";
import { Modal } from "bootstrap";
import FormattedModal from "@/components/modal/modal.vue";

@Options({
  watch: {
    scheduleInput: {
      handler(val, oldVal) {
        this.handleHasChanged();
      },
      deep: true,
    },
  },
  components: {
    FormattedModal
}
})
export default class ModalDetailSchedule extends Vue {
  public scheduleInput: any = {
    startTime: null,
    startTimeDate: null,
    endTime: null,
    endTimeDate: null,
    movie: null,
    duration: null,
    image: null,
    theatre: null,
    price: 0,
    total: 0,
    bookedSeat: [],
  };
  public allTheatre: any = [];

  public rowArray: any = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  public schedules: any = [];

  public isChanged: any = false;
  public schedule: any = null;
  public unsubscribe!: any;

  public async mounted() {
    this.handleSubscribe();
    await this.fetchTheatres();
  }

  public unmounted() {
    this.unsubscribe();
  }

  public handleSubscribe() {
    this.unsubscribe = this.$store.subscribe(
      async (mutation: any, state: any) => {
        if (mutation.type === "setSchedule") {
          this.schedule = mutation.payload;
          this.getData();
          this.tranfer();
        }
      }
    );
  }
  public getData() {
    this.scheduleInput = {
      startTimeDate: this.schedule?.startTime?.slice(0, 10),
      startTime: this.schedule?.startTime?.slice(11, 16),
      endTimeDate: this.schedule?.endTime?.slice(0, 10),
      endTime: this.schedule?.endTime?.slice(11, 16),
      movie: this.schedule?.movie?.name,
      duration: this.schedule?.movie?.duration,
      image: this.schedule?.movie?.image,
      theatre: this.schedule?.theatre.id,
      price: this.schedule?.price,
      total: this.schedule?.total,
      bookedSeat: this.schedule?.bookedSeat,
    };
    console.log(this.scheduleInput.theatre);
  }

  public async fetchTheatres() {
    let res = await this.$store.dispatch(MutationTypes.GET_ALL_THEATRES);

    this.allTheatre = res.data.data;
  }

  public async openModal() {
    const myModal = new Modal(this.$refs["modal-detail-schedule"] as any);
    myModal.show();
  }

  public isSeatBooked(row: string, number: number): boolean {
    return this.scheduleInput.bookedSeat.some(
      (seat: any) => seat?.seat?.row === row && seat?.seat?.number === number
    );
  }

  public handleHasChanged() {
    this.isChanged = false;
    if (
      this.scheduleInput.theatre !== this.schedule?.theatre ||
      this.scheduleInput.price !== this.schedule?.price ||
      this.scheduleInput.startTimeDate !==
        (this.schedule?.startTime?.slice(0, 10) ?? null) ||
      this.scheduleInput.endTimeDate !==
        (this.schedule?.endTime?.slice(0, 10) ?? null) ||
      this.scheduleInput.startTime !==
        (this.schedule?.startTime?.slice(11, 16) ?? null) ||
      this.scheduleInput.endTime !==
        (this.schedule?.endTime?.slice(11, 16) ?? null)
    )
      this.isChanged = true;
  }
  public async handleUpdate() {
    const payload = {
      schedule_id: this.schedule.id,
      startTime:
        this.scheduleInput.startTimeDate + "T" + this.scheduleInput.startTime,
      endTime:
        this.scheduleInput.endTimeDate + "T" + this.scheduleInput.endTime,
      theatre: this.scheduleInput.theatre,
      price: this.scheduleInput.price,
    };
    const res = await this.$store.dispatch(
      MutationTypes.UPDATE_SCHEDULE,
      payload
    );
    if(res.status ===200){
        toast.success('Successfully updated');
        setTimeout(() => {
          window.location.reload();
      }, 2000);
    }
    else{
      console.log(res)
      toast.error(res.data);
    }
}
public handleOpenModalDeleteSchedule() {
  (this.$refs['modal-delete-schedule-component'] as any).openModal()
}

public async handleDeleteSchedule() {
  if(this.schedule?.total === 0){
      let res = await this.$store.dispatch(MutationTypes.DELETE_A_SCHEDULE, {
          scheduleId: this.schedule.id
      })
      if (res.status === 200) {
          toast.success("Delete successfully!")
          setTimeout(() => {
              window.location.reload();
          }, 2000);
      } else {
          toast.error(res.data)
      }
  }
  else{
      toast.error("Can not delete movie have profit")
  }
  
}
public tranfer() {
  this.scheduleInput.total=`${this.scheduleInput.total}$`
}
}
