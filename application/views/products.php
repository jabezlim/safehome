<?php defined('BASEPATH') or exit('No direct script access allowed'); ?>

<link rel="stylesheet" href="stylesheet/products.css">
<!-- Background -->
<div id="bg_div">
	<img src="images/productspage/product_bg.gif" id="product-bg" />
	<img src="images/productspage/product_title.png" id="product-title" />
</div>
<div class="main-divs" id="productsANDmodels">
	<!-- Left Side Products -->
	<div class="left-div">
		<div class="left-div-inner">
			<div class="left-div-headers-div">
				<span id="product-types-header" class="left-div-headers">Catergories</span>
				<span id="models-header" class="left-div-headers">Models</span>
			</div>

			<div class="left-div-table">
				<!-- Product Types -->
				<div class="table-column">
					<ul class="product-types">
						<template v-for="item in products">
							<li @click="productClicked" :class="{left_div_clicked: item.isActive}">
								{{ item.name }}
							</li>
						</template>
					</ul>
				</div>
				<!-- List of Models -->
				<div class="table-column models_div">
					<template v-for="items in products">
						<ul v-if="items.isActive">
							<li v-for="item in items.models" @click="modelClicked"
								:class="{left_div_clicked: item.isActive}">
								{{ item.name }}
							</li>
						</ul>
					</template>
				</div>
			</div>
		</div>
	</div>
	<!-- Right Side Items -->
	<div class="right-div">
		<div class="right-inner-div">
			<div class="model-header">
				<template v-if="products[activeProductArray[0]].models[activeProductArray[1]]">
					{{products[activeProductArray[0]].models[activeProductArray[1]].model_name}}
				</template>
			</div>
		</div>
		<div id="product_image_div">
			<div class="product_images">
				<template v-if="products[activeProductArray[0]].models[activeProductArray[1]]">
					<template v-for="images in products[activeProductArray[0]].models[activeProductArray[1]].img">
						<img :src="images" class="product_images" />
					</template>
				</template>
			</div>
		</div>
	</div>
</div>
<script src="js/products.js"></script>