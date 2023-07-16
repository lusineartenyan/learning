import React, { ChangeEvent, FC } from 'react'

interface InputProps {
  type: 'text' | 'number' | 'email' | 'password'
  label: string
  value: string | number
  name: string
  placeholder?: string
  onChange: (name: string, value: string) => void
}

const Input: FC<InputProps> = ({
  type,
  label,
  value,
  name,
  placeholder,
  onChange,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    onChange(name, value);
  };

  return (
    <div className="input-wrapper">
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        id={label}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  )
}

export default Input