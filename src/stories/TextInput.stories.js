import { useState } from 'react';
import Text from '../components/TextInput/index';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Inputs',
  component: Text,
};

export const TextInput = () => {
  const [value, setValue] = useState('');
  return (
    <Text
      value={value}
      onChange={(v) => {
        setValue(v);
        action(v);
      }}
      placeholder="Type some text"
    />
  );
};
