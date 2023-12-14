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
export default class ModalCreateNews extends Vue {
    public contentPost: any = null
    public titlePost: any = null
    public chosenImage: any = null
    public file: any = null
    public imageURL: any = null

    public async openModal() {
        const myModal = new Modal(this.$refs["modal-create-news"] as any)
        myModal.show()
    }

    public async handleClickSave() {
        if (!this.titlePost || !this.contentPost) {
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
                        toast.error('Upload image failed: ' + err)
                    })
            }
            await this.$store.dispatch(MutationTypes.CREATE_A_NEWS, {
                "title": this.titlePost,
                "content": this.contentPost,
                "imageURL": this.imageURL,
                "creator": this.$store.state.userData.id
            }).then((res: any) => {
                console.log(res)
                toast.success('Create news successfully')
                window.location.reload()
            }).catch((err: any) => {
                toast.error('Create news failed')
                console.log(err)
            })
        }
    }

    public handleChooseImage(event: any) {
        this.file = event.target.files[0]
        if (this.file) {
            this.chosenImage = URL.createObjectURL(this.file)
        }
    }

    public handleDeleteImage() {
        this.chosenImage = null
    }
}