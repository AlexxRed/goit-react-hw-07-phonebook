import { Label, InputFilter } from './Filter.styled';
import { useDispatch} from 'react-redux';
import {filterContacts} from '../../redux/contactsSlice';


const Filter = () => {
  const dispatch = useDispatch();

    const changeFilter = e => {
    return dispatch(filterContacts(e.currentTarget.value))
  };

  return (<Label>
    Find contacts by name
    <InputFilter type="text" onChange={changeFilter} />
  </Label>)
};


export default Filter;