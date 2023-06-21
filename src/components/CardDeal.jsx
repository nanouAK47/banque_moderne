import { card } from "../assets";
import styles, {layout} from "../style";
import Button from "./Button";

const CardDeal = () => (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Trouver une meilleure offre <br className="sm:block hidden" />
          en quelques étapes simples.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, ducimus hic? Rem, minima quas nostrum architecto laborum totam ipsa praesentium in, repudiandae aut magnam facere, fuga blanditiis doloribus enim sequi?
        </p>

        <Button styles="mt-10" />
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  )

export default CardDeal
