import { Modal } from 'bootstrap'
import { Vue, Options } from 'vue-class-component'
import { QuillEditor } from '@vueup/vue-quill'
import { MutationTypes } from '@/store/mutation-types'
import { toast } from 'vue3-toastify'
@Options({
    components: {
        QuillEditor
    }
})
export default class ModalUpdateNews extends Vue {
    public contentPost: any = null
    public titlePost: any = null
    public chosenImage: any = null
    public file: any = null
    public chosenNews: any = null
    public unsubscribe!: any;
    public imageURL: any = null

    public async mounted() {
        this.handleSubscribe();
    }

    public unmounted() {
        this.unsubscribe();
    }

    public handleSubscribe() {
        this.unsubscribe = this.$store.subscribe(
          async (mutation: any, state: any) => {
            if (mutation.type === "setChosenNews") {
              this.chosenNews = {...state.chosenNews};
                this.imageURL = this.chosenNews.imageURL
            }
          }
        );
      }

    public async openModal() {
        const myModal = new Modal(this.$refs["modal-update-news"] as any)
        myModal.show()
    }

    public async handleClickSave() {
        if (!this.chosenNews.title || !this.chosenNews.content) {
            toast.error('Please fill in all fields')
            return
        } else {
            if (this.file) {
                const formData = new FormData()
                formData.append('ImageFile', this.file)
                await this.$store.dispatch(MutationTypes.UPLOAD_IMAGE, formData)
                    .then((res: any) => {
                        if (res.status === 200) {
                            this.imageURL = res.data.imageUrl
                            console.log(this.imageURL)
                        }
                    }).catch((err: any) => {
                        toast.error('Upload image failed')
                    })
            }

            await this.$store.dispatch(MutationTypes.UPDATE_NEWS, {
                "title": this.chosenNews.title,
                "content": this.chosenNews.content,
                "imageURL": this.imageURL,
                "newsId": this.chosenNews.id
            }).then((res: any) => {
                console.log(res)
                toast.success('Update news successfully')
                window.location.reload()
            }).catch((err: any) => {
                toast.error('Update news failed')
                console.log(err)
            })
        }
    }

    public handleChangeFile(event: any) {
        this.file = event.target.files[0]
        if (this.file) {
            this.chosenNews.imageURL = URL.createObjectURL(this.file)
        }
    }

    public handleDeleteImage() {
        this.chosenNews.imageURL = null
    }
}