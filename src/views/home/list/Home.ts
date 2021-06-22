import { ITodo } from './../../../models/Itodo';
import { Options, Vue } from "vue-class-component";
import { todoService } from '@/services/index';
import { IUser } from '@/system/models';
import TodoOperationView from '../operation/index.vue';
import moment from 'moment';
import { TokenHelper } from '@/system/config';




@Options({
    name: 'HomeView',
    components: {
        'add-edit': TodoOperationView
    }
})

export default class HomeView extends Vue {

    private user: IUser = {
        authenticated: false,
        name: '',
        exp: new Date(),
        userid: 0
    };

    private datas: Array<ITodo> = [];

    private item: ITodo = { id: 0, title: '', description: '', userid: 0, datetime: new Date() };
    private isNew: boolean = true;
    private isEditing: boolean = false;

    private isLoading = false;
    private iswelcome = false;


    private columns = [
        { key: "title", caption: "Title" },
        { key: "description", caption: "Description" },
        { key: "datetime", caption: "Timestamp" },
        { key: "action", caption: "Operation" },
    ];

    private list: any = [];




    private repository: todoService = null;



    private edit(pItem: ITodo) {                          //edit params
        this.isNew = false;
        this.isEditing = true;
        this.item = pItem;
    }

    private remove(pItem: ITodo) {                       //to delete item
        if (confirm(`Are you sure to delete!`) == true) {
            this.isLoading = true;
            this.repository.DeleteById(pItem.id.toString())
                .then(() => {
                    this.refreshData(this.user.userid.toString())
                    this.isLoading = false;
                });
        }
    }

    private save() {                                     //to save item
    
        if (this.isNew == true) {
            this.isLoading = true;
            this.item.userid = +this.item.userid;
            this.repository.Insert(this.item)
                .then(() => {
                    this.refreshData(this.user.userid.toString())
                    this.isLoading = false;

                });
        } else {                                      // to update item
            this.isLoading = true;

            this.item.datetime = new Date();
            this.repository.Update(this.item)
                .then(() => {
                    this.refreshData(this.user.userid.toString())
                    this.isLoading = false;

                });
        }

        this.isEditing = false;


    }

    private cancel() {                            // to hide Add/Edit component
        this.isEditing = false;
    }

    private new() {
        this.isNew = true;
        this.isEditing = true;
        this.item = { id: 0, title: '', description: '', userid: +this.user.userid, datetime: new Date() };
    }

    formatdatetime(opt) {                              //to format timestamp
        const format1 = "YYYY-MM-DD HH:mm:ss"
        return moment(opt).format(format1);
    }


    created() {

        let token = TokenHelper.getAccessToken();

        if (token != null) {                              // if user logged in
            this.iswelcome = false
            this.user = this.$store.state.common.user;


            this.repository = new todoService(this.$store);
            this.refreshData(this.user.userid.toString());
        }
        else { // if guest user
            this.iswelcome = true

        }





    }

    refreshData(id) {                           // get to do items 
        this.isLoading = true;

        this.repository
            .FindBy(id)
            .then(response => {
                this.datas = response as Array<ITodo>
                this.isLoading = false;


                this.list = this.datas;
                this.list.forEach(element => {
                    element.datetime = this.formatdatetime(element.datetime)
                    element.action = ''
                });


            });

    }
}