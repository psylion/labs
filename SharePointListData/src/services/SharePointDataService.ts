import { ISPList } from "../interfaces/ISPList";
import { ISPDataService } from "../interfaces/ISPDataService";
import {
    IWebPartContext
} from '@microsoft/sp-webpart-base';
import {
    SPHttpClient,
    SPHttpClientResponse,
    SPHttpClientConfiguration
} from '@microsoft/sp-http';
import { ISPListItem } from "../interfaces/ISPListItem";

export default class SharePointDataService implements ISPDataService {
    constructor(public context: IWebPartContext) { }
    public getLists(): Promise<ISPList[]> {
        let requestUrl: string = this.context.pageContext.web.absoluteUrl +
        //'/_api/web/lists?$filter=Hidden eq false and BaseType eq 0&$select=id,title';
        '/_api/web/lists?$filter=Hidden eq false&$select=id,title';
        return this.context.spHttpClient
            .get(requestUrl, SPHttpClient.configurations.v1)
            .then((response: SPHttpClientResponse) => response.json())
            .then((jsonData: any) => {
                return jsonData.value.map((element) => {
                    return { id: element.Id, name: element.Title };
                });
            })
            .catch((error) => {
                console.log("Something is WRONG!");
                console.log(error);
                return []
            });
    }
    public getListItems(ListID: string, MaxItems: number): Promise<ISPListItem[]> {
        let requestUrl: string = this.context.pageContext.web.absoluteUrl +
            "/_api/web/lists(guid'" + ListID + "')/items/?$top=" + MaxItems + "&$select=id,Title";
        return this.context.spHttpClient
            .get(requestUrl, SPHttpClient.configurations.v1)
            .then((response: SPHttpClientResponse) => response.json())
            .then((jsonData: any) => {
                return jsonData.value.map((element) => {
                    return { id: element.Id, title: element.Title };
                });
            })
            .catch((error) => {
                console.log("Something is WRONG!");
                console.log(error);
                return []
            });
    }

}

export interface ISPDataService {
    getLists(): Promise<ISPList[]>;
}