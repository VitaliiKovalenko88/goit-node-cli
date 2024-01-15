import { program } from "commander";
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();
import { addContact, getContactById, listContacts, removeContact } from "./contacts.js";

const options = program.opts();

// TODO: рефакторити
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      // ...
      const contacts = await listContacts();
      console.table(contacts);
      break;

    case "get":
      // ... id
      const contactById = await getContactById(id);
      console.log(contactById);
      break;

    case "add":
      // ... name email phone
      const newContact = await addContact(name, email, phone)
      console.log(newContact)
      break;

    case "remove":
      // ... id
      const remoteContact = await removeContact(id);
      console.log(remoteContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(options);