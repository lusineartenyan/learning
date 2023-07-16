import '../../assets/scss/components/form/form.scss';

import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';

interface FormProps {
  wrapperClass: string;
  details?: any;
  onSubmit: (details: any) => any
}

interface FormFields {
  [key: string]: string;
}

const Form: React.FC<FormProps> = ({wrapperClass, details, onSubmit}: FormProps) => {
  const [formData, setFormData] = useState<FormFields>(details);

  useEffect(() => {
    setFormData(details)
  }, []); 

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className='general-form'>
      <label htmlFor='name'>Name*:</label>
      <input type="text" name="name" value={formData?.name} onChange={handleChange} required/>

      <label htmlFor='price'>Price(in cents)*</label>
      <input type="number" name="price" min="1" max ='999999' required value={formData?.price} onChange={handleChange}></input>

      <label htmlFor='description'>Description*:</label>
      <input type="text" name="description" value={formData?.description} onChange={handleChange} required/>

      <label htmlFor='image'>Image URL*:</label>
      <input type="text" name="image" value={formData?.image} onChange={handleChange} required/>
      <div className={wrapperClass}>
        <button type="submit">Submit</button>
      </div>
      
    </form>
  );
};

export default Form;