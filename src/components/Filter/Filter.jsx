import { Label, InputFilter } from './Filter.styled';
import { useDispatch, useSelector} from 'react-redux';
import {setFilter} from '../../redux/contactsSlice';


const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.value)

    const changeFilter = e => {
    return dispatch(setFilter(e.currentTarget.value))
  };

  return (<Label>
    Find contacts by name
    <InputFilter
      type="text"
      value={filter}
      onChange={changeFilter} />
  </Label>)
};


export default Filter;