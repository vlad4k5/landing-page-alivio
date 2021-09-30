import s from "./Slogan.module.scss"
import backGroundImage from "../../assets/images/mainPhoto.jpg"

const Slogan = () => {
  return <div className={s.slogan} >
      <img src={backGroundImage} alt="Slogan"/>
      <div className={s.sloganBlock}>
        <h1>Be aware, Manage well.</h1>
        <p>
          Everyone experiences stress in different ways.Let Alivio guide you, in a personalized journal experience, to overcome your stress.
        </p>
        <button>Find Your Way</button>
      </div>
  </div>
}
export default Slogan