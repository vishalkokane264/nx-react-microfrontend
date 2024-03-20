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
    <div data-testid="test-card" className={styles['card-wrapper']}>
      <div className={styles['icon-wrapper']}>
        <div data-testid="test-icon" className={styles['icon']}>
          <img src={props.icon} />
        </div>
      </div>
      <div className={styles['content-wrapper']}>
        <div data-testid="test-title" className={styles['title']}>
          {props.title}
        </div>
        <div className={styles['subtitle-wrapper']}>
          <div data-testid="test-subtitle" className={styles['subtitle']}>
            {props.subtitle}
          </div>
          <div data-testid="test-status" className={styles['status']}>
            {props.status}
          </div>
        </div>
      </div>
    </div>
  );
}
/*ANCHOR -
this is default values it will pick
*/
Card.defaultValues = {
  icon: 'icon',
  title: 'Human technology teamwork.mkv',
  status: '250.MB',
  subtitle: 'MM102LAS232',
};

export default Card;
