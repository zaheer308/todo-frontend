

import { Options, Vue } from "vue-class-component";
import { UseAxios, TokenHelper } from '@/system/config';
import { useRouter } from 'vue-router';
import { RootStoreTypes, StoreTypes } from '@/system/models/store/types';
import Store from '@/system/store/app';
import { AuthenticationService } from "./services";

@Options({
    name: "App",
})
export default class ApplicationView extends Vue {
    private auth: AuthenticationService = null;


    created() {
        this.auth = new AuthenticationService(this.$store);

        let router = useRouter();
        UseAxios();

        let token = TokenHelper.getAccessToken();

        if (token != null) {
            var user = TokenHelper.parseUserToken(token);

            window.setTimeout(() => this.logout(), user.exp.getTime() - new Date().getTime());

            this.$store.dispatch(StoreTypes.updateUser, user);

        }
    }

    logout() {

        var e = this.auth.logout()
        this.$router.push("/login")
        this.$toast.error(`Token Expired!`);
    
      }
}
