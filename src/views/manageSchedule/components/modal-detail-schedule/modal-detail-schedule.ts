import { Vue, Options } from "vue-class-component";
import { MutationTypes } from "@/store/mutation-types";
import { toast } from "vue3-toastify";
@Options({
    props: {

    },
})

export default class ModalDetailSchedule extends Vue {
    public isShowModalCategories: any = false

    public movieInput:any={
        name: null,
        studio: null,
        publishDate: null,
        endDate: null,
        genre: null,
        type: null,
        actors: null,
        director: null,
        description: null,
        image: null,
        trailer: null,
        duration: null,
        profit:0,
    }
    public async mounted(){

    }
    public genre:any=[
        { 
            id: "654cadf4a705d39ceebe76a9",
            name: "Horror"
        },
        {
            id: "6552e20b216db62ca800c4e1",
            name: "Comedy"
        }
    ]
    public selectedGenres: any=[]
    public toggleModalCategories(event: any) {
        this.isShowModalCategories = !this.isShowModalCategories
    }

}