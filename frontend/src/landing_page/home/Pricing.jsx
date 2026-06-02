export default function Pricing() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount brocking and price transparecy
            in india.Flat fees and low hidden charges.
          </p>
          <div>
            <a href="/">
              See pricing<i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
        <div className="col-2"></div>
        <div className="col-6">
          <div className="row border mb-5">
            <div className="col text-center p-5 border-end">
              <h1 className="mb-3">&#8377;0</h1>
              <p>Free equity delivery and direct mutual funds</p>
            </div>
            <div className="col text-center p-5">
              <h1 className="mb-3">&#8377;20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
