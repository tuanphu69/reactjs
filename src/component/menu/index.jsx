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
      <div>
      <nav>
        <a href="">Hà Nội</a>
      </nav>
      <section>
        <h1>Hà Nội</h1>
        <p>
          Hà Nội là thủ đô của nước và cũng là kinh đô của rất nhiều vương triều
          Việt cổ. Lịch sử Hà Nội gắn liền với sự thăng trầm của lịch sử Việt
          Nam qua các thời kì.
        </p>
        <p>
          Hiện nay, Hà Nội là thành phố lớn nhất Việt Nam về diện tích, đồng
          thời cũng là địa phương đứng thứ nhì về dân số.
        </p>
        <p>
          Hà Nội nằm giữa đồng bằng sông Hồng trù phú, nơi đây đã sớm trở thành
          một trung tâm chính trị, kinh tế và văn hóa ngay từ những buổi đầu của
          lịch sử Việt Nam.
        </p>
      </section>
      </div>
    </div>
  );
}
