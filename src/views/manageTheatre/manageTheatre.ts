import { Vue,Options } from 'vue-class-component'
import NavigationBar from '@/components/navigationBar/navigationBar.vue'
import Header from '@/components/header/header.vue'
import ModalAddTheatre from './components/modal-add-theatre/modal-add-theatre.vue';
import ModalDetailTheatre from './components/modal-detail-theatre/modal-detail-theatre.vue';
@Options({
    components: {
        NavigationBar,
        Header,
        ModalAddTheatre,
        ModalDetailTheatre
    }
})
export default class ManageTheatres extends Vue {
    public date:any=null;
    public searchQuery:any=null;
    public currentPage:any=1;
    public totalPage:any=1;
    public theatres:any=[
        {
            id: "6551d62ef6783a532f28440b",
            name: "Theater 01",
            description: "The first theatre on the left"
        }
    ]
}