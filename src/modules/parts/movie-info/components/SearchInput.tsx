import React from 'react'
import {Button, TextInput} from 'react-native'
import {ISearchInput} from '../types'


const SearchInput: React.FC<ISearchInput> = ({search, setSearch, onSearch}) => (
  <>
    <TextInput
      value={search}
      onChangeText={setSearch}
    />
    <Button
      onPress={onSearch}
      title="Search"
    />
  </>
)

export default SearchInput

