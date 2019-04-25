export class StorageManagerService {


    getData(key: any): any {

        if (window.localStorage)
            return JSON.parse(localStorage.getItem(key));
        else
            alert("local storage un-accessable!");
    }

    setData(key: any, value: any): void {
        if (window.localStorage)
            localStorage.setItem(key, value);
        else
            alert("local storage un-accessable!");

    }

    deleteData(key : any) : void{
        localStorage.removeItem(key);

    }
    initilize(key :any ,value: any): any {

        if (window.localStorage) {
            if (localStorage.length > 0) {
                if (localStorage.getItem(key)) {
                    value = this.getData(key);
                    return value;
                }
                else {
                    value =[];
                    this.setData(key, JSON.stringify(value));
                }
            }
        }

        return value;
    }


}