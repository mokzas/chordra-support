import { TFunction } from "react-i18next";

export interface ValidationTypeProps {
  type: string;
}

export interface ContactProps {
  title: string;
  content: string;
  id: string;
  form?: {
    name: string;
    email: string;
    message: string;
    submit: string;
  };
  t: TFunction;
}
