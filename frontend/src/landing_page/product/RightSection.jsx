export default function RightSection({
  imgUrl,
  productName,
  productDes,
  tryDemo,
}) {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-5 p-5 mt-5">
          <h2 className="mb-4">{productName}</h2>
          <p className="fs-5 lh-lg">{productDes}</p>
           <a className="me-5  text-decoration-none fs-5" href={tryDemo}>
              Try Demo<i class="fa-solid fa-arrow-right-long"></i>
            </a>
        </div>
        <div className="col-1"></div>
        <div className="col-6 mb-5">
          <img className="ms-5" style={{ width: "100%" }} src={imgUrl} alt="" />
        </div>
      </div>
    </div>
  );
}
