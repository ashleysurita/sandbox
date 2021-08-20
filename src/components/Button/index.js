import { memo } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { colors } from './constants';

const Button = styled.button`
  border-radius: 10px;
  border: none;
  padding: 5px;
  color: ${(props) =>
    props.disabled ? colors.text.disabled : colors.text[props.color]};
  background: ${(props) =>
    props.disabled
      ? colors.background.disabled
      : colors.background[props.color]};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  font-size: ${(props) => (props.small ? '16px' : '20px')};
`;

const CustomButton = ({
  children,
  type = 'button',
  color = 'blue',
  onClick,
  disabled = false,
  small,
}) => (
  <Button
    type={type}
    small={small}
    color={color}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </Button>
);

CustomButton.propTypes = {
  children: PropTypes.string,
  small: PropTypes.bool,
  type: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default memo(CustomButton);
