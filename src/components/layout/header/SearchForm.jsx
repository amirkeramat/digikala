import {
  Form,
  SearchFormContainer,
  SearchInput,
  SearchButton,
} from "./header.style";
import { FiSearch } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const SearchForm = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const searchHandler = (data) => {
    if (data.searchValue.trim()) {
      navigate(`/search/${data.searchValue.trim()}/1`);
      reset();
    }
  };
  return (
    <Form onSubmit={handleSubmit(searchHandler)}>
      <SearchFormContainer>
        <SearchInput
          {...register("searchValue")}
          type="text"
          placeholder="جستجو"
        />
        <SearchButton type="submit">
          <FiSearch />
        </SearchButton>
      </SearchFormContainer>
    </Form>
  );
};

export default SearchForm;
