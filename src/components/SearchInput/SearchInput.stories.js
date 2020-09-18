import React from 'react';
import SearchInput from './SearchInput';

export default {
  title: 'Component/SearchInput',
  component: SearchInput,
};

const Template = (args) => <SearchInput {...args} />;

export const Search = Template.bind({});
Search.args = {
  id: 'searchinput',
  label: 'Search',
  placeholder: 'Search',
  theme: {
    borderColor: 'rgb(238, 238, 238)',
    focusColor: '#80bdff',
    boxShadowColor: 'rgba(0, 123, 255, 0.25)',
  },
};
