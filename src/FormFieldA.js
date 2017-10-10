import React from 'react';

const FormFieldA = props => {
  return(
    <label onChange={props.handleChangeA}>{props.label}
      <input
        name='zipcodeA'
        type='text'
        value={props.content}
      />
    </label>
  )
}

export default FormFieldA;
