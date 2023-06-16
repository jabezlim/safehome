createApp({
	data() {
		return {
			activeProductArray,
			products,
		};
	},
	mounted() {
		this.startUpFunction();
	},
	methods: {
		startUpFunction() {
			// overflow for too many models
			const models_ul = document.querySelector(".models_div");
			const products_ul = document.querySelector(".product-types");
			models_ul.style.height = products_ul.clientHeight + "px";
		},
		updateActiveProduct(newProd) {
			this.products[this.activeProductArray[0]].isActive = false;
			this.products[this.activeProductArray[0]].models[
				this.activeProductArray[1]
			].isActive = false;
			this.activeProductArray = [newProd, 0];
			this.products[this.activeProductArray[0]].isActive = true;
			this.products[this.activeProductArray[0]].models[
				this.activeProductArray[1]
			].isActive = true;
		},
		updateActiveModel(newMod) {
			this.products[this.activeProductArray[0]].models[
				this.activeProductArray[1]
			].isActive = false;
			this.activeProductArray[1] = newMod;
			this.products[this.activeProductArray[0]].models[
				this.activeProductArray[1]
			].isActive = true;
		},
		productClicked(event) {
			const clickedIndex = Array.from(event.target.parentNode.children).indexOf(
				event.target
			);
			this.updateActiveProduct(clickedIndex);
		},
		modelClicked(event) {
			const clickedIndex = Array.from(event.target.parentNode.children).indexOf(
				event.target
			);
			this.updateActiveModel(clickedIndex);
		},
	},
}).mount("#productsANDmodels");
