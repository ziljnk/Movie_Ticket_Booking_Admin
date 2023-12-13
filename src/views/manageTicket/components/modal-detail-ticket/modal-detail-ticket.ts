import { Vue, Options } from "vue-class-component";
import { MutationTypes } from "@/store/mutation-types";
import { toast } from "vue3-toastify";
@Options({
    props: {

    },
})

export default class ModalDetailTicket extends Vue {
    public ticketInput:any={
        id: null,
        movie:null,
        image:null,
        theatre:null,
        date:null,
        time:null,
        price: 0,
        seat:null,
        voucher:null,
        code:null,
        createdAt:null,
    }
    public ticket: any = null;
    public unsubscribe!: any;

  public async mounted() {
    this.handleSubscribe();
  }

  public unmounted() {
    this.unsubscribe();
  }

  public handleSubscribe() {
    this.unsubscribe = this.$store.subscribe(
      async (mutation: any, state: any) => {
        if (mutation.type === "setTicket") {
          this.ticket = mutation.payload;
          this.getData();
          this.tranfer();
        }
      }
    );
  }
  public getData() {
    this.ticketInput = {
        id: this.ticket?.id,
        image: this.ticket?.schedule?.movie?.image,
        movie: this.ticket?.schedule?.movie?.name,
        theatre: this.ticket?.schedule?.theatre?.name,
        price: this.ticket?.schedule?.price,
        date: this.ticket?.schedule?.startTime.slice(0,10),
        time: this.ticket?.schedule?.startTime.slice(11,16),
        seat:  this.ticket?.seat?.row + this.ticket?.seat?.number,
        voucher: this.ticket?.voucher?.value  || null,
        code: this.ticket?.voucher?.code  || null,
        createdAt: this.ticket?.createdAt.slice(0,10),
    };
    console.log(this.ticketInput)
  }
  
  public tranfer() {
    if( this.ticketInput.voucher === null){
        this.ticketInput.voucher = '0%'
        this.ticketInput.code = 'Empty'
    }
    else{
        this.ticketInput.voucher = `${this.ticketInput.voucher}%`
    }
    this.ticketInput.price=`${this.ticketInput.price}$`
  }


  

}