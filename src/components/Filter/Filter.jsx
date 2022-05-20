import { Label, InputFilter } from './Filter.styled';
import { useDispatch} from 'react-redux';
import {setFilter} from '../../redux/contactsSlice';


const Filter = () => {
  const dispatch = useDispatch();

    const changeFilter = e => {
    return dispatch(setFilter(e.currentTarget.value))
  };

  return (<Label>
    Find contacts by name
    <InputFilter type="text" onChange={changeFilter} />
  </Label>)
};


export default Filter;