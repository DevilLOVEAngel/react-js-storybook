import styled, { ThemeProvider } from 'styled-components';

import PropTypes from 'prop-types';
import React from 'react';

export default function SearchInput({ ...props }) {
  return (
    <ThemeProvider theme={props.theme}>
      <LabelSearchBox>
        <SearchBox>
          <i className="fal fa-search"></i>
          <input id={props.id} placeholder={props.placeholder} />
        </SearchBox>
        <label htmlFor={props.id || props.name}>{props.label}</label>
      </LabelSearchBox>
    </ThemeProvider>
  );
}

const SearchBox = styled.div`
  display: flex;
  padding: 0.5 rem;
  border: 1px solid ${(props) => props.theme.borderColor};
  align-items: center;
  -webkit-box-align: center;
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
  display: flex;
  flex-direction: column-reverse;
  ${SearchBox}:focus-within + label {
    color: ${(props) => props.theme.focusColor};
  }
`;

const InputSearchBox = styled.input`
  border: 0;
  flex: 1 1 auto;
  margin-left: 0.5 rem;
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
