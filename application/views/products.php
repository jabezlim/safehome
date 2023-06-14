<?php defined('BASEPATH') or exit('No direct script access allowed'); ?>

<div class="main-divs">
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
							<li v-for="item in items.models" @click="modelClicked" :class="{left_div_clicked: item.isActive}">
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
			<div class="model-header">MODEL NAME</div>
		</div>
		<div class="product_images">
			<img src="" id="product_image" />
		</div>
	</div>	
</div>
<!-- FOOTER -->
<div class="footer">
      <img src="images/productspage/SafeSystem Logo.png" />
    </div>
  </div>
</body>

<script src="js/products.js"></script>
</html>