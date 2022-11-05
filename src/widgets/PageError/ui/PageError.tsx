import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button/Button";
import cls from './PageError.module.scss'

interface IPageErrorProps {
  className?: string;
}

const reloadPage = () => {
    location.reload()
}

export const PageError = ({ className }: IPageErrorProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.PageError, {}, [])}>
      <p>{t("Произошла непредвиденная ошибка")}</p>
      <Button onClick={reloadPage} >
        {t('обновить страницу')}
      </Button>
    </div>
  );
};
