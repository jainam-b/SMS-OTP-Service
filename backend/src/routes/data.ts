export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
}

export interface SentMessage {
  contact: Contact;
  otp: string;
  time: Date;
}

export const contacts: Contact[] = [
  { id: 1, firstName: 'John', lastName: 'Doe', phone: '+919157228672' },
  { id: 2, firstName: 'Jane', lastName: 'Smith', phone: '+919426678968' },
  { id: 3, firstName: 'Testing', lastName: 'Number', phone: '+919810153260' }
];

export const messages: SentMessage[] = [];
