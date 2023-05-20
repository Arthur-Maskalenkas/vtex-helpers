

type SectionItem = {
  __editorItemTitle: string;
  src?: string;
  alt?: string;
  href?: string;
  target?: boolean;
};

type OtherSection = {
  items: SectionItem[];
};

type AboutStoreSection = {
  freeText: string;
};

type LogoSection = {
  __editorItemTitle: string;
  srcMobile: string;
  alt: string;
  srcDesktop: string;
};

type SecuritySection = {
  __editorItemTitle: string;
  items: SectionItem[];
};

type PaymentMethodsSection = {
  __editorItemTitle: string;
  items: SectionItem[];
};

type SocialLinksSection = {
  __editorItemTitle: string;
  items: SectionItem[];
};

type GlobalContextTypeAvantiFooter = {
  _screen_config_other_section?: OtherSection[];
  _screen_config_about_store?: AboutStoreSection[];
  _screen_config_logo?: LogoSection[];
  _screen_config_security?: SecuritySection[];
  _screen_config_payment_methods?: PaymentMethodsSection[];
  _screen_config_social_links?: SocialLinksSection[];
};
