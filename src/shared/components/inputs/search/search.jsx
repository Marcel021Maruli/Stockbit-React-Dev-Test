import React from 'react'
import { Input } from 'antd';

const { Search } = Input;

const SearchField = () => {
  return (
    <Search
      placeholder="Find movies title"
      enterButton />
  )
}

export default SearchField