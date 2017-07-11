import { home } from "@/components/Home/i18ns/zh";
import { header } from "@/components/Header/i18ns/zh";
import { transaction } from "@/components/Transaction/i18ns/zh";

export function getI18ns() {
  return {
    home : home,
    header : header,
    transaction : transaction,
    common: {
        operateSuccess: '操作成功',
        unknowException:"未知异常，请联系开发定位问题"
    },
  };
}