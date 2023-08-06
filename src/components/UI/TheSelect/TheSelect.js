import React from 'react';
import Select from "react-select";

export const TheSelect = ({ variant, options }) => {
  const variants = {
    default: 'main_select',
    bordered: 'bordered_select',
    inline: 'inline_select',
  }

  return (
    <Select
      options={options}
      className='main_select_container'
      classNamePrefix={variants[variant]}
      defaultValue={options[0]}
    />
  );
}
