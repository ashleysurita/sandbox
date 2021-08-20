import { action } from '@storybook/addon-actions';
import Form from '../components/Form/index';

export default {
  title: 'Assessment',
  component: Form,
};

export const DefaultForm = () => (
  <Form
    payAmount={88.5}
    handlePreviousClick={() => action('previous')}
    handlePayClick={() => action('pay')}
  />
);
