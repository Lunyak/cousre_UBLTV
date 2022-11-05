import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './NotFoundPage.module.scss'

export const NotFilePage = () => {
  const { t } = useTranslation()
  return (
    <div className={classNames(cls.NotFoundPage, {}, [])}>
      <h2>{t('Страница не найдена')}</h2>
    </div>
  )
}
