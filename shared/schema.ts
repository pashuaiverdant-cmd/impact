export const insertContactFormSchema = {
  parse: (data: any) => data
};
export const insertStatusCheckSchema = {
  parse: (data: any) => data
};
export type InsertContactSubmission = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};
export type InsertStatusCheck = {
  clientName: string;
};
