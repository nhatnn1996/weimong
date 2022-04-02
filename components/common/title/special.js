import { special } from './title.module.css';
export const TitleSpecial = ({ children }) => {
  return (
    <div className={special}>
      <span>{children}</span>
    </div>
  );
};
