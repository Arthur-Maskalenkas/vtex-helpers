import { Navigation, SwiperOptions } from 'swiper';

export type NormalizeQuantityElementArraysProps = {
  quantitySlidersToShow?: number
}

export function normalizeQuantityElements(array: any[], options?: NormalizeQuantityElementArraysProps) {
  let newArray = array
  const calcNormalQuantitySlidersToShow = options?.quantitySlidersToShow ?? 4
  const calcClonedQuantitySlidersToShow = calcNormalQuantitySlidersToShow * 2

  if (array?.length === 0) {
    return array
  }

  const operation = calcNormalQuantitySlidersToShow % 2 === 0 ? 2 : 1

  if (newArray.length % operation !== 0) {
    newArray.push(newArray[0]);
  }

  while (newArray.length < calcClonedQuantitySlidersToShow) {
    newArray = newArray.concat(newArray.slice(0, calcClonedQuantitySlidersToShow - newArray.length));
  }

  return newArray
}


export type SwiperGenerateConfigProps = {
  defaultConfig?: SwiperOptions,
  generateDefaultConfig?: boolean
}

export const swiperGenerateConfigProps = (options: SwiperGenerateConfigProps): SwiperOptions => {

  if (options.generateDefaultConfig || !options.defaultConfig) {
    const defaultConfig = swiperGenerateConfigProps({
      defaultConfig: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        loop: true,
        pagination: {
          clickable: true
        },
        navigation: false,
        modules: [Navigation]
      }
    })

    return defaultConfig
  }

  return { ...options.defaultConfig }
}

export const chooseConfig = (...configs: (SwiperOptions | null)[]): SwiperOptions => {
  const currentConfig = configs?.find(config => Boolean(config))

  if (!currentConfig || configs.length === 0) {
    return swiperGenerateConfigProps({ defaultConfig: {}, generateDefaultConfig: true })
  }

  return currentConfig
}
