// src/features/contacts/contactsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Contact {
  id: number;
  title: string;
  desc: string;
  status: string;
  // Other contact fields
}

interface ContactsState {
  contacts: Contact[];
}

const initialState: ContactsState = {
  contacts: [
    {
      id: 1,
      title: 'new task',
      desc: 'COmplete it by today',
      status: 'done',
    },
    {
      id: 2,
      title: 'new task 1',
      desc: 'COmplete it by tommorow',
      status: 'notdone',
    },
    {
      id: 3,
      title: 'new task 2',
      desc: 'COmplete it by Sunday',
      status: 'done',
    }

  ],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload);
    },
    editContact: (state, action: PayloadAction<Contact>) => {
      const { id, title, desc, status } = action.payload;
      const existingContact = state.contacts.find(contact => contact.id === id);
      if (existingContact) {
        existingContact.title = title;
        existingContact.desc = desc;
        existingContact.status = status;
      }
    },
    deleteContact: (state, action: PayloadAction<number>) => {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    }
  },
});

export const { addContact ,editContact,deleteContact} = contactsSlice.actions;
export default contactsSlice.reducer;
