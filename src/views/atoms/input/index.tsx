import React, { useState } from 'react'
import './styles.scss'
import { useDebounce } from '../../../context/hooks/useDebounce.tsx'
import { useApplicationReducerContext } from '../../../context'

export type InputProps = {
  className?: string
  id: string
  name: string
} & React.InputHTMLAttributes<HTMLInputElement>

const Text = ({ className, ...props }: InputProps) => {
  return (
    <input type='text' {...props} className={`container-app-input text ${className} atom}`} />
  )
}

const Container = ({ children }: React.PropsWithChildren) => {
  const hasIcon = React.Children.count(children) > 1
  const classNameVar = hasIcon ? 'container-app-input has-icon' : 'container-app-input'

  return (
      <div className={`container-app-input ${classNameVar}`}>
        {children}
      </div>
  )
}

const QueryOptions = ({ className, ...props }: InputProps) => {
  const { dispatch } = useApplicationReducerContext()
  const [searchTerm, setSearchTerm] = useState('')
  const target = useDebounce(searchTerm, 100) // Use o hook de debounce

  const handleChange = (event: any) => {
    const { value } = event.target
    setSearchTerm(value)

    dispatch({
      type: 'ACTION_HANDLE_SEARCH_OPTION',
      payload: {
        data: {
          target,
          typeSearch: 'all'
        }
      }
    })
  }

  return (
      <input
          type='text'
          {...props}
          className={`container-app-input text ${className} atom}`}
          value={searchTerm}
          onChange={handleChange}
      />
  )
}

export const Input = () => null

Input.Container = Container
Input.Text = Text
Input.QueryOptions = QueryOptions