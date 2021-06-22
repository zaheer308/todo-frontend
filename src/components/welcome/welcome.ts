// import { AuthenticationService } from "@/services";
// import { IUser } from "@/system/models";
// import { IVerify } from "@/system/models/auth/icredencial";
import { Options, Vue } from "vue-class-component";

@Options({
  name: "WelcomeView",
})
export default class WelcomeView extends Vue {
  // private user: IUser = {
  //   authenticated: false,
  //   name: '',
  //   exp: new Date(),
  //   userid: 0,
  //   verified: 0
  // };

  // private verify: IVerify = {
  //   username: '',
  //   verification: 0
  // };
  // private auth: AuthenticationService = null;


  created() {
    // this.auth = new AuthenticationService(this.$store);

    // this.user = this.$store.state.common.user;

  }

  // checkveify() {
  //   if (+this.user.verified == 0) {
  //     return true
  //   }
  //   else {
  //     return false
  //   }
  // }

  // verification() {
  //   this.verify.username = this.user.name;
  //   this.verify.verification = +this.verify.verification;
  //   this.auth.verifyEmail(this.verify)
  //     .then((value) => {

  //       if (value.indexOf("Verified") != -1) {
  //         this.$toast.success(value+`Please login again`);
  //         this.logout()

  //       }
  //       else {


  //         this.$toast.error(value);
  //       }
  //     })
  // }

  // logout() {

  //   var e = this.auth.logout()
  //   this.$router.push("/login")
  //   this.$toast.warning(`User logged out!`);

  // }
}
