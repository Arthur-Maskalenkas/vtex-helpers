import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useRuntime } from 'vtex.render-runtime'
import { setCookie } from '../AcessB2E/utils'
import { cpfMask, validateCPF } from './utils/Masks'

import Modal from './modal'
import styles from './styles.css'

export function Form() {
  const { register, handleSubmit } = useForm()
  const [logged, setLogged] = useState('')
  const [success, setSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { production } = useRuntime()

  const onSubmit = (e: any, dados: any) => {
    e.preventDefault()
    setIsLoading(true)
    bindSubmit(dados)
  }

  function createUser() {
    return (
      <div className={styles.containerCadasSucess}>
        <span className={styles.spanCadasSucess}>
          Seu cadastro foi efetuado com sucesso.
        </span>
        <span className={styles.span2CadasSucess}>
          Em breve nossa equipe entrará em contato com você.
        </span>
      </div>
    )
  }

  function UsuarioAtivo() {
    return (
      <Modal
        title="Você já possui um cadastro ativo"
        description="Tente fazer login. Se tiver problemas,
        entre em contato pelo e-mail arethaafts@fab.mil.br"
        textButton="Fazer Login"
      />
    )
  }


  function buttonSubmit() {
    return (
      <div className={`${styles.containerButtonSubmit}`}>
        {isLoading && <div className={styles.iconLoadingCadastro} />}
        <input
          type="submit"
          className={styles.submitButton}
          value={isLoading ? '' : 'ENVIAR'}
        />
      </div>
    )
  }

  function submitSuccess() {
    document.location.href = '/successful-registration'
  }

  async function uploadFile(id: string, attachment: any, field: String) {
    const formData = new FormData();
    formData.append('attachment', attachment);
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    } as any
    const isUploaded = await axios.post(`${production ? '/safedata' : '/api/dataentities'}/CL/documents/${id}/${field}/attachments`, formData, config)
      .then((res: any) => {
        res.json()
      })
      .catch((err) => {
        console.log(err.message);
      })
    return isUploaded
  }

  const bindSubmit = async (dados: any) => {
    await axios.get(`${production ? '/safedata' : '/api/dataentities'}/CL/search?_where=email=${dados.Email}&_fields=approved`)
      .then(({ data }: any) => {
        if (data.length === 0 || data === null || data === undefined) {
          const profileData = {
            email: dados.Email,
            document: dados.Cpf,
            attachment: dados.Anexo,
            saram: dados.Saram, // campo criado
            approved: false, // campo criado
            gender: dados.Genero, // campo criado
            age: dados.Idade, // campo criado
            weight: dados.Peso, // campo criado
            height: dados.Altura, // campo criado
            chestMeasure: dados.medidaPeito, // campo criado
            waistMeasure: dados.medidaCintura, // campo criado
          }

          const addressData = {
            addressName: dados.NomeEndereco, // campo criado
            address: dados.Endereco, // campo criado
            number: dados.Numero, // campo criado
            district: dados.Bairro, // campo criado
            city: dados.Cidade, // campo criado
            state: dados.Estado, // campo criado
            complement: dados.Complemento, // campo criado
            userId: dados.Email
          }

          setIsLoading(false)

          axios
            .post(`${production ? '/safedata' : '/api/dataentities'}/CL/documents`, profileData)
            .then(async ({ data }: any) => {
              console.log(data)
              await axios
                .post(`${production ? '/safedata' : '/api/dataentities'}/AD/documents`, addressData)
              await uploadFile(data.Id, dados.Anexo, 'attach')
              debugger
              setLogged('Aguarde')
              setSuccess(true)
              setCookie()
              setIsLoading(false)
            })
            .catch((e: any) => {
              console.log(e)
            })
        } else {
          // USER ALREADY EXISTS
          const approved = data[0].approved

          if (approved === true) {
            setLogged('accept')
            UsuarioAtivo()
            setCookie()
          } else if (approved === 'null' || approved === 'false') {
            setLogged('notAccept')
            submitSuccess()
          }
        }
      })
      .catch((e: any) => {
        setIsLoading(false)
        console.log(e)
      })
  }

  return (
    <main className={styles.mainContainer}>
      <article className={styles.containerPage}>
        <h1 className={styles.title}>
          DADOS CADASTRAIS
          <span className={styles.subtitle}>Informe os dados abaixo para realizar o seu cadastro:</span>
        </h1>

        <form className={styles.containerForm}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={styles.formGrid}>
            <label className={styles.containerLabel}>
              <input
                type="text"
                className={styles.input}
                placeholder='E-mail'
                required={true}
                {...register('Email')}
              />
            </label>

            <label className={styles.containerLabel}>
              <input
                type="text"
                className={styles.input}
                required={true}
                placeholder='Nome do Endereço'
                {...register('NomeEndereco')}
              />
            </label>

            <label className={styles.containerLabel}>
              <input
                type="text"
                className={styles.input}
                placeholder='Endereço'
                required={true}
                {...register('Endereco')}
              />
            </label>

            <label className={styles.containerLabel}>
              <input
                type="text"
                className={styles.input}
                placeholder='Número'
                {...register("Numero")}
                required
              />
            </label>

            <label className={styles.containerLabel}>
              <input
                type="text"
                className={styles.input}
                placeholder='Bairro'

                {...register('Bairro')}
              />
            </label>

            <label className={styles.containerLabel}>
              <input
                type="text"
                className={styles.input}
                placeholder='Cidade'
                {...register('Cidade')}
              />
            </label>

            <label className={styles.containerLabel}>
              <input
                type="text"
                className={styles.input}
                placeholder='Estado'
                {...register('Estado')}
              />
            </label>

            <label className={styles.containerLabel}>
              <input
                type="text"
                className={styles.input}
                placeholder='Complemento'
                {...register('Complemento')}
              />
            </label>

            <div className={styles.documentLabel}>
              <label className={styles.containerLabel}>
                <input
                  type="text"
                  className={styles.input}
                  placeholder='CPF'
                  required={true}
                  {...register('Cpf', {
                    setValueAs: (value: string) => cpfMask(value),
                    validate: (value: string) => validateCPF(value)
                  })}
                />
              </label>
            </div>

            <label className={styles.containerLabel}>
              <input
                type="text"
                className={styles.input}
                placeholder='SARAM'
                {...register('Saram')}
              />
            </label>

            <label className={styles.containerLabel}>
              <input type="file" {...register("Anexo")} />
            </label>

          </div>

          <div className={styles.secondForm}>
            <span className={styles.secondFormSubtitle}>Informe os dados abaixo referentes ao uniforme:</span>

            <div className={styles.formGrid}>
              <div className={styles.containerSelect}>
                <select className={`${styles.input} ${styles.selectInput}`} {...register('Genero')}>
                  <option value="M">Masculino</option>
                  <option value="F">Feminino</option>
                </select>
              </div>
              <label className={styles.containerLabel}>
                <input
                  type="text"
                  className={styles.input}
                  placeholder='Idade'
                  {...register('Idade')}
                />
              </label>
              <label className={styles.containerLabel}>
                <input
                  type="text"
                  className={styles.input}
                  placeholder='Peso (kg)'
                  {...register('Peso')}
                />
              </label>
              <label className={styles.containerLabel}>
                <input
                  type="text"
                  className={styles.input}
                  placeholder='Altura (cm)'
                  {...register('Altura')}
                />
              </label>
              <label className={styles.containerLabel}>
                <input
                  type="text"
                  className={styles.input}
                  placeholder='Medidas Peito (cm)'
                  {...register('medidaPeito')}
                />
              </label>
              <label className={styles.containerLabel}>
                <input
                  type="text"
                  className={styles.input}
                  placeholder='Medidas Cintura (cm)'
                  {...register('medidaCintura')}
                />
              </label>
            </div>
          </div>

          <div className={styles.rowButton}>
            {buttonSubmit()}
            {success === true && submitSuccess()}
          </div>
        </form>

        {/* BOTAO */}
        <div>
          {logged === 'accept'
            ? UsuarioAtivo()
            : logged === 'notAccept'
              ? null
              : logged === 'createUser'
                ? createUser()
                : null}
        </div>

      </article>
    </main>
  )
}

export default Form
