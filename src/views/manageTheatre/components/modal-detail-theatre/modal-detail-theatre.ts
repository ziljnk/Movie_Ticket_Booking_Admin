import { Vue, Options } from "vue-class-component";
import { MutationTypes } from "@/store/mutation-types";
import { toast } from "vue3-toastify";
import { Modal } from "bootstrap";
import FormattedModal from "@/components/modal/modal.vue";

@Options({
    watch: {
        scheduleInput: {
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

export default class ModalDetailTheatre extends Vue {
    public theatreInput:any={
        name: null,
        description: null,
    }

    public isChanged: any = false;
    public theatre: any = null;
    public unsubscribe!: any;

  public async mounted() {
    this.handleSubscribe();
  }

  public unmounted() {
    this.unsubscribe();
  }

  public handleSubscribe() {
    this.unsubscribe = this.$store.subscribe(
      async (mutation: any, state: any) => {
        if (mutation.type === "setTheatre") {
          this.theatre = mutation.payload;
          this.getData();
        }
      }
    );
  }
  public getData() {
    this.theatreInput = {
        name: this.theatre?.name,
        description: this.theatre?.description
    };
  }


  public async openModal() {
    const myModal = new Modal(this.$refs["modal-detail-theatre"] as any);
    myModal.show();
  }


  public handleHasChanged() {
    this.isChanged = false;
    if (
      this.theatreInput.theatre !== this.theatre?.name ||
      this.theatreInput.description !== this.theatre?.description
    )
      this.isChanged = true;
  }
  public async handleUpdate() {
    const payload = {
        theatre_id: this.theatre.id,
        name: this.theatre.name,
      description: this.theatre.description,
    };
    const res = await this.$store.dispatch(
      MutationTypes.UPDATE_SCHEDULE,
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
public handleOpenModalDeleteSchedule() {
  (this.$refs['modal-delete-theatre-component'] as any).openModal()
}

public async handleDeleteSchedule() {
      let res = await this.$store.dispatch(MutationTypes.DELETE_THEATRE, {
          theatreId: this.theatre.id
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
  

}