import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const FormFieldWrapper = styled.div`
  position: relative;
  textarea {
      min-height: 150px;
  }
  input [type="color"]{
      padding-left: 56px;
  }
`;

const Input = styled.input`
  background:#535850;
  color:#F5F5F5;
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;

  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #535850;

  padding: 16px 16px;
  margin-bottom: 45px;

  resize: none;
  border-radius: 4px;
  transition: border-color .3s;

  &:focus{
      border-bottom-color: var(--primary);
  }

  &:focus:not([type="color"]) + span {
      transform: scale(.6) translateY()(-10px);
  }
  
  ${function ({ hasValue }) {

    return hasValue && css`
      &:not([type="color"]) + span {
        transform: scale(.6) translateY()(-10px);
  }   
    `;
  }}
`;

const Label = styled.label``;
Label.Text = styled.span``;

function FormField({
  label, type, name, value, onChange,
}) {
  const fieldID = `id_${name}`;
  const isTextArea = type === 'textarea';
  const tag = isTextArea ? 'textarea' : 'input';
  const hasValue = Boolean(value.length);

  return (
    <FormFieldWrapper>
      <Label
        htmlFor={fieldID}
      >
        <Input
          as={tag}
          id={fieldID}
          type={type}
          value={value}
          name={name}
          hasValue={hasValue}
          onChange={onChange}
        />
        <Label.Text>
          {label}
          :
        </Label.Text>
      </Label>
    </FormFieldWrapper>
  );
}
FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default FormField;
