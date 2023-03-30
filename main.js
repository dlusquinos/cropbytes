
  const GREASE_COST_PER_UNIT = 10;


  var farm = [
  
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
	
	{
      "asset_id": "fcl",
	  "quantity": 0,
	  "srcAsset": "cos",
    },
	
	{
      "asset_id": "ocl",
	  "quantity": 0,
	  "srcAsset": "cos",
    },
	
	{
      "asset_id": "scl",
	  "quantity": 0,
	  "srcAsset": "cos",
    },
	
	{
      "asset_id": "fcl",
	  "quantity": 0,
	  "srcAsset": "cas",
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
    }
  ]
  


$(document).ready(function() {
	
	var data = construirData();
	
    $('#myFarm').DataTable({
        data: data,
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
		

		
		drawCallback: function(settings) {
			
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
					
					datosFila.quantity = this.value;
					datosFila.totalProfitability = datosFila.quantity * datosFila.profitability;
					tabla.row(tr).data(datosFila);
					tabla.draw();
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
      farm = JSON.parse(savedData);
    }
	
	var marketData = obtenerPreciosMarketAPI();
	var assetsData = obtenerAssetsAPI();
	
	var confAssetsData = obtenerConfAssetsAPI();
	
	for(var i=0; i < farm.length; i++) {
		var farmAsset = farm[i];
		
		var bean = {};
		bean.asset_id = farmAsset.asset_id;
		bean.name =  getNombre(farmAsset, assetsData.data);
		bean.category =  getCategoria(farmAsset, assetsData.data);
		bean.type =  getTipo(farmAsset, assetsData.data);
		bean.options =  getOptions(farmAsset, assetsData.data);
		bean.image_url = getImageUrl(farmAsset, assetsData.data);
		bean.quantity = farmAsset.quantity;
		bean.srcAsset = farmAsset.srcAsset;
		bean.extract = farmAsset.extract;
		
		data.push(bean);
	}
	
	var extractList = obtenerExtractos(assetsData.data.assets);
	var seedList = obtenerSemillas(assetsData.data.assets);
	rellenarConfiguracion(data, confAssetsData, marketData, extractList, seedList);
	
	return data;
	
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


function rellenarConfiguracion(data, confAssetsData, marketData, extractList, seedList) {
	
	//Configuracion animales
	var feedConfig = confAssetsData.data.feedConfigNew;
	for(var i=0; i < feedConfig.length; i++) {
		var conf = feedConfig[i];
		
		var asset = data.find(function(item) {
			return item.asset_id === conf.assetId;
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
			
			asset.daily_production = eval(quant) + " " + extract;
			asset.daily_consumption = other[0].count + " " + other[0].assetId + " / " + other[1].count + " " + other[1].assetId;
			asset.profitability = getAssetProfitability(asset, formula, marketData, extractList);
			asset.totalProfitability = asset.quantity * asset.profitability;
		}

	}
	
	//Configuracion de árboles
	var treeCrops = confAssetsData.data.cropConfigV2.treeCrops;
	var grindFees = confAssetsData.data.cropConfigV2.grindings;
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

		asset.daily_production = daily_production + " " + treeCrop.produceAsset;
		asset.daily_consumption = roundResult(treeCrop.waterRequired/extractTime) + " water";
		asset.profitability = getAssetProfitability(asset, formula, marketData, extractList);
		asset.totalProfitability = asset.quantity * asset.profitability;
		
	}
	
	//Configuracion de utiles
	var storages = confAssetsData.data.storages;
	for(var i=0; i < storages.length; i++) { 
		var storage = storages[i];
		
		var asset = data.find(function(item) {
			return item.asset_id === storage.srcAsset;
		});
		
		var daily_production_times = 1440/storage.produceTime;
		var daily_production = daily_production_times*storage.produceQty + "*" + storage.produceAsset;
		var weekly_production = "7*" + daily_production;
		
		var weekly_consumption = "";
		
		var consumption_extract = storage.produceAsset == "pow" ? "grease" : "pow";
		weekly_consumption = "7*" + daily_production_times*storage.produceQty + "*0.01*" + consumption_extract;

		var formula = weekly_production + "-" + weekly_consumption;
		
		asset.daily_production = daily_production_times*storage.produceQty + " " + storage.produceAsset;
		asset.daily_consumption = roundResult(eval(daily_production_times*storage.produceQty + "*0.01")) + " " + consumption_extract;
		asset.profitability = getAssetProfitability(asset, formula, marketData, extractList);
		asset.totalProfitability = asset.quantity * asset.profitability;
		
	}
	
	
	//Configuracion tierras
	var landCrops = confAssetsData.data.cropConfigV2.landCrops;
	var cropLandAssets = obtenerCropLands(data);
	for(var i=0; i < cropLandAssets.length; i++) { 
		var cropLand = cropLandAssets[i];
		var landSize = cropLand.options.land_size ? cropLand.options.land_size : 1;
		var cropType = cropLand.srcAsset;
		
		var cropLandConf = landCrops.find(function(item) {
			return item.srcAsset === cropType;
		}); 
		
		var cropTime = cropLandConf.harvestTime/24;
		var daily_production = landSize*(cropLandConf.cropsProduced/cropTime) + "*" + cropLand.extract;
		var weekly_production = "7*" + daily_production;
		
		var seed = seedList.find(function(item) {
			return item.id === cropType;
		}); 
		var daily_consumption = Math.round(landSize) + "*(" + cropLandConf.waterRequired + "*water"	+ "+" + seed.defaultPrice + ")/"	+ cropTime;
		var weekly_consumption = "7*(" + daily_consumption + ")"
		
		
		var grinded_asset = grindFees.find(function(item) {
			return item.asset === cropLandConf.produceAsset;
		});
		var grindFee = grinded_asset.grindingFeePerCrop;
		var weekly_fee = "7*(" + landSize*(cropLandConf.cropsProduced/cropTime)+  "*" + grindFee + ")";

		var formula = weekly_production + "-" + weekly_consumption + "-" + weekly_fee;
		
		cropLand.daily_production = landSize*(cropLandConf.cropsProduced/cropTime) + " " + cropLand.extract;
		cropLand.daily_consumption = roundResult(Math.round(landSize)*cropLandConf.waterRequired/cropTime) + " water" + " / " + roundResult(Math.round(landSize)/cropTime) + " " + cropType;
		cropLand.profitability = getAssetProfitability(cropLand, formula, marketData, extractList);
		cropLand.totalProfitability = cropLand.quantity * cropLand.profitability;
		
	
	}
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


function getImageUrl(farmAsset, assetsData) {
	var asset = assetsData.assets.find(function(item) {
		return item.id === farmAsset.asset_id;
	}); 	
	return asset.image;
}


function getNombre(farmAsset, assetsData) {
	var asset = assetsData.assets.find(function(item) {
		return item.id === farmAsset.asset_id;
	}); 
	return asset.name;
}


function getCategoria(farmAsset, assetsData) {
	var asset = assetsData.assets.find(function(item) {
		return item.id === farmAsset.asset_id;
	}); 
	return asset.category;
}

function getTipo(farmAsset, assetsData) {
	var asset = assetsData.assets.find(function(item) {
		return item.id === farmAsset.asset_id;
	}); 
	return asset.type;
}

function getOptions(farmAsset, assetsData) {
	var asset = assetsData.assets.find(function(item) {
		return item.id === farmAsset.asset_id;
	}); 
	return JSON.parse(asset.options);
}

