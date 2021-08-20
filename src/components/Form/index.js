import { memo, useState } from 'react';
import PropTypes from 'prop-types';

import { validStates } from './constants';
import {
  Wrapper,
  Title,
  ButtonWrapper,
  Button,
  Input,
  Row,
  Select,
} from './styles';

const Form = ({ payAmount, handlePreviousClick, handlePayClick }) => {
  const defaultForm = {
    name: '',
    email: '',
    cardNumber: '',
    expiration: '',
    cvv: '',
    address1: '',
    city: '',
    state: '',
    zipCode: '',
  };
  const [form, setForm] = useState(defaultForm);

  const setValue = (key, value) => {
    const newForm = { ...form, [key]: value };
    setForm(newForm);
  };

  const numbersOnly = (input) => input.replace(/[^0-9]/g, '');

  const stateOptions = () => {
    const mappedStates = validStates.map((state) => (
      <option value={state}>{state}</option>
    ));
    return [<option value="">State / Province</option>, ...mappedStates];
  };

  return (
    <Wrapper>
      <Title>PAYMENT DETAILS</Title>
      <Input
        type="text"
        placeholder="Name on card"
        value={form.name}
        onChange={({ target }) => setValue('name', target.value)}
      />
      <Row>
        <Input
          type="text"
          placeholder="Card number"
          value={form.cardNumber}
          onChange={({ target }) =>
            setValue('cardNumber', numbersOnly(target.value))
          }
        />
        <Input
          date
          type="date"
          placeholder="Expiry"
          value={form.expiration}
          onChange={({ target }) => setValue('expiration', target.value)}
        />
        <Input
          type="text"
          placeholder="CVV"
          value={form.cvv}
          onChange={({ target }) => setValue('cvv', numbersOnly(target.value))}
        />
      </Row>
      <Title>Billing Address</Title>
      <Row>
        <Input
          type="text"
          placeholder="Street address"
          value={form.address1}
          onChange={({ target }) => setValue('address1', target.value)}
        />
        <Input
          type="text"
          placeholder="City"
          value={form.city}
          onChange={({ target }) => setValue('city', target.value)}
        />
      </Row>
      <Row>
        <Select
          name="state"
          id="state"
          value={form.state}
          onChange={({ target }) => setValue('state', target.value)}
        >
          {stateOptions()}
        </Select>
        <Input
          type="text"
          placeholder="Zip code"
          value={form.zipCode}
          onChange={({ target }) =>
            setValue('zipCode', numbersOnly(target.value))
          }
        />
      </Row>
      <ButtonWrapper>
        <Button onClick={() => handlePreviousClick()}>Previous step</Button>
        <Button
          onClick={() => handlePayClick()}
          background="#3333cc"
          justify="end"
          color="#fff"
        >{`Pay $${payAmount.toFixed(2)}`}</Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

Form.propTypes = {
  payAmount: PropTypes.number,
  handlePreviousClick: PropTypes.func,
  handlePayClick: PropTypes.func,
};

export default memo(Form);
