const product_column_ul = document.querySelector(".product-types");
const model_column_ul = document.querySelector("#fire-alarm-control-panel");

const { createApp } = Vue;

createApp({
	data() {
		return {
			pm_menu_isActive: false,
			products: [
				{
					name: "Fire Alarm Control Panel",
					isActive: false,
					models: [
						{
							name: "SAFE 2244 RC / SAFE 2244 GRC",
							model_name: "",
							img: "",
							isActive: false,
						},
						{
							name: "SAFE UMUX-2244GRC",
							model_name: "",
							img: "",
							isActive: false,
						},
						{
							name: "SAFE 2244 DRC",
							model_name: "",
							img: "",
							isActive: false,
						},
						{
							name: "SAFE 220PC / 110PC / 80PC / 40PC / 30PC",
							model_name: "",
							img: "",
							isActive: false,
						},
						{
							name: "Fire alarm control panel for linear heat detector",
							model_name: "",
							img: "",
							isActive: false,
						},
					],
				},
				{
					name: "Transponder",
					isActive: false,
					models: [
						{
							name: "SAFE UMUX-TERM",
							model_name: "",
							img: "",
							isActive: false,
						},
					],
				},
				{
					name: "Repeater",
					isActive: false,
					models: [
						{
							name: "TERM-22",
							model_name: "",
							img: "",
							isActive: false,
						},
						{
							name: "TERM-44",
							model_name: "",
							img: "",
							isActive: false,
						},
					],
				},
				{
					name: "Fire Detector",
					isActive: false,
					models: [
						{
							name: "DS-01",
							model_name: "",
							img: "",
							isActive: false,
						},
						{
							name: "DS-02-70 / DS-02-90",
							model_name: "",
							img: "",
							isActive: false,
						},
						{
							name: "DS-03",
							model_name: "",
							img: "",
							isActive: false,
						},
						{
							name: "SF-OS-P LCAL",
							model_name: "",
							img: "",
							isActive: false,
						},
						{
							name: "SF-DT-PLCAL",
							model_name: "",
							img: "",
							isActive: false,
						},
						{
							name: "SF-TERM-PLCAL",
							model_name: "",
							img: "",
							isActive: false,
						},
						{
							name: "Type 1 70℃ / 90℃ waterproof non-reusable type",
							model_name: "",
							img: "",
							isActive: false,
						},
					],
				},
				{
					name: "Exit Light",
					isActive: false,
					models: [
						{
							name: "SF-LED-RF-SS(W)",
							model_name: "",
							img: "images/productspage/products/exit_light/SF-LED-RF-SS(W).png",
							isActive: false,
						},
						{
							name: "SF-LED-CP-SS(W)",
							model_name: "",
							img: "images/productspage/products/exit_light/SF-LED-CP-SS(W).png",
							isActive: false,
						},
						{
							name: "SF-LED-RF-MS(W)",
							model_name: "",
							img: "",
							isActive: false,
						},
						{
							name: "SF-LED-LP-MS(W)",
							model_name: "",
							img: "",
							isActive: false,
						},
						{
							name: "SF-LED-RF-MC(C) / SF-LED-RF-MD(C)",
							model_name: "",
							img: "",
							isActive: false,
						},
						{
							name: "SF-LED-LP-MD(C)",
							model_name: "",
							img: "",
							isActive: false,
						},
						{
							name: "SF-LED-RF-MC(W-WD)",
							model_name: "",
							img: "",
							isActive: false,
						},
						{
							name: "SF-LED-SP-MC(W)",
							model_name: "",
							img: "",
							isActive: false,
						},
						{
							name: "SF-LED-RF-LS(C)",
							model_name: "",
							img: "",
							isActive: false,
						},
						{
							name: "EL-FR266SL3-P",
							model_name: "",
							img: "",
							isActive: false,
						},
						{
							name: "SF-LED-SP-SC(W)",
							model_name: "",
							img: "",
							isActive: false,
						},
						{
							name: "EL-CS250S-SV(One-sided) / EL-CS250D-SV(Double-sided)",
							model_name: "",
							img: "",
							isActive: false,
						},
						{
							name: "EL-WS250S-SV",
							model_name: "",
							img: "",
							isActive: false,
						},
					],
				},
				{
					name: "Supporting Equipment",
					isActive: false,
					models: [
						{
							name: "POW-O24",
							model_name: "",
							img: "",
							isActive: false,
						},
						{
							name: "POW-O24(2)",
							model_name: "",
							img: "",
							isActive: false,
						},
						{
							name: "SP-O40",
							model_name: "",
							img: "",
							isActive: false,
						},
					],
				},
				{
					name: "Fire Alarm Combination Panel",
					isActive: false,
					models: [
						{
							name: "T-ST / T-SU",
							model_name: "",
							img: "",
							isActive: false,
						},
						{
							name: "FR-I24",
							model_name: "",
							img: "",
							isActive: false,
						},
						{
							name: "BL-O24",
							model_name: "",
							img: "",
							isActive: false,
						},
						{
							name: "PL-O24",
							model_name: "",
							img: "",
							isActive: false,
						},
					],
				},
				{
					name: "Manual Station",
					isActive: false,
					models: [
						{
							name: "PV-SVP-B",
							model_name: "",
							img: "",
							isActive: false,
						},
						{
							name: "PV-DAMPER-B",
							model_name: "",
							img: "",
							isActive: false,
						},
						{
							name: "PV-CO2-B",
							model_name: "",
							img: "",
							isActive: false,
						},
					],
				},
				{
					name: "Other Product",
					isActive: false,
					models: [
						{
							name: "SR-O24",
							model_name: "",
							img: "",
							isActive: false,
						},
						{
							name: "DR-O24",
							model_name: "",
							img: "",
							isActive: false,
						},
						{
							name: "EC-2P-3P",
							model_name: "",
							img: "",
							isActive: false,
						},
						{
							name: "EM-O24",
							model_name: "",
							img: "",
							isActive: false,
						},
						{
							name: "VA-O24",
							model_name: "",
							img: "",
							isActive: false,
						},
						{
							name: "EL-ST-C",
							model_name: "",
							img: "",
							isActive: false,
						},
					],
				},
			],
			activeProductIndex: 0,
			activeModelIndex: [],
		};
	},
	mounted() {
		this.startUpFunction();
	},
	methods: {
		startUpFunction() {
			// Initialise active products/models
			this.products[0].isActive = true;
			for (i = 0; i < this.products.length; i++) {
				this.products[i].models[0].isActive = true;
			}
			// Initialise activeIndexes
			for (i = 0; i < this.products.length; i++) {
				this.activeModelIndex[i] = 0;
			}
			// overflow for too many models
			const models_ul = document.querySelector(".models_div");
			const products_ul = document.querySelector(".product-types");
			models_ul.style.height = products_ul.clientHeight + "px";
		},
		productClicked(event) {
			this.products[this.activeProductIndex].isActive = false;
			for (i = 0; i < this.products.length; i++) {
				if (this.products[i].name === event.target.innerText) {
					this.products[i].isActive = true;
					this.activeProductIndex = i;
					this.updateImage();
					break;
				}
			}
		},
		modelClicked(event) {
			activeProduct = this.products[this.activeProductIndex];
			activeModel =
				activeProduct.models[
					this.activeModelIndex[this.activeProductIndex]
				];
			activeModel.isActive = false;
			for (i = 0; i < activeProduct.models.length; i++) {
				if (activeProduct.models[i].name === event.target.innerText) {
					activeProduct.models[i].isActive = true;
					this.activeModelIndex[this.activeProductIndex] = i;
					this.updateImage();
					break;
				}
			}
		},
		updateImage() {
			const imageID = document.querySelector("#product_image");
			activeProduct = this.products[this.activeProductIndex];
			activeModel =
				activeProduct.models[
					this.activeModelIndex[this.activeProductIndex]
				];
			imageID.src = activeModel.img;
		},
		pmMenuActive() {
			this.pm_menu_isActive = true;
			const active_banner = document.querySelector("#head_banner");
			active_banner.style.borderBottomLeftRadius = 0;
			active_banner.style.borderBottomRightRadius = 0;
		},
		pmMenuUnactive() {
			this.pm_menu_isActive = false;
			const active_banner = document.querySelector("#head_banner");
			active_banner.style.borderBottomLeftRadius = 50 + "px";
			active_banner.style.borderBottomRightRadius = 50 + "px";
		},
	},
}).mount("#productsANDmodels");
