import React from 'react'
import { Controller } from 'react-hook-form'
import InputMask from "react-input-mask";

interface InputControlled {
  control: any;
  name: string;
  label: string;
  mask: string;
  error?: any
  pattern?: RegExp;
  defaultValue?: string;
  register: any
}

export const InputControlled = ({
  control,
  name,
  label,
  mask,
  error,
  pattern,
  defaultValue = '',
}: InputControlled) => {

  return (
    <div>
      <label>{label}:</label>
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={({ field }) => (
          <InputMask
            mask={mask}
            maskChar=""
            {...field}
            value={field.value}
            onChange={field.onChange}
          >
            {/* @ts-ignore */}
            {(inputProps: any) => (
              <input {...inputProps} type="text" pattern={pattern} />
            )}
          </InputMask>
        )}
      />
      {error && <span>{error?.message}</span>}
    </div>
  );
}
