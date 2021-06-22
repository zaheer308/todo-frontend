import { Options, Vue } from "vue-class-component";
import { AuthenticationService } from '@/services/auth';
import { ICredential, StoreTypes, PayloadMessageTypes } from '@/system/models';
import { TokenHelper } from '@/system/config';
import { compile } from "vue";


@Options({
  name: "SignupView"
})
export default class SignupView extends Vue {

  private auth: AuthenticationService = null;
  private user: ICredential = { username: '', password: '' };
  private password = '';
  private isLoading = false;


  created() {
    this.auth = new AuthenticationService(this.$store);

  }

  mounted() {

  }

  validation() {
    if (this.user.username.length > 0 && this.user.password.length > 0 && this.password.length > 0) {
      return false
    }
    else { return true }
  }

  signup(): void {
    if (this.user.password == this.password) {
      this.isLoading = true;

      var credentials: ICredential = {
        username: (this.user.username.toLowerCase()),
        password: this.user.password
      }

      this.auth.signup(credentials)
        .then((value) => {
          this.isLoading = false;

          if (value.username != undefined) {
            this.$toast.success(`Please login`);
            this.$router.push("/login")

          }
          else {
            this.$toast.error(value);

          }


        })

    }
    else {
      this.$toast.error(`Password missmatch!`);

    }
  }
}
