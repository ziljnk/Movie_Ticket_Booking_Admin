import { Vue,Options } from 'vue-class-component'
import NavigationBar from '@/components/navigationBar/navigationBar.vue'
import Header from '@/components/header/header.vue'
import ModalAddVoucher from './components/modal-add-voucher/modal-add-voucher.vue';
import ModalDetailVoucher from './components/modal-detail-voucher/modal-detail-voucher.vue';
import { MutationTypes } from '@/store/mutation-types';
@Options({
    components: {
        NavigationBar,
        Header,
        ModalAddVoucher,
        ModalDetailVoucher
    },
    watch: {
        searchQuery: 'handleSearchQueryChange',
    }
})
export default class ManageVouchers extends Vue {
    public searchQuery:any=null;
    public currentPage:any=1;
    public totalPage:any=1;
    public vouchers:any=[]

    async beforeMount() {
        await this.fetchVouchers();
      }
    
      public async fetchVouchers() {
        let res = await this.$store.dispatch(MutationTypes.GET_ALL_VOUCHERS, {
          page: this.currentPage,
          pageSize: 7,
        });
        this.totalPage = res.data.totalPages;

        this.vouchers = res.data.data;
      }
    
      public handleDetaiTheatre(item:any){
        this.$store.commit("setVoucher", item);
      }
    
      public handleSearchQueryChange(val: string, oldVal: string) {
        if (val === '') {
          this.fetchVouchers();
      } else {
          this.searchVoucher();
      }
    }
      public async searchVoucher() {
        let res = await this.$store.dispatch(MutationTypes.SEARCH_VOUCHER, {
         code:this.searchQuery,
         page: this.currentPage,
         pageSize:7,
        })
    
        this.totalPage = res.data.totalPages
        this.vouchers = res.data.data
      }

      public handleNextPage(index:any){
        this.currentPage= index+1;
        this.fetchVouchers()
    }
}