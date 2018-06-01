export interface ListMail {
    id: number;
    subject: string;
    name: string;
    messages: string;
    email: string;
}
export interface IListMail {
    id: number;
    subject: string;
    name: string;
    messages: string;
    email: string;
}
export function CreateEmail(data): IListMail {
    return {
        id: data.id,
        subject: data.subject,
        name: data.name,
        messages: data.messages,
        email: data.email
    }
}
