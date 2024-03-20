import { IStyle } from '../Button/button';
import styles from './card.module.scss';
/* eslint-disable-next-line */
export interface CardProps {
  icon: string;
  title: string;
  subtitle: string;
  status?: string;
  style?: IStyle;
}

export function Card(props: CardProps) {
  return (
    <div className={styles['card-wrapper']}>
      <div className={styles['icon-wrapper']}>
        <div className={styles['icon']}>
          <img src={props.icon} />
        </div>
      </div>
      <div className={styles['content-wrapper']}>
        <div className={styles['title']}>{props.title}</div>
        <div className={styles['subtitle-wrapper']}>
          <div className={styles['subtitle']}>{props.subtitle}</div>
          <div className={styles['status']}>{props.status}</div>
        </div>
      </div>
    </div>
  );
}

Card.defaultValues = {
  icon: 'icon',
  title: 'Human technology teamwork.mkv',
  status: '250.MB',
  subtitle: 'MM102LAS232',
};

export default Card;
