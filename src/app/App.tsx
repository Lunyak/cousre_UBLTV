import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from './providers/ThemeProvider'
import { SideBar } from 'widgets/Sidebar/ui'
import { Suspense, useEffect } from 'react'
import './styles/index.scss'
import { useTranslation } from 'react-i18next'

const Сomponent = () => {

}

const App = () => {
  const { theme } = useTheme()
  useEffect(() => {
    if (Math.random() < 0.5) {
      throw new Error("Оп па");
      
    }
  }, [])
  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <SideBar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}

export default App
