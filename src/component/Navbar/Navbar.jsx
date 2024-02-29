import React from "react";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="navbar">
          <div className="user"></div>

          <div className="icon-group">
            <span class="messages-notification">
              <i class="fa fa-comments-o"></i>
              <span class="count">2</span>
            </span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
