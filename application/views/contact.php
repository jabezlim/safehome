<?php defined('BASEPATH') or exit('No direct script access allowed'); ?>

<link rel="stylesheet" href="stylesheet/contact.css">
<img src="images\contactpage\ContactCover.gif  " class="ContactCover">
<img src="images\contactpage\ContactQuote.png" class="ContactQuote">
<main class="main">
            <div class="container">
              <h1>Certificate pages</h1>
              <ul class="pages" onclick="changeButtonColor_Border(event)">
                <li><button>Service</button></li>
                <li><button>Service</button></li>
                <li><button>Service</button></li>
                <li><button>FAQ</button></li>
                <li><button>Q&A</button></li>
              </ul>
            </div>
            <div class="container_right">
              <div class="container_right_top" >
                <h1 hidden>Service</h1>
                <h1 hidden>Service 2</h1>
                <h1 hidden>Service 3</h1>
                <h1 hidden>FAQ</h1>
                <h1 hidden>Q&A</h1>
              </div>
            <div class="container_right_bottom">
                <img src="images\contactpage\ContactImg1.gif" hidden>
                <div></div>
                <div></div>
                <div>
                    <h1>Something</h1>

                </div>
                <div></div>
            </div>
</main>
<script src="js/contact.js"></script>