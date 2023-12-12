import { Vue, Options } from "vue-class-component";
import { MutationTypes } from "@/store/mutation-types";
import { toast } from "vue3-toastify";
@Options({
    props: {

    },
})

export default class ModalAddVoucher extends Vue {
    public voucherInput:any={
        name: null,
        code:null,
        value:0,
        description: null,
        isActive:true,
    }
    public async handleClickActionButton() {
        const payload = { 
            name: this.voucherInput.name,
            code: this.voucherInput.code,
            value: this.voucherInput.value,
            description: this.voucherInput.description,
            isActive: this.voucherInput.isActive,
        };
        const res = await this.$store.dispatch(
        MutationTypes.CREATE_VOUCHER,
        payload
        );
        if(res.status ===201){
            toast.success('Theatre created successfully!');
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        }
        else{
            toast.error(res.data);
        }
    }

}