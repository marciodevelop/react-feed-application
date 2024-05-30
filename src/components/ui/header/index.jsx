import styles from './style.module.css'
import Logo from '../../../assets/logo.svg'

export function Header() {
  return <header className={styles.header}><img alt='logo marca, projeto com react' src={Logo} /></header>
} 