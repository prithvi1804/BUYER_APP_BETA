import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import styles from "../../../styles/auth/auth.module.scss";
import { buttonTypes } from "../../shared/button/utils";
import Button from "../../shared/button/button";
import AuthActionCard from "../auth-action-card/authActionCard";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../shared/input/input";
import PasswordInput from "../../shared/passwordInput/input";
import ErrorMessage from "../../shared/error-message/errorMessage";
// import { toast_actions, toast_types } from "../../shared/toast/utils/toast";
// import { getErrorMessage } from "../../../api/utils/mapFirebaseError";
import { AddCookie } from "../../../utils/cookies";
import { ToastContext } from "../../../context/toastContext";
import { v4 as uuidv4 } from "uuid";

import Google_Logo from "../../../assets/images/google.png";
import { isLoggedIn } from "../../../utils/validateToken";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("password");
  const [loading, setLoading] = useState(false);
  const dispatch = useContext(ToastContext);

  function handleLogin(e) {
    if(e) e.preventDefault();
    setLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
        handleRedirect({
            displayName: "Test User",
            email: email,
            photoURL: "",
            accessToken: "mock_token_" + uuidv4(),
            uid: "mock_uid_" + uuidv4()
        });
        setLoading(false);
    }, 500);
  }

  function handleRedirect(user) {
    localStorage.setItem("transaction_id", uuidv4());
    const { displayName, email, photoURL, accessToken, uid } = user;
    AddCookie("token", accessToken);
    AddCookie(
      "user",
      JSON.stringify({ name: displayName, id: uid, email, photoURL })
    );

    // Set dummy location cookies to prevent crashes
    const dummyLocation = { lat: 12.9716, lng: 77.5946, name: "Bengaluru", pincode: "560001" };
    AddCookie("LatLongInfo", JSON.stringify(dummyLocation));
    AddCookie("search_context", JSON.stringify({ location: dummyLocation }));

    navigate("/application");
  }

  const loginForm = (
    <div className={styles.auth_form}>
      <form onSubmit={handleLogin}>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Enter Email"
          label_name="Email"
          autoComplete="off"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        
        <PasswordInput
          id="password"
          name="password"
          placeholder="Enter Password"
          label_name="Password"
          autoComplete="off"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        
        <div className="py-3 text-center">
          <Button
            isloading={loading ? 1 : 0}
            disabled={loading}
            button_type={buttonTypes.primary}
            button_hover_type={buttonTypes.primary_hover}
            button_text="Login (Mock)"
            type="submit"
          />
        </div>
        <hr style={{ margin: "5px 0", border: "1px solid #ddd" }} />
        <div className="py-3 text-center">
          <Button
            isloading={loading ? 1 : 0}
            disabled={loading}
            button_type={buttonTypes.primary}
            button_hover_type={buttonTypes.primary_hover}
            button_text={
              <>
                <img
                  src={Google_Logo}
                  alt="logo"
                  style={{ height: "20px", marginRight: "10px" }}
                />
                Login with google (Mock)
              </>
            }
            onClick={handleLogin}
          />
        </div>
      </form>
    </div>
  );
  
  const navigation_link = (
    <div className="py-2 text-center">
      <p className={styles.navigation_link_label}>Don't have an account?</p>
      <Link to="/sign-up" className={styles.navigation_link}>
        Sign Up
      </Link>
    </div>
  );

  if (isLoggedIn()) {
    return <Navigate to="/application" replace />;
  } else {
    return (
      <AuthActionCard
        action_form={loginForm}
        navigation_link={navigation_link}
      />
    );
  }
}
