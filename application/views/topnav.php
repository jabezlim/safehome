<?php defined('BASEPATH') or exit('No direct script access allowed'); ?>
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="stylesheet/topnav.css">
        <link rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Rubik">
    </head>
    <body>
      
        <div id="banner" class="banner">
          <a href="index.html" class="logo"><img src="images/SafeSystem Logo.png"></a>
          <button id="productsMenuButton" class="ProductsMenu" onmouseover="showMenu()" onmouseout="hideMenu()">ALL PRODUCTS</button>
          <div class="nav" id="nav_list_banner" onmouseover="showMenu()" onmouseout="hideMenu()">
            <ul class="nav_list">

              <li class="Product" onmouseover="showProductSlides.call(this)" onmouseout="hideProductSlides()">Fire Alarm Control Panel
                <ul class="Product_list hidden">
                  <li>SAFE 2244 RC / SAFE 2244 GRC</li>
                  <li>SAFE UMUX-2244GRC</li>
                  <li>SAFE 2244 DRC</li>
                  <li>SAFE 220PC / 110PC / 80PC / 40PC / 30PC</li>
                  <li>SAFE-10-PC</li>
                  <li>FACP for Linear Heat Detector</li>
                </ul>
                <img src="images/dropdownPicTest.png" class="menuPicture hidden">
              </li>
              
              <li class="Product" onmouseover="showProductSlides.call(this)" onmouseout="hideProductSlides()">Fire Alarm Combination Panel
                <ul class="Product_list hidden">
                  <li>T-ST / T-SU</li>
                  <li>FR-I24</li>
                  <li>BL-O24</li>
                  <li>PL-O24</li>
                </ul>
                <img src="images/dropdownPicTest2.png" class="menuPicture hidden">
              </li>

              <li class="Product" onmouseover="showProductSlides.call(this)" onmouseout="hideProductSlides()">Transponder
                <ul class="Product_list hidden">
                  <li>SAFE UMUX-TERM</li>
                </ul>
              <img src="images/Transponder.png" class="menuPicture hidden">
              </li>

              <li class="Product" onmouseover="showProductSlides.call(this)" onmouseout="hideProductSlides()">Repeater
                <ul class="Product_list hidden">
                  <li>TERM-22</li>
                  <li>TERM-44</li>
                </ul>
              <img src="images/Repeater.png" class="menuPicture hidden">
              </li>

              <li class="Product" onmouseover="showProductSlides.call(this)" onmouseout="hideProductSlides()">Fire Detector
                <ul class="Product_list hidden">
                  <li>DS-01</li>
                  <li>DS-02-70 / DS-02-90</li>
                  <li>DS-03</li>
                  <li>SF-OS-P LCAL</li>
                  <li>SF-DT-PLCAL</li>
                  <li>SF-TERM-PLCAL</li>
                  <li>Type 1 70℃ / 90℃ waterproof non-reusable type</li>
                </ul>
              <img src="images/FireDetector.png" class="menuPicture hidden">
              </li>

              <li class="Product" onmouseover="showProductSlides.call(this)" onmouseout="hideProductSlides()">Exit Light
                <ul class="Product_list hidden">
                  <li>SF-LED-RF-SS(W)</li>
                  <li>SF-LED-CP-SS(W)</li>
                  <li>SF-LED-RF-MS(W)</li>
                  <li>SF-LED-LP-MS(W)</li>
                  <li>SF-LED-RF-MC(C) / SF-LED-RF-MD(C)</li>
                  <li>SF-LED-LP-MD(C)</li>
                  <li>SF-LED-RF-MC(W-WD)</li>
                  <li>SF-LED-SP-MC(W)</li>
                  <li>SF-LED-RF-LS(C)</li>
                  <li>EL-FR266SL3-P</li>
                  <li>SF-LED-SP-SC(W)</li>
                  <li>EL-CS250S-SV(One-sided) / EL-CS250D-SV(Double-sided)</li>
                  <li>EL-WS250S-SV</li>
                </ul>
              <img src="images/ExitLight.png" class="menuPicture hidden">
              </li>

              <li class="Product" onmouseover="showProductSlides.call(this)" onmouseout="hideProductSlides()">Supporting Equipment
                <ul class="Product_list hidden">
                  <li>Auxiliary power panel POW-O24</li>
                  <li>Battery panel POW-O24</li>
                  <li>Annunciator panel SP-O40</li>
                </ul>
              <img src="images/SupportingEquipment.png" class="menuPicture hidden">
              </li>

              <li class="Product" onmouseover="showProductSlides.call(this)" onmouseout="hideProductSlides()">Manual Station
                <ul class="Product_list hidden">
                  <li>PV-SVP-B</li>
                  <li>PV-DAMPER-B</li>
                  <li>PV-CO2-B</li>
                </ul>
              <img src="images/ManualStation.png" class="menuPicture hidden">
              </li>

              <li class="Product" onmouseover="showProductSlides.call(this)" onmouseout="hideProductSlides()">Other Products
                <ul class="Product_list hidden">
                  <li>Electronic siren SR-O24</li>
                  <li>Door release DR-O24</li>
                  <li>Emergency outlet EC-2P-3P</li>
                  <li>Discharge indicating lamp EM-O24</li>
                  <li>Strobe VA-O24</li>
                  <li>Foot light EL-ST-C</li>
                </ul>
              <img src="images/OtherProducts.png" class="menuPicture hidden">
              </li>

            </ul>
          </div>
          <ul class="HeaderTitles">
            <li><a href="about">ABOUT US</a></li>
            <li><a href="certificate">CERTIFICATES</a></li>
            <li><a href="contact">CONTACT US</a></li>
          </ul>
        </div>

          <script src="js/aboutus.js"></script>
    </body>
</html>