import { MutationTypes } from '@/store/mutation-types';
import { Vue, Options } from 'vue-class-component'
import { toast } from 'vue3-toastify'
import FormattedModal from '@/components/modal/modal.vue';

@Options({

})

export default class ModalDetailsMovie extends Vue {
    public bookItem!: any
    public movieInput: any=null;

    public isCopiedId: any = false
    public copiedBook: any = {}
    public isShowModalCategories: any = false
    public allCategories: any = []
    public seletectedCategory: any = []
    public fileInput:any = [];
    public fileInput1:any = [];
    public imagesNotUpload = new FormData();


}