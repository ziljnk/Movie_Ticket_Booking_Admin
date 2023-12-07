import { Vue,Options } from 'vue-class-component'
import NavigationBar from '@/components/navigationBar/navigationBar.vue'
import Header from '@/components/header/header.vue'
import ModalDetailTicket from './components/modal-detail-ticket/modal-detail-ticket.vue';
@Options({
    components: {
        NavigationBar,
        Header,
        ModalDetailTicket
    }
})
export default class ManageTickets extends Vue {
    public date:any=null;
    public searchQuery:any=null;
    public currentPage:any=1;
    public totalPage:any=1;
    public tickets:any=[
        {
            id: "655c29bd824609ea7dcff9c0",
            schedule: "6555e1e67738a9358efd3fcb",
            seat: {
                id: "6551d630f6783a532f284410",
                theatre: "6551d62ef6783a532f28440b",
                row: "A",
                number: 5
            },
            "voucher": {
                id: "655c2281b265c861941a773d",
                name: "Voucher 1",
                code: "VOUCHER1",
                description: "voucher 1111",
                value: 30
            },
            createdAt: "2023-11-21T03:53:33.404Z",
            updatedAt: "2023-11-21T03:53:33.404Z",
            price: 38500
        },
        {
            id: "655732d52e048205ff55bc06",
            schedule: "6555e1e67738a9358efd3fcb",
            seat: {
                id: "6551d630f6783a532f28440f",
                theatre: "6551d62ef6783a532f28440b",
                row: "A",
                number: 4
            },
            "voucher": null,
            createdAt: "2023-11-17T09:31:01.017Z",
            updatedAt: "2023-11-17T09:31:01.017Z",
            price: 55000
        },
        {
            id: "6555fa2cc70a36dea428dcbc",
            schedule: "6555e1e67738a9358efd3fcb",
            seat: {
                id: "6551d630f6783a532f28440e",
                theatre: "6551d62ef6783a532f28440b",
                row: "A",
                number: 3
            },
            "voucher": null,
            createdAt: "2023-11-16T11:17:00.824Z",
            updatedAt: "2023-11-16T11:17:00.824Z",
            price: 55000
        },
        {
            id: "6553499d30017e61ab9443b8",
            schedule: "6555e1e67738a9358efd3fcb",
            seat: {
                id: "6551d62ff6783a532f28440c",
                theatre: "6551d62ef6783a532f28440b",
                row: "A",
                number: 1
            },
            "voucher": {
                id: "655c2298b265c861941a773e",
                name: "Voucher 2",
                code: "VOUCHER2",
                description: "voucher 2222",
                value: 5
            },
            createdAt: "2023-11-14T10:19:09.682Z",
            updatedAt: "2023-11-14T10:19:09.682Z",
            price: 52250
        },
        {
            id: "6553498a30017e61ab9443b7",
            schedule: "6555e1e67738a9358efd3fcb",
            seat: {
                id: "6551d62ff6783a532f28440d",
                theatre: "6551d62ef6783a532f28440b",
                row: "A",
                number: 2
            },
            "voucher": {
                id: "655c2281b265c861941a773d",
                name: "Voucher 1",
                code: "VOUCHER1",
                description: "voucher 1111",
                value: 30
            },
            createdAt: "2023-11-14T10:18:50.29Z",
            updatedAt: "2023-11-14T10:18:50.29Z",
            price: 38500
        }
    ]
}