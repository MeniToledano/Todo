export class StorageManagerService {


    getData(key: string): string {

        if (window.localStorage)
            return localStorage.getItem(key);
        else
            alert("local storage inaccessible!");
    }

    setData(key: string, value: string): void {
        if (window.localStorage)
            localStorage.setItem(key, value);
        else
            alert("local storage inaccessible!");

    }

    deleteData(key : string) : void{
        localStorage.removeItem(key);

    }
    initilize(key :string): string {

        if (window.localStorage) {
            if (localStorage.length > 0) {
                if (localStorage.getItem(key))
                    return this.getData(key);
                else
                    this.setData(key, '');
            }
        }
        return '';
    }

}