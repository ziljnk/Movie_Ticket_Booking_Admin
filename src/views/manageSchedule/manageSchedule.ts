import { Vue,Options } from 'vue-class-component'
import NavigationBar from '@/components/navigationBar/navigationBar.vue'
import Header from '@/components/header/header.vue'

@Options({
    components: {
        NavigationBar,
        Header,
    }
})
export default class ManageSchedule extends Vue {
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