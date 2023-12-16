import { Vue, Options } from "vue-class-component";

@Options({
    props: {
        title: String,
        value: String,
        percent: Number,
      }
})

export default class StatisticCard extends Vue {
    public title!: string;
    public value!: string;
    public percent!: number;
}