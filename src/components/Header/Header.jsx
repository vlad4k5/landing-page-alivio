import s from "./Header.module.scss"
import logo from "../../assets/images/logo.svg"

const Header = () => {
  return <header className={s.header}>
    <img alt="Alivio" src={logo} className={s.logo}/>
    <nav className={s.navBlock}>
      <button className={s.navButton}>Why Alivio</button>
      <button className={s.navButton}>Solutions</button>
      <button className={s.navButton}>Community</button>
      <button className={s.navButton}>Pricing</button>
    </nav>
    <button className={s.signInButton}>Sign in</button>
    <button className={s.startTrialButton}>Start Trial</button>
  </header>
}

export default Header