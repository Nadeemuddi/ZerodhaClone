export default function LeftSection({
  imgUrl,
  productName,
  productDes,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-6 mb-5">
          <img style={{width:"100%"}} src={imgUrl} alt="" />
        </div>
        <div className="col-2"></div>
        <div className="col-4  ">
          <h2 className="mb-4">{productName}</h2>
          <p className="fs-5 lh-lg">{productDes}</p>
          <div className="mb-5">
            <a className="me-5  text-decoration-none fs-5" href={tryDemo}>
              Try Demo<i class="fa-solid fa-arrow-right-long"></i>
            </a>
            <a className=" text-decoration-none fs-5" href={learnMore}>
              learn More<i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
          <div>
            <a className="me-5" href={googlePlay}>
              <img style={{width:"175px"}} src="media/images/googlePlayBadge.svg" alt="" />
            </a>
            <a className=" text-decoration-none fs-4" href={appStore}>
              <img  style={{width:"175px"}} src="media/images/appstoreBadge.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
