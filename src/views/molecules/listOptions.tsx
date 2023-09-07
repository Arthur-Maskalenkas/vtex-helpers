import React, { type ButtonHTMLAttributes, type DetailedHTMLProps } from 'react'
import { Button } from '../atoms/button'
import { useApplicationReducerContext } from '../../context'

const Option = ({
  children,
  index,
  target,
  ...rest
}: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  target: string
  index: number
}) => {
  const context = useApplicationReducerContext()

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()

    context.dispatch({
      type: 'ACTION_HANDLE_GO_TO_OPTION',
      payload: {
        data: {
          target
        }
      }
    })
  }
  return (
        <li key={index}>
            <Button.Container {...rest} onClick={handleClick}>
                {children}
            </Button.Container>
        </li>
  )
}

const Container = ({ children }: React.PropsWithChildren) => {
  return (
      <div className="container-app-listOptions">
        {children}
      </div>
  )
}

const OptionsWithQuery = () => {
  const { state: { query, searchableListOptions } } = useApplicationReducerContext()

  const isHide = searchableListOptions?.length === 0 || !query

  return (
      <ul aria-label={'Lista de Opções'} aria-hidden={isHide} className={'container-app-options-with-query list-options'}>
        {searchableListOptions.map((option, index) => (
            <Option aria-label={`selecionar opção ${option.title}`} key={index} index={index} target={option.title}>
              {option.title}
            </Option>
        ))}
      </ul>
  )
}

export const OptionsWithoutQuery = () => {
  const { state: { listOptions } } = useApplicationReducerContext()

  return (
      <ul className={'container-app-options-without-query list-options'}>
        {listOptions.map((option, index) => (
            <Option index={index} target={option.title}>
              {option.title}
            </Option>
        ))}
      </ul>
  )
}

export const ListOptions = () => null

ListOptions.Container = Container
ListOptions.OptionsWithQuery = OptionsWithQuery
ListOptions.OptionsWithoutQuery = OptionsWithoutQuery