import { home } from "@/components/Home/i18ns/en";
import { header } from "@/components/Header/i18ns/en";
import { transaction } from "@/components/Transaction/i18ns/en";

export function getI18ns() {
  return {
    home : home,
    header : header,
    transaction : transaction,
    common: {
        operateSuccess: 'Operate success',
        unknowException:"Unknow exception, please concat programmer"
    },
  };
}