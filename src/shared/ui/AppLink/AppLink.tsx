import React, { FC } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'

export enum AppLinkTheme {
  PRIMERY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red'
}

interface IAppLinkProps extends LinkProps {
  className: string
  theme?: AppLinkTheme
}
export const AppLink: FC<IAppLinkProps> = (props) => {
  const { to, className, children, theme = AppLinkTheme.PRIMERY, ...otherProps } = props
  return (
    <Link to={to} className={classNames(cls.AppLink, {}, [className, cls[theme]])}>
      {children}
    </Link>
  )
}

export default AppLink