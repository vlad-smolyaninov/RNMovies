import React from "react"
import {Button, NativeSyntheticEvent, NativeTouchEvent, TextInput} from 'react-native'

export interface ISearchInput {
  search: string,
  setSearch: (val: string) => void,
  onSearch: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void,
}

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

