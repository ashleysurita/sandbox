import { memo } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Text = styled.input`
  padding: 5px;
  cursor: text;
  border: 1px solid #080;
  border-radius: 10px;
  outline: none;
`;

const TextInput = ({ value, onChange, disabled }) => (
  <Text
    type="text"
    value={value}
    onChange={({ target }) => onChange(target.value)}
    disabled={disabled}
  />
);

TextInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

export default memo(TextInput);
