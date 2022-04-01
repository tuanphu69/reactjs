import React from "react";


export default function Menu() {
  return (
    <div id="header">
      <div class="logo">
        <a href="#">Responsive Nav</a>
      </div>
      <nav>
        <form class="search" action="search.php">
          <input name="q" placeholder="Search..." type="search" />
        </form>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
            <ul class="mega-dropdown">
              <li class="row">
                <ul class="mega-col">
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
                <ul class="mega-col">
                  <li>
                    <a href="#">Help</a>
                  </li>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                  <li>
                    <a href="#">Team</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                </ul>
                <ul class="mega-col">
                  <li>
                    <a href="#">Coming Soon</a>
                  </li>
                  <li>
                    <a href="#">404 Error</a>
                  </li>
                  <li>
                    <a href="#">Search</a>
                  </li>
                  <li>
                    <a href="#">Author Page</a>
                  </li>
                </ul>
                <ul class="mega-col">
                  <li>
                    <a href="#">Full Width</a>
                  </li>
                  <li>
                    <a href="#">Right Column</a>
                  </li>
                  <li>
                    <a href="#">Left Column</a>
                  </li>
                  <li>
                    <a href="#">Maintenance</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="dropdown">
            <a href="">Contact</a>
            <ul>
              <li>
                <a href="#">About Version</a>
              </li>
              <li>
                <a href="#">About Version</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="">Portfolio</a>
          </li>
          <li>
            <a href="">Team</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
