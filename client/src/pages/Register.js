export default function Register() {
  const handleSubmit = async () => {
    try {
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h1 className="display-1 bg-primary text-light p-5">Register</h1>

      <div className="container">
        <div className="row">
          <div className="col-lg-4 offset-lg-4">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter your email"
                className="form-control mb-4"
                required
                autoFocus
              />
              <input
                type="password"
                placeholder="Enter your password"
                className="form-control mb-4"
                required
                autoFocus
              />
              <button className="btn btn-primary col-12 mb-4">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
