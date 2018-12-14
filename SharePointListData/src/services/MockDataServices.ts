import { ISPDataService } from "../interfaces/ISPDataService";
import { ISPList } from "../interfaces/ISPList";
import { ISPListItem } from "../interfaces/ISPListItem";

export default class MockDataService implements ISPDataService{
    public getLists(): Promise<ISPList[]>{
        var mockData: ISPList[] = [
            {id: "1", name: "Annoucements"},
            {id: "2", name: "Calendar"}
        ];
        return Promise.resolve(mockData);
    }
    public getListItems(ListID: string, MaxItems: number): Promise<ISPListItem[]>{
        var mockData: ISPListItem[] = [];
        for (let i=0, max = MaxItems; i < MaxItems; i+= 1){
            mockData.push({id: i, title: "Item" + i});
        }
        return Promise.resolve(mockData);
    }

}