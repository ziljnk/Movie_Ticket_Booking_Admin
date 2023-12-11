import { Vue, Options } from "vue-class-component";
import { MutationTypes } from "@/store/mutation-types";
import { toast } from "vue3-toastify";
import { Modal } from "bootstrap";
@Options({
    props: {

    },
})

export default class ModalDetailSchedule extends Vue {
    public scheduleInput:any={
      startTime: null,
      endTime: null,
      movie: null,
      image: null,
      theatre: null,
      price: 0,
      total: 0,
      bookedSeat:[]
    }

    public rowArray: any = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
    public schedules:any=[]

    public isChanged: any = false;
    public schedule: any = null;
    public unsubscribe!: any;

    public async mounted() {
      this.handleSubscribe();
      console.log(1)
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
          }
        }
      );
    }
    public getData() {
      console.log(this.schedule)
      this.scheduleInput = {
        startTime: this.schedule?.startTime?.slice(0, 10),
        endTime: this.schedule?.endTime?.slice(0, 10),
        movie: this.schedule?.movie?.name,
        image: this.schedule?.movie?.image,
        theatre: this.schedule?.theatre?.name,
        price: this.schedule?.price,
        total: this.schedule?.total,
        bookedSeat: this.schedule?.bookedSeat,
        
      };
    }

    public async openModal() {
      const myModal = new Modal(this.$refs["modal-detail-schedule"] as any)
      myModal.show()
  }
  
    public isSeatBooked(row: string, number: number): boolean {
        return this.scheduleInput.bookedSeat.some(
            (seat: any) => seat?.seat?.row === row && seat?.seat?.number === number
        );
    }
    
}