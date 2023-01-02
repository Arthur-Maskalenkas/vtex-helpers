import React from 'react'

import styles from './styles.css'

export const Loading = () => {
  return (
    <div className={styles.containerLoading}>
      <div className={styles.filterSkeleton} />

      <div className={styles.alphabetSkeleton} />

      <div className={styles.containerContent}>
        <div className={styles.contentSkeleton} />
        <div className={styles.contentSkeleton} />
        <div className={styles.contentSkeleton} />
        <div className={styles.contentSkeleton} />
        <div className={styles.contentSkeleton} />
        <div className={styles.contentSkeleton} />
        <div className={styles.contentSkeleton} />
        <div className={styles.contentSkeleton} />

        <div className={`${styles.contentSkeleton} ${styles.contentDesktop}`} />
        <div className={`${styles.contentSkeleton} ${styles.contentDesktop}`} />
        <div className={`${styles.contentSkeleton} ${styles.contentDesktop}`} />
        <div className={`${styles.contentSkeleton} ${styles.contentDesktop}`} />
        <div className={`${styles.contentSkeleton} ${styles.contentDesktop}`} />
        <div className={`${styles.contentSkeleton} ${styles.contentDesktop}`} />
        <div className={`${styles.contentSkeleton} ${styles.contentDesktop}`} />
        <div className={`${styles.contentSkeleton} ${styles.contentDesktop}`} />

        <div className={`${styles.contentSkeleton} ${styles.contentDesktop}`} />
        <div className={`${styles.contentSkeleton} ${styles.contentDesktop}`} />
        <div className={`${styles.contentSkeleton} ${styles.contentDesktop}`} />
        <div className={`${styles.contentSkeleton} ${styles.contentDesktop}`} />
        <div className={`${styles.contentSkeleton} ${styles.contentDesktop}`} />
        <div className={`${styles.contentSkeleton} ${styles.contentDesktop}`} />
        <div className={`${styles.contentSkeleton} ${styles.contentDesktop}`} />
        <div className={`${styles.contentSkeleton} ${styles.contentDesktop}`} />
        <div className={`${styles.contentSkeleton} ${styles.contentDesktop}`} />
      </div>
    </div>
  )
}
