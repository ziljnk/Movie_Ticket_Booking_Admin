import { Vue } from "vue-class-component";

export default class StatisticCard extends Vue {
    props = {
        title: String,
        value: String,
        percent: Number,
      }
}