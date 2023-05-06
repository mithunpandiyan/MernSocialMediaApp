import { SyncOutlined } from "@ant-design/icons";
import forgotPassword from "../../pages/forgot-password";

const ForgotPasswordForm = ({
  handleSubmit,
  secret,
  setSecret,
  email,
  setEmail,
  newPassword,
  loading,
  setNewPassword,
  page,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group  p-2">
        <small>
          <label className="text-muted"> Your Email address</label>
        </small>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="text"
          className="form-control"
          placeholder="Enter new password"
        />
      </div>

      <div className="form-group  p-2">
        <small>
          <label className="text-muted"> New Password</label>
        </small>
        <input
          value={newPassword}
          onChange={(event) => setNewPassword(event.target.value)}
          type="text"
          className="form-control"
          placeholder="Enter name"
        />
      </div>
      
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
      <div className="form-group p-2">
        <button
          disabled={!email || !newPassword||!secret }
          className="btn btn-primary col-12"
        >
          {loading ? <SyncOutlined /> : " Submit"}
        </button>
      </div>
    </form>
  );
};

export default ForgotPasswordForm;
