import { Vue,Options } from 'vue-class-component'
import NavigationBar from '@/components/navigationBar/navigationBar.vue'
import Header from '@/components/header/header.vue'
import ModalAddMovie from './components/modal-add-movies/modal-add-movies.vue';
import ModalAddGenre from './components/modal-add-genre/modal-add-genre.vue';
import ModalDetailsMovie from './components/modal-details-movie/modal-details-movie.vue';
import { MutationTypes } from '@/store/mutation-types';
@Options({
    components: {
        NavigationBar,
        Header,
        ModalAddMovie,
        ModalAddGenre,
        ModalDetailsMovie
    },
    watch: {
      searchQueryGenre: 'handleSearchQueryGenreChange',
  },
})
export default class ManageMovies extends Vue {
    public allMovies: any = []
    public allGenre: any = []
    public MovieItem: any = {}
    public searchQuery: string = ''
    public searchQueryGenre: string = ''
    public totalPages: number = 1
    public currentPage: number = 1
    public totalPageGenres: number = 1
    public currentPageGenres: number = 1

    async beforeMount() {
        await this.fetchMovies()
        await this.fetchGenre()
      }

      public async fetchMovies() {
        let res = await this.$store.dispatch(MutationTypes.GET_ALL_MOVIES, {
         page: this.currentPage,
        pageSize:4,
       })
   
        this.allMovies = res.data.data
        this.totalPages = res.data.totalPages
     }
   
     public async fetchGenre() {
       let res = await this.$store.dispatch(MutationTypes.GET_ALL_GENRES, {
        page: this.currentPageGenres,
        pageSize:7,
       })
   
       this.totalPageGenres = res.data.totalPages
       this.allGenre = res.data.data
     }
     public handleNextPage(item:any,index:any){
        if(item==='movie'){
            this.currentPage= index+1;
            this.fetchMovies()
        }
        else{
            this.currentPageGenres= index+1;
            this.fetchGenre()
        }
        
      }

      public handleSearchQueryGenreChange(val: string, oldVal: string) {
        if (val === '') {
          this.fetchGenre();
      } else {
          this.searchGenre();
      }
    }
      public async searchGenre() {
        let res = await this.$store.dispatch(MutationTypes.SEARCH_GENRE, {
         query:this.searchQueryGenre,
         page: this.currentPageGenres,
         pageSize:7,
        })
    
        this.totalPageGenres = res.data.totalPages
        this.allGenre = res.data.data
      }
      public handleDetailMovie(item:any){
        (this.$refs['detailsMovie'] as any).openModal()
        this.$store.commit("setMovie", item);
      }
}