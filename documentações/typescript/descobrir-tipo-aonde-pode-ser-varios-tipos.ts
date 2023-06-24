// Para descobrir o tipo específico de uma instância da classe ResolveImage, você pode utilizar a verificação de tipo do TypeScript, também conhecida como type guard.Com um type guard, você pode verificar as propriedades da instância para determinar qual tipo específico ela pertence.Veja como você pode fazer isso:

export type ImageCmsProps = {
  alt: string
  __editorItemTitle: string
  srcTablet: string
  srcDesktop: string
  srcMobile: string
}

export type ImageSize = {
  height: string;
  width: string;
  src: string;
};
export type ImageBlockProps = {
  mobile: ImageSize;
  desktop: ImageSize;
  allDevices: ImageSize
  title: string
  alt: string
}

class ResolveImage {
  constructor(
    public readonly imageProps: ResolveImageProps
  ) { }

  public handle() {
    if ('allDevices' in this.imageProps) {
      // A instância é do tipo ImageBlockProps
      this.handleImageBlockProps(this.imageProps);
    } else {
      // A instância é do tipo ImageCmsProps
      this.handleImageCmsProps(this.imageProps);
    }
  }

  private handleImageBlockProps(props: ImageBlockProps) {
    // Lógica para manipular instâncias do tipo ImageBlockProps
  }

  private handleImageCmsProps(props: ImageCmsProps) {
    // Lógica para manipular instâncias do tipo ImageCmsProps
  }
}

