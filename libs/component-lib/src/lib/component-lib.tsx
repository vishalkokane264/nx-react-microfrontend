import styles from './component-lib.module.scss';

/* eslint-disable-next-line */
export interface ComponentLibProps {}

export function ComponentLib(props: ComponentLibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ComponentLib!</h1>
    </div>
  );
}

export default ComponentLib;
