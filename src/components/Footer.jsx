import React from "react";
import "./css/Footer.css";
export default function Footer() {
  return (
    <div>
      <div class="footer-basic">
        <footer>
          <div class="social">
            <a href="https://www.instagram.com/yash____152000/">
              <i class="icon ion-social-instagram"></i>
            </a>
            <a href="mailto:mishrayash0607@gmail.com">
              <i class="icon ion-email"></i>
            </a>
            <a href="https://twitter.com/YASHMIS94967162">
              <i class="icon ion-social-twitter"></i>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100038585474727">
              <i class="icon ion-social-facebook"></i>
            </a>
          </div>
          <ul class="list-inline">
            <li class="list-inline-item">
              <a href="#home">Home</a>
            </li>

            <li class="list-inline-item">
              <a href="#home">About</a>
            </li>
            <li class="list-inline-item">
              <a href="#home">Terms</a>
            </li>
            <li class="list-inline-item">
              <a href="#home">Privacy Policy</a>
            </li>
          </ul>
          <p class="copyright">Company Amazon Lite © 2023</p>
        </footer>
      </div>
    </div>
  );
}
