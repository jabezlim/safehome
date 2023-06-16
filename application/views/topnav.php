<?php defined('BASEPATH') or exit('No direct script access allowed'); ?>
<!DOCTYPE html>
<html>

<head>
  <link rel="stylesheet" href="stylesheet/topnav.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Rubik">
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
</head>

<body>

  <div id="banner" class="banner">
    <a href="home" class="logo"><img src="images\topnav\SafeSystem Logo.png"></a>
    <a href="products"><button id="productsMenuButton" class="ProductsMenu" onmouseover="showMenu()"
        onmouseout="hideMenu()">ALL
        PRODUCTS</button></a>
    <div class="nav" id="nav_list_banner" onmouseover="showMenu()" onmouseout="hideMenu()">
      <ul class="nav_list">

        <template v-for="product in products">
          <li class="Product" onmouseover="showProductSlides.call(this)" onmouseout="hideProductSlides()"
            @click="productClicked">
            {{ product.name }}
            <ul class="Product_list hidden">
              <li v-for="items in product.models">{{ items.name }}</li>
            </ul>
            <template v-if="product.preview">
              <img :src="product.preview" class="menuPicture hidden">
            </template>
          </li>
        </template>
        <!-- <li class="Product" onmouseover="showProductSlides.call(this)" onmouseout="hideProductSlides()">Fire Alarm
          Control Panel
          <ul class="Product_list hidden">
            <li>SAFE 2244 RC / SAFE 2244 GRC</li>
            <li>SAFE UMUX-2244GRC</li>
            <li>SAFE 2244 DRC</li>
            <li>SAFE 220PC / 110PC / 80PC / 40PC / 30PC</li>
            <li>SAFE-10-PC</li>
            <li>FACP for Linear Heat Detector</li>
          </ul>
          <img src="images\topnav\dropdownPicTest.png" class="menuPicture hidden">
        </li>

       -->

      </ul>
    </div>
    <ul class="HeaderTitles">
      <li><a href="about">ABOUT US</a></li>
      <li><a href="certificate">CERTIFICATES</a></li>
      <li><a href="contact">CONTACT US</a></li>
    </ul>
  </div>

  <script src="js/topnav.js"></script>