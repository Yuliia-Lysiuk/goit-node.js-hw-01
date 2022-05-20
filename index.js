const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContactById,
} = require('./contacts');

const argv = require('yargs').argv;

async function invokeAction({ action, id, name, email, phone, data }) {
  switch (action) {
    case 'list':
      const getContacts = await listContacts();
      console.table(getContacts);
      break;

    case 'get':
      const contact = await getContactById(id);
      console.log(contact);

      break;

    case 'add':
      const newContact = await addContact(name, email, phone);
      console.log(newContact);
      break;

    case 'remove':
      const deleteContact = await removeContact(id);
      console.log(deleteContact);
      break;

    case 'update':
      const updateContact = await updateContactById(id, data);
      console.log(updateContact);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);
