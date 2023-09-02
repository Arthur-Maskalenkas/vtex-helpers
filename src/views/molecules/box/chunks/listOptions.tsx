import React from 'react'
import {Button} from '../../../atoms/button'



const Option = ({children, key}: React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>) => {
    return (
        <li key={key}>
            <Button>
                {children}
            </Button>
        </li>
    )
}

export const ListOptions = () => {
    const options = [
        "Informações do produto",
        "Informações da loja",
        "Paginas Admin",
        "Paginas da loja",
        "Outros"
    ]

    return (
        <ul>
            {options.map((option, index) => (
                <Option key={index}>
                    {option}
                </Option>
            ))}
        </ul>
    )
}