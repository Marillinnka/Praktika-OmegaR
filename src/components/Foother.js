import iconFoother from "../images/Icon-footer.png"

export function Foother() {
  return (
    <>
      <div className="block-contact">
        <div>
          <img src={iconFoother} alt="Иконка" />
        </div>
        <div className="block-contact__text-icon">
          <p>
            zest<br />
            le zeste<br />
            la scorza
          </p>
        </div>
        <div className="block-contact__text">
          <p>
            Address<br /><br />
            Rue Sainte<br />
            Dévote,<br />
            98000 Monaco
          </p>
        </div>
        <div className="block-contact__text">
          <p>
            Contact<br /><br />
            contact@zest.com<br />
            T / +377 93 50 52 60<br />
            jobs@zest.com
          </p>
        </div>
        <div className="block-contact__text">
          <p>
            Follow us<br /><br />
            Facebook<br />
            Twitter<br />
            Google Plus
          </p>
        </div>
      </div>
      <footer className="block-footer">
        <div className="block-footer__organization">
          <p>Copyright © {new Date().getFullYear()} All rights reserved</p>
        </div>
        <div>
          <p>Contact: contact@zest.com</p>
        </div>
      </footer>
    </>
  );
}
