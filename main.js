
  const GREASE_COST_PER_UNIT = 10;
  var marketData = [];
  var assetsData = [];
  var confAssetsData = [];
  var extractList = [];
  var seedList = [];

  var farm = [
	/***********
	 **ANIMALS**
	 ***********/
  
	{
      "asset_id": "br",
	  "quantity": 0
    },
	
	{
      "asset_id": "egr",
	  "quantity": 0
    },
	
	{
      "asset_id": "ph",
	  "quantity": 0
    },
	
	{
      "asset_id": "rr",
	  "quantity": 0
    },
	
	{
      "asset_id": "bs",
	  "quantity": 0
    },
	
	{
      "asset_id": "mg",
	  "quantity": 0
    },
	
	{
      "asset_id": "pcg",
	  "quantity": 0
    },
	
	{
      "asset_id": "pg",
	  "quantity": 0
    },
	
	{
      "asset_id": "wg",
	  "quantity": 0
    },
	
	{
      "asset_id": "bb",
	  "quantity": 0
    },
	
	{
      "asset_id": "hgc",
	  "quantity": 0
    },
	
	{
      "asset_id": "pc",
	  "quantity": 0
    },
	
	{
      "asset_id": "bsh",
	  "quantity": 0
    },
	
	{
      "asset_id": "zing",
	  "quantity": 0
    },
	
	{
      "asset_id": "mud",
	  "quantity": 0
    },
	
	{
      "asset_id": "pp",
	  "quantity": 0
    },
	
	{
      "asset_id": "spky",
	  "quantity": 0
    },
	
	{
      "asset_id": "dor",
	  "quantity": 0
    },
	
	{
      "asset_id": "ds",
	  "quantity": 0
    },
	
	/*******
	 **HAM**
	 *******/
	
	{
      "asset_id": "lake",
	  "quantity": 0
    },
	
	{
      "asset_id": "spw",
	  "quantity": 0
    },
	
	{
      "asset_id": "sw",
	  "quantity": 0
    },
	
	{
      "asset_id": "well",
	  "quantity": 0
    },
	
	{
      "asset_id": "wtw",
	  "quantity": 0
    },

	/*********
	 **TREES**
	 *********/
	{
      "asset_id": "at",
	  "quantity": 0
    },
	
	{
      "asset_id": "bt",
	  "quantity": 0
    },
	
	{
      "asset_id": "ort",
	  "quantity": 0
    },
	
	/**************
	 **CROP LANDS**
	 **************/
	
	{
      "asset_id": "fcl",
	  "quantity": 0,
	  "srcAsset": "cos",
	  "extract": "cof"
    },
	
	{
      "asset_id": "ocl",
	  "quantity": 0,
	  "srcAsset": "cos",
	  "extract": "cof"
    },
	
	{
      "asset_id": "scl",
	  "quantity": 0,
	  "srcAsset": "cos",
	  "extract": "cof"
    },
	
	{
      "asset_id": "fcl",
	  "quantity": 0,
	  "srcAsset": "cas",
	  "extract": "caf"
    },
	
	{
      "asset_id": "ocl",
	  "quantity": 0,
	  "srcAsset": "cas",
	  "extract": "caf"
    },
	
	{
      "asset_id": "scl",
	  "quantity": 0,
	  "srcAsset": "cas",
	  "extract": "caf"
    },
	
	/*******
	 **SH***
	 *******/
	
	{
      "asset_id": "chi",
	  "quantity": 0,
	  "extract": "pow",
	  "bonus": {
		  "cantidad": 15,
		  "tipo": "%"
	  }
    },
	
	{
      "asset_id": "wtl",
	  "quantity": 0,
	  "extract": "water",
	  "bonus": {
		  "cantidad": 10,
		  "tipo": "%"
	  }
    },
	
	{
      "asset_id": "grn",
	  "quantity": 0,
	  "extract": "cof|caf",
	  "bonus": {
		  "cantidad": 2,
		  "tipo": ""
	  }
    }
  ]
  


$(document).ready(function() {
	
	
	
    var myFarmTable = $('#myFarm').DataTable({
        data: [],
        "columns": [
            { "data": "image_url",
			  "render": function (data, type, row, meta) {
				  if (type == 'display') {
				  	 return '<img src="' + data + '" width="35">';
				  } else {
					  return data;
				  }
			  }
			},
			
			{ "data": "name",
			  "searchable": true,
			  "render": function (data, type, row, meta) {
				  return data;
			  }
			},
			
			{ "data": "daily_production",
			  "render": function (data, type, row, meta) {
				  return data;
			  }
			},
			
			{ "data": "daily_consumption",
			  "render": function (data, type, row, meta) {
				  return data;
			  }
			},
			
			{ "data": "category",
			  "render": function (data, type, row, meta) {
				  return data;
			  }
			},
			
			{ 
                "data": "profitability",
                "render": function (data, type, row, meta) {
					var colorClass = '';
					if(data != 0) {
						colorClass = data > 0 ? 'verde' : 'rojo';
					}
					return '<div class="importe '+ colorClass +'" ="true">' + roundResult(data) + '</div>';
                }
            },
			
			{ 
                "data": "quantity",
                "render": function (data, type, row, meta) {
                    return '<input class="editable" contenteditable="true" value="'+ data +'" />';
                }
            },
			
			{ 
                "data": "totalProfitability",
                "render": function (data, type, row, meta) {
					var colorClass = '';
					if(data != 0) {
						colorClass = data > 0 ? 'verde' : 'rojo';
					}
					return '<div class="importe '+ colorClass +'" ="true">' + roundResult(data) + '</div>';
                }
            }
			
			
        ],
        "paging": false,
        "info": false,
		"filter": true,
		"order": [[ 4, 'asc' ]],
		
		"initComplete": function(settings, json) {
			
		},
		
		drawCallback: function(settings) {	
		
			$('.contenedor-tabla-myFarm').show();
			$('#myFarm').DataTable().columns.adjust();
			
			// Elimina los eventos antiguos de celda
			$('#myFarm tbody .editable').off('change');
			

			$('#myFarm tbody .editable').on('change', function(event) {
				event.stopPropagation();
				
				var tr = $(this).closest('tr');
				var tabla = $('#myFarm').DataTable();
				var datosFila = tabla.row(tr).data();
				
				
				var index = farm.findIndex(function(asset) {
					return asset.asset_id === datosFila.asset_id
				});
				
				if (index !== -1) {
					farm[index].quantity = this.value;
					localStorage.setItem("farm", JSON.stringify(farm));
					
					
					if(datosFila.category == "Super Hero") {
						//Repintar tabla
						var data = construirData();
						tabla.clear().rows.add(data).draw();
					} else {
						//Repintar fila
						datosFila.quantity = this.value;
						datosFila.totalProfitability = datosFila.quantity * datosFila.profitability;
						tabla.row(tr).data(datosFila);
						tabla.draw();
					}
					
					//Repintamos la tabla de balance
					var balance = construirBalance(tabla.data());
					myBalanceTable.clear().rows.add(balance).draw();
					
				}

			});

	    },
		
		
		 footerCallback: function(row, data, start, end, display) {
			//Para que esto funcione hay que hacer un preprocesado de los datos y pasar objetos con la columna rentabilidad ya calculada
			
			// Calcular el sumatorio de la columna 3
			var sumatorio = this.api()
			  .column(7, { page: 'current'})
			  .data()
			  .reduce(function(a, b) {
				return Number(a) + Number(b);
			  }, 0);
			
			// Añadir el sumatorio al pie de la tabla
			$(this.api().column(7).footer()).html(sumatorio);
			
		 }
		
    });
	
	
	var myBalanceTable = $('#myBalance').DataTable({
        data: [],
        "columns": [
		
			{ "data": "image_url",
			  "render": function (data, type, row, meta) {
				  if (type == 'display') {
				  	 return '<img src="' + data + '" width="35">';
				  } else {
					  return data;
				  }
			  }
			},
		
			{ "data": "name",
			  "render": function (data, type, row, meta) {
				return data;
			  }
			},
			
            { "data": "production",
			  "render": function (data, type, row, meta) {
				return data;
			  }
			},
			
			{ "data": "consumption",
			  "searchable": true,
			  "render": function (data, type, row, meta) {
				  return data;
			  }
			},
			
			{ "data": "balance",
			  "render": function (data, type, row, meta) {
				  var colorClass = '';
					if(data != 0) {
						colorClass = data > 0 ? 'verde' : 'rojo';
					}
					return '<div class="importe '+ colorClass +'" ="true">' + roundResult(data) + '</div>';
			  }
			},
			
			{ "data": "balance_cbx",
			  "render": function (data, type, row, meta) {
				 var colorClass = '';
					if(data != 0) {
						colorClass = data > 0 ? 'verde' : 'rojo';
					}
					return '<div class="importe '+ colorClass +'" ="true">' + roundResult(data) + '</div>';
			  }
			}

        ],
        "paging": false,
        "info": false,
		"filter": false,
		"order": [[ 0, 'asc' ]],
		
		drawCallback: function(settings) {	
			$('.contenedor-tabla-myBalance').show();
			$('#myBalance').DataTable().columns.adjust();
			
		}
		
    });
	
	//Datos del api
	marketData = obtenerPreciosMarketAPI();
	assetsData = obtenerAssetsAPI();
	confAssetsData = obtenerConfAssetsAPI();
	extractList = obtenerExtractos(assetsData.data.assets);
	seedList = obtenerSemillas(assetsData.data.assets);
	
	var data = construirData();
	myFarmTable.clear().rows.add(data).draw();
	var balance = construirBalance(data);
	myBalanceTable.clear().rows.add(balance).draw();

});


function obtenerAssetsAPI () {
	var assetJSON = $.ajax({
	  url: "https://api.cropbytes.com/api/v1/game/assets/list",
	  dataType: "json",
	  async: false
	}).responseText;
	
	return JSON.parse(assetJSON);
}

function obtenerConfAssetsAPI () {
	var assetConfJSON = $.ajax({
	  url: "https://api.cropbytes.com/api/v1/game/launch",
	  dataType: "json",
	  async: false
	}).responseText;
	
	return JSON.parse(assetConfJSON);
}

function obtenerPreciosMarketAPI() {
	var marketJSON = $.ajax({
	  url: "https://api.cropbytes.com/api/v2/peatio/public/markets/tickers",
	  dataType: "json",
	  async: false
	}).responseText;
	
	var marketData = JSON.parse(marketJSON);
	
	
	
	var atributos = Object.keys(marketData);
	var filteredCBX = [];
	for (var i = 0; i < atributos.length; i++) { 
		if(atributos[i].endsWith('cbx')) {
			var elto = marketData[atributos[i]];
			var item = {clave: atributos[i], precio : elto.ticker.last, variacion: elto.ticker.price_change_percent };
			filteredCBX.push(item);
		}
	}
	return filteredCBX;
}


function construirData() {
	var data = [];
	var savedData = localStorage.getItem("farm");
    if (savedData) {
	  
	  savedData = JSON.parse(savedData);


	  for(var i=0; i < farm.length; i++) {
		  var myAsset = farm[i];
		  var asset = savedData.find(function(item) {
			return item.asset_id === myAsset.asset_id;
		  });
		  
		  if(!asset) {
			  savedData.push(myAsset);
			  localStorage.setItem('farm', JSON.stringify(savedData));
		  }
	  }	
      farm = savedData;
    }
	
	
	for(var i=0; i < farm.length; i++) {
		var farmAsset = farm[i];
		
		var bean = {};
		bean.asset_id = farmAsset.asset_id;
		bean.name =  getNombre(farmAsset.asset_id, assetsData.data);
		bean.category =  getCategoria(farmAsset.asset_id, assetsData.data);
		bean.type =  getTipo(farmAsset.asset_id, assetsData.data);
		bean.options =  getOptions(farmAsset.asset_id, assetsData.data);
		bean.image_url = getImageUrl(farmAsset.asset_id, assetsData.data);
		bean.quantity = farmAsset.quantity;
		bean.srcAsset = farmAsset.srcAsset;
		bean.extract = farmAsset.extract;
		bean.bonus = farmAsset.bonus;
		
		data.push(bean);
	}
	

	rellenarConfiguracion(data);
	
	return data;
	
}


function construirBalance(data) {
	var balance = [];
	
	//Water
	var water ={
		asset_id: "water",
		name: getNombre("water", assetsData.data),
		image_url: getImageUrl("water", assetsData.data)
	}	
	water.production = getWaterProduction(data);
	water.consumption = getExtractConsumption(data, "water"),
	water.balance = water.production - water.consumption;
	water.balance_cbx = roundResult(water.balance*obtenerPrecioAsset("water"));
	balance.push(water);
	
	//Cof
	var cof ={
		asset_id: "cof",
		name: getNombre("cof", assetsData.data),
		image_url: getImageUrl("cof", assetsData.data)
	}	
	cof.production = getCofProduction(data);
	cof.consumption = getExtractConsumption(data, "cof");
	cof.balance =  cof.production - cof.consumption;
	cof.balance_cbx =  roundResult(cof.balance*obtenerPrecioAsset("cof"));
	balance.push(cof);
	
	//Caf
	var caf ={
		asset_id: "caf",
		name: getNombre("caf", assetsData.data),
		image_url: getImageUrl("caf", assetsData.data)
	};
	caf.production =  getCafProduction(data);
	caf.consumption =  getExtractConsumption(data, "caf");
	caf.balance =  caf.production - caf.consumption;
	caf.balance_cbx =  roundResult(caf.balance*obtenerPrecioAsset("caf"));
	balance.push(caf);
	
	//Frf
	var frf ={
		asset_id: "frf",
		name: getNombre("frf", assetsData.data),
		image_url: getImageUrl("frf", assetsData.data)
	};
	frf.production = getFruitProduction(data);
	frf.consumption =  getExtractConsumption(data, "frf");
	frf.balance =  frf.production - frf.consumption;
	frf.balance_cbx = roundResult(frf.balance*obtenerPrecioAsset("frf"));
	balance.push(frf);
	
	//Pow
	var pow ={
		asset_id: "pow",
		name: getNombre("pow", assetsData.data),
		image_url: getImageUrl("pow", assetsData.data)
	};
	pow.production = getPowerProduction(data);
	pow.consumption = getExtractConsumption(data, "pow");
	pow.balance = frf.production - frf.consumption;
	pow.balance_cbx = roundResult(pow.balance*obtenerPrecioAsset("pow"));
	balance.push(pow);
		
	return balance;
}

function getExtractConsumption(data, extract) {	
	var extractConsumption = 0;
	for(var i=0; i < data.length; i++) {
		var d = data[i];
		var weekly_consumption = d.takes_weekly[extract]*d.quantity;
		extractConsumption+=weekly_consumption;
	}
	return extractConsumption;
}

function getCafProduction(data) {
	var cafProductors = data.filter(item => item.extract == "caf");
	var cafProduction = 0;
	for(var i=0; i < cafProductors.length; i++) {
		var cp = cafProductors[i];
		var weekly_Production = cp.gives_weekly*cp.quantity;
		cafProduction+=weekly_Production;
	}
	return cafProduction;
}


function getCofProduction(data) {
	var cofProductors = data.filter(item => item.extract == "cof");
	var cofProduction = 0;
	for(var i=0; i < cofProductors.length; i++) {
		var cp = cofProductors[i];
		var weekly_Production = cp.gives_weekly*cp.quantity;
		cofProduction+=weekly_Production;
	}
	return cofProduction;
}

function getWaterProduction(data) {
	var waterProductors = data.filter(item => item.type == "lake" || item.type == "well");
	var waterProduction = 0;
	for(var i=0; i < waterProductors.length; i++) {
		var wp = waterProductors[i];
		var weekly_Production = wp.gives_weekly*wp.quantity;
		waterProduction+=weekly_Production;
	}
	return waterProduction;
}

function getPowerProduction(data) {

	var powerProductors = data.filter(item => item.asset_id == "spw" || item.asset_id == "wtw");
	var powerProduction = 0;
	for(var i=0; i < powerProductors.length; i++) {
		var pp = powerProductors[i];
		var weekly_Production = pp.gives_weekly*pp.quantity;
		powerProduction+=weekly_Production;
	}
	return powerProduction;
}

function getFruitProduction(data) {
	var fruitProductors = data.filter(item => item.category == "Tree");
	var fruitProduction = 0;
	for(var i=0; i < fruitProductors.length; i++) {
		var fp = fruitProductors[i];
		var weekly_Production = fp.gives_weekly*fp.quantity;
		fruitProduction+=weekly_Production;
	}
	return fruitProduction;
}



function obtenerExtractos(assetsData) {
	var extractList = [];
	for(var i=0; i < assetsData.length; i++) {
		var asset = assetsData[i];
		if(asset.category == 'Feed' || asset.category == 'Extract') {
			extractList.push(asset.id);
		}
	}
 
	return extractList;
}

function obtenerSemillas(assetsData) {
	var seedList = [];
	for(var i=0; i < assetsData.length; i++) {
		var asset = assetsData[i];
		if(asset.category == 'Seed') {
			seedList.push(asset);
		}
	}
	return seedList;
}

function obtenerCropLands(assetsData) {
	var cropLands = [];
	for(var i=0; i < assetsData.length; i++) {
		var asset = assetsData[i];
		if(asset.type == "crop_land") {
			cropLands.push(asset);
		}
	}
	return cropLands;
}


function rellenarConfiguracion(data) {
	
	//Datos del API
	var feedConfig = confAssetsData.data.feedConfigNew;
	var treeCrops = confAssetsData.data.cropConfigV2.treeCrops;
	var grindFees = confAssetsData.data.cropConfigV2.grindings;
	var storages = confAssetsData.data.storages;
	var landCrops = confAssetsData.data.cropConfigV2.landCrops;
	
	//Configuracion de SH
	for(var i=0; i < feedConfig.length; i++) {
		var conf = feedConfig[i];
		
		var asset = data.find(function(item) {
			return item.asset_id === conf.assetId && item.category == "Super Hero";
		});
		
		if(asset) { 
			var takes = conf.takes;
			
			var other = takes.other;			
			var otherFeed = other[0].count + "*" + other[0].assetId;
			var otherWater = other[1].count + "*" + other[1].assetId;
			var other_consumption = '6*(' + otherFeed + "+" + otherWater +')';
			
			var sunday = takes.sun;
			var sundayFeed = sunday[0].count + "*" + sunday[0].assetId;
			var sundayWater = sunday[1].count + "*" + sunday[1].assetId;
			var sunday_consumption = sundayFeed + "+" + sundayWater;
			
			var weekly_consumption = "(" + other_consumption + "+" + sunday_consumption + ")";
									  
			var gives = conf.gives;
			var weekly_production;
			
			weekly_production = 0;
			var formula = weekly_production + "-" + weekly_consumption;
			
			asset.gives_weekly = 0;
			asset.takes_weekly = {
				water: 6*other[1].count + sunday[1].count,
				cof: 0,
				caf: 6*other[0].count,
				frf: sunday[0].count,
				pow: 0
			}
			asset.daily_production = "+" + asset.bonus.cantidad + asset.bonus.tipo + " " + asset.extract;
			asset.daily_consumption = other[0].count + " " + other[0].assetId + " / " + other[1].count + " " + other[1].assetId;
			asset.profitability = getAssetProfitability(asset, formula, marketData, extractList);
			asset.totalProfitability = asset.quantity * asset.profitability;
		
		}
	}
	
	//Configuracion animales	
	for(var i=0; i < feedConfig.length; i++) {
		var conf = feedConfig[i];
		
		var asset = data.find(function(item) {
			return item.asset_id === conf.assetId && item.category != "Super Hero";
		});
		
		if(asset) {
			var takes = conf.takes;
			
			var other = takes.other;			
			var otherFeed = other[0].count + "*" + other[0].assetId;
			var otherWater = other[1].count + "*" + other[1].assetId;
			var other_consumption = '6*(' + otherFeed + "+" + otherWater +')';
			
			var sunday = takes.sun;
			var sundayFeed = sunday[0].count + "*" + sunday[0].assetId;
			var sundayWater = sunday[1].count + "*" + sunday[1].assetId;
			var sunday_consumption = sundayFeed + "+" + sundayWater;
			
			var weekly_consumption = "(" + other_consumption + "+" + sunday_consumption + ")";					  
	
			var gives = conf.gives;
			var extract = gives[0].extractId;
			var quant = "(" + gives[0].count + "/" + conf.extractTime + ")";
			var weekly_production = "7*" + quant + "*" + extract;
			
			var formula = weekly_production + "-" + weekly_consumption;
			
			asset.gives_weekly = 7*eval(quant);
			asset.takes_weekly = {
				water: 6*other[1].count + sunday[1].count,
				cof: 6*other[0].count,
				caf: 0,
				frf: sunday[0].count,
				pow: 0
			}
			asset.daily_production = eval(quant) + " " + extract;
			asset.daily_consumption = other[0].count + " " + other[0].assetId + " / " + other[1].count + " " + other[1].assetId;
			asset.profitability = getAssetProfitability(asset, formula, marketData, extractList);
			asset.totalProfitability = asset.quantity * asset.profitability;
		}

	}
	
	//Configuracion de árboles	
	for(var i=0; i < treeCrops.length; i++) { 
		var treeCrop = treeCrops[i];
		var treeId = treeCrop.srcAsset;
		
		var asset = data.find(function(item) {
			return item.asset_id === treeId;
		});
		
		var extractTime = treeCrop.harvestTime/24;
		var daily_production = treeCrop.fruitsProduced/extractTime;
		var weekly_production = "7*" + daily_production + "*frf";
		
		var daily_water_consumption = treeCrop.waterRequired/extractTime + "*water"		
		var weekly_consumption = "7*(" + daily_water_consumption + ")"
		
		var grinded_asset = grindFees.find(function(item) {
			return item.asset === treeCrop.produceAsset;
		});
		var grindFee = grinded_asset.grindingFeePerCrop;
		var weekly_fee = "7*" + daily_production + "*" + grindFee;
		
		var formula = weekly_production + "-" + weekly_consumption + "-" + weekly_fee;

		asset.gives_weekly = 7*daily_production;
		asset.takes_weekly = {
			water: 7*treeCrop.waterRequired/extractTime,
			cof: 0,
			caf: 0,
			frf: 0,
			pow: 0
		}
		asset.daily_production = daily_production + " " + treeCrop.produceAsset;
		asset.daily_consumption = roundResult(treeCrop.waterRequired/extractTime) + " water";
		asset.profitability = getAssetProfitability(asset, formula, marketData, extractList);
		asset.totalProfitability = asset.quantity * asset.profitability;
		
	}
	
	//Configuracion de utiles	
	for(var i=0; i < storages.length; i++) { 
		var storage = storages[i];
		
		var asset = data.find(function(item) {
			return item.asset_id === storage.srcAsset;
		});
		
		
		var daily_production_times = 1440/storage.produceTime;
		var daily_production = daily_production_times*storage.produceQty;
		var shBonus = getSHBonus(data, storage.produceAsset);		
		if(shBonus > 0) {
			daily_production = (daily_production + daily_production*shBonus/100);			
		}	
		var weekly_production = "7*" + daily_production + "*" + storage.produceAsset; ;
		
		var consumption_extract = storage.produceAsset == "pow" ? "grease" : "pow";
		var daily_consumption = daily_production_times*storage.produceQty*0.01;
		if(shBonus > 0) {
			daily_consumption = (daily_consumption + daily_consumption*shBonus/100);
		}
		var weekly_consumption = "7*" + daily_consumption + "*" +consumption_extract;

		var formula = weekly_production + "-" + weekly_consumption;
		
		asset.gives_weekly = 7*daily_production;
		asset.takes_weekly = {
			water:0,
			cof: 0,
			caf: 0,
			frf: 0,
			pow: consumption_extract == "pow" ? 7*daily_consumption : 0,
		}
		asset.daily_production = daily_production + " " + storage.produceAsset;
		asset.daily_consumption = roundResult(eval(daily_consumption)) + " " + consumption_extract;
		asset.profitability = getAssetProfitability(asset, formula, marketData, extractList);
		asset.totalProfitability = asset.quantity * asset.profitability;
		
	}
	
	
	//Configuracion tierras
	var cropLandAssets = obtenerCropLands(data);
	for(var i=0; i < cropLandAssets.length; i++) { 
		var cropLand = cropLandAssets[i];
		var landSize = cropLand.options.land_size ? cropLand.options.land_size : 1;
		var cropType = cropLand.srcAsset;
		
		var cropLandConf = landCrops.find(function(item) {
			return item.srcAsset === cropType;
		}); 
		
		var shBonus = getSHBonus(data, cropLand.extract);
		
		var cropTime = cropLandConf.harvestTime/24;
		daily_production = landSize*((cropLandConf.cropsProduced + shBonus)/cropTime);			
		var weekly_production = "7*" + daily_production + "*" + cropLand.extract;

		var seed = seedList.find(function(item) {
			return item.id === cropType;
		}); 
		var daily_consumption = Math.round(landSize) + "*(" + cropLandConf.waterRequired + "*water"	+ "+" + seed.defaultPrice + ")/"	+ cropTime;
		var weekly_consumption = "7*(" + daily_consumption + ")"
		
		
		var grinded_asset = grindFees.find(function(item) {
			return item.asset === cropLandConf.produceAsset;
		});
		var grindFee = grinded_asset.grindingFeePerCrop;
		var weekly_fee = "7*(" + daily_production +  "*" + grindFee + ")";

		var formula = weekly_production + "-" + weekly_consumption + "-" + weekly_fee;
		
		cropLand.gives_weekly = 7*roundResult(daily_production);
		cropLand.takes_weekly = {
			water: 7*Math.round(landSize)*cropLandConf.waterRequired,
			cof: 0,
			caf: 0,
			frf: 0,
			pow: 0
		}
		cropLand.daily_production = roundResult(daily_production) + " " + cropLand.extract;
		cropLand.daily_consumption = roundResult(Math.round(landSize)*cropLandConf.waterRequired/cropTime) + " water" + " / " + roundResult(Math.round(landSize)/cropTime) + " " + cropType;
		cropLand.profitability = getAssetProfitability(cropLand, formula, marketData, extractList);
		cropLand.totalProfitability = cropLand.quantity * cropLand.profitability;
	}
	
	
}

function getSHBonus(data, extractName) {
	var asset = data.find(function(item) {
			return item.category == "Super Hero" && item.extract.includes(extractName);
	});
	
	return asset != null ? asset.bonus.cantidad*asset.quantity : 0;
	
}

function roundResult(number) {
	return parseFloat(number.toFixed(3));
}

function getAssetProfitability(asset, formula, marketData, extractList) {
	
	var marketExtracts = [];
	for(var i=0; i < extractList.length; i++) {
		var extract = extractList[i];
		var marketExtractName = extract + "cbx";

		var marketExtract = marketData.find(function(item) {
			return item.clave === marketExtractName;
		});
		
		if(marketExtract) {
			marketExtracts.push(marketExtract);
		}		
	}

	marketExtracts.push({clave: "greasecbx", precio: GREASE_COST_PER_UNIT});

	for(var i=0; i < marketExtracts.length; i++) { 
		var extract = marketExtracts[i];
		var clave = extract.clave.slice(0, -3);
		var precio = extract.precio;
		
		formula = formula.replaceAll(clave, precio);
	}

	return eval(formula);
}


function getImageUrl(asset_id, assetsData) {
	var asset = assetsData.assets.find(function(item) {
		return item.id === asset_id;
	}); 	
	return asset.image;
}


function getNombre(asset_id, assetsData) {
	var asset = assetsData.assets.find(function(item) {
		return item.id === asset_id;
	}); 
	return asset.name;
}


function getCategoria(asset_id, assetsData) {
	var asset = assetsData.assets.find(function(item) {
		return item.id === asset_id;
	}); 
	return asset.category;
}

function getTipo(asset_id, assetsData) {
	var asset = assetsData.assets.find(function(item) {
		return item.id === asset_id;
	}); 
	return asset.type;
}

function getOptions(asset_id, assetsData) {
	var asset = assetsData.assets.find(function(item) {
		return item.id === asset_id;
	}); 
	return JSON.parse(asset.options);
}

function obtenerPrecioAsset(asset_id) {
	var marketAsset = marketData.find(function(item) {
			return item.clave.slice(0, -3) === asset_id;
	});
	return marketAsset.precio;
}


