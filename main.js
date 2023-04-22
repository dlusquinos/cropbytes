
$(document).ready(function() {

    var myFarmTable = $('#myFarm').DataTable({
        data: [],
        "columns": [
            { "data": "image_url",
			  "width": "35px",
			  "orderable": false,
			  "render": function (data, type, row, meta) {				  
				  	 return '<img class="pointer" src="' + data + '" width="35">';
			  }
			},
			
			{ "data": "name",
			  "className" : "name",
			  "render": function (data, type, row, meta) {
				return data;
			  }
			},
			
			{ "data": "category",
			  "className" : "category",
			  "render": function (data, type, row, meta) {
				  return data;
			  }
			},
				
			{ "data": "daily_production",
			  "className" : "daily_production",
			  "orderable": false,
			  "render": function (data, type, row, meta) {
				  
				  if(row.type == "feed_mill") {
					  return '<input type="number" class="editable daily_production" contenteditable="true" value="'+ row.default_prod.quant +'" /><span> ' + row.default_prod.type + '</span>';
				  } else {
					  return data;
				  }
			  }
			},
			
			{ "data": "daily_consumption",
			  "className" : "daily_consumption",
			  "orderable": false,
			  "render": function (data, type, row, meta) {
				 if(row.type == "feed_mill") {
					  return '<input type="number" class="editable daily_consumption" contenteditable="true" value="'+ row.default_cons.quant +'" /><span> ' + row.default_cons.type + '</span>';
				  } else {
					  return data;
				  }
			  }
			},
				
			
			{ "data": "grazing_fee",
			  "className" : "grazing_fee",
			  "render": function (data, type, row, meta) {
				  if(type == "display") {
					 return data ? data + " cbx" : ""					 
				  } else {
					  return data;
				  } 				  
			  }
			},
			
			{ "data": "grazing_active",	
			  "className": "grazing_active text-center",
			  "orderable" : false,
			  "render": function (data, type, row, meta) {
				  if(type == "display") {
					  if(row.grazing_fee) {
						   var checked = data ? "checked" : "";
						   return '<input type="checkbox" tabindex="-1" class="grazing-checkbox" ' + checked + '>';
					  } else {
						  return "";
					  }
				  } else {
					  return data;
				  } 	
					 
				 
			  }
			},

			{ "data": "price",
			  "className" : "price",
			  "render": function (data, type, row, meta) {
				if (type == 'display') {
					 var variacion = row.price_change_percent ? row.price_change_percent : ""; 
					 var currency = row.priceCurrency;
					 var precio = data ? data + " " + currency: "";
					 var varClass = variacion.includes("+") ? "verde" : "rojo";
					 var html = '<div class="contenedor-asset">' +									
									'<div class="marketChange">' +
										'<span class="marketChangePrice">'+ precio +'</span>' +
										'<span><span class="importe '+ varClass +'">'+ variacion +'</span></span>' +
									'</div>' +
								'</div>'			
					  
				  	 return html;
				  } else {
					  return data;
				  }
			  }
			},
			
			{ "data": "amount",
			  "className" : "amount importe",
			  "render": function (data, type, row, meta) {
				return data;
			  }
			},
			
			{ "data": "volume",
			  "className" : "volume importe",
			  "render": function (data, type, row, meta) {
				return data;
			  }
			},								

			{ 
                "data": "profitability",
				"className": "profitability",
                "render": function (data, type, row, meta) {
					var colorClass = '';
					if(data != 0) {
						colorClass = data > 0 ? 'verde' : 'rojo';
					}
					return '<div class="importe '+ colorClass +'" ="true">' + roundResult(data) + '</div>';
                }
            },
			
			{ 
                "data": "profitability_price",
				"className": "profitability_price",
                "render": function (data, type, row, meta) {
					var colorClass = '';
					var cbxPrice = row.priceCurrency == 'usdt' ? row.price/cbxValue : row.price;
					var result = row.profitability > 0 ? roundResult(1/(row.profitability/cbxPrice)) : "";					
					return '<div class="importe '+ colorClass +'" ="true">' + result + '</div>';
                }
            },
			
			{ 
                "data": "quantity",
				"className": "quant",
                "render": function (data, type, row, meta) {
					if(type == "display") {
						return '<input type="number" class="editable quantity" contenteditable="true" value="'+ data +'" />';
					} else {
						return data;
					}
                    
                }
            },
			
			{ 
                "data": "totalProfitability",
				"className": "totalProfitability",
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
		"order": [[ 2, 'asc' ]],
		
		"initComplete": function(settings, json) {
			
		},
		
		drawCallback: function(settings) {	
		
			$('.contenedor-tabla-myFarm').css("visibility", "visible");
			$('#myFarm').DataTable().columns.adjust();
			
			//Eventos celda Cantidad
			$('#myFarm tbody .quantity').off('change');
			$('#myFarm tbody .quantity').on('change', function(event) {
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
			
			
			//Eventos celda produccion
			$('#myFarm tbody .daily_production').off('change');
			$('#myFarm tbody .daily_production').on('change', function(event) {
				event.stopPropagation();
				
				var tr = $(this).closest('tr');
				var tabla = $('#myFarm').DataTable();
				var datosFila = tabla.row(tr).data();
				
				
				var index = farm.findIndex(function(asset) {
					return asset.asset_id === datosFila.asset_id
				});
				
				if (index !== -1) {
					farm[index].default_prod.quant = this.value;
					localStorage.setItem("farm", JSON.stringify(farm));
					
					
					//Repintar fila					
					var weekly_production = 7*this.value + "*" + datosFila.default_prod.type;
					var weekly_consumption = "7*" + datosFila.default_cons.quant + "*" + datosFila.default_cons.type;
					var formula = weekly_production + "-" + weekly_consumption;
					
					datosFila.weekly_formula.principal = formula;
					datosFila.daily_production = this.value + " " + datosFila.default_prod.type;
					datosFila.profitability = getAssetProfitability(datosFila, formula); 
					datosFila.totalProfitability = datosFila.quantity * datosFila.profitability;
					datosFila.gives_weekly = 7*this.value;
		
					tabla.row(tr).data(datosFila);
					tabla.draw();					
					
					//Repintamos la tabla de balance
					var balance = construirBalance(tabla.data());
					myBalanceTable.clear().rows.add(balance).draw();
					
				}
			});
			
			//Eventos celda consumo
			$('#myFarm tbody .daily_consumption').off('change');
			$('#myFarm tbody .daily_consumption').on('change', function(event) {
				event.stopPropagation();
				
				var tr = $(this).closest('tr');
				var tabla = $('#myFarm').DataTable();
				var datosFila = tabla.row(tr).data();
				
				
				var index = farm.findIndex(function(asset) {
					return asset.asset_id === datosFila.asset_id
				});
				
				if (index !== -1) {
					farm[index].default_cons.quant = this.value;
					localStorage.setItem("farm", JSON.stringify(farm));
			
					var weekly_production = 7*datosFila.default_prod.quant + "*" + datosFila.default_prod.type;
					var weekly_consumption = 7*this.value + "*" + datosFila.default_cons.type ;
					var formula = weekly_production + "-" + weekly_consumption;
					
					datosFila.weekly_formula.principal = formula;
					datosFila.daily_consumption = this.value + " " + datosFila.default_cons.type;
					datosFila.profitability = getAssetProfitability(datosFila, formula); 
					datosFila.totalProfitability = datosFila.quantity * datosFila.profitability;
					datosFila.takes_weekly[datosFila.default_cons.type] = 7*this.value;

					//Repintar fila		
					tabla.row(tr).data(datosFila);
					tabla.draw();
					
					
					//Repintamos la tabla de balance
					var balance = construirBalance(tabla.data());
					myBalanceTable.clear().rows.add(balance).draw();
					
				}
			});
			
			$('#myFarm tbody .grazing-checkbox').off('change');
			$('#myFarm tbody .grazing-checkbox').on('change', function(event) { 
				event.stopPropagation();
				
				var tr = $(this).closest('tr');
				var tabla = $('#myFarm').DataTable();
				var datosFila = tabla.row(tr).data();
				var checkValue = $(this).is(":checked")
				
				var index = farm.findIndex(function(asset) {
					return asset.asset_id === datosFila.asset_id
				});
				
				if (index !== -1) {
					farm[index].grazing_active = checkValue;
					localStorage.setItem("farm", JSON.stringify(farm));
					
					datosFila.grazing_active = checkValue;
					datosFila.profitability = datosFila.grazing_active ? datosFila.weekly_formula.grazing : getAssetProfitability(datosFila, datosFila.weekly_formula.principal);	
					datosFila.totalProfitability = datosFila.quantity * datosFila.profitability;
					
					//Repintar fila		
					tabla.row(tr).data(datosFila);
					tabla.draw();
										
					//Repintamos la tabla de balance
					var balance = construirBalance(tabla.data());
					myBalanceTable.clear().rows.add(balance).draw();					
				}
			
			});
			

	    },
		
		
		 footerCallback: function(row, data, start, end, display) {			
			// Calcular el sumatorio de la columna 12
			var sumatorio = this.api()
			  .column(13, { page: 'current'})
			  .data()
			  .reduce(function(a, b) {
				return Number(a) + Number(b);
			  }, 0);
			
			// Añadir el sumatorio al pie de la tabla
			$(this.api().column(13).footer()).html(roundResult(sumatorio));
			
		 }
		
    });
	
	
	var myBalanceTable = $('#myBalance').DataTable({
        data: [],
        "columns": [
		
			{ "data": "image_url",
			  "width": "35px",
			  "orderable": false,
			  "render": function (data, type, row, meta) {				  
				  	 return '<img src="' + data + '" width="35">';
			  }
			},
			
			{ "data": "name",
			  "render": function (data, type, row, meta) {
				return data;
			  }
			},
			
			{ "data": "price",
			  "render": function (data, type, row, meta) {
				if (type == 'display') {
					 var precio = data ? data + " CBX": "";
					 var variacion = row.price_change_percent ? row.price_change_percent : ""; 
					 var varClass = variacion.includes("+") ? "verde" : "rojo";
					 var html = '<div class="contenedor-asset">' +									
									'<div class="marketChange">' +
										'<span class="marketChangePrice">'+ precio +'</span>' +
										'<span><span class="importe '+ varClass +'">'+ variacion +'</span></span>' +
									'</div>' +
								'</div>'			
					  
				  	 return html;
				  } else {
					  return data;
				  }
			  }
			},
			
			{ "data": "amount",
			  "className" : "amount importe",
			  "render": function (data, type, row, meta) {
				return data;
			  }
			},
			
			{ "data": "volume",
			  "className" : "volume importe",
			  "render": function (data, type, row, meta) {
				return data;
			  }
			},

            { "data": "production",
			  "className" : "production importe",
			  "render": function (data, type, row, meta) {
				return data;
			  }
			},
			
			{ "data": "consumption",
			  "className" : "consumption importe",
			  "searchable": true,
			  "render": function (data, type, row, meta) {
				  return data;
			  }
			},
			
			{ "data": "balance",
			  "className" : "balance importe",
			  "render": function (data, type, row, meta) {
				  var colorClass = '';
					if(data != 0) {
						colorClass = data > 0 ? 'verde' : 'rojo';
					}
					return '<div class="importe '+ colorClass +'" ="true">' + roundResult(data) + '</div>';
			  }
			},
			
			{ "data": "balance_cbx",
			  "className" : "balance_cbx importe",
			  "visible": false,
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
		"order": [[ 1, 'asc' ]],
		
		drawCallback: function(settings) {	
			$('.contenedor-tabla-myBalance').css("visibility", "visible");
			$('#myBalance').DataTable().columns.adjust();	
		}
		
    });
	
	//Datos del api
	marketData = obtenerPreciosMarketAPI();
	assetsData = obtenerAssetsAPI();
	confAssetsData = obtenerConfAssetsAPI();
	extractList = obtenerExtractos();
	seedList = obtenerSemillas();
	feedConfig = confAssetsData.data.feedConfigNew;
	treeCrops = confAssetsData.data.cropConfigV2.treeCrops;
	grindFees = confAssetsData.data.cropConfigV2.grindings;
	storages = confAssetsData.data.storages;
	landCrops = confAssetsData.data.cropConfigV2.landCrops;
	cbxValue = obtenerValorCBX();
	pmixValue = obtenerPrecioAsset('pmix');
	
	
	var data = construirData();
	myFarmTable.clear().rows.add(data).draw();
	var balance = construirBalance(data);
	myBalanceTable.clear().rows.add(balance).draw();
	
	
	obtenerMiningCBXDataAPI();
	
	
	//Eventos
	
	$('#myFarm').on('click', 'img', function() {
	  // Obtener la instancia de la fila
	  
	  var tr = $(this).closest('tr');
	  var tabla = $('#myFarm').DataTable();
	  var fila = myFarmTable.row(tr);
	  
	  // Si la fila ya está expandida, ocultar la fila hija
	  if (fila.child.isShown()) {
		fila.child.hide();
	  }
	  // De lo contrario, mostrar la fila hija con los datos
	  else {
		var datos = fila.data();  
		var miningInfo = obtenerMininAssetDataAPI(datos.asset_id);  
		 
		  
		// Crear el contenido de la fila hija utilizando los datos de la fila
		
		var contenido =""
		if(miningInfo.success) {
			

			//Info
			var data = miningInfo.data;
			var price = data.price;
			var dif = data.difficulty ? data.difficulty : "--";
			var week = data.week ? data.week : "--";
			var totalSupply = data.totalSupply;
			var circulatingSupply = data.circulatingSupply;
			var minedSupply = data.minedSupply ? data.minedSupply : "--";
			
			
			var assetRequirements = miningAssetRequirements[datos.asset_id];		
			var actualReqs = {
				pmix: "--",
				cbx: "--",
				games: "--",
				total: "--"
			}
			
			var nextReqs = {
				pmix: "--",
				cbx: "--",
				games: "--",
				total: "--"
			}
			var minedThisWeek = "--";
			var minedToday = "--";
			if(assetRequirements) {
				
					//Stats
					var miningStatsResp = obtenerMininAssetStatsAPI(datos.asset_id);
					var miningStats = miningStatsResp.data.values.mine;				
					minedThisWeek= 0;			
					minedToday = miningStats[miningStats.length-1];				
					for(var i=0; i< miningStats.length; i++) {
						var stat = miningStats[i];
						minedThisWeek+=stat;
					}
				
					var pmixValue = obtenerPrecioAsset('pmix');
					
					//Semana actual 
					var actualRequirements = assetRequirements.find(function(item) {
						return item.week === week-1;
					});
					var actualDif = dif > 1 ? dif : 1;
					actualReqs.pmix = roundResult(actualDif*actualRequirements.mixBase);
					actualReqs.cbx = roundResult(actualDif*(actualRequirements.cbxBase/cbxValue));
					actualReqs.games = roundResult(actualDif*(actualRequirements.miniGames));
					actualReqs.total = roundResult(actualReqs.cbx + actualReqs.pmix*pmixValue);
					actualReqs.totalGames = actualReqs.total + actualReqs.games*3.75;
					
					//Semana siguiente
					var nextRequirements = assetRequirements.find(function(item) {
						return item.week === week;
					});
					var nextDifFormula = (minedSupply/nextRequirements.supply)**5;
					var nextDif = nextDifFormula > 1 ? nextDifFormula : 1;
					nextReqs.pmix = roundResult(nextDif*nextRequirements.mixBase);
					nextReqs.cbx = roundResult(nextDif*(nextRequirements.cbxBase/cbxValue));
					nextReqs.games = roundResult(nextDif*nextRequirements.miniGames);
					nextReqs.total = roundResult(nextReqs.cbx + nextReqs.pmix*pmixValue);
					nextReqs.totalGames = nextReqs.total + nextReqs.games*3.75;
					
			}

			contenido = '<div class="row fila-desplegada supply-info">' + 
							'<div class="col-sm-6 supply-asset-data py-1">' +
								'<div class="row">' + 
									'<div class="col-sm-4">' + 
										'<div>Precio</div>' + 
										'<div class ="valor">' + price + '</div>' +
									'</div>' +
									'<div class="col-sm-4">' + 
										'<div>Dificultad</div>' + 
										'<div class ="valor">' + dif + '</div>' +
									'</div>' +	
									'<div class="col-sm-4">' + 
										'<div>Semana</div>' + 
										'<div class ="valor">' + week + '</div>' +
									'</div>' +																	
								'</div>' + 
								'<div class="row">' + 
									'<div class="col-sm-4">' + 
										'<div>Total Minado</div>' + 
										'<div class ="valor">' + minedSupply + '</div>' +
									'</div>' +
									'<div class="col-sm-4">' + 	
										'<div>Min. hoy</div>' + 
										'<div class ="valor">' + minedToday + '</div>' +
									'</div>' +	
									'<div class="col-sm-4">' + 
										'<div>Min. ult. 7 dias</div>' + 
										'<div class ="valor">' + minedThisWeek + '</div>' +
									'</div>' +															
								'</div>' +
								'<div class="row">' + 
									'<div class="col-sm-4">' + 	
										'<div>Total Supply</div>' + 
										'<div class ="valor">' + totalSupply + '</div>' +
									'</div>' +	
									'<div class="col-sm-4">' + 
										'<div>Total Circulante</div>' + 
										'<div class ="valor">' + circulatingSupply + '</div>' +
									'</div>' +																
								'</div>' +								
							'</div>';
					if(assetRequirements) {		
					  contenido +=	'<div class="supply-asset-data col-sm-6">' +
										'<div class="py-1">Requerimientos de minado semanales:</div>' + 
										'<table class="tabla-minado">' + 						  
											 '<thead>' +
												'<tr>' +
												  '<th>SEMANA</th>' +
												  '<th>PROMIX</th>' +
												  '<th>CBX</th>' +
												  '<th>JUEGOS</th>' +
												  '<th>TOTAL SIN JUEGOS</th>' +
												  '<th>TOTAL CON JUEGOS</th>' +
												'</tr>' +
											  '</thead>' +
											  '<tbody>' +
												'<tr>' +
												  '<td>' + week + '</td>' +
												  '<td>' + actualReqs.pmix + '</td>' +
												  '<td>' + actualReqs.cbx + '</td>' +
												  '<td>' + actualReqs.games + '</td>' +
												  '<td>' + actualReqs.total+ '</td>' +
												  '<td>' + actualReqs.totalGames+ '</td>' +
												'</tr>' +
												'<tr>' +
												  '<td>' + (week + 1) + '</td>' +
												  '<td>' + nextReqs.pmix + '</td>' +
												  '<td>' + nextReqs.cbx + '</td>' +
												  '<td>' + nextReqs.games + '</td>' +
												  '<td>' + nextReqs.total+ '</td>' +
												  '<td>' + nextReqs.totalGames+ '</td>' +
												'</tr>' +
											  '</tbody>' +
										'</table>' +
									'</div>';
					}		
					contenido +='</div>';
						
						
				
				
						
			
		} else {
			contenido = '<div class="fila-desplegada supply-data">' +
							'Sin datos que mostrar'
						'</div>';
		}
		// Mostrar la fila hija
		
		fila.child(contenido).show();
		
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

function obtenerMininAssetDataAPI(asset_id) {
	var obtenerMininJSON = $.ajax({
	  url: "https://api.cropbytes.com/api/v1/game/assets-supply/mine_stats?currency="+asset_id,
	  dataType: "json",
	  async: false
	}).responseText;
	return JSON.parse(obtenerMininJSON);	
}

function obtenerMininAssetStatsAPI(asset_id) {
	var obtenerMininStatsJSON = $.ajax({
	  url: "https://api.cropbytes.com/api/v1/game/assets-supply/chart_stats?currency="+asset_id,
	  dataType: "json",
	  async: false
	}).responseText;
	return JSON.parse(obtenerMininStatsJSON);	
}

function obtenerMiningCBXDataAPI() {
	$.ajax({
	  url: "https://api.cropbytes.com/api/v1/game/assets/mine_stats",
	  dataType: "json",
	  async: true,
	  success: function(response) {
		var week = response.data.week;
		var totalMine = response.data.totalMine;
		var totalBurned = response.data.totalBurn;
		var dif = response.data.difficulty;
		var price = response.data.price + " USDT";
		var objective = mineCbxData.find(function(item) {
			return item.week === week;
		});
		var nextDif = (totalMine/objective.supply)**5;
		
		
		$("#current_price").text(price);
		$("#dif").text(dif);
		$("#week").text(week);
		$("#next_dif").text(roundResult(nextDif));
		$("#total_mined").text(roundResult(totalMine));
		$("#total_burned").text(roundResult(totalBurned));
		
	  }
	});
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
		if(atributos[i].endsWith('cbx') || atributos[i] == 'cbxusdt') {
			var elto = marketData[atributos[i]];
			var item = {clave: atributos[i], 
						precio : elto.ticker.last, 
						variacion: elto.ticker.price_change_percent,
						volumen: elto.ticker.volume,
						transacciones: elto.ticker.amount
						};
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
		bean.name =  getNombre(farmAsset.asset_id);
		bean.category =  getCategoria(farmAsset.asset_id);
		bean.type =  getTipo(farmAsset.asset_id);
		bean.options =  getOptions(farmAsset.asset_id);
		bean.image_url = getImageUrl(farmAsset.asset_id);
		bean.quantity = farmAsset.quantity;
		bean.srcAsset = farmAsset.srcAsset;
		bean.extract = farmAsset.extract;
		bean.bonus = farmAsset.bonus;
		bean.profitability = 0;
		bean.totalProfitability = 0;
		bean.default_prod = farmAsset.default_prod;
		bean.default_cons = farmAsset.default_cons;
		bean.feedable = false;
		bean.grazing_fee = 0;
		bean.grazing_active = farmAsset.grazing_active ? farmAsset.grazing_active : false;
		bean.weekly_formula = {};
		bean.price = obtenerPrecioAsset(bean.asset_id);
		bean.priceCurrency = getDefaultPriceCurrency(bean.asset_id);
		bean.price_change_percent = obtenerVariacionPrecioAsset(bean.asset_id); 
		bean.volume = obtenerVolumenAsset(bean.asset_id);
		bean.amount = obtenerTransaccionesAsset(bean.asset_id);
		
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
		name: getNombre("water"),
		image_url: getImageUrl("water")
	}	
	water.production = getWaterProduction(data);
	water.consumption = getExtractConsumption(data, "water"),
	water.balance = water.production - water.consumption;
	water.balance_cbx = roundResult(water.balance*obtenerPrecioAsset("water"));
	water.price = obtenerPrecioAsset(water.asset_id);
	water.price_change_percent = obtenerVariacionPrecioAsset(water.asset_id); 
	water.volume = obtenerVolumenAsset(water.asset_id);
	water.amount = obtenerTransaccionesAsset(water.asset_id);
	balance.push(water);
	
	//Cof
	var cof ={
		asset_id: "cof",
		name: getNombre("cof"),
		image_url: getImageUrl("cof")
	}	
	cof.production = getCofProduction(data);
	cof.consumption = getExtractConsumption(data, "cof");
	cof.balance =  cof.production - cof.consumption;
	cof.balance_cbx =  roundResult(cof.balance*obtenerPrecioAsset("cof"));
	cof.price = obtenerPrecioAsset(cof.asset_id);
	cof.price_change_percent = obtenerVariacionPrecioAsset(cof.asset_id); 
	cof.volume = obtenerVolumenAsset(cof.asset_id);
	cof.amount = obtenerTransaccionesAsset(cof.asset_id);
	balance.push(cof);
	
	//Caf
	var caf ={
		asset_id: "caf",
		name: getNombre("caf"),
		image_url: getImageUrl("caf")
	};
	caf.production =  getCafProduction(data);
	caf.consumption =  getExtractConsumption(data, "caf");
	caf.balance =  caf.production - caf.consumption;
	caf.balance_cbx =  roundResult(caf.balance*obtenerPrecioAsset("caf"));
	caf.price = obtenerPrecioAsset(caf.asset_id);
	caf.price_change_percent = obtenerVariacionPrecioAsset(caf.asset_id);
	caf.volume = obtenerVolumenAsset(caf.asset_id);
	caf.amount = obtenerTransaccionesAsset(caf.asset_id);
	balance.push(caf);
	
	//Frf
	var frf ={
		asset_id: "frf",
		name: getNombre("frf"),
		image_url: getImageUrl("frf")
	};
	frf.production = getFruitProduction(data);
	frf.consumption =  getExtractConsumption(data, "frf");
	frf.balance =  frf.production - frf.consumption;
	frf.balance_cbx = roundResult(frf.balance*obtenerPrecioAsset("frf"));
	frf.price = obtenerPrecioAsset(frf.asset_id);
	frf.price_change_percent = obtenerVariacionPrecioAsset(frf.asset_id);
	frf.volume = obtenerVolumenAsset(frf.asset_id);
	frf.amount = obtenerTransaccionesAsset(frf.asset_id);
	balance.push(frf);
	
	//Pow
	var pow ={
		asset_id: "pow",
		name: getNombre("pow"),
		image_url: getImageUrl("pow")
	};
	pow.production = getPowerProduction(data);
	pow.consumption = getExtractConsumption(data, "pow");
	pow.balance = pow.production - pow.consumption;
	pow.balance_cbx = roundResult(pow.balance*obtenerPrecioAsset("pow"));
	pow.price = obtenerPrecioAsset(pow.asset_id);
	pow.price_change_percent = obtenerVariacionPrecioAsset(pow.asset_id);
	pow.volume = obtenerVolumenAsset(pow.asset_id);
	pow.amount = obtenerTransaccionesAsset(pow.asset_id);
	balance.push(pow);
		
	return balance;
}

function getExtractConsumption(data, extract) {	
	var extractConsumption = 0;
	for(var i=0; i < data.length; i++) {
		var d = data[i];
		if(!d.grazing_active) {
			var weekly_consumption = d.takes_weekly[extract]*d.quantity;
			extractConsumption+=weekly_consumption;
		} 
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



function obtenerExtractos() {
	var extractList = [];
	var assets = assetsData.data.assets;
	for(var i=0; i < assets.length; i++) {
		var asset = assets[i];
		if(asset.category == 'Feed' || asset.category == 'Extract') {
			extractList.push(asset.id);
		}
	}
 
	return extractList;
}

function obtenerSemillas() {
	var seedList = [];
	var assets = assetsData.data.assets;
	for(var i=0; i < assets.length; i++) {
		var asset = assets[i];
		if(asset.category == 'Seed') {
			seedList.push(asset);
		}
	}
	return seedList;
}

function obtenerCropLands(data) {
	var cropLands = [];
	for(var i=0; i < data.length; i++) {
		var asset = data[i];
		if(asset.type == "crop_land") {
			cropLands.push(asset);
		}
	}
	return cropLands;
}

function obtenerFeedMill(data) {
	var feedMill = null;
	for(var i=0; i < data.length; i++) {
		var asset = data[i];
		if(asset.type == "feed_mill") {
			feedMill = asset;
		}
	}
	return feedMill;
}


function rellenarConfiguracion(data) {
	

	
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

			var weekly_production = 0;
			var formula = weekly_production + "-" + weekly_consumption;
			
			asset.gives_weekly = 0;
			asset.takes_weekly = {
				water: 6*other[1].count + sunday[1].count,
				cof: 0,
				caf: 6*other[0].count,
				frf: sunday[0].count,
				pow: 0
			}
			asset.weekly_formula.principal = formula;
			var cantidad = asset.bonus.cantidad ? "+" + asset.bonus.cantidad : "";
			var descripcion = asset.extract ? asset.extract : asset.bonus.descripcion;
			asset.daily_production = cantidad + asset.bonus.tipo + " " + descripcion;
			asset.daily_consumption = other[0].count + " " + other[0].assetId + " / " + other[1].count + " " + other[1].assetId;
			asset.profitability = getAssetProfitability(asset, formula);
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
			
			asset.extract = extract;
			asset.gives_weekly = 7*eval(quant);
			asset.takes_weekly = {
				water: 6*other[1].count + sunday[1].count,
				cof: 6*other[0].count,
				caf: 0,
				frf: sunday[0].count,
				pow: 0
			}
			asset.grazing_fee = takes.hibernation_fee;
			asset.weekly_formula.principal = formula;
			asset.weekly_formula.grazing = -(takes.hibernation_fee/2);
			asset.daily_production = eval(quant) + " " + extract;
			asset.daily_consumption = other[0].count + " " + other[0].assetId + " / " + other[1].count + " " + other[1].assetId;
			asset.profitability = asset.grazing_active ? -(takes.hibernation_fee/2) : getAssetProfitability(asset, formula);	
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
		asset.weekly_formula.principal = formula;
		asset.daily_production = daily_production + " " + treeCrop.produceAsset;
		asset.daily_consumption = roundResult(treeCrop.waterRequired/extractTime) + " water";
		asset.profitability = getAssetProfitability(asset, formula);
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
		asset.weekly_formula.principal = formula;
		asset.daily_production = daily_production + " " + storage.produceAsset;
		asset.daily_consumption = roundResult(eval(daily_consumption)) + " " + consumption_extract;
		asset.profitability = getAssetProfitability(asset, formula);
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
		cropLand.weekly_formula.principal = formula;
		cropLand.daily_production = roundResult(daily_production) + " " + cropLand.extract;
		cropLand.daily_consumption = roundResult(Math.round(landSize)*cropLandConf.waterRequired/cropTime) + " water" + " / " + roundResult(Math.round(landSize)/cropTime) + " " + cropType;
		cropLand.profitability = getAssetProfitability(cropLand, formula);
		cropLand.totalProfitability = cropLand.quantity * cropLand.profitability;
	}
	
	
	//Configuracion Feed mill
	var feedMill = obtenerFeedMill(data);
	if(feedMill != null) {
		feedMill.gives_weekly = 7*feedMill.default_prod.quant;
		feedMill.takes_weekly = {
			water: 0,
			cof: 0,
			caf: 0,
			frf: 0,
			pow: 7*feedMill.default_cons.quant
		}
		
		var weekly_production = 7*feedMill.default_prod.quant + "*" + feedMill.default_prod.type;
		var weekly_consumption = 7*feedMill.default_cons.quant + "*" + feedMill.default_cons.type;
		var formula = weekly_production + "-" + weekly_consumption;
		
		feedMill.weekly_formula.principal = formula;
		feedMill.daily_production = feedMill.default_prod.quant + " " + feedMill.default_prod.type;
		feedMill.daily_consumption = feedMill.default_cons.quant + " " + feedMill.default_cons.type;
		feedMill.profitability = getAssetProfitability(feedMill, formula); 
		feedMill.totalProfitability = feedMill.quantity * feedMill.profitability;
	}
	
	
}

function getSHBonus(data, extractName) {
	var asset = data.find(function(item) {
			return item.category == "Super Hero" && item.extract.includes(extractName);
	});
	
	return asset != null ? asset.bonus.cantidad*asset.quantity : 0;
	
}

function roundResult(number) {
	var num = parseFloat(number);
	return parseFloat(num.toFixed(3));
}

function getAssetProfitability(asset, formula) {
	
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
	marketExtracts.push({clave: "cbxcbx", precio: 1});

	for(var i=0; i < marketExtracts.length; i++) { 
		var extract = marketExtracts[i];
		var clave = extract.clave.slice(0, -3);
		var precio = extract.precio;
		
		formula = formula.replaceAll(clave, precio);
	}

	return eval(formula);
}


function getImageUrl(asset_id) {
	var assets = assetsData.data.assets;
	var asset = assets.find(function(item) {
		return item.id === asset_id;
	}); 	
	return asset.image;
}

function getDefaultPrice(asset_id) {
	var assets = assetsData.data.assets;
	var asset = assets.find(function(item) {
		return item.id === asset_id;
	}); 	
	return asset.defaultPrice ? asset.defaultPrice : null;
}

function getDefaultPriceCurrency(asset_id) {
	var assets = assetsData.data.assets;
	var asset = assets.find(function(item) {
		return item.id === asset_id;
	}); 	
	return asset.defaultPriceCurrency;
}


function getNombre(asset_id) {
	var assets = assetsData.data.assets;
	var asset = assets.find(function(item) {
		return item.id === asset_id;
	}); 
	return asset.name;
}


function getCategoria(asset_id) {
	var assets = assetsData.data.assets;
	var asset = assets.find(function(item) {
		return item.id === asset_id;
	}); 
	return asset.category;
}

function getTipo(asset_id) {
	var assets = assetsData.data.assets;
	var asset = assets.find(function(item) {
		return item.id === asset_id;
	}); 
	return asset.type;
}

function getOptions(asset_id) {
	var assets = assetsData.data.assets;
	var asset = assets.find(function(item) {
		return item.id === asset_id;
	}); 
	return JSON.parse(asset.options);
}

function obtenerPrecioAsset(asset_id) {
	var marketAsset = marketData.find(function(item) {
			return item.clave.slice(0, -3) === asset_id;
	});
	return  marketAsset ? marketAsset.precio : getDefaultPrice(asset_id);
}

function obtenerVariacionPrecioAsset(asset_id) {
	var marketAsset = marketData.find(function(item) {
			return item.clave.slice(0, -3) === asset_id;
	});
	return marketAsset ? marketAsset.variacion : null;
}

function obtenerVolumenAsset(asset_id) {
	var marketAsset = marketData.find(function(item) {
			return item.clave.slice(0, -3) === asset_id;
	});
	return marketAsset ? roundResult(marketAsset.volumen) : null;
}

function obtenerTransaccionesAsset(asset_id) {
	var marketAsset = marketData.find(function(item) {
			return item.clave.slice(0, -3) === asset_id;
	});
	return marketAsset ?  Math.floor(marketAsset.transacciones) : null;
}


function obtenerValorCBX() {
	var marketAsset = marketData.find(function(item) {
			return item.clave === 'cbxusdt';
	});
	return  marketAsset.precio;
}
