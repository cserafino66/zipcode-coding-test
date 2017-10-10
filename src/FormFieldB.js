import React from 'react';

const FormFieldB = props => {
  return(
    <label onChange={props.handleChangeB}>{props.label}
      <input
        name='zipcodeB'
        type='text'
        value={props.content}
      />
    </label>
  )
}

export default FormFieldB;
