import { IWebPartContext } from '@microsoft/sp-webpart-base';
import {
    SPHttpClient, SPHttpClientResponse
} from '@microsoft/sp-http';
import { ISPRoleAssignment } from '../interfaces/PermissionInterfaces';

export default class PermissionsHttpService {
    private _context: IWebPartContext;
    constructor(context: IWebPartContext) {
        this._context = context;
    }
    private _roleAssignmentUrl = "/_api/web/roleassignments?$expand=Member,Member/Users,RoleDefinitionBindings&$select=PrincipalId,Member/Title,Member/ID,Member/PrincipalType,Member/Users/Title,RoleDefinitionBindings/Id,RoleDefinitionBindings/Name";
    public GetRoleAssignmentData(): Promise<ISPRoleAssignment[]> {
        return this._context.spHttpClient
            .get(this._context.pageContext.web.absoluteUrl +
                this._roleAssignmentUrl, SPHttpClient.configurations.v1)
            .then((data: SPHttpClientResponse) => data.json() as Promise<{ value: ISPRoleAssignment[] }>)
                .then(jsonData => jsonData.value)
                .catch(err => {
                    console.log(err);
                    return [];
                });
    }
}
