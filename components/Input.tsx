import React, { useState } from "react"
interface InputProps {
  id: string
  onChange: any
  value: string
  label: string
  type?: string
}

const Input: React.FC<InputProps> = ({ id, onChange, value, label, type }) => {
  return (
    <div className="relative">
      <input
        onChange={onChange}
        id={id}
        value={value}
        type={type}
        className="appearance-none block px-6 pt-6 pb-1 rounded-md w-full text-md text-white bg-neutral-700 
        focus:outline-none
        focus:ring-0 
        peer"
        placeholder=" "
      />
      <label
        htmlFor={id}
        className="absolute text-md text-zinc-400 duration-150 transform
    top-4 z-10 origin-top-left 
    left-6 
    -translate-y-1
    peer-placeholder-shown:scale-125
peer-focus:scale-75
peer-focus:-translate-y-3

        ">
        {label}
      </label>
    </div>
  )
}

export default Input
