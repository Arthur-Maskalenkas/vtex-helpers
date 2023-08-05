import { Navigation, SwiperOptions } from 'swiper';

export type NormalizeQuantityElementArraysProps = {
  quantitySlidersToShow: number
}




export function normalizeQuantityElements(
  arr: any[],
  options: NormalizeQuantityElementArraysProps = { quantitySlidersToShow: 4 }
) {
  const { quantitySlidersToShow } = options;
  const originalLength = arr.length;
  const doubledArray: any[] = [];

  while (doubledArray.length < quantitySlidersToShow * 3) {
    doubledArray.push(arr[doubledArray.length % originalLength]);
  }

  return doubledArray;
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
