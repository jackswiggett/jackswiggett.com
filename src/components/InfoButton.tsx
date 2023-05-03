import React from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import * as styles from './InfoButton.module.scss';

interface Props {
  onClick?: () => void;
}

/** Button in the form of an info/question icon */
const InfoButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button className={styles.root} onClick={onClick}>
      <AiOutlineInfoCircle size={30} />
    </button>
  );
};

export default InfoButton;
