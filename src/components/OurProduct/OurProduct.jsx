import s from "./OurProduct.module.scss"
import smilingPhoto from "../../assets/images/smiling.jpg"
import cornerProfile from "../../assets/images/cornerProfile.png"



const OurProduct = () => {
  return <div className={s.ourProductBlock}>

    <div className={s.photoBlock}>
      <img src={smilingPhoto} alt="Smiling" />
      <img src={cornerProfile} alt="Profile" className={s.cornerProfile} />
    </div>

    <div className={s.info}>
      <h2>Our product</h2>
      <h3>You tell us your stress, We make your diary</h3>
      <p>
        Everyone experiences it, and in different ways. Let Alivio guide you, in a personalized journal experience, to overcome your stress.
      </p>
      <button>Find Your Way</button>
    </div>

  </div>
}

export default OurProduct