import classes from './card-component.module.scss';
/* eslint-disable-next-line */
export interface CardComponentProps {
  title: string;
  subtitle: string;
  icon: string;
}

export function CardComponent(props: CardComponentProps) {
  return (
    <div className={classes['card-wrapper']}>
      <div className={classes['card-logo']}>
        <img src={props.icon} alt="image" />
      </div>
      <div className={classes['card-data']}>
        <div className={classes['card-title']}>{props.title}</div>
        <div className={classes['card-subtitle']}>{props.subtitle}</div>
      </div>
    </div>
  );
}

export default CardComponent;
