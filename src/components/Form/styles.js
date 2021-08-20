import styled from 'styled-components';

export const Wrapper = styled.div`
  border-radius: 5px;
  padding: 30px;
  font-family: sans-serif;
  display: grid;
  grid-auto-flow: row;
  max-width: 550px;
  grid-gap: 20px;
  border: 1px solid #d9d9d9;
`;

export const Title = styled.h1`
  color: #333;
  font-size: 1rem;
`;

export const ButtonWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  align-items: center;
`;

export const Button = styled.button`
  background: ${(props) => props.background || 'transparent'};
  border-radius: 10px;
  outline: none;
  border: none;
  padding: ${(props) => (props.justify || props.color ? '20px' : '0')};
  width: fit-content;
  color: ${(props) => props.color || '#000'};
  justify-self: ${(props) => props.justify};
  font-weight: 550;
  cursor: pointer;
`;

export const Input = styled.input`
  outline: none;
  border: none;
  padding: 5px;
  border-bottom: 1px solid #d9d9d9;
  color: #808080;
  cursor: ${(props) => (props.type !== 'text' && 'pointer') || 'text'};
`;

export const Row = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 20px;
`;

export const Select = styled.select`
  outline: none;
  border: none;
  padding: 5px;
  border-bottom: 1px solid #d9d9d9;
  color: #808080;
  cursor: pointer;
`;
