import { ITodo } from './../../../models/Itodo';

import { Options, Vue } from "vue-class-component";


@Options({
    name: "TodoOperationView",
    props: ['item', 'isNew'],
})
export default class TodoOperationView extends Vue {
    private item: ITodo = (<any>this).item;
    private isNew: boolean = (<any>this).isNew;

    private isActive: boolean = false;
    private record:string = '';

    created() {
        this.record = this.isNew ? 'Add Todo Record' : 'Edit Todo Record';
        console.log(JSON.stringify(this.item))
        // alert('here')

    }

    validation() {
        if (this.item.title.length > 0 && this.item.description.length > 0) {
            return false
        }
        else { return true }
    }
}