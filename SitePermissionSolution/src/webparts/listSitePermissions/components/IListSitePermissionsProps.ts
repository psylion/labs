import { IListSitePermissionsWebPartProps } from "../ListSitePermissionsWebPart";
import { IWebPartContext } from "@microsoft/sp-webpart-base";

export interface  IListSitePermissionsProps extends IListSitePermissionsWebPartProps {
  context: IWebPartContext;
}
