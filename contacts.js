import fs from "fs/promises";
import path from "path";

const contactsPath = path.resolve('./db/contacts.json');
const getContacts = await fs.readFile(contactsPath)

export async function listContacts() {
  // ...твій код. Повертає масив контактів.
  try {

    const contacts = JSON.parse(getContacts);
    return contacts;

  } catch (error) {
    console.log(error);
  }
}

export async function getContactById(contactId) {
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
  try {
    ;
    const contacts = JSON.parse(getContacts);
    const contactById = contacts.find(contact => contact.id === contactId)

    return contactById ? contactById : null;
  } catch (error) {
    console.log(error);
  }

}

async function removeContact(contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
  try {

  } catch (error) {
    console.log(error.message);
  }
}
removeContact('05olLMgyVQdWRwgKfg5J43456');
async function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту (з id).
}
