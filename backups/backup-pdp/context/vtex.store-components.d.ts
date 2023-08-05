export * from 'vtex.store-components'

type ImageShape = {
  imageUrls: string[];
  thresholds?: number[];
  thumbnailUrl?: string;
  imageText?: string;
};

type VideoShape = {
  videoUrl: string;
};


 type ProductImagesProps = {
  position?: 'left' | 'right';
  ModalZoomElement?: any;
  thumbnailsOrientation?: 'vertical' | 'horizontal';
  hiddenImages?: string | string[];
  placeholder?: string;
  images?: ImageShape[];
  videos?: VideoShape[];
  zoomProps?: {
    zoomType: string;
  };
  displayThumbnailsArrows?: boolean;
  aspectRatio?: {
    desktop?:string,
    mobile?:string,
    phone?:string,
    tablet?:string
  };
  maxHeight?: number;
  thumbnailAspectRatio?: string;
  thumbnailMaxHeight?: number;
  showNavigationArrows?: boolean;
  showPaginationDots?: boolean;
  showImageLabel?: boolean;
  thumbnailVisibility?: 'visible' | 'hidden';
  contentOrder?: 'images-first' | 'videos-first';
  zoomMode?: 'disabled' | 'open-modal' | 'in-place-click' | 'in-place-hover';
  zoomFactor?: number;
  contentType?: 'all' | 'images' | 'videos';
  displayMode?: 'carousel' | 'list' | 'first-image';
};

declare module 'vtex.store-components' {
  export const ProductImages: React.FC<ProductImagesProps>;
}
