import React from 'react'
import { Button } from '../atoms/button'
import { useApplicationReducerContext } from '../../context'

const Option = ({
  children,
  key,
  target
}: React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> & {
  target: string
}) => {
  const context = useApplicationReducerContext()

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()

    console.log('#!! 🔥 ALVO', target)
    console.log('#!! 🔥 ESTADO STATE', context.state)
    console.log('#!! 🔥 ESTADO LISTOPTIONS', context.state.listOptions)
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
        <li key={key}>
            <Button.Container onClick={handleClick}>
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

  if (!query) return null

  return (
      <ul className={'container-app-options-with-query list-options'}>
        {searchableListOptions.map((option, index) => (
            <Option key={index} target={option.title}>
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
            <Option key={index} target={option.title}>
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