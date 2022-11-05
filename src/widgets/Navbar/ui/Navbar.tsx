import { Link } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import cls from './Navbar.module.scss'

interface INavbarProps {
  className?: string
}

export const Navbar = ({ className }: INavbarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} className={classNames('')} to={'/'}>Главная</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} className={classNames('')} to={'/about'}>О сайте</AppLink>
      </div>
    </div>
  )
}