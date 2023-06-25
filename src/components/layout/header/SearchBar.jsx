import {
  SearchForm,
  SearchFormContainer,
  SearchInput,
  SearchButton,
} from "./header.style";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <SearchForm>
      <SearchFormContainer>
        <SearchInput type='text' placeholder='جستجو' />
        <SearchButton>
          <FiSearch />
        </SearchButton>
      </SearchFormContainer>
    </SearchForm>
  );
};

export default SearchBar;
