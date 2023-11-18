import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Link, useNavigate } from "react-router-dom";

export default function ContactSeller({ ad }) {
  // context
  const [auth, setAuth] = useAuth();
  // state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  // hooks
  const navigate = useNavigate();

  const loggedIn = auth.user !== null && auth.token !== "";
  return (
    <>
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <h3>
            Contact{" "}
            {ad?.postedBy?.name ? ad?.postedBy?.name : ad?.postedBy?.username}
          </h3>

          <form>
            <textarea
              name="message"
              className="form-control mb-3"
              placeholder="Write your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              autoFocus={true}
              disabled={!loggedIn}
            ></textarea>

            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter you name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={!loggedIn}
            />

            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter you email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={!loggedIn}
            />

            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter you phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              disabled={!loggedIn}
            />
            <button
              className="btn btn-primary mt-4 mb-5"
              disabled={!name || !email || !loading}
            >
              {loggedIn
                ? loading
                  ? "Please wait"
                  : "Send enquiry"
                : "Login to send enquiry"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
