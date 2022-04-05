import React from "react";

// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.bundle';

export default function Header() {
  return (
    <header>
      <div className="search-wrapper">
        <div className="menu-wrapper__mobile">
          <img src="./assets/img/menu.svg" width="20" />
        </div>
        <div className="search-wrapper__icon">
          <img src="./assets/img/search.svg" width="20" />
        </div>
        <div className="toolbar-wrapper shadow">
          <img src="./assets/img/search.svg" width="20" />
          <input type="text" placeholder="Search..." />
          <button className="btn btn-success">Search</button>
        </div>
      </div>
      <div className="user-wrapper">
        <div className="user-wrapper__notification">
          <button type="button" className="position-relative">
            <i className="fas fa-bell"></i>
            <span
              className="
                                        position-absolute
                                        translate-middle
                                        badge
                                        rounded-circle
                                        bg-danger
                                    "
            >
              2
                                </span>
          </button>
          <div
            className="user-wrapper__notification--menu shadow"
          >
            <div className="header">
              <div>
                <span>Notifications</span>
                <p>You have 2 unread messages</p>
              </div>
              <button
                type="button"
                className="btn"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Mark all as read"
              >
                <i className="fas fa-check-double"></i>
              </button>
            </div>
            <div className="content">
              <div className="content-text">new</div>
              <div className="content-noti">
                <a href="">
                  <img src="./assets/img/giphy.gif" />
                  <div className="content-noti__text">
                    <p className="m-0">
                      <span
                        className="
                                                            fw-bold
                                                            text-dark
                                                        "
                      >Marlene Willms
                                                        PhD</span
                      >
                      <span
                      >answered to your
                        comment on the
                                                        minimal</span
                      >
                    </p>
                    <span className="text-lowercase">
                      <i
                        className="
                                                            fas
                                                            fa-clock
                                                            me-1
                                                        "
                      ></i>
                                                    about 4 hours
                                                </span>
                  </div>
                </a>
                <a href="">
                  <img src="./assets/img/giphy.gif" />
                  <div className="content-noti__text">
                    <p className="m-0">
                      <span
                        className="
                                                            fw-bold
                                                            text-dark
                                                        "
                      >Marlene Willms
                                                        PhD</span
                      >
                      <span
                      >answered to your
                        comment on the
                                                        minimal</span
                      >
                    </p>
                    <span className="text-lowercase">
                      <i
                        className="
                                                            fas
                                                            fa-clock
                                                            me-1
                                                        "
                      ></i>
                                                    about 4 hours
                                                </span>
                  </div>
                </a>
              </div>
              <div className="content-text">before that</div>
            </div>
          </div>
        </div>
        <div className="user-wrapper__profile">
          <div className="user-wrapper__profile--avatar">
            <img
              className="shadow"
              src="./assets/img/giphy.gif"
            />
          </div>
          <div className="user-wrapper__profile--menu shadow">
            <div className="name">
              <span>Ton Ton</span>
              <p>humiho.69@gmail.com</p>
            </div>
            <a href="" className="profile">
              <i className="fas fa-user"></i>
              <span>Profile</span>
            </a>
            <a href="" className="settings">
              <i className="fas fa-cog"></i>
              <span>Settings</span>
            </a>
            <a href="" className="logout">
              <span>Logout</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
