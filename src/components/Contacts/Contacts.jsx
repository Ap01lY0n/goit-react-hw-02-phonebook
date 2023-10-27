import { List, ListItem, DelBtn } from './Contacts.styled';

const Contacts = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(({ name, id, number }) => (
        <ListItem key={id}>
          {name} {number}
          <DelBtn type="button" onClick={() => onDelete(id)}>
            Delete
          </DelBtn>
        </ListItem>
      ))}
    </List>
  );
};

export default Contacts;