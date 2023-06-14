const product_column_ul = document.querySelector(".product-types");
const model_column_ul = document.querySelector("#fire-alarm-control-panel");
const image_file = "./images/productspage/products";

const { createApp } = Vue;

createApp({
	data() {
		return {
			pm_menu_isActive: false,
			activeProductIndex: 0,
			activeModelIndex: [],
			products: [
				{
					name: "Fire Alarm Control Panel",
					isActive: false,
					models: [
						{
							name: "SAFE 2244 RC / SAFE 2244 GRC",
							model_name:
								"R-type/GR-type fire alarm control panel(stand-alone type)",
							img: [
								image_file +
									"/fire_alarm_control_panel/" +
									"SAFE 2244 RC OR SAFE 2244 GRC" +
									".png",
							],
							isActive: false,
						},
						{
							name: "SAFE UMUX-2244GRC",
							model_name:
								"GR-type fire alarm control panel (wall type)",
							img: [
								image_file +
									"/fire_alarm_control_panel/" +
									"SAFE UMUX-2244GRC" +
									".png",
							],
							isActive: false,
						},
						{
							name: "SAFE 2244 DRC",
							model_name:
								"Integrated fire monitoring section GDS",
							img: [
								image_file +
									"/fire_alarm_control_panel/" +
									"SAFE 2244 DRC" +
									".png",
							],
							isActive: false,
						},
						{
							name: "SAFE 220PC / 110PC / 80PC / 40PC / 30PC",
							model_name: "P-type fire alarm control panel",
							img: [
								image_file +
									"/fire_alarm_control_panel/" +
									"SAFE 220PC-1" +
									".png",
								image_file +
									"/fire_alarm_control_panel/" +
									"SAFE 220PC-2" +
									".png",
							],
							isActive: false,
						},
						{
							name: "SAFE-10-PC",
							model_name: "P-type fire alarm control panel",
							img: [
								image_file +
									"/fire_alarm_control_panel/" +
									"SAFE-10-PC" +
									".png",
							],
							isActive: false,
						},
						{
							name: "Fire alarm control panel for linear heat detector",
							model_name: "P-type fire alarm control panel",
							img: [
								image_file +
									"/fire_alarm_control_panel/" +
									"Fire alarm control panel for linear heat detector" +
									".png",
							],
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
							model_name: "Transponder (wall type)",
							img: [
								image_file +
									"/transponder/" +
									"SAFE UMUX-TERM" +
									".png",
							],
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
							model_name: "Repeater 2-circuit",
							img: [
								image_file + "/repeater/" + "TERM-22" + ".png",
							],
							isActive: false,
						},
						{
							name: "TERM-44",
							model_name: "Repeater 4-circuit",
							img: [
								image_file + "/repeater/" + "TERM-44" + ".png",
							],
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
							model_name: "Rate of rise heat detector",
							img: [
								image_file +
									"/fire_detector/" +
									"DS-01" +
									".png",
							],
							isActive: false,
						},
						{
							name: "DS-02-70 / DS-02-90",
							model_name: "Fixed temperature heat detector",
							img: [
								image_file +
									"/fire_detector/" +
									"DS-02-70 OR DS-02-90" +
									".png",
							],
							isActive: false,
						},
						{
							name: "DS-03",
							model_name:
								"Photo electric smoke detector 38 103 43.2 120 34 120",
							img: [
								image_file +
									"/fire_detector/" +
									"DS-03" +
									".png",
							],
							isActive: false,
						},
						{
							name: "SF-OS-P LCAL",
							model_name:
								"Photo electric analogue type smoke detector",
							img: [
								image_file +
									"/fire_detector/" +
									"SF-OS-P LCAL" +
									".png",
							],
							isActive: false,
						},
						{
							name: "SF-DT-PLCAL",
							model_name: "Analogue type heat detector",
							img: [
								image_file +
									"/fire_detector/" +
									"SF-DT-PLCAL" +
									".png",
							],
							isActive: false,
						},
						{
							name: "SF-TERM-PLCAL",
							model_name:
								"Power line Communication 37 115 37 115",
							img: [
								image_file +
									"/fire_detector/" +
									"SF-TERM-PLCAL" +
									".png",
							],
							isActive: false,
						},
						{
							name: "Type 1 70℃ / 90℃ waterproof non-reusable type",
							model_name: "Linear heat detector",
							img: [
								image_file +
									"/fire_detector/" +
									"Type 1 70℃ OR 90℃ waterproof non-reusable type" +
									".png",
							],
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
							model_name:
								"Small one-sided emergency exit light (LED type)",
							img: [
								image_file +
									"/exit_light/" +
									"SF-LED-RF-SS(W)" +
									".png",
							],
							isActive: false,
						},
						{
							name: "SF-LED-CP-SS(W)",
							model_name:
								" Small one-sided aisle exit light (LED type)",
							img: [
								image_file +
									"/exit_light/" +
									"SF-LED-CP-SS(W)" +
									".png",
							],
							isActive: false,
						},
						{
							name: "SF-LED-RF-MS(W)",
							model_name:
								"Medium one-sided emergency exit light (LED type)",
							img: [
								image_file +
									"/exit_light/" +
									"SF-LED-RF-MS(W)" +
									".png",
							],
							isActive: false,
						},
						{
							name: "SF-LED-LP-MS(W)",
							model_name:
								" Medium one-sided room pathway exit light (LED type)",
							img: [
								image_file +
									"/exit_light/" +
									"SF-LED-LP-MS(W)" +
									".png",
							],
							isActive: false,
						},
						{
							name: "SF-LED-RF-MC(C) / SF-LED-RF-MD(C)",
							model_name:
								"Medium one-sided/double-sided emergency exit light (Ceiling type)",
							img: [
								image_file +
									"/exit_light/" +
									"SF-LED-RF-MC(C) OR SF-LED-RF-MD(C)" +
									".png",
							],
							isActive: false,
						},
						{
							name: "SF-LED-LP-MD(C)",
							model_name:
								" Medium double-sided room pathway exit light (ceiling type)",
							img: [
								image_file +
									"/exit_light/" +
									"SF-LED-LP-MD(C)" +
									".png",
							],
							isActive: false,
						},
						{
							name: "SF-LED-RF-MC(W-WD)",
							model_name:
								"Medium one-sided emergency exit light (LED type, wide type)",
							img: [
								image_file +
									"/exit_light/" +
									"SF-LED-RF-MC(W-WD)" +
									".png",
							],
							isActive: false,
						},
						{
							name: "SF-LED-SP-MC(W)",
							model_name:
								" Medium one-sided stairway exit light (LED type)",
							img: [
								image_file +
									"/exit_light/" +
									"SF-LED-SP-MC(W)" +
									".png",
							],
							isActive: false,
						},
						{
							name: "SF-LED-RF-LS(C)",
							model_name:
								"Large one-sided emergency exit light (ceiling type)",
							img: [
								image_file +
									"/exit_light/" +
									"SF-LED-RF-LS(C)" +
									".png",
							],
							isActive: false,
						},
						{
							name: "EL-FR266SL3-P",
							model_name:
								" Medium floor mounted concealed aisle exit light",
							img: [
								image_file +
									"/exit_light/" +
									"EL-FR266SL3-P" +
									".png",
							],
							isActive: false,
						},
						{
							name: "SF-LED-SP-SC(W)",
							model_name:
								"Small one-sided stairway exit light (LED type)",
							img: [
								image_file +
									"/exit_light/" +
									"SF-LED-SP-SC(W)" +
									".png",
							],
							isActive: false,
						},
						{
							name: "EL-CS250S-SV(One-sided) / EL-CS250D-SV(Double-sided)",
							model_name:
								"Large sound flickering one-sided/double-sided emergency exit light",
							img: [
								image_file +
									"/exit_light/" +
									"EL-CS250S-SV(One-sided) OR EL-CS250D-SV(Double-sided)" +
									".png",
							],
							isActive: false,
						},
						{
							name: "EL-WS250S-SV",
							model_name:
								" Large sound flickering one-sided emergency exit light",
							img: [
								image_file +
									"/exit_light/" +
									"EL-WS250S-SV" +
									".png",
							],
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
							model_name: "Auxiliary power panel / Battery panel",
							img: [
								image_file +
									"/supporting_equipment/" +
									"POW-O24" +
									".png",
								image_file +
									"/supporting_equipment/" +
									"POW-O24-2" +
									".png",
							],
							isActive: false,
						},
						{
							name: "SP-O40",
							model_name: "Annunciator panel",
							img: [
								image_file +
									"/supporting_equipment/" +
									"SP-O40" +
									".png",
							],
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
							model_name: "Fire alarm Combination box",
							img: [
								image_file +
									"/fire_alarm_combination_panel/" +
									"T-ST OR T-SU" +
									".png",
							],
							isActive: false,
						},
						{
							name: "FR-I24",
							model_name: "Maual call point",
							img: [
								image_file +
									"/fire_alarm_combination_panel/" +
									"FR-I24" +
									".png",
							],
							isActive: false,
						},
						{
							name: "BL-O24",
							model_name: "Alarm bell",
							img: [
								image_file +
									"/fire_alarm_combination_panel/" +
									"BL-O24" +
									".png",
							],
							isActive: false,
						},
						{
							name: "PL-O24",
							model_name: "Indication lamp",
							img: [
								image_file +
									"/fire_alarm_combination_panel/" +
									"PL-O24" +
									".png",
							],
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
							model_name: "SPRINKLER manual station",
							img: [
								image_file +
									"/manual_station/" +
									"PV-SVP-B" +
									".png",
							],
							isActive: false,
						},
						{
							name: "PV-DAMPER-B",
							model_name: "DAMPER manual station",
							img: [
								image_file +
									"/manual_station/" +
									"PV-DAMPER-B" +
									".png",
							],
							isActive: false,
						},
						{
							name: "PV-CO2-B",
							model_name: "Extinguishing agent manual station ",
							img: [
								image_file +
									"/manual_station/" +
									"PV-CO2-B" +
									".png",
							],
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
							model_name: "Electronic siren",
							img: [
								image_file +
									"/other_product/" +
									"SR-O24" +
									".png",
							],
							isActive: false,
						},
						{
							name: "DR-O24",
							model_name: "Door release",
							img: [
								image_file +
									"/other_product/" +
									"DR-O24" +
									".png",
							],
							isActive: false,
						},
						{
							name: "EC-2P-3P",
							model_name: "Emergency outlet",
							img: [
								image_file +
									"/other_product/" +
									"EC-2P-3P" +
									".png",
							],
							isActive: false,
						},
						{
							name: "EM-O24",
							model_name: "Discharge indicating lamp",
							img: [
								image_file +
									"/other_product/" +
									"EM-O24" +
									".png",
							],
							isActive: false,
						},
						{
							name: "VA-O24",
							model_name: "Strobe",
							img: [
								image_file +
									"/other_product/" +
									"VA-O24" +
									".png",
							],
							isActive: false,
						},
						{
							name: "EL-ST-C",
							model_name: "Foot light",
							img: [
								image_file +
									"/other_product/" +
									"EL-ST-C" +
									".png",
							],
							isActive: false,
						},
					],
				},
			],
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

			// this.updateImage();

			console.log(
				this.products[this.activeProductIndex].models[
					this.activeModelIndex[this.activeProductIndex]
				].img
			);
		},
		productClicked(event) {
			this.products[this.activeProductIndex].isActive = false;
			for (i = 0; i < this.products.length; i++) {
				if (this.products[i].name === event.target.innerText) {
					this.products[i].isActive = true;
					this.activeProductIndex = i;
					// this.updateImage();
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
					// this.updateImage();
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
