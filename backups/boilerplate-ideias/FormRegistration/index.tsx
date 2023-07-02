import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { InputControlled } from './inputs/controlled';
import { MDV1CLKeys } from '../../services/domain/md-v1-cl';
const schema = yup.object().shape({
  email: yup.string().email('Email inválido').required('Campo obrigatório'),
  enderecoNome: yup.string().required('Campo obrigatório'),
  endereco: yup.string().required('Campo obrigatório'),
  numero: yup.string().required('Campo obrigatório'),
  bairro: yup.string().required('Campo obrigatório'),
  cidade: yup.string().required('Campo obrigatório'),
  estado: yup.string().required('Campo obrigatório'),
  complemento: yup.string().required('Campo obrigatório'),
  cpf: yup.string().required('Campo obrigatório'),
  saram: yup.string().required('Campo obrigatório').test('valid-saram', 'SARAM inválido', (value) => {
    const saramRegex = /^[0-9]{7}$/;
    return saramRegex.test(value);
  }),
});
tive que desmontar a estrutura para testar
const campos: Array<{ name: MDV1CLKeys, label: string, type?: string, pattern?: string, mask?: string }> = [
  { name: 'email', label: 'Email' },
  { name: 'document', label: 'CPF', pattern: "[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}", mask: "999.999.999-99" },
  { name: 'saram', label: 'SARAM' },
  { name: 'age', label: 'idade' },
  { name: 'weight', label: 'idade' },
  { name: 'age', label: 'idade' }

];

const Formulario = () => {
  const { register, handleSubmit, formState, control } = useForm({
    resolver: yupResolver(schema),
  });
  console.log(`🚀 ~ file: index.tsx:41 ~ Formulario ~ errors:`, formState)
  const errors = formState?.errors as any
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {campos.map((field: any) => {
        console.log(`🚀 ~ file: index.tsx:50 ~ {campos.map ~ field:`, field)

        const { label, nome } = field
        console.log(`🚀 ~ file: index.tsx:51 ~ {campos.map ~ field:`, field)
        if (nome === 'cpf') {
          return (
            <InputControlled label={label} error={errors?.[nome]} name={nome} control={control} {...field} register={register} />
          )
        }
        return (
          <div key={nome}>
            <label>{label}:</label>
            <input type="text"  {...register(nome)} name={nome} />
            {errors?.[nome] && <span>{errors?.[nome]?.message}</span>}
          </div>
        )
      })}
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;
