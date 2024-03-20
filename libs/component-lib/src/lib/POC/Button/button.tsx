/* eslint-disable-next-line */
export interface ButtonProps {
  name: string;
  type: buttonType;
  disabled: boolean;
  style: IStyle;
  onClick: (data?: any) => void;
}

export interface IStyle {
  [x: string]: string;
}

export type buttonType = 'submit' | 'button' | 'reset';

export function Button(props: ButtonProps) {
  return (
    <button
      type={props.type}
      name={props.name}
      onClick={props.onClick}
      style={props.style}
      disabled={props.disabled}
    >
      {props.name}
    </button>
  );
}

Button.defaultProps = {
  name: 'Start Monitoring for free',
  type: 'submit',
  disabled: false,
  style: {
    textTransform: 'uppercase',
    border: 'none',
    background: '#764abc',
    height: '42px',
    width: '300px',
    color: '#f8f9fb',
    borderRadius: '4px',
  },
};

export default Button;
