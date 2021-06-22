
import { Options, Vue } from 'vue-class-component';

@Options({
    props: ['dataE', 'columns'],
    filters: {
        capitalize(str: any) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }
    }
})
export default class Grid extends Vue {

    private dataE: any = (<any>this).dataE;
    private columns: any = (<any>this).columns;
    private pre: any = (<any>this).pre;

    private searchQuery = '';
    private sortKey = '';
    private sortOrders: any = {};

    private startRow  = 0;
    private rowsPerPage = 10;
    private pageSizeMenu = [10, 20, 50, 100];

    created() {
        // let sortOrders = {};
        // this.columns.forEach(function ( key: number) {
        //     sortOrders[key.key] = 1;
        // })
        // this.sortOrders = sortOrders;
    }

    hasValue(item:any, column:any) {
        return item[column.toLowerCase()] !== 'undefined'
    }
    itemValue(item:any, column:any) {
        return item[column.toLowerCase()]
    }

    get filteredData() {
        const sortKey = this.sortKey;
        const filterKey = this.searchQuery && this.searchQuery.toLowerCase();
        const order = this.sortOrders[sortKey] || 1;
        let data = this.dataE;

        if (filterKey) {
            data = data.filter(function (row:any) {
                return Object.keys(row).some(function (key) {
                    return String(row[key]).toLowerCase().indexOf(filterKey) > -1;
                })
            })
        }
        if (sortKey) {
            data = data.slice().sort(function (a:any, b:any) {
                a = a[sortKey];
                b = b[sortKey];
                return (a === b ? 0 : a > b ? 1 : -1) * order;
            })
        }
        return data;
    }

    sortBy(key:any) {
        this.sortKey = key;
        this.sortOrders[key] = this.sortOrders[key] * -1
    }

    movePages(amount:any) {
        if (this.filteredData !== undefined) {
            const newStartRow = this.startRow + (amount * this.rowsPerPage);
            if (newStartRow >= 0 && newStartRow < this.filteredData.length) {
                this.startRow = newStartRow;
            }
        }
    }

    updateFilter(tex:any) {
        this.searchQuery = tex;
    }

    moveFirtst() {
        if (this.filteredData !== undefined) {
            this.startRow = 1;
        }
    }

    moveLast() {
        if (this.filteredData !== undefined) {
            this.startRow = Math.round(this.filteredData.length / this.rowsPerPage);
        }
    }

    get dataPerPage() {
        return this.filteredData !== undefined ? this.filteredData.filter((item:any, index:any) => index >= this.startRow && index < (this.startRow + this.rowsPerPage)) : '';
    }

    serialNumber(index:any) {
        return (this.startRow / this.rowsPerPage + 1) == 1 ? (index + 1) : ((index + 1) + ((this.startRow / this.rowsPerPage) * this.rowsPerPage));
    }
}