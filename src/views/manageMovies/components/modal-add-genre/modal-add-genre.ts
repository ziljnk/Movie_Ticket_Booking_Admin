import { Vue, Options } from "vue-class-component";
import { MutationTypes } from "@/store/mutation-types";
import { toast } from "vue3-toastify";
@Options({
    props: {

    },
})

export default class ModalAddGenre extends Vue {
    public genreName: any = '';
    public validInput:any=false;
    public invalidMessage:any={
        name: "",
    }

        public async handleClickActionButton() {
            if (!this.handleValidInput()) return;
            const payload = { 
                name: this.genreName,
            };
            const res = await this.$store.dispatch(
            MutationTypes.CREATE_GENRE,
            payload
            );
            if(res.status ===201){
                toast.success('Successfully created');
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            }
        }

    public handleValidInput(){
        this.validInput = false;

        this.invalidMessage.name = "";
        if (!this.genreName) {
            this.invalidMessage.name = "Please enter genre's name";
            return
        }


        this.validInput = true;
        return this.validInput
    }
}