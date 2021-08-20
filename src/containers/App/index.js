/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, memo } from 'react';
import './App.css';

import FormInput from '../../components/FormComponent/index';

const App = ({ amountDue = 6.0 }) => {
  const defaultForm = {
    email: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    name: '',
    countryRegion: '',
    zip: '',
  };
  const [form, setForm] = useState(defaultForm);

  const setValue = (key, value) => {
    const newForm = { ...form, [key]: value };
    setForm(newForm);
  };

  const onlyNumbers = (input) => input.replace(/[^0-9]/g, '');

  const countryRegionOptions = () => {
    const places = [
      'England',
      'France',
      'Spain',
      'Italy',
      'Canada',
      'United States',
    ];
    const mappedPlaces = places.map((place) => (
      <option key={place} value={place}>
        {place}
      </option>
    ));
    const placeholder = (
      <option key="placeholder" value="">
        Please choose one
      </option>
    );
    return [placeholder, ...mappedPlaces];
  };

  return (
    <form>
      <FormInput
        label="Email"
        value={form.email || ''}
        placeholder="Email"
        inputType="text"
        onChange={(val) => {
          console.log('email', val);
          setValue('email', val);
        }}
      />
      <div className="singleInputWrapper">
        <label htmlFor="cardNumber">Card Information</label>
        <div className="cardInfoWrapper">
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={form.cardNumber}
            placeholder="Card Number"
            onChange={(value) => setValue('cardNumber', onlyNumbers(value))}
          />
          <input
            type="date"
            id="expirationDate"
            name="expirationDate"
            value={form.expirationDate}
            placeholder="Expiration Date"
            onChange={(value) => setValue('expirationDate', value)}
          />
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={form.cvv}
            placeholder="CVV"
            onChange={(value) => setValue('cardNumber', onlyNumbers(value))}
          />
        </div>
      </div>
      <FormInput
        label="Name on card"
        value={form.name}
        placeholder="Name"
        inputType="text"
        onChange={(val) => setValue('name', val)}
      />
      <label for="countryRegion">Country or region</label>
      <select
        id="countryRegion"
        name="countryRegion"
        value={form.countryRegion}
        onChange={(value) => setValue('countryRegion', onlyNumbers(value))}
      >
        {countryRegionOptions()}
      </select>
      <input
        type="text"
        id="zip"
        name="zip"
        value={form.zip}
        placeholder="Zip Code"
        onChange={(value) => setValue('zip', onlyNumbers(value))}
      />
      <input
        type="submit"
        value={`Pay $${parseFloat(amountDue).toFixed(2)}`}
        id="submit"
      />
    </form>
  );
};

export default memo(App);
