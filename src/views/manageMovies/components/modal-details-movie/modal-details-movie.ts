import { Vue, Options } from "vue-class-component";
import { MutationTypes } from "@/store/mutation-types";
import { toast } from "vue3-toastify";
import FormattedModal from "@/components/modal/modal.vue";
import { Modal } from "bootstrap";

@Options({
  watch: {
    userInput: {
      handler(val, oldVal) {
        this.handleHasChanged();
      },
      deep: true,
    },
  },
  components: {
    FormattedModal
}
})
export default class ModalDetailsMovie extends Vue {
  public movieInput: any = {
    name: null,
    studio: null,
    publishDate: null,
    endDate: null,
    genre: [],
    type: null,
    actors: null,
    director: null,
    description: null,
    image: null,
    trailer: null,
    duration: null,
    profit: 0,
  };
  public isShowModalCategories: any = false;
  public allGenre: any = [];
  public seletectedGenre: any = [];

  public isChanged: any = false;
  public movie: any = null;
  public unsubscribe!: any;

  public async mounted() {
    this.handleSubscribe();
    await this.fetchCategories();
  }

  public unmounted() {
    this.unsubscribe();
  }

  public handleSubscribe() {
    this.unsubscribe = this.$store.subscribe(
      async (mutation: any, state: any) => {
        if (mutation.type === "setMovie") {
          this.movie = mutation.payload;
          this.getData();
        }
      }
    );
  }

  public getData() {
    this.movieInput = {
      name: this.movie?.name,
      studio: this.movie?.studio,
      publishDate: this.movie?.publishDate?.slice(0, 10),
      endDate: this.movie?.endDate?.slice(0, 10),
      genre: this.movie?.genre,
      type: this.movie?.type,
      actors: this.movie?.actors,
      director: this.movie?.director,
      description: this.movie?.description,
      image: this.movie?.image,
      trailer: this.movie?.trailer,
      duration: this.movie?.duration,
      profit: this.movie?.profit,
    };
    this.seletectedGenre = this.movieInput.genre.map((genre: any) => genre.id);
  }

  public handleHasChanged() {
    this.isChanged = false;
    if (
      this.movieInput.name !== this.movie?.name ||
      this.movieInput.studio !== this.movie?.studio ||
      this.movieInput.publishDate !==
        (this.movie?.publishDate?.slice(0, 10) ?? null)||
        this.movieInput.endDate !==
        (this.movie?.endDate?.slice(0, 10) ?? null)||
      this.movieInput.genre !== this.movie?.genre ||
      this.movieInput.type !== this.movie?.type ||
      this.movieInput.actors !== this.movie?.actors ||
      this.movieInput.director !== this.movie?.director ||
      this.movieInput.description !== this.movie?.description ||
      this.movieInput.trailer !== this.movie?.trailer ||
      this.movieInput.duration !== this.movie?.duration
    )
      this.isChanged = true;
  }

  public toggleModalCategories(event: any) {
    this.isShowModalCategories = !this.isShowModalCategories;
  }
  public async fetchCategories() {
    let res = await this.$store.dispatch(MutationTypes.GET_ALL_GENRES);

    this.allGenre = res.data.data;
  }
  public handleCheckGenre(itemId: any) {
    return this.seletectedGenre.some((item: any) => item.id === itemId);
  }

  public async handleUpdate() {
      const payload = {
          movie_id: this.movie.id,
          name: this.movieInput.name,
          studio: this.movieInput.studio,
          publishDate: this.movieInput.publishDate,
          endDate: this.movieInput.endDate,
          genre: this.seletectedGenre,
          type: this.movieInput.type,
          actors: this.movieInput.actors,
          director: this.movieInput.director,
          description: this.movieInput.description,
          trailer: this.movieInput.trailer,
          duration: this.movieInput.duration,
      };
      const res = await this.$store.dispatch(
        MutationTypes.UPDATE_MOVIE,
        payload
      );
      if(res.status ===200){
          toast.success('Successfully updated');
          setTimeout(() => {
            window.location.reload();
        }, 2000);
      }
      else{
        toast.error(res.data);
      }
  }
    public handleOpenModalDeleteMovie() {
        (this.$refs['modal-delete-movie-component'] as any).openModal()
    }

    public async openModal() {
        const myModal = new Modal(this.$refs["modal-details-movie"] as any)
        myModal.show()
    }

    public async handleDeleteMovie() {
        if(this.movie?.profit === 0){
            let res = await this.$store.dispatch(MutationTypes.DELETE_A_MOVIE, {
                movieId: this.movie.id
            })
            if (res.status === 200) {
                toast.success("Delete successfully!")
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            } else {
                toast.error(res.data)
            }
        }
        else{
            toast.error("Can not delete movie have profit")
        }
        
    }
}
