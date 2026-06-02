import "./Hero.css";

export default function Hero(){
  return(
    <div className="container mb-5 p-5 ">
      <div className="row text-center">
        <img src="media/images/homeHero.png" alt="" className="mb-5"/>
        <h1 className="mt-5">Invest in everything</h1>
        <p>Online plateform to invest in stocks, derivatives, mutual funds</p>
        <button className="btn btn-primary p-2 signup-btn mb-5" >Signup Now</button>
      </div>
    </div>
  )
}