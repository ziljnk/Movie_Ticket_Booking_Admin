import { Vue, Options } from "vue-class-component";
import { MutationTypes } from "@/store/mutation-types";
import { toast } from "vue3-toastify";
@Options({
    watch: {
        scheduleInput: {
          handler(val, oldVal) {
            this.handleHasChanged();
          },
          deep: true,
        },
      },
})

export default class ModalDetailVoucher extends Vue {
    public voucherInput:any={
        name: null,
        code:null,
        value:0,
        description: null,
        isActive:true,
    }

    public isChanged: any = false;
    public voucher: any = null;
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
        if (mutation.type === "setVoucher") {
          this.voucher = mutation.payload;
          this.getData();
        }
      }
    );
  }
  public getData() {
    this.voucherInput = {
        name: this.voucher?.name,
        code: this.voucher?.code,
        value: this.voucher?.value,
        description: this.voucher?.description,
        isActive: this.voucher?.isActive,
    };
    console.log(this.voucherInput)
  }


  public handleHasChanged() {
    this.isChanged = false;
    if (
      this.voucherInput.name !== this.voucher?.name ||
      this.voucherInput.code !== this.voucher?.code ||
      this.voucherInput.value !== this.voucher?.value ||
      this.voucherInput.description !== this.voucher?.description||
      this.voucherInput.isActive !== this.voucher?.isActive
    )
      this.isChanged = true;
  }
  public async handleUpdate() {
    const payload = {
        voucher_id: this.voucher.id,
        name: this.voucherInput.name,
        description: this.voucherInput.description,
        isActive:  this.voucherInput.isActive
    };
    const res = await this.$store.dispatch(
      MutationTypes.UPDATE_VOUCHER,
      payload
    );
    if(res.status ===200){
        toast.success('Successfully updated');
        setTimeout(() => {
          window.location.reload();
      }, 2000);
    }
    else{
      toast.error(res.data);
    }
}


}