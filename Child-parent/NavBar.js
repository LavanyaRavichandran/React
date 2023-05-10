import React from "react";

function NavBar() {
  return (
    <div>
      <div className="nav">
        <div class="nav1">
          <a href="#">Home</a>
        </div>
        <div class="nav1">
          <a href="#">About</a>
        </div>
        <div class="nav1">
          <a href="#">Contact</a>
        </div>
      </div>
      <div
        className="backg"
        style={{ backgroundColor: "blue", height: "95vh" }}
      ></div>
    </div>
  );
}

export default NavBar;
