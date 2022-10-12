import Wrapper from "../ui/Wrapper";
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <Wrapper>
      <section class="contact">
        <article>
          <div className={classes["contact-container"]}>
            <i className="bx bx-mail-send"></i>
            <span>EMAIL : kianpas@gmail.com</span>
          </div>
          <div className={classes["contact-container"]}>
            <i className="bx bx-mobile"></i>
            <span>PHONE : +82 000-0000-0000</span>
          </div>
        </article>
      </section>
    </Wrapper>
  );
};

export default Contact;
