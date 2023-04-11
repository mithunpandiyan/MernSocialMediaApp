import { SyncOutlined } from "@ant-design/icons";

const AuthForm = ({
  handleSubmit,
  name,
  setName,
  secret,
  setSecret,
  email,
  setEmail,
  password,
  loading,
  setPassword,
  page,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      {page !== "login" && (
        <div className="form-group p-2">
          <small>
            <label className="text-muted"> Your Name</label>
          </small>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
            className="form-control"
            placeholder="Enter name"
          />
        </div>
      )}

      <div className="form-group  p-2">
        <small>
          <label className="text-muted"> Your Email address</label>
        </small>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="text"
          className="form-control"
          placeholder="Enter name"
        />
      </div>

      <div className="form-group  p-2">
        <small>
          <label className="text-muted"> Password</label>
        </small>
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type="text"
          className="form-control"
          placeholder="Enter name"
        />
      </div>
      {page !== "login" && (
        <>
          <div className="form-group  p-2">
            <small>
              <label className="text-muted"> Pick a question</label>
            </small>
            <select className="form-control">
              <option> What is your favorite color ?</option>
              <option> What is your birth place name ?</option>
              <option> What is your first pet name ?</option>
            </select>
            <small className="form-text text-muted">
              You can use this to reset your password if forgotten!
            </small>
          </div>

          <div className="form-group  p-2">
            <input
              value={secret}
              onChange={(event) => setSecret(event.target.value)}
              type="text"
              className="form-control"
              placeholder="Write  your answer"
            />
          </div>
        </>
      )}
      <div className="form-group p-2">
        <button
          disabled={
            page === "login"
              ? !email || !password
              : !name || !email || !password || !secret
          }
          className="btn btn-primary col-12"
        >
          {loading ? <SyncOutlined /> : " Submit"}
        </button>
      </div>
    </form>
  );
};

export default AuthForm;
