import React from 'react'
import styles from './styles.css'
import useCopyToClipboard from "./utils";

import { ToastConsumer, ToastProvider } from 'vtex.styleguide'
import { FakeBreadcrumb } from "../fake-breadcrumb";

type Cupon = {
  __editorItemTitle: string
  couponIsActive: boolean
  titleCoupon: string
  descriptionCoupon: string
}

type CouponPageProps = {
  coupons: Cupon[],
  allCouponsIsActive: boolean,
  textTopCouponPage: string,
}

export const CouponPage = ({
  coupons,
  allCouponsIsActive,
  textTopCouponPage = 'Cupons disponiveis',
}: CouponPageProps) => {
  const [, copy] = useCopyToClipboard()

  const handleCopy = async (showToast: any, coupon: string) => {
    const couponClip = await copy(coupon)

    try {
      if (!couponClip) {
        showToast({
          message: 'Erro ao copiar cupom. Tente novamente mais tarde.',
        })

        return
      }

      showToast({
        message: `cupom ${coupon} copiado com sucesso.`,
      })

    } catch (e) {
      showToast({
        message: 'Erro ao copiar cupom. Tente novamente mais tarde.',
      })
    }
  }

  return (
    <div className={styles.mainContainerCouponPage}>
      <FakeBreadcrumb currentPage={"Cupom"} />
      {allCouponsIsActive &&
        (
          <ToastProvider positioning="window">
            <ToastConsumer>
              {({ showToast }: { showToast: any }) => (
                <div className={styles.containerCouponPage}>
                  <h2>{textTopCouponPage}</h2>

                  <ul>
                    {coupons?.map((items, index) => (
                      <>
                        {items.couponIsActive && (
                          <li onClick={() => handleCopy(showToast, items.__editorItemTitle)} key={index}
                            className={styles.containerCoupon}>
                            <p className={styles.couponPageTitle}>{items.titleCoupon}</p>
                            <div className={styles.couponPageCodeContainer}>
                              <p className={styles.couponCode}>{items.__editorItemTitle}</p>
                              <button>
                                <img src="https://lojasmarabrazqa.vtexassets.com/arquivos/icon-copiar-pagina-cupom.png" />
                              </button>
                            </div>
                            <p className={styles.couponPageDescription}>{items.descriptionCoupon}</p>
                          </li>
                        )}
                      </>

                    ))}
                  </ul>

                </div>
              )}
            </ToastConsumer>

          </ToastProvider>
        )}
    </div>

  )
}

CouponPage.schema = {
  title: "Cupons De Desconto",
  description: "Inclua cupons de desconto na pagina",
  type: "object",
  properties: {
    allCouponsIsActive: {
      title: 'Ativar Cupons',
      type: 'boolean'
    }
  },
  dependencies: {
    allCouponsIsActive: {
      oneOf: [
        {
          properties: {
            textTopCouponPage: {
              title: 'Texto acima dos cupons',
              type: 'string'
            },
            allCouponsIsActive: {
              enum: [true]
            },
            coupons: {
              type: 'array',
              title: 'Cupons',
              items: {
                type: 'object',
                properties: {
                  titleCoupon: {
                    title: 'Titulo Cupom',
                    type: 'string'
                  },
                  __editorItemTitle: {
                    title: 'Codigo Cupom',
                    type: 'string',
                  },
                  descriptionCoupon: {
                    title: 'Descrição Cupom',
                    type: 'string'
                  },
                  couponIsActive: {
                    title: 'Cupom Ativo',
                    type: 'boolean'
                  }
                },
              },
            },
          }
        },
        {
          properties: {
            allCouponsIsActive: {
              enum: [false]
            }
          }
        }
      ]
    }
  }
}