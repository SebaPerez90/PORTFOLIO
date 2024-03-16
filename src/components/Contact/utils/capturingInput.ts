import { ChangeEvent, SetStateAction } from 'react';

export const capturingInput = (
  e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  setFormData: {
    (
      value: SetStateAction<{ name: string; email: string; message: string }>
    ): void;
    (
      value: SetStateAction<{ name: string; email: string; message: string }>
    ): void;
    (
      value: SetStateAction<{ name: string; email: string; message: string }>
    ): void;
    (arg0: any): void;
  },
  formData: { name: string; email: string; message: string }
) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};
