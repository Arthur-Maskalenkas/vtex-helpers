import { ImageSize } from "./image";

export const loadImage = async (src: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onerror = (e: any) => reject(new Error(`Erro ao carregar a imagem: ${e.error?.message}`));
    img.onload = () => resolve(img);
  });
};
export type BuildImageAttrsProps = {
  widthImg?: string | number | null,
  heightImg?: string | number | null,
  src: string,
  alt?: string,
  title?: string,
  className?: string
}

export const buildImageAttrs = ({ widthImg, heightImg, className, ...imgProps }: BuildImageAttrsProps): Partial<React.ImgHTMLAttributes<HTMLImageElement>> => {
  const data = {
    ...imgProps,
    loading: 'lazy',
    decoding: 'async',
    className,
    ...(!!heightImg && { height: Number(heightImg) }),
    ...(!!widthImg && { width: Number(widthImg) }),
  } as unknown as Partial<React.ImgHTMLAttributes<HTMLImageElement>>

  return data
}

function replaceLegacyFileManagerUrl(
  src: string,
  width: string | number,
  height: string | number
) {
  const legacyUrlPattern = '/arquivos/ids/'
  const isLegacyUrl = src.includes(legacyUrlPattern)

  if (!isLegacyUrl) return src

  const cleanUrl = /.+ids\/(\d+)/.exec(src)?.[0]
  const vParam = src?.split(`v=`)?.[1] ?? ''?.split('&')?.[0]

  return vParam
    ? `${cleanUrl}-${width}-${height}?v=${vParam}`
    : `${cleanUrl}-${width}-${height}`
}

export function changeImageUrlSize(props: ImageSize) {
  const { height = 'auto', width = 'auto', src = null } = props

  if (!src || src === '') return src

  const normalizedImageUrl = replaceLegacyFileManagerUrl(
    src,
    width,
    height
  )

  const queryStringSeparator = normalizedImageUrl.includes('?') ? '&' : '?'

  return `${normalizedImageUrl}${queryStringSeparator}width=${width}&height=${height}&aspect=true`
}
