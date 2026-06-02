import "./Hero.css";

export default function Hero() {
  return (
    <div className="container py-5">
      <div className="row ">
        <div className="col-8  support-box ">
          <div className="list-container" >
            <div
              className="support-header  d-flex justify-content-between align-items-center"
              data-bs-toggle="collapse"
              data-bs-target="#accountMenu"
            >
              <h4>
                <i
                  className="fa-solid fa-circle-plus me-3"
                  style={{ color: "blue" }}
                ></i>
                Account Opening
              </h4>

              <span>
                <i
                  class="fa-solid fa-chevron-down"
                  style={{ color: "blue" }}
                ></i>
              </span>
            </div>

            <div className="collapse support-links" id="accountMenu">
              <ul>
                <li>
                  <a href="#">Resident individual</a>
                </li>
                <li>
                  {" "}
                  <a href="#">Minor</a>
                </li>
                <li>
                  <a href="#">Non Resident Indian (NRI)</a>
                </li>
                <li>
                  <a href="#">Company, Partnership, HUF and LLP</a>
                </li>
                <li>
                  <a href="#">Glossary</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="list-container">
            <div
              className="support-header d-flex justify-content-between align-items-center"
              data-bs-toggle="collapse"
              data-bs-target="#profile"
            >
              <h4>
                <i
                  className="fa-regular fa-circle-user me-3"
                  style={{ color: "blue" }}
                ></i>
                Your Zerodha Account
              </h4>

              <span>
                <i
                  class="fa-solid fa-chevron-down"
                  style={{ color: "blue" }}
                ></i>
              </span>
            </div>

            <div className="collapse support-links" id="profile">
              <ul>
                <li>
                  <a href="#">Your Profile</a>
                </li>
                <li>
                  {" "}
                  <a href="#">Account modification</a>
                </li>
                <li>
                  <a href="#">
                    Client Master Report (CMR) and Depository Participant (DP)
                  </a>
                </li>
                <li>
                  <a href="#">Transfer and conversion of securities</a>
                </li>
                <li>
                  <a href="#">Nomination</a>
                </li>
                <li>
                  <a href="#">Company account</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="list-container">
            <div
              className="support-header d-flex justify-content-between align-items-center"
              data-bs-toggle="collapse"
              data-bs-target="#random"
            >
              <h4>
                <i
                  className="fa-brands fa-servicestack me-3"
                  style={{ color: "blue" }}
                ></i>
                Kite
              </h4>

              <span>
                <i
                  class="fa-solid fa-chevron-down"
                  style={{ color: "blue" }}
                ></i>
              </span>
            </div>

            <div className="collapse support-links" id="random">
              <ul>
                <li>
                  <a href="#">IPO</a>
                </li>
                <li>
                  {" "}
                  <a href="#">Trading FAQs</a>
                </li>
                <li>
                  <a href="#">Margin Trading Facility (MTF) and Marginst</a>
                </li>
                <li>
                  <a href="#">Charts and orders</a>
                </li>
                <li>
                  <a href="#">Alerts and Nudges</a>
                </li>
                <li>
                  <a href="#">General</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="list-container">
            <div
              className="support-header d-flex justify-content-between align-items-center"
              data-bs-toggle="collapse"
              data-bs-target="#random"
            >
              <h4>
                <i
                  className="fa-solid fa-indian-rupee-sign me-3"
                  style={{ color: "blue" }}
                ></i>
                Funds
              </h4>

              <span>
                <i
                  class="fa-solid fa-chevron-down"
                  style={{ color: "blue" }}
                ></i>
              </span>
            </div>

            <div className="collapse support-links" id="random">
              <ul>
                <li>
                  <a href="#">Add money</a>
                </li>
                <li>
                  {" "}
                  <a href="#">Withdraw money</a>
                </li>
                <li>
                  <a href="#">Add bank accounts</a>
                </li>
                <li>
                  <a href="#">eMandates</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="list-container">
            <div
              className="support-header d-flex justify-content-between align-items-center"
              data-bs-toggle="collapse"
              data-bs-target="#random"
            >
              <h4>
                <i
                  className="fa-brands fa-dribbble me-3"
                  style={{ color: "blue" }}
                ></i>
                Console
              </h4>

              <span>
                <i
                  class="fa-solid fa-chevron-down"
                  style={{ color: "blue" }}
                ></i>
              </span>
            </div>

            <div className="collapse support-links" id="random">
              <ul>
                <li>
                  <a href="#">Portfolio</a>
                </li>
                <li>
                  {" "}
                  <a href="#">Corporate actions</a>
                </li>
                <li>
                  <a href="#">Funds statement</a>
                </li>
                <li>
                  <a href="#">Reports</a>
                </li>
                <li>
                  <a href="#">Profile</a>
                </li>
                <li>
                  <a href="#">Segments</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="list-container ">
            <div
              className="support-header d-flex justify-content-between align-items-center"
              data-bs-toggle="collapse"
              data-bs-target="#random"
            >
              <h4>
                <i
                  className="fa-brands fa-bitcoin me-3"
                  style={{ color: "blue" }}
                ></i>
                Coin
              </h4>

              <span>
                <i
                  class="fa-solid fa-chevron-down"
                  style={{ color: "blue" }}
                ></i>
              </span>
            </div>

            <div className="collapse support-links" id="random">
              <ul>
                <li>
                  <a href="#">Mutual funds</a>
                </li>
                <li>
                  {" "}
                  <a href="#">National Pension Scheme (NPS)</a>
                </li>
                <li>
                  <a href="#">Fixed Deposit (FD)</a>
                </li>
                <li>
                  <a href="#">Features on Coin</a>
                </li>
                <li>
                  <a href="#">Payments and Orders</a>
                </li>
                <li>
                  <a href="#">General</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-4 support-links">
          <h4 style={{ marginLeft: "40px" }}>Quick Links</h4>
          <ol style={{ listStyleType: "none" }}>
            <li>
              <a href="">1. Track account opening</a>
            </li>
            <li>
              <a href="">2. Track segment activation</a>
            </li>
            <li>
              <a href="">3. Intraday margins</a>
            </li>
            <li>
              <a href="">4. Kite user manual</a>
            </li>
            <li>
              <a href="">5. Learn how to create a ticket</a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
