import { useState } from 'react';
import { HiDocumentSearch } from 'react-icons/hi';
import { useSearchParams } from 'react-router-dom';
import { Form, Input, Button } from './SearchForm.styled';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SearchForm = () => {
  const [searchName, setSearchName] = useState('');
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
