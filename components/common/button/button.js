import { connect } from './button.module.css';
export const Button = ({ children }) => {
  return (
    <button className={connect}>
      <span>{children}</span>
    </button>
  );
};
