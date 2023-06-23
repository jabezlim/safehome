<?php defined('BASEPATH') or exit('No direct script access allowed'); ?>

<link rel="stylesheet" href="stylesheet/contact.css">
<img src="images\contactpage\ContactCover.gif  " class="ContactCover">
<img src="images\contactpage\ContactQuote.png" class="ContactQuote">
<main class="main">
  <div class="container">
    <h1>Contact Us</h1>
    <ul class="pages" onclick="changeButtonColor_Border(event)">
      <li><button id="mapButton">Map</button></li>
      <li><button id="formButton">Contact Form</button></li>
    </ul>
  </div>
  <div class="container_right">
    <div class="container_right_top">
      <h1 id="mapTitle">Map</h1>
      <h1 id="formTitle" hidden>Contact Form</h1>
    </div>
    <div class="container_right_bottom">
      <div class="ContactContainers">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4186.1227815249895!2d-0.26976889969003776!3d51.401520459122345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876096d6084116d%3A0x18f7be03f6554a3c!2s152-178%20Kingston%20Rd%2C%20New%20Malden%20KT3%203ST!5e0!3m2!1sro!2suk!4v1687349446778!5m2!1sro!2suk"
        class="Map" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <h1 class="MapInfo">Unit 1 Kingspark Business Centre 152-178<br> Kingston Road, New Malden, Surrey,<br> UK / KT3 3ST</h1>
      </div>

      <div class="ContactContainers">
        <div class="ContactForm">
          <form class="Form" action="">
            <div class="row">
              <div class="col">
          <input type="text" id="fname" name="firstname" placeholder="First Name" required>
        </div>
        <div class="col">
          <input type="text" id="lname" name="lastname" placeholder="Last Name" required>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <input type="text" id="telephone" name="telephone" placeholder="Telephone">
        </div>
        <div class="col">
          <input type="text" id="email" name="email" placeholder="Email" required>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <input type="text" id="subject" name="subject" placeholder="Subject" required>
        </div>
      </div>
      <div class="row">
        <div class="col">
        <textarea id="message" name="message" placeholder="Message" required></textarea>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <input type="submit" value="Submit">
        </div>
      </div>
    </form>
</div>
    </div>
</main>
<script src="js/contact.js"></script>
