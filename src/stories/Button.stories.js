import Button from '../components/Button/index';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Button',
  component: Button,
};

export const BasicButtons = () => (
  <>
    <Button color="blue" onClick={action('blue click')}>
      Blue
    </Button>
    <br />
    <Button color="green" onClick={action('green click')}>
      Green
    </Button>
    <br />
    <Button color="red" onClick={action('red click')}>
      Red
    </Button>
    <br />
    <Button disabled onClick={action('disabled click')}>
      Disabled
    </Button>
  </>
);

export const SmallButtons = () => (
  <>
    <Button small color="blue" onClick={action('small blue click')}>
      Blue
    </Button>
    <br />
    <Button small color="green" onClick={action('small green click')}>
      Green
    </Button>
    <br />
    <Button small color="red" onClick={action('small red click')}>
      Red
    </Button>
    <br />
    <Button small disabled onClick={action('small disabled click')}>
      Disabled
    </Button>
  </>
);
