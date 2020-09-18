import styled, { ThemeProvider } from 'styled-components';

import PropTypes from 'prop-types';
import React from 'react';

export default function SearchInput({ ...props }) {
  return (
    <ThemeProvider theme={props.theme}>
      <LabelSearchBox className="d-flex flex-column-reverse">
        <SearchBox className="d-flex align-items-center p-2">
          <i className="fal fa-search"></i>
          <input
            id={props.id}
            className="border-0 flex-fill ml-2"
            placeholder={props.placeholder}
          />
        </SearchBox>
        <label htmlFor={props.id || props.name}>{props.label}</label>
      </LabelSearchBox>
    </ThemeProvider>
  );
}

const SearchBox = styled.div`
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 4px;
  &:focus-within {
    color: #495057;
    background-color: #fff;
    border-color: ${(props) => props.theme.focusColor};
    outline: 0;
    box-shadow: 0 0 0 0.2rem ${(props) => props.theme.boxShadowColor};
  }
`;

const LabelSearchBox = styled.div`
  ${SearchBox}:focus-within + label {
    color: ${(props) => props.theme.focusColor};
  }
`;

SearchInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  borderColor: PropTypes.string,
  theme: PropTypes.exact({
    borderColor: PropTypes.string,
    focusColor: PropTypes.string,
    boxShadowColor: PropTypes.string,
  }),
};

SearchInput.defaultProps = {
  id: 'searchinput',
  label: 'Search',
  placeholder: 'Search',
  borderColor: 'rgb(238, 238, 238)',
  theme: {
    borderColor: 'rgb(238, 238, 238)',
    focusColor: '#80bdff',
    boxShadowColor: 'rgba(0, 123, 255, 0.25)',
  },
};
