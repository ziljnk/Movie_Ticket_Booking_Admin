import { Vue,Options } from 'vue-class-component'
import NavigationBar from '@/components/navigationBar/navigationBar.vue'
import Header from '@/components/header/header.vue'
import ModalAddVoucher from './components/modal-add-voucher/modal-add-voucher.vue';
import ModalDetailVoucher from './components/modal-detail-theatre/modal-detail-voucher.vue';
@Options({
    components: {
        NavigationBar,
        Header,
        ModalAddVoucher,
        ModalDetailVoucher
    }
})
export default class ManageVouchers extends Vue {
    public date:any=null;
    public searchQuery:any=null;
    public currentPage:any=1;
    public totalPage:any=1;
    public tickets:any=[
        {
            id: "655c2281b265c861941a773d",
            name: "Voucher 1",
            code: "VOUCHER1",
            description: "Nhân dịp lễ quốc khánh, giảm giá vé xem phim sập sàn, trợ giá đến 30%",
            value: 30
        },
        {
            id: "655c2298b265c861941a773e",
            name: "Voucher 2",
            code: "VOUCHER2",
            description: "voucher 2222",
            value: 5
        },
        {
            id: "655c22a4b265c861941a773f",
            name: "Voucher 3",
            code: "VOUCHER3",
            description: "voucher 3333",
            value: 10
        }
    ]
}