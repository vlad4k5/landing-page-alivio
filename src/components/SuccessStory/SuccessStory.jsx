import s from "./SuccessStory.module.scss"
import successStory from "../../assets/images/successStory.jpg"
import playIcon from "../../assets/images/playIcon.svg"

const SuccessStory = () => {
  return <div className={s.successStory}>

    <div className={s.info}>
      <h2>Let's hear about Kayla's success story</h2>
      <p>See how well Alivio works in a real customer’s life. </p>
      <button>Let’s get started</button>
    </div>

    <div className={s.videoBlock}>
      <img src={successStory} alt="Success Story"/>
      <img src={playIcon} alt="Play icon" className={s.playIcon}/>
    </div> 
  </div>
}

export default SuccessStory