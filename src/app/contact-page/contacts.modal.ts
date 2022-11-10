
export interface Contacts {
    name: string;
    role: string;
    img: string;
    email: Email[];
    bio: string;
    dial: string;
    meeting: string;
    phone: Phone[];

}

export interface Email {
    email: string;
    isPrimary: boolean;
}

export interface Phone {
    phoneNo: string;
    isPrimary: boolean;
}