import React from 'react';
import styles from './styles.css';
import { Props } from './types/IHtmlRender';
interface ITitlePageProps {
  data: Props;
}

const TitlePage = (titlePage: ITitlePageProps) => {
  const namePage = titlePage?.data?.text;
  const backgroundTitle = titlePage?.data?.backgroundColor;
  const colorTitle = titlePage?.data?.color;

  return (
    <div className={styles.containerTitle} style={{ background: backgroundTitle }}>
      <p className={styles.title} style={{ color: colorTitle }}>
        {namePage}
      </p>
    </div>
  );
};

export default TitlePage;
