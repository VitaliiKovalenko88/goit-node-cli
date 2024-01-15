import fs from "fs/promises";
import path from "path";

const contactsPath = path.resolve('./db/contacts.json');

export async function listContacts() {
  // ...твій код. Повертає масив контактів.
  try {
    const getContacts = await fs.readFile(contactsPath);
    const contacts = JSON.parse(getContacts);
    return contacts;

  } catch (error) {
    console.log(error);
  }
}

export async function getContactById(contactId) {
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
  const getContacts = await fs.readFile(contactsPath);
  const contacts = JSON.parse(getContacts);
  const contactById = contacts.find(contact => contact.id === contactId)

  return contactById ? contactById : null;
}
getContactById('AeHIrLTr6JkxGE6SN-0Rw')
async function removeContact(contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

async function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту (з id).
}
