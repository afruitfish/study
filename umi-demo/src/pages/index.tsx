import styles from './index.less';
import React from 'react';
import FormNormalLogin from './FormNormalLogin';
export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <FormNormalLogin />
    </div>
  );
}
