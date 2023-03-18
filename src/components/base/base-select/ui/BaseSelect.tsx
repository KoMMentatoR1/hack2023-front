import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from '@mui/material'
import { FC } from 'react'
import { Controller, UseControllerProps } from 'react-hook-form'

export interface IOption {
  value: any
  label: string
}

interface BaseInputProps {
  control: UseControllerProps['control']
  label: string
  name: string
  defaultValue?: string
  rules?: UseControllerProps['rules']
  required?: boolean
  error?: boolean
  helperText?: string
  password?: boolean
  disabled?: boolean
  options: IOption[]
}

export const BaseSelect: FC<BaseInputProps> = ({
  control,
  label,
  name,
  defaultValue = '',
  rules,
  required = false,
  error,
  helperText,
  disabled = false,
  options,
}) => {
  return (
    <Controller
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <FormControl
          required={required}
          variant='standard'
          error={error}
          fullWidth
        >
          <InputLabel id='demo-simple-select-standard-label'>
            {label}
          </InputLabel>
          <Select
            labelId='demo-simple-select-standard-label'
            id='demo-simple-select-standard'
            value={value}
            onChange={onChange}
            label={label}
            inputRef={ref}
            name={name}
          >
            <MenuItem value=''>
              <em>None</em>
            </MenuItem>
            {options.map(option => (
              <MenuItem value={option.value}>{option.label}</MenuItem>
            ))}
          </Select>
          <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
      )}
      defaultValue={defaultValue}
      name={name}
      control={control}
      rules={disabled ? {} : rules}
    />
  )
}
