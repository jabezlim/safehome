<?php defined('BASEPATH') or exit('No direct script access allowed'); ?>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <link rel="stylesheet" href="stylesheet/products.css" />
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
</head>

<body>
  <div id="productsANDmodels">
    <!-- Header -->
    <div class="top-div">
      <!-- Background -->
      <img src="images/productspage/product_bg.gif" id="product-bg" />
      <img src="images/productspage/product_title.png" id="product-title" />
      <!-- Entire Banner DIV -->
      <div class="total_head_banner" @mouseleave="pmMenuUnactive">
        <!-- Navigation bar -->
        <div id="head_banner">
          <img src="images/productspage/SafeSystem Logo.png" id="company-logo" />
          <button id="menu-button" @mouseover="pmMenuActive">
            ALL PRODUCT
          </button>
          <nav>
            <li><a href="products">ALL PRODUCT</a></li>
            <li><a href="about">ABOUT US</a></li>
            <li><a href="certificate">CERTIFICATES</a></li>
            <li><a href="contact">CONTACT US</a></li>
          </nav>
        </div>
        <!-- All Product Menu -->
        <div id="pm" v-if="pm_menu_isActive">
          <div id="pm_products">
            <ul>
              <template v-for="item in products">
                <li @click="productClicked" :class="{left_div_clicked: item.isActive}">
                  {{ item.name }}
                </li>
              </template>
            </ul>
          </div>
          <div id="pm_models">
            <template v-for="items in products">
              <ul v-if="items.isActive">
                <li v-for="item in items.models" @click="modelClicked" :class="{left_div_clicked: item.isActive}">
                  {{ item.name }}
                </li>
              </ul>
            </template>
          </div>
        </div>
      </div>
    </div>