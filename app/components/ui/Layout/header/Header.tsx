import {FC} from 'react'
import AuthForm from './AuthForm/AuthForm'
import Logo from './Logo'
import css from './Header.module.scss'
import Search from '@/ui/Layout/header/search/Search'

const Header:FC = () => {
  return (
    <header className={css.header}>
      <Logo />
      <Search/>
      <AuthForm/>
    </header>
  )
}

export default Header