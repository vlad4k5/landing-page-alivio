import s from "./HowItWorks.module.scss"
import option1 from "../../assets/images/option1.jpg"
import option1_1 from "../../assets/images/option1_1.jpg"
import option2 from "../../assets/images/option2.jpg"
import option3 from "../../assets/images/option3.jpg"

const HowItWorks = () => {
  return <div className={s.mainBlock}>
    <h2>How it works</h2>
    <div className={s.info}>
      <p className={s.firstColumn}>
        Understand & Release the stress in 3 steps
      </p>

      <p className={s.secondColumn}> 
        Alivio offers as many journals it takes, tackling different areas such as anxiety, overwhelmedness, sadness, or anger, and a variety of personal causes, to help you become aware of your emotions, and guide you in how to manage stress.
      </p>
    </div>

    <div className={s.options}>

      <div className={s.firstOption}>
        <h3>Personalize</h3>
        <p>
          Answer a quick survey about how you express yourself, what causes you stress, and what area would you like to work on. This way, we can fully personalize your journal!
        </p>
        <img src={option1_1} alt="laptop screen" className={s.laptopScreenImg}/>
        <img src={option1} alt="laptop"/>
      </div>

      <div className={s.secondOption}>
        <h3>Write & Understand</h3>
        <p>
          Write, draw, reflect, understand. Alivio will guide you through the prompts and will help you manage your stress!
        </p>
        <img src={option2} alt="book"/>
      </div>

      <div className={s.thirdOption}>
        <h3>Alivio!</h3>
        <p>
        Now you are aware, and have a way to manage and overcome your own stress.What are you waiting for? Alivio today!
        </p>
        <img src={option3} alt="book"/>
      </div>

    </div>
  </div>
}
export default HowItWorks