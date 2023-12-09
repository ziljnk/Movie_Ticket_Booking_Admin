import { Vue, Options } from "vue-class-component";
import { MutationTypes } from "@/store/mutation-types";
import { toast } from "vue3-toastify";
@Options({
    props: {

    },
})

export default class ModalAddMovie extends Vue {
    public allGenres: any = []
    public isShowModalGenres: any = false
    public fileInput:any = [];
    public fileInput1:any = [];
    public movieInput:any={
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
        profit:0,
    }
    public async mounted(){
        this.fetchGenres()
    }
    public async fetchGenres() {
        let res = await this.$store.dispatch(MutationTypes.GET_ALL_GENRES,{
            pageSize:1000,
        })
    
        this.allGenres = res.data.data
    }


    public selectedGenres: any=[]
    public toggleModalCategories(event: any) {
        this.isShowModalGenres = !this.isShowModalGenres
    }

    public async handleClickBtn() {
        const formData = new FormData();
        formData.append('ImageFile', this.fileInput[0]);

        try {
            // Thực hiện mutation UPLOAD_IMAGE để upload hình ảnh
            const uploadResponse = await this.$store.dispatch(
                MutationTypes.UPLOAD_IMAGE,
                formData
            );

            if (uploadResponse.status === 200) {
                toast.success('Image uploaded successfully');
                const imageUrl = uploadResponse.data.imageUrl;

                // Sử dụng thông tin từ response để tạo movie mới
                const createMovieResponse = await this.$store.dispatch(
                    MutationTypes.CREATE_MOVIE,
                    {
                        name: this.movieInput.name,
                        studio: this.movieInput.studio,
                        publishDate: this.movieInput.publishDate,
                        endDate: this.movieInput.endDate,
                        genre: this.movieInput.genre,
                        type: this.movieInput.type,
                        actors: this.movieInput.actors,
                        director: this.movieInput.director,
                        description: this.movieInput.description,
                        image: imageUrl,
                        trailer: this.movieInput.trailer,
                        duration: this.movieInput.duration,
                        profit:0,
                    }
                );

                if (createMovieResponse.status === 201) {
                    toast.success('Movie created successfully');
                } else {
                    toast.error('Failed to create movie');
                }
            } else {
                toast.error('Failed to upload image');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    

    public onFileSelected(event: any) {
        const selectedFiles = (event.target as HTMLInputElement).files;
    
        if (selectedFiles) {
          for (let i = 0; i < selectedFiles.length; i++) {
            const file = selectedFiles[i];
    
            if (file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/jpg') {
              this.fileInput[0]=file;
              const reader = new FileReader();
              reader.onload = () => {
                this.fileInput1[0]=reader.result;
              };
              reader.readAsDataURL(file);
            }else {
                toast.error("Invalid file");
            }
          }
        }
    }

}