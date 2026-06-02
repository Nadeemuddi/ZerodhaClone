export default function CreateTicket() {
  return (
    <div
      className="container"
      style={{ backgroundColor: "#f5f5f5",padding:"10px" }}
    >
      <div className="row mt-5 mb-5">
        <div className="col-4">
          <h1>Support Portal</h1>
        </div>
        <div className="col-6"></div>

        <div className="col-2">
          <button className="btn btn-primary mb-5 ms-5 btn-lg  mt-3">My ticket</button>
        </div>
        <div className="col-12">
          <input
            style={{ height: "70px", fontSize: "20px",  width:"100%"}}
            type="text"
            placeholder="Eg:How do i open my account,How do i activate F&O"
          />
        </div>
      </div>
    </div>
  );
}
