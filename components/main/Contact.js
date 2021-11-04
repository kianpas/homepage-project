import Wrapper from "../ui/Wrapper";
import classes from "./Contact.module.css";

const Contact = (params) => {
  return (
    <Wrapper>
      <section class="contact">
        <article>
          <div className={classes["contact-container"]}>
            <i class="far fa-envelope-open"></i>
            <span>EMAIL : kianpas@gmail.com</span>
          </div>
          <div className={classes["contact-container"]}>
            <i class="far fa-mobile"></i>
            <span>PHONE : +82 010-5834-5237</span>
          </div>
        </article>
      </section>
    </Wrapper>
  );
};

export default Contact;
