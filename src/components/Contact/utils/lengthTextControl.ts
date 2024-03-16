import { ChangeEvent, SetStateAction } from 'react';

export const lengthTextControl = (
  e: ChangeEvent<HTMLTextAreaElement>,
  setTextAreaLength: {
    (value: SetStateAction<number>): void;
    (arg0: any): void;
  }
) => {
  setTextAreaLength(e.target.selectionEnd);
};
