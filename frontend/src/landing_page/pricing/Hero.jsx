export default function Hero() {
  return (
    <div className="container">
      <div className="row mt-5 mb-5 text-center">
        <h2 className="">Charges</h2>
        <p className="fs-4 mt-2 text-muted">List of all charges and taxes</p>
      </div>
      <div className="row text-center p-5 text-muted">
        <div className="col-4 p-3">
          <img style={{width:"80%"}} src="media/images/pricingEquity.svg" alt="" />
          <h1 className="mt-4 fs-2">Free equity delivery</h1>
          <p className="mt-4 fs-5">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-3">
          <img style={{width:"80%"}} src="media/images/intradayTrades.svg" alt="" />
          <h1  className="mt-4 fs-2">Intraday and F&O trades</h1>
          <p className="mt-4 fs-5">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 p-3">
          <img style={{width:"80%"}} src="media/images/pricingEquity.svg" alt="" />
          <h1 className="mt-4 fs-2">Free direct MF</h1>
          <p className="mt-4 fs-5">
            All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}
