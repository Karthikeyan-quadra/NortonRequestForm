import { WebPartContext } from "@microsoft/sp-webpart-base";
export interface IFormProps {
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
  userEmail:string;
  context: WebPartContext; // Add or verify this line
}
