import { Vue,Options } from 'vue-class-component'
import NavigationBar from '@/components/navigationBar/navigationBar.vue'
import Header from '@/components/header/header.vue'

@Options({
    components: {
        NavigationBar,
        Header
    }
})
export default class ManageMovies extends Vue {

}