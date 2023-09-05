import React from 'react'
import { Button } from '../atoms/button'
import { useApplicationReducerContext } from '../../context/reducerApplicationContext.tsx'

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

export const ListOptions = () => {
  const { state: { listOptions } } = useApplicationReducerContext()

  return (
        <ul>
            {listOptions.map((option, index) => (
                <Option key={index} target={option.title}>
                    {option.title}
                </Option>
            ))}
        </ul>
  )
}