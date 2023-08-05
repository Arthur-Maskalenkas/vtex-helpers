export type IHtmlRender = AllSectionsProps[];

export interface AllSectionsProps {
  name: string;
  type: string;
  props: Props;
}

export interface Props {
  id: string;
  text?: string;
  backgroundColor: string;
  color?: string;
  textAlign?: string;
  className?: string;
  flex?: string;
  children?: Children[];
}

export interface Children {
  name: string;
  type: string;
  props: Props2;
}

export interface Props2 {
  images?: Image[];
  arrowColor?: string;
  settings?: Settings;
  alt?: string;
  id?: string;
  title?: string;
  src?: string;
  className?: string;
  content?: Content;
  css?: Css;
  href?: string;
  isFull?: boolean;
}

export interface Image {
  id?: string;
  src: string;
  alt?: string;
  href?: string;
  media?: string;
}

export interface Settings {
  arrows: boolean;
  slidesToShow: number;
  responsive: Responsive[];
}

export interface Responsive {
  breakpoint: number;
  settings: Settings2;
}

export interface Settings2 {
  slidesToShow: number;
  slidesToScroll: number;
}

export interface Content {
  title: string;
  description: string;
  className: string;
}

export interface Css {
  'max-width': string;
}
