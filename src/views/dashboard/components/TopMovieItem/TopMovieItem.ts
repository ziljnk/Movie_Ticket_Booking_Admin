import { Vue, Options } from "vue-class-component";

@Options({
    props: {
        movieData: Object,
    }
})

export default class TopMovieItem extends Vue {
    public movieData!: any;
}