import s from "./Footer.module.scss"



const Footer = () => {
  return <div className={s.footer}>
    <h2>Alivio</h2>
    <nav>
      <ul>
        <li><button>Why Alivio</button></li>
        <li><button>Solutions</button></li>
        <li><button>Community</button></li>
        <li><button>Pricing</button></li>
      </ul>
    </nav>
  </div>
}
export default Footer