import React, { useEffect } from 'react'
import Button from './Button';

interface FormProps {
  contClass: string,
  onSubmit: (data: Details) => void;
  details: Details
}

interface Details {
  id?: number;
  name?: string;
  price?: number | '';
  description?: string;
  image?: string;
  delete_dt?: string
}

const Form = ({ contClass, onSubmit, details = {} }: FormProps) => {
  const [detailsData, setDetailsData] = React.useState<Details>(details);

  const useEffectParam = details ? [] : [details]

  useEffect(() => {
    setDetailsData(details)
  }, [])

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setDetailsData({ ...detailsData, [name]: value });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit(detailsData);
  }

  return (
    <form onSubmit={handleSubmit} className='general-form'>
      <label htmlFor='name'>Name*:</label>
      <input type="text" name="name" value={detailsData.name} onChange={handleInputChange} required/>
      <label htmlFor='price'>Price(in cents)*</label>
      <input type="number" name="price" min="1" max ='999999' required value={detailsData.price} onChange={handleInputChange}></input>
      <label htmlFor='description'>Description*:</label>
      <input type="text" name="description" value={detailsData.description} onChange={handleInputChange} required/>
      <label htmlFor='image'>Image URL*:</label>
      <input type="text" name="image" value={detailsData.image} onChange={handleInputChange} required/>
      <div className={contClass}>
        <Button onClick={()=> alert('Save')}>Save</Button>
        <Button onClick={()=> alert('Clear')}>Clear</Button>
      </div>
      
    </form>
  );
}

export default Form;