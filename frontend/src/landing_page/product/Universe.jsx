import "./Universe.css";

export default function Universe() {
  return (
    <div className="container">
      <div className="row p-5 ">
        <h1 className="text-center mt-5 fs-3">The Zerodha Universe</h1>
        <p className="fs-5 text-center mt-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-5 text-center">
          <img src="media/images/zerodhaFundhouse.png" alt="" />
          <p className="text-small text-muted">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-5 text-center">
          <img src="media/images/sensibullLogo.svg" alt="" />
          <p className="text-small text-muted">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-5 text-center">
          <img src="media/images/tijori.svg" alt="" />
          <p className="text-small text-muted">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4 p-5 text-center">
          <img src="media/images/streakLogo.png" alt="" />
          <p className="text-small text-muted">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-5 text-center">
          <img src="media/images/smallcaseLogo.png" alt="" />
          <p className="text-small text-muted">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-5 text-center">
          <img
            style={{ width: "45%" }}
            src="media/images/dittoLogo.png"
            alt=""
          />
          <p className="text-small text-muted">
            Personalized advice on life and health insurance. No spam and no
            mis-selling. Sign up for free
          </p>
        </div>
        <button className="btn btn-primary p-2 mt-3 signup-btn mb-5">
          Sign up for free
        </button>
      </div>
    </div>
  );
}
