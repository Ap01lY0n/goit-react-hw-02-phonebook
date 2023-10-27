import { FilterContainer, FilterInput, FilterLabal } from './Filter.styled';

const Filter = ({ onChange }) => {
  return (
    <FilterContainer>
      <FilterLabal>
        Find contacts by name:
        <FilterInput type="text" onChange={evt => onChange(evt.target.value)} />
      </FilterLabal>
    </FilterContainer>
  );
};
export default Filter;