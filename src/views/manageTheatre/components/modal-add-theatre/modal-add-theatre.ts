import { Vue, Options } from "vue-class-component";
import { MutationTypes } from "@/store/mutation-types";
import { toast } from "vue3-toastify";
@Options({
    props: {

    },
})

export default class ModalAddTheatre extends Vue {

    public theatreInput:any={
        name: null,
        description: null,
    }
    public async handleClickActionButton() {
        const payload = { 
            name: this.theatreInput.name,
            description: this.theatreInput.description,
        };
        const res = await this.$store.dispatch(
        MutationTypes.CREATE_THEATRE,
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