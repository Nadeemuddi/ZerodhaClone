import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

export default function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imgUrl="media/images/kite.png"
        productName="Kite"
        productDes="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        imgUrl="media/images/console.png"
        productName="Console"
        productDes="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        tryDemo=""
      />
      <LeftSection
        imgUrl="media/images/coin.png"
        productName="Coin"
        productDes="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        imgUrl="media/images/kiteconnect.png"
        productName="Kite Connect API"
        productDes="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        tryDemo=""
      />
      <LeftSection
        imgUrl="media/images/varsity.png"
        productName="Varsity mobile"
        productDes="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
     <p className="fs-4 text-center mt-5">Want to know more about our technology stack? Check out the <a style={{textDecoration:"none"}} href="">Zerodha.tech</a> blog.</p>
      <Universe />
    </>
  );
}
