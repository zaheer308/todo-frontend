import { Options, Vue } from "vue-class-component";
import { AuthenticationService } from '@/services/auth';
import { ICredential, StoreTypes, PayloadMessageTypes } from '@/system/models';
import { TokenHelper } from '@/system/config';




@Options({
  name: "LoginView"
})
export default class LoginView extends Vue {

  private auth: AuthenticationService = null;
  private user: ICredential = { username: '', password: '' };
  private isLoading = false;


  created() {
    this.auth = new AuthenticationService(this.$store);

  }

  validation() {
    if (this.user.username.length > 0 && this.user.password.length > 0) {
      return false
    }
    else { return true }
  }

  mounted() {

  }

  login(): void {
    this.isLoading = true;

    var credentials: ICredential = {
      username: (this.user.username.toLowerCase()),
      password: this.user.password
    }

    this.auth.login(credentials)
      .then((value) => {
        this.isLoading = false;

        this.$store.dispatch(StoreTypes.updateUser, value)

        if (value.userid == -1) {
          this.$toast.error(value.name);
          TokenHelper.removeAccessToken();
        }
        else {

          



          // window.setTimeout(() => this.logout(), value.exp.getTime() - new Date().getTime());

          this.$toast.success(`Welcome`);
          this.$router.push("/")
        }


      })

  }

  // logout() {

  //   var e = this.auth.logout()
  //   this.$router.push("/login")
  //   this.$toast.error(`Token Expired!`);

  // }

}
