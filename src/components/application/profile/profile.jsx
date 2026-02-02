import React, { Fragment } from "react";
import styles from "../../../styles/profile/profile.module.scss";
import { getValueFromCookie } from "../../../utils/cookies";
import default_user_avatar from "../../../assets/icons/fontawesome/solid/user.svg";

export default function Profile() {
  const user = JSON.parse(getValueFromCookie("user"));
  return (
    <Fragment>
      <div className="container pt-5">
        <div className="row align-items-center">
          <div className="col-md-6 col-lg-2">
            <div className={styles.user_avatar}>
              <img
                src={user?.photoURL ?? default_user_avatar}
                alt="user_avatar"
                className={styles.avatar_image}
                onError={(event) => {
                  event.target.onerror = null;
                  event.target.src = default_user_avatar;
                }}
              />
            </div>
          </div>
          <div className="col-md-6 col-lg-10">
            <p className={styles.user_name}>{user?.name}</p>
            <div className={styles.email_container}>
              <p className={styles.user_email}>{user?.email}</p>
              <button className={styles.logout_button}>Logout</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
