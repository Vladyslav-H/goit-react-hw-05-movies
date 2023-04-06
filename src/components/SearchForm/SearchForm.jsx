import { useState } from 'react';
import { HiDocumentSearch } from 'react-icons/hi';
import { useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Form, Input } from './SearchForm.styled';
import { Button } from 'components/Button/Button.styled';

const SearchForm = () => {
  const [searchName, setSearchName] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSaerchParams] = useSearchParams();

  const handleSubmit = e => {
    e.preventDefault();
    if (!searchName) {
      return toast.info('Please, enter a search name');
    }
    setSaerchParams({ query: searchName });

    setSearchName('');
  };
  const handleChange = e => {
    setSearchName(e.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={searchName}
        placeholder="Search movies"
        onChange={handleChange}
      />
      <Button type="submit">
        Search <HiDocumentSearch />
      </Button>
      <ToastContainer position="top-center" theme="dark" />
    </Form>
  );
};

export default SearchForm;
