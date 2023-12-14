
import { MutationTypes } from '@/store/mutation-types'
import { Vue,Options } from 'vue-class-component'


export default class Login extends Vue {
    public username: string = ''
    public password: string = ''

    public async handleSignIn() {
        const payload = {
            id: "",
            account: this.username,
            password: this.password
        }

        let response = await this.$store.dispatch(MutationTypes.LOGIN_REQUEST, payload)

        if (response.status === 200) {
            localStorage.setItem('sessionTokens', JSON.stringify(response.data.token))
            await this.$router.push('/')
        }
    }
}