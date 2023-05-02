declare module '*.css' {
  const css: CSSHandles;
  export default css;
  type Styles = {
    [selector: string]: string;
  };

  const styles: Styles;

  export default styles;
}

interface CSSHandles {
  containerRelatedItems: string | undefined;
  relatedImage: string | undefined;
  relatedLink: string | undefined;
  containerRelated: string | undefined;
  imageElement: string;
}
