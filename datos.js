  const GREASE_COST_PER_UNIT = 10;
  var marketData = [];
  var assetsData = [];
  var confAssetsData = [];
  var extractList = [];
  var seedList = [];
  var feedConfig = [];
  var treeCrops = [];
  var grindFees = [];
  var storages = [];
  var landCrops = [];
  var cbxValue = 0;
  var pmixValue = 0;
  var sbfValue = 0;
  var weekActual=0;
  var difActual=0;

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
	 **PRO**
	 *******/
	 
	{
      "asset_id": "atx",
	  "quantity": 0,
	  "pro": true
    },
	
	{
      "asset_id": "aty",
	  "quantity": 0,
	  "pro": true
    },
	
	{
      "asset_id": "md",
	  "quantity": 0,
	  "pro": true
    },
	
	{
      "asset_id": "blb",
	  "quantity": 0,
	  "pro": true
    },
	
	{
      "asset_id": "mp",
	  "quantity": 0,
	  "pro": true
    },
	
	{
      "asset_id": "oak",
	  "quantity": 0,
	  "pro": true
    },
	
	{
      "asset_id": "bp",
	  "quantity": 0,
	  "pro": true
    },
	
	{
      "asset_id": "hh",
	  "quantity": 0,
	  "pro": true
    },
	
	{
      "asset_id": "plp",
	  "quantity": 0,
	  "pro": true
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
    },
	
	{
      "asset_id": "hlr",
	  "quantity": 0,
	  "extract": "",
	  "bonus": {
		  "cantidad": "",
		  "tipo": "",
		  "descripcion": "Helps in recovering animal health quickly",
	  }
    },
	
	{
      "asset_id": "ss",
	  "quantity": 0,
	  "extract": "",
	  "bonus": {
		  "cantidad": "",
		  "tipo": "",
		  "descripcion": "Automatically feeds your animals"
	  }
    },
	
	{
      "asset_id": "bls",
	  "quantity": 0,
	  "extract": "",
	  "bonus": {
		  "cantidad": "",
		  "tipo": "",
		  "descripcion": "Automatically feeds your animals"
	  }
    },
	
	/**************
	 **FEED MILL***
	 **************/
	{
      "asset_id": "fm",
	  "quantity": 0,
	  "default_prod":{
		  "quant": 0,
		  "type": "cbx"
	   },
	  
	  "default_cons":{
		  "quant": 0,
		  "type": "pow"
	  }
    }
  ]

const conversionInicialExtractos = {egg: 8, milk:4, pow : 1, hhr: 1, trf: 3, wool: 6, fur: 2, ftr: 1};

const mineCbxData = [
	{week:67, supply:60560586}, {week:68, supply:61401705}, {week:69, supply:62242824}, {week:70, supply:63083943}, {week:71, supply:63905946},
	{week:72, supply:64727949},	{week:73, supply:65549952}, {week:74, supply:66371955}, {week:75, supply:67193958}, {week:76, supply:68015961},
	{week:77, supply:68837964}, {week:78, supply:69659967}, {week:79, supply:70481970}, {week:80, supply:71303972}, {week:81, supply:72106859},
	{week:82, supply:72909746}, {week:83, supply:73712632}, {week:84, supply:74515519}, {week:85, supply:75318405}, {week:86, supply:76121292},	
	{week:87, supply:76924178}, {week:88, supply:77727065}, {week:89, supply:78529951}, {week:90, supply:79332838}, {week:91, supply:80116608},
	{week:92, supply:80900378}, {week:93, supply:81684149}, {week:94, supply:82467919}, {week:95, supply:83251689}, {week:96, supply:84035459}
	
]

const v2_objects = [
		{name: 'pastry', price: 5, bonus: 12.35, composition: [{name: 'pow', percent: 33.333}, {name: 'egg', percent: 33.333}, {name: 'milk', percent: 33.333}]},
		{name: 'tent', price: 30, bonus: 24.71, composition: [{name: 'pow', percent: 20}, {name: 'wool', percent: 20}, {name: 'ftr', percent: 20}, {name: 'fur', percent: 20}, {name: 'hhr', percent: 20} ]},		
		{name: 'cake', price: 30, bonus: 24.71, composition: [{name: 'pow', percent: 25}, {name: 'milk', percent: 25}, {name: 'egg', percent: 25}, {name: 'trf', percent: 25} ]},
		{name: 'cookies', price: 12, bonus: 17.29, composition: [{name: 'pow', percent: 25}, {name: 'milk', percent: 25}, {name: 'egg', percent: 25}, {name: 'trf', percent: 25} ]},
		{name: 'hammock', price: 12, bonus: 17.29, composition: [{name: 'pow', percent: 20}, {name: 'wool', percent: 20}, {name: 'ftr', percent: 20}, {name: 'fur', percent: 20}, {name: 'hhr', percent: 20} ]},
		{name: 'rope', price: 10, bonus: 14.82, composition: [{name: 'pow', percent: 33.333}, {name: 'fur', percent: 33.333}, {name: 'hhr', percent: 33.333} ]},
		{name: 'pillow', price: 5, bonus: 12.35, composition: [{name: 'pow', percent: 33.333}, {name: 'wool', percent: 33.333}, {name: 'ftr', percent: 33.333}]},
		{name: 'picnic basket', price: 30, bonus: 25.33, composition: [{name: 'pow', percent: 12.5}, {name: 'wool', percent: 12.5}, {name: 'ftr', percent: 12.5}, {name: 'fur', percent: 12.5}, {name: 'hhr', percent: 12.5}, {name: 'milk', percent: 12.5}, {name: 'egg', percent: 12.5}, {name: 'trf', percent: 12.5} ]}
]

var v2_extracts = [
		{name: 'pow'},
		{name: 'wool'},
		{name: 'ftr'},
		{name: 'fur'},
		{name: 'milk'},
		{name: 'egg'},
		{name: 'trf'},
		{name: 'hhr'}
];

var v2_objects_quant = [
		{name: 'pastry', quantity: 0},
		{name: 'tent', quantity: 0},
		{name: 'cake', quantity: 0},
		{name: 'cookies', quantity: 0},
		{name: 'hammock', quantity: 0},
		{name: 'rope', quantity: 0},
		{name: 'pillow', quantity: 0},
		{name: 'picnic basket', quantity: 0}
];

const v2_max_bonus_factor = 1.2533;

const pro_mix_recipe = {
	pmix_fruit: 10,
	pmix_units: 10,
	
	p_mix_normal_extracts: [
						{name:'milk', units:40}, 
						{name:'egg', units:80}, 
						{name:'trf', units:30},
						{name:'fur', units:20},
						{name:'ftr', units:10}, 
						{name:'hhr', units:10},
						{name:'wool', units: 60} 
					],   
	pro_extracts: [
						{id: 'be', name: 'Black Egg', unit_cost: '(6*(2*caf + 2*water) + 2*frf + 2*water)/(7*2)', units: 1, units_sbf: 4},
						{id: 'de',name: 'Duck Egg', unit_cost: '(6*(1*caf + 1*water) + 1*frf + 1*water)/(7*2)', units:2, units_sbf: 0 },
						{id: 'ptrf',name: 'Pro Truffle', unit_cost: '(6*(4*caf + 3*water) + 3*frf + 3*water)/(7*4)', units:1, units_sbf: 2},
						{id: 'pmilk',name: 'Pro Milk', unit_cost: '(6*(4*caf + 3*water) + 3*frf + 3*water)/(7*4)', units:1, units_sbf: 2}
				   ],
	
	pro_extract_value: '10*pmix-10*frf-40*milk',
				   
	sbf_formula: '10*milk + 10*egg + 10*trf + 25*cof + pro_extract'

};

var farm_filters_objects = [
		{name:'v2_profit', value: false},
		{name:'millOwner', value: false} 
];

const miningAssetRequirements = {
	br : [    { week: 40, supply: 6070, mixBase: 76.89, cbxBase: 7.20, miniGames: 8 },
			  { week: 41, supply: 6208, mixBase: 76.89, cbxBase: 7.20, miniGames: 8 },
			  { week: 42, supply: 6346, mixBase: 76.89, cbxBase: 7.20, miniGames: 8 },
			  { week: 43, supply: 6484, mixBase: 76.89, cbxBase: 7.20, miniGames: 8 },
			  { week: 44, supply: 6622, mixBase: 76.89, cbxBase: 7.20, miniGames: 8 },
			  { week: 45, supply: 6760, mixBase: 76.89, cbxBase: 7.20, miniGames: 8 },
			  { week: 46, supply: 6898, mixBase: 76.89, cbxBase: 7.20, miniGames: 8 },
			  { week: 47, supply: 7036, mixBase: 76.89, cbxBase: 7.20, miniGames: 8 },
			  { week: 48, supply: 7174, mixBase: 76.89, cbxBase: 7.20, miniGames: 8 },
			  { week: 49, supply: 7312, mixBase: 76.89, cbxBase: 7.20, miniGames: 8 },
			  { week: 50, supply: 7450, mixBase: 83.05, cbxBase: 7.71, miniGames: 8 },
			  { week: 51, supply: 7586, mixBase: 83.05, cbxBase: 7.71, miniGames: 8 },
			  { week: 52, supply: 7722, mixBase: 83.05, cbxBase: 7.71, miniGames: 8 },
			  { week: 53, supply: 7858, mixBase: 83.05, cbxBase: 7.71, miniGames: 8 },
			  { week: 54, supply: 7994, mixBase: 83.05, cbxBase: 7.71, miniGames: 8 },
			  { week: 55, supply: 8130, mixBase: 83.05, cbxBase: 7.71, miniGames: 8 },
			  { week: 56, supply: 8266, mixBase: 83.05, cbxBase: 7.71, miniGames: 8 },
			  { week: 57, supply: 8402, mixBase: 83.05, cbxBase: 7.71, miniGames: 8 },
			  { week: 58, supply: 8538, mixBase: 83.05, cbxBase: 7.71, miniGames: 8 },
			  { week: 59, supply: 8674, mixBase: 83.05, cbxBase: 7.71, miniGames: 8 },
			  { week: 60, supply: 8810, mixBase: 89.69, cbxBase: 8.25, miniGames: 8 }
		],
		
	rr: [
			  { week: 40, supply: 4240, mixBase: 91.83, cbxBase: 8.60, miniGames: 8 },
			  { week: 41, supply: 4336, mixBase: 91.83, cbxBase: 8.60, miniGames: 8 },
			  { week: 42, supply: 4432, mixBase: 91.83, cbxBase: 8.60, miniGames: 8 },
			  { week: 43, supply: 4528, mixBase: 91.83, cbxBase: 8.60, miniGames: 8 },
			  { week: 44, supply: 4624, mixBase: 91.83, cbxBase: 8.60, miniGames: 8 },
			  { week: 45, supply: 4720, mixBase: 91.83, cbxBase: 8.60, miniGames: 8 },
			  { week: 46, supply: 4816, mixBase: 91.83, cbxBase: 8.60, miniGames: 8 },
			  { week: 47, supply: 4912, mixBase: 91.83, cbxBase: 8.60, miniGames: 8 },
			  { week: 48, supply: 5008, mixBase: 91.83, cbxBase: 8.60, miniGames: 8 },
			  { week: 49, supply: 5104, mixBase: 91.83, cbxBase: 8.60, miniGames: 8 },
			  { week: 50, supply: 5200, mixBase: 99.18, cbxBase: 9.20, miniGames: 8 },
			  { week: 51, supply: 5295, mixBase: 99.18, cbxBase: 9.20, miniGames: 8 },
			  { week: 52, supply: 5390, mixBase: 99.18, cbxBase: 9.20, miniGames: 8 },
			  { week: 53, supply: 5485, mixBase: 99.18, cbxBase: 9.20, miniGames: 8 },
			  { week: 54, supply: 5580, mixBase: 99.18, cbxBase: 9.20, miniGames: 8 },
			  { week: 55, supply: 5675, mixBase: 99.18, cbxBase: 9.20, miniGames: 8 },
			  { week: 56, supply: 5770, mixBase: 99.18, cbxBase: 9.20, miniGames: 8 },
			  { week: 57, supply: 5865, mixBase: 99.18, cbxBase: 9.20, miniGames: 8 },
			  { week: 58, supply: 5960, mixBase: 99.18, cbxBase: 9.20, miniGames: 8 },
			  { week: 59, supply: 6055, mixBase: 99.18, cbxBase: 9.20, miniGames: 8 },
			  { week: 60, supply: 6150, mixBase: 107.11, cbxBase: 9.85, miniGames: 8 }  	  
		],
	
	zing: [
			  { week: 40, supply: 2660, mixBase: 221.62, cbxBase: 26.69, miniGames: 15 },
			  { week: 41, supply: 2721, mixBase: 221.62, cbxBase: 26.69, miniGames: 15 },
			  { week: 42, supply: 2782, mixBase: 221.62, cbxBase: 26.69, miniGames: 15 },
			  { week: 43, supply: 2843, mixBase: 221.62, cbxBase: 26.69, miniGames: 15 },
			  { week: 44, supply: 2904, mixBase: 221.62, cbxBase: 26.69, miniGames: 15 },
			  { week: 45, supply: 2965, mixBase: 221.62, cbxBase: 26.69, miniGames: 15 },
			  { week: 46, supply: 3026, mixBase: 221.62, cbxBase: 26.69, miniGames: 15 },
			  { week: 47, supply: 3087, mixBase: 221.62, cbxBase: 26.69, miniGames: 15 },
			  { week: 48, supply: 3148, mixBase: 221.62, cbxBase: 26.69, miniGames: 15 },
			  { week: 49, supply: 3209, mixBase: 221.62, cbxBase: 26.69, miniGames: 15 },
			  { week: 50, supply: 3270, mixBase: 239.35, cbxBase: 28.56, miniGames: 15 },
			  { week: 51, supply: 3330, mixBase: 239.35, cbxBase: 28.56, miniGames: 15 },
			  { week: 52, supply: 3390, mixBase: 239.35, cbxBase: 28.56, miniGames: 15 },
			  { week: 53, supply: 3450, mixBase: 239.35, cbxBase: 28.56, miniGames: 15 },
			  { week: 54, supply: 3510, mixBase: 239.35, cbxBase: 28.56, miniGames: 15 },
			  { week: 55, supply: 3570, mixBase: 239.35, cbxBase: 28.56, miniGames: 15 },
			  { week: 56, supply: 3630, mixBase: 239.35, cbxBase: 28.56, miniGames: 15 },
			  { week: 57, supply: 3690, mixBase: 239.35, cbxBase: 28.56, miniGames: 15 },
			  { week: 58, supply: 3750, mixBase: 239.35, cbxBase: 28.56, miniGames: 15 },
			  { week: 59, supply: 3810, mixBase: 239.35, cbxBase: 28.56, miniGames: 15 },
			  { week: 60, supply: 3870, mixBase: 258.50, cbxBase: 30.56, miniGames: 15 }
		  ],
	
	bsh: [
			  { week: 40, supply: 2720, mixBase: 221.13, cbxBase: 26.69, miniGames: 15 },
			  { week: 41, supply: 2782, mixBase: 221.13, cbxBase: 26.69, miniGames: 15 },
			  { week: 42, supply: 2844, mixBase: 221.13, cbxBase: 26.69, miniGames: 15 },
			  { week: 43, supply: 2906, mixBase: 221.13, cbxBase: 26.69, miniGames: 15 },
			  { week: 44, supply: 2968, mixBase: 221.13, cbxBase: 26.69, miniGames: 15 },
			  { week: 45, supply: 3030, mixBase: 221.13, cbxBase: 26.69, miniGames: 15 },
			  { week: 46, supply: 3092, mixBase: 221.13, cbxBase: 26.69, miniGames: 15 },
			  { week: 47, supply: 3154, mixBase: 221.13, cbxBase: 26.69, miniGames: 15 },
			  { week: 48, supply: 3216, mixBase: 221.13, cbxBase: 26.69, miniGames: 15 },
			  { week: 49, supply: 3278, mixBase: 221.13, cbxBase: 26.69, miniGames: 15 },
			  { week: 50, supply: 3340, mixBase: 238.82, cbxBase: 28.56, miniGames: 15 },
			  { week: 51, supply: 3401, mixBase: 238.82, cbxBase: 28.56, miniGames: 15 },
			  { week: 52, supply: 3462, mixBase: 238.82, cbxBase: 28.56, miniGames: 15 },
			  { week: 53, supply: 3523, mixBase: 238.82, cbxBase: 28.56, miniGames: 15 },
			  { week: 54, supply: 3584, mixBase: 238.82, cbxBase: 28.56, miniGames: 15 },
			  { week: 55, supply: 3645, mixBase: 238.82, cbxBase: 28.56, miniGames: 15 },
			  { week: 56, supply: 3706, mixBase: 238.82, cbxBase: 28.56, miniGames: 15 },
			  { week: 57, supply: 3767, mixBase: 238.82, cbxBase: 28.56, miniGames: 15 },
			  { week: 58, supply: 3828, mixBase: 238.82, cbxBase: 28.56, miniGames: 15 },
			  { week: 59, supply: 3889, mixBase: 238.82, cbxBase: 28.56, miniGames: 15 },
			  { week: 60, supply: 3950, mixBase: 257.93, cbxBase: 30.56, miniGames: 15 }
		],
		
	bb: [
			  { week: 40, supply: 4140, mixBase: 144.24, cbxBase: 13.51, miniGames: 14 },
			  { week: 41, supply: 4235, mixBase: 144.24, cbxBase: 13.51, miniGames: 14 },
			  { week: 42, supply: 4330, mixBase: 144.24, cbxBase: 13.51, miniGames: 14 },
			  { week: 43, supply: 4425, mixBase: 144.24, cbxBase: 13.51, miniGames: 14 },
			  { week: 44, supply: 4520, mixBase: 144.24, cbxBase: 13.51, miniGames: 14 },
			  { week: 45, supply: 4615, mixBase: 144.24, cbxBase: 13.51, miniGames: 14 },
			  { week: 46, supply: 4710, mixBase: 144.24, cbxBase: 13.51, miniGames: 14 },
			  { week: 47, supply: 4805, mixBase: 144.24, cbxBase: 13.51, miniGames: 14 },
			  { week: 48, supply: 4900, mixBase: 144.24, cbxBase: 13.51, miniGames: 14 },
			  { week: 49, supply: 4995, mixBase: 155.78, cbxBase: 13.51, miniGames: 14 },
			  { week: 50, supply: 5090, mixBase: 155.78, cbxBase: 14.46, miniGames: 14 },
			  { week: 51, supply: 5183, mixBase: 155.78, cbxBase: 14.46, miniGames: 14 },
			  { week: 52, supply: 5276, mixBase: 155.78, cbxBase: 14.46, miniGames: 14 },
			  { week: 53, supply: 5369, mixBase: 155.78, cbxBase: 14.46, miniGames: 14 },
			  { week: 54, supply: 5462, mixBase: 155.78, cbxBase: 14.46, miniGames: 14 },
			  { week: 55, supply: 5555, mixBase: 155.78, cbxBase: 14.46, miniGames: 14 },
			  { week: 56, supply: 5648, mixBase: 155.78, cbxBase: 14.46, miniGames: 14 },
			  { week: 57, supply: 5741, mixBase: 155.78, cbxBase: 14.46, miniGames: 14 },
			  { week: 58, supply: 5834, mixBase: 155.78, cbxBase: 14.46, miniGames: 14 },
			  { week: 59, supply: 5927, mixBase: 168.24, cbxBase: 14.46, miniGames: 14 },
			  { week: 60, supply: 6020, mixBase: 168.24, cbxBase: 15.47, miniGames: 14 }  
		],
		
	mg: [
			  { week: 40, supply: 5790, mixBase: 139.34, cbxBase: 13.05, miniGames: 14 },
			  { week: 41, supply: 5922, mixBase: 139.34, cbxBase: 13.05, miniGames: 14 },
			  { week: 42, supply: 6054, mixBase: 139.34, cbxBase: 13.05, miniGames: 14 },
			  { week: 43, supply: 6186, mixBase: 139.34, cbxBase: 13.05, miniGames: 14 },
			  { week: 44, supply: 6318, mixBase: 139.34, cbxBase: 13.05, miniGames: 14 },
			  { week: 45, supply: 6450, mixBase: 139.34, cbxBase: 13.05, miniGames: 14 },
			  { week: 46, supply: 6582, mixBase: 139.34, cbxBase: 13.05, miniGames: 14 },
			  { week: 47, supply: 6714, mixBase: 139.34, cbxBase: 13.05, miniGames: 14 },
			  { week: 48, supply: 6846, mixBase: 139.34, cbxBase: 13.05, miniGames: 14 },
			  { week: 49, supply: 6978, mixBase: 139.34, cbxBase: 13.05, miniGames: 14 },
			  { week: 50, supply: 7110, mixBase: 150.49, cbxBase: 13.97, miniGames: 14 },
			  { week: 51, supply: 7240, mixBase: 150.49, cbxBase: 13.97, miniGames: 14 },
			  { week: 52, supply: 7370, mixBase: 150.49, cbxBase: 13.97, miniGames: 14 },
			  { week: 53, supply: 7500, mixBase: 150.49, cbxBase: 13.97, miniGames: 14 },
			  { week: 54, supply: 7630, mixBase: 150.49, cbxBase: 13.97, miniGames: 14 },
			  { week: 55, supply: 7760, mixBase: 150.49, cbxBase: 13.97, miniGames: 14 },
			  { week: 56, supply: 7890, mixBase: 150.49, cbxBase: 13.97, miniGames: 14 },
			  { week: 57, supply: 8020, mixBase: 150.49, cbxBase: 13.97, miniGames: 14 },
			  { week: 58, supply: 8150, mixBase: 150.49, cbxBase: 13.97, miniGames: 14 },
			  { week: 59, supply: 8280, mixBase: 150.49, cbxBase: 13.97, miniGames: 14 },
			  { week: 60, supply: 8410, mixBase: 162.53, cbxBase: 14.94, miniGames: 14 }
		],
		
	pp: [
			  { week: 40, supply: 11050, mixBase: 171.42, cbxBase: 19.29, miniGames: 14 },
			  { week: 41, supply: 11302, mixBase: 171.42, cbxBase: 20.65, miniGames: 14 },
			  { week: 42, supply: 11554, mixBase: 171.42, cbxBase: 20.65, miniGames: 14 },
			  { week: 43, supply: 11806, mixBase: 171.42, cbxBase: 20.65, miniGames: 14 },
			  { week: 44, supply: 12058, mixBase: 171.42, cbxBase: 20.65, miniGames: 14 },
			  { week: 45, supply: 12310, mixBase: 171.42, cbxBase: 20.65, miniGames: 14 },
			  { week: 46, supply: 12562, mixBase: 171.42, cbxBase: 20.65, miniGames: 14 },
			  { week: 47, supply: 12814, mixBase: 171.42, cbxBase: 20.65, miniGames: 14 },
			  { week: 48, supply: 13066, mixBase: 171.42, cbxBase: 20.65, miniGames: 14 },
			  { week: 49, supply: 13318, mixBase: 171.42, cbxBase: 20.65, miniGames: 14 },
			  { week: 50, supply: 13570, mixBase: 185.14, cbxBase: 20.65, miniGames: 14 },
			  { week: 51, supply: 13818, mixBase: 185.14, cbxBase: 22.09, miniGames: 14 },
			  { week: 52, supply: 14066, mixBase: 185.14, cbxBase: 22.09, miniGames: 14 },
			  { week: 53, supply: 14314, mixBase: 185.14, cbxBase: 22.09, miniGames: 14 },
			  { week: 54, supply: 14562, mixBase: 185.14, cbxBase: 22.09, miniGames: 14 },
			  { week: 55, supply: 14810, mixBase: 185.14, cbxBase: 22.09, miniGames: 14 },
			  { week: 56, supply: 15058, mixBase: 185.14, cbxBase: 22.09, miniGames: 14 },
			  { week: 57, supply: 15306, mixBase: 185.14, cbxBase: 22.09, miniGames: 14 },
			  { week: 58, supply: 15554, mixBase: 185.14, cbxBase: 22.09, miniGames: 14 },
			  { week: 59, supply: 15802, mixBase: 185.14, cbxBase: 22.09, miniGames: 14 },
			  { week: 60, supply: 16050, mixBase: 199.95, cbxBase: 22.09, miniGames: 14 }
	
		],
		
	mud: [
			  { week: 40, supply: 8450, mixBase: 208.15, cbxBase: 25.07, miniGames: 19 },
			  { week: 41, supply: 8643, mixBase: 208.15, cbxBase: 25.07, miniGames: 19 },
			  { week: 42, supply: 8836, mixBase: 208.15, cbxBase: 25.07, miniGames: 19 },
			  { week: 43, supply: 9029, mixBase: 208.15, cbxBase: 25.07, miniGames: 19 },
			  { week: 44, supply: 9222, mixBase: 208.15, cbxBase: 25.07, miniGames: 19 },
			  { week: 45, supply: 9415, mixBase: 208.15, cbxBase: 25.07, miniGames: 19 },
			  { week: 46, supply: 9608, mixBase: 208.15, cbxBase: 25.07, miniGames: 19 },
			  { week: 47, supply: 9801, mixBase: 208.15, cbxBase: 25.07, miniGames: 19 },
			  { week: 48, supply: 9994, mixBase: 208.15, cbxBase: 25.07, miniGames: 19 },
			  { week: 49, supply: 10187, mixBase: 208.15, cbxBase: 25.07, miniGames: 19 },
			  { week: 50, supply: 10380, mixBase: 224.81, cbxBase: 26.82, miniGames: 19 },
			  { week: 51, supply: 10570, mixBase: 224.81, cbxBase: 26.82, miniGames: 19 },
			  { week: 52, supply: 10760, mixBase: 224.81, cbxBase: 26.82, miniGames: 19 },
			  { week: 53, supply: 10950, mixBase: 224.81, cbxBase: 26.82, miniGames: 19 },
			  { week: 54, supply: 11140, mixBase: 224.81, cbxBase: 26.82, miniGames: 19 },
			  { week: 55, supply: 11330, mixBase: 224.81, cbxBase: 26.82, miniGames: 19 },
			  { week: 56, supply: 11520, mixBase: 224.81, cbxBase: 26.82, miniGames: 19 },
			  { week: 57, supply: 11710, mixBase: 224.81, cbxBase: 26.82, miniGames: 19 },
			  { week: 58, supply: 11900, mixBase: 224.81, cbxBase: 26.82, miniGames: 19 },
			  { week: 59, supply: 12090, mixBase: 224.81, cbxBase: 26.82, miniGames: 19 },
			  { week: 60, supply: 12280, mixBase: 242.79, cbxBase: 28.70, miniGames: 19 }
		 ],
		 
		 
	pcg: [
			  { week: 40, supply: 4380, mixBase: 102.61, cbxBase: 8.98, miniGames: 10 },
			  { week: 41, supply: 4480, mixBase: 102.61, cbxBase: 9.61, miniGames: 10 },
			  { week: 42, supply: 4580, mixBase: 102.61, cbxBase: 9.61, miniGames: 10 },
			  { week: 43, supply: 4680, mixBase: 102.61, cbxBase: 9.61, miniGames: 10 },
			  { week: 44, supply: 4780, mixBase: 102.61, cbxBase: 9.61, miniGames: 10 },
			  { week: 45, supply: 4880, mixBase: 102.61, cbxBase: 9.61, miniGames: 10 },
			  { week: 46, supply: 4980, mixBase: 102.61, cbxBase: 9.61, miniGames: 10 },
			  { week: 47, supply: 5080, mixBase: 102.61, cbxBase: 9.61, miniGames: 10 },
			  { week: 48, supply: 5180, mixBase: 102.61, cbxBase: 9.61, miniGames: 10 },
			  { week: 49, supply: 5280, mixBase: 102.61, cbxBase: 9.61, miniGames: 10 },
			  { week: 50, supply: 5380, mixBase: 110.82, cbxBase: 10.28, miniGames: 10 },
			  { week: 51, supply: 5478, mixBase: 110.82, cbxBase: 10.28, miniGames: 10 },
			  { week: 52, supply: 5576, mixBase: 110.82, cbxBase: 10.28, miniGames: 10 },
			  { week: 53, supply: 5674, mixBase: 110.82, cbxBase: 10.28, miniGames: 10 },
			  { week: 54, supply: 5772, mixBase: 110.82, cbxBase: 10.28, miniGames: 10 },
			  { week: 55, supply: 5870, mixBase: 110.82, cbxBase: 10.28, miniGames: 10 },
			  { week: 56, supply: 5968, mixBase: 110.82, cbxBase: 10.28, miniGames: 10 },
			  { week: 57, supply: 6066, mixBase: 110.82, cbxBase: 10.28, miniGames: 10 },
			  { week: 58, supply: 6164, mixBase: 110.82, cbxBase: 10.28, miniGames: 10 },
			  { week: 59, supply: 6262, mixBase: 110.82, cbxBase: 10.28, miniGames: 10 },
			  { week: 60, supply: 6360, mixBase: 119.68, cbxBase: 11.00, miniGames: 10 }
		 ],
		 
	hgc: [
			  { week: 40, supply: 4620, mixBase: 247.83, cbxBase: 29.85, miniGames: 20 },
			  { week: 41, supply: 4725, mixBase: 247.83, cbxBase: 29.85, miniGames: 20 },
			  { week: 42, supply: 4830, mixBase: 247.83, cbxBase: 29.85, miniGames: 20 },
			  { week: 43, supply: 4935, mixBase: 247.83, cbxBase: 29.85, miniGames: 20 },
			  { week: 44, supply: 5040, mixBase: 247.83, cbxBase: 29.85, miniGames: 20 },
			  { week: 45, supply: 5145, mixBase: 247.83, cbxBase: 29.85, miniGames: 20 },
			  { week: 46, supply: 5250, mixBase: 247.83, cbxBase: 29.85, miniGames: 20 },
			  { week: 47, supply: 5355, mixBase: 247.83, cbxBase: 29.85, miniGames: 20 },
			  { week: 48, supply: 5460, mixBase: 247.83, cbxBase: 29.85, miniGames: 20 },
			  { week: 49, supply: 5565, mixBase: 247.83, cbxBase: 29.85, miniGames: 20 },
			  { week: 50, supply: 5670, mixBase: 267.65, cbxBase: 31.94, miniGames: 20 },
			  { week: 51, supply: 5774, mixBase: 267.65, cbxBase: 31.94, miniGames: 20 },
			  { week: 52, supply: 5878, mixBase: 267.65, cbxBase: 31.94, miniGames: 20 },
			  { week: 53, supply: 5982, mixBase: 267.65, cbxBase: 31.94, miniGames: 20 },
			  { week: 54, supply: 6086, mixBase: 267.65, cbxBase: 31.94, miniGames: 20 },
			  { week: 55, supply: 6190, mixBase: 267.65, cbxBase: 31.94, miniGames: 20 },
			  { week: 56, supply: 6294, mixBase: 267.65, cbxBase: 31.94, miniGames: 20 },
			  { week: 57, supply: 6398, mixBase: 267.65, cbxBase: 31.94, miniGames: 20 },
			  { week: 58, supply: 6502, mixBase: 267.65, cbxBase: 31.94, miniGames: 20 },
			  { week: 59, supply: 6606, mixBase: 267.65, cbxBase: 31.94, miniGames: 20 },
			  { week: 60, supply: 6710, mixBase: 289.07, cbxBase: 34.17, miniGames: 20 }
		],
	
	bs: [
			  { week: 40, supply: 3150, mixBase: 95.26, cbxBase: 8.92, miniGames: 7 },
			  { week: 41, supply: 3222, mixBase: 95.26, cbxBase: 8.92, miniGames: 7 },
			  { week: 42, supply: 3294, mixBase: 95.26, cbxBase: 8.92, miniGames: 7 },
			  { week: 43, supply: 3366, mixBase: 95.26, cbxBase: 8.92, miniGames: 7 },
			  { week: 44, supply: 3438, mixBase: 95.26, cbxBase: 8.92, miniGames: 7 },
			  { week: 45, supply: 3510, mixBase: 95.26, cbxBase: 8.92, miniGames: 7 },
			  { week: 46, supply: 3582, mixBase: 95.26, cbxBase: 8.92, miniGames: 7 },
			  { week: 47, supply: 3654, mixBase: 95.26, cbxBase: 8.92, miniGames: 7 },
			  { week: 48, supply: 3726, mixBase: 95.26, cbxBase: 8.92, miniGames: 7 },
			  { week: 49, supply: 3798, mixBase: 95.26, cbxBase: 8.92, miniGames: 7 },
			  { week: 50, supply: 3870, mixBase: 102.88, cbxBase: 9.55, miniGames: 7 },
			  { week: 51, supply: 3941, mixBase: 102.88, cbxBase: 9.55, miniGames: 7 },
			  { week: 52, supply: 4012, mixBase: 102.88, cbxBase: 9.55, miniGames: 7 },
			  { week: 53, supply: 4083, mixBase: 102.88, cbxBase: 9.55, miniGames: 7 },
			  { week: 54, supply: 4154, mixBase: 102.88, cbxBase: 9.55, miniGames: 7 },
			  { week: 55, supply: 4225, mixBase: 102.88, cbxBase: 9.55, miniGames: 7 },
			  { week: 56, supply: 4296, mixBase: 102.88, cbxBase: 9.55, miniGames: 7 },
			  { week: 57, supply: 4367, mixBase: 102.88, cbxBase: 9.55, miniGames: 7 },
			  { week: 58, supply: 4438, mixBase: 102.88, cbxBase: 9.55, miniGames: 7 },
			  { week: 59, supply: 4509, mixBase: 102.88, cbxBase: 9.55, miniGames: 7 },
			  { week: 60, supply: 4580, mixBase: 111.11, cbxBase: 10.22, miniGames: 7 }

		],
	
	ds: [
			  { week: 40, supply: 6020, mixBase: 75.92, cbxBase: 9.18, miniGames: 7 },
			  { week: 41, supply: 6157, mixBase: 75.92, cbxBase: 9.18, miniGames: 7 },
			  { week: 42, supply: 6294, mixBase: 75.92, cbxBase: 9.18, miniGames: 7 },
			  { week: 43, supply: 6431, mixBase: 75.92, cbxBase: 9.18, miniGames: 7 },
			  { week: 44, supply: 6568, mixBase: 75.92, cbxBase: 9.18, miniGames: 7 },
			  { week: 45, supply: 6705, mixBase: 75.92, cbxBase: 9.18, miniGames: 7 },
			  { week: 46, supply: 6842, mixBase: 75.92, cbxBase: 9.18, miniGames: 7 },
			  { week: 47, supply: 6979, mixBase: 75.92, cbxBase: 9.18, miniGames: 7 },
			  { week: 48, supply: 7116, mixBase: 75.92, cbxBase: 9.18, miniGames: 7 },
			  { week: 49, supply: 7253, mixBase: 75.92, cbxBase: 9.18, miniGames: 7 },
			  { week: 50, supply: 7390, mixBase: 81.99, cbxBase: 9.82, miniGames: 7 },
			  { week: 51, supply: 7525, mixBase: 81.99, cbxBase: 9.82, miniGames: 7 },
			  { week: 52, supply: 7660, mixBase: 81.99, cbxBase: 9.82, miniGames: 7 },
			  { week: 53, supply: 7795, mixBase: 81.99, cbxBase: 9.82, miniGames: 7 },
			  { week: 54, supply: 7930, mixBase: 81.99, cbxBase: 9.82, miniGames: 7 },
			  { week: 55, supply: 8065, mixBase: 81.99, cbxBase: 9.82, miniGames: 7 },
			  { week: 56, supply: 8200, mixBase: 81.99, cbxBase: 9.82, miniGames: 7 },
			  { week: 57, supply: 8335, mixBase: 81.99, cbxBase: 9.82, miniGames: 7 },
			  { week: 58, supply: 8470, mixBase: 81.99, cbxBase: 9.82, miniGames: 7 },
			  { week: 59, supply: 8605, mixBase: 81.99, cbxBase: 9.82, miniGames: 7 },
			  { week: 60, supply: 8740, mixBase: 88.55, cbxBase: 10.51, miniGames: 7 }

		],
		
	dor:[
			  { week: 40, supply: 5860, mixBase: 97.96, cbxBase: 9.18, miniGames: 13 },
			  { week: 41, supply: 5993, mixBase: 97.96, cbxBase: 9.18, miniGames: 13 },
			  { week: 42, supply: 6126, mixBase: 97.96, cbxBase: 9.18, miniGames: 13 },
			  { week: 43, supply: 6259, mixBase: 97.96, cbxBase: 9.18, miniGames: 13 },
			  { week: 44, supply: 6392, mixBase: 97.96, cbxBase: 9.18, miniGames: 13 },
			  { week: 45, supply: 6525, mixBase: 97.96, cbxBase: 9.18, miniGames: 13 },
			  { week: 46, supply: 6658, mixBase: 97.96, cbxBase: 9.18, miniGames: 13 },
			  { week: 47, supply: 6791, mixBase: 97.96, cbxBase: 9.18, miniGames: 13 },
			  { week: 48, supply: 6924, mixBase: 97.96, cbxBase: 9.18, miniGames: 13 },
			  { week: 49, supply: 7057, mixBase: 97.96, cbxBase: 9.18, miniGames: 13 },
			  { week: 50, supply: 7190, mixBase: 105.79, cbxBase: 9.82, miniGames: 13 },
			  { week: 51, supply: 7322, mixBase: 105.79, cbxBase: 9.82, miniGames: 13 },
			  { week: 52, supply: 7454, mixBase: 105.79, cbxBase: 9.82, miniGames: 13 },
			  { week: 53, supply: 7586, mixBase: 105.79, cbxBase: 9.82, miniGames: 13 },
			  { week: 54, supply: 7718, mixBase: 105.79, cbxBase: 9.82, miniGames: 13 },
			  { week: 55, supply: 7850, mixBase: 105.79, cbxBase: 9.82, miniGames: 13 },
			  { week: 56, supply: 7982, mixBase: 105.79, cbxBase: 9.82, miniGames: 13 },
			  { week: 57, supply: 8114, mixBase: 105.79, cbxBase: 9.82, miniGames: 13 },
			  { week: 58, supply: 8246, mixBase: 105.79, cbxBase: 9.82, miniGames: 13 },
			  { week: 59, supply: 8378, mixBase: 105.79, cbxBase: 9.82, miniGames: 13 },
			  { week: 60, supply: 8510, mixBase: 114.25, cbxBase: 10.51, miniGames: 13 }
		],
		
	egr:[
			  { week: 40, supply: 11860, mixBase: 79.59, cbxBase: 7.46, miniGames: 7 },
			  { week: 41, supply: 12130, mixBase: 79.59, cbxBase: 7.46, miniGames: 7 },
			  { week: 42, supply: 12400, mixBase: 79.59, cbxBase: 7.46, miniGames: 7 },
			  { week: 43, supply: 12670, mixBase: 79.59, cbxBase: 7.46, miniGames: 7 },
			  { week: 44, supply: 12940, mixBase: 79.59, cbxBase: 7.46, miniGames: 7 },
			  { week: 45, supply: 13210, mixBase: 79.59, cbxBase: 7.46, miniGames: 7 },
			  { week: 46, supply: 13480, mixBase: 79.59, cbxBase: 7.46, miniGames: 7 },
			  { week: 47, supply: 13750, mixBase: 79.59, cbxBase: 7.46, miniGames: 7 },
			  { week: 48, supply: 14020, mixBase: 79.59, cbxBase: 7.46, miniGames: 7 },
			  { week: 49, supply: 14290, mixBase: 79.59, cbxBase: 7.46, miniGames: 7 },
			  { week: 50, supply: 14560, mixBase: 85.96, cbxBase: 7.98, miniGames: 7 },
			  { week: 51, supply: 14826, mixBase: 85.96, cbxBase: 7.98, miniGames: 7 },
			  { week: 52, supply: 15092, mixBase: 85.96, cbxBase: 7.98, miniGames: 7 },
			  { week: 53, supply: 15358, mixBase: 85.96, cbxBase: 7.98, miniGames: 7 },
			  { week: 54, supply: 15624, mixBase: 85.96, cbxBase: 7.98, miniGames: 7 },
			  { week: 55, supply: 15890, mixBase: 85.96, cbxBase: 7.98, miniGames: 7 },
			  { week: 56, supply: 16156, mixBase: 85.96, cbxBase: 7.98, miniGames: 7 },
			  { week: 57, supply: 16422, mixBase: 85.96, cbxBase: 7.98, miniGames: 7 },
			  { week: 58, supply: 16688, mixBase: 85.96, cbxBase: 7.98, miniGames: 7 },
			  { week: 59, supply: 16954, mixBase: 85.96, cbxBase: 7.98, miniGames: 7 },
			  { week: 60, supply: 17220, mixBase: 92.83, cbxBase: 8.54, miniGames: 7 }
		
		],
		
	at: [
			  { week: 40, supply: 3310, mixBase: 408.15, cbxBase: 44.24, miniGames: 22 },
			  { week: 41, supply: 3385, mixBase: 408.15, cbxBase: 44.24, miniGames: 22 },
			  { week: 42, supply: 3460, mixBase: 408.15, cbxBase: 44.24, miniGames: 22 },
			  { week: 43, supply: 3535, mixBase: 408.15, cbxBase: 44.24, miniGames: 22 },
			  { week: 44, supply: 3610, mixBase: 408.15, cbxBase: 44.24, miniGames: 22 },
			  { week: 45, supply: 3685, mixBase: 408.15, cbxBase: 44.24, miniGames: 22 },
			  { week: 46, supply: 3760, mixBase: 408.15, cbxBase: 44.24, miniGames: 22 },
			  { week: 47, supply: 3835, mixBase: 408.15, cbxBase: 44.24, miniGames: 22 },
			  { week: 48, supply: 3910, mixBase: 408.15, cbxBase: 44.24, miniGames: 22 },
			  { week: 49, supply: 3985, mixBase: 408.15, cbxBase: 44.24, miniGames: 22 },
			  { week: 50, supply: 4060, mixBase: 440.80, cbxBase: 47.34, miniGames: 22 },
			  { week: 51, supply: 4134, mixBase: 440.80, cbxBase: 47.34, miniGames: 22 },
			  { week: 52, supply: 4208, mixBase: 440.80, cbxBase: 47.34, miniGames: 22 },
			  { week: 53, supply: 4282, mixBase: 440.80, cbxBase: 47.34, miniGames: 22 },
			  { week: 54, supply: 4356, mixBase: 440.80, cbxBase: 47.34, miniGames: 22 },
			  { week: 55, supply: 4430, mixBase: 440.80, cbxBase: 47.34, miniGames: 22 },
			  { week: 56, supply: 4504, mixBase: 440.80, cbxBase: 47.34, miniGames: 22 },
			  { week: 57, supply: 4578, mixBase: 440.80, cbxBase: 47.34, miniGames: 22 },
			  { week: 58, supply: 4652, mixBase: 440.80, cbxBase: 47.34, miniGames: 22 },
			  { week: 59, supply: 4726, mixBase: 440.80, cbxBase: 47.34, miniGames: 22 },
			  { week: 60, supply: 4800, mixBase: 476.06, cbxBase: 50.65, miniGames: 22 }
		],
		
	bt: [
			  { week: 40, supply: 6520, mixBase: 432.36, cbxBase: 46.86, miniGames: 22 },
			  { week: 41, supply: 6668, mixBase: 432.36, cbxBase: 46.86, miniGames: 22 },
			  { week: 42, supply: 6816, mixBase: 432.36, cbxBase: 46.86, miniGames: 22 },
			  { week: 43, supply: 6964, mixBase: 432.36, cbxBase: 46.86, miniGames: 22 },
			  { week: 44, supply: 7112, mixBase: 432.36, cbxBase: 46.86, miniGames: 22 },
			  { week: 45, supply: 7260, mixBase: 432.36, cbxBase: 46.86, miniGames: 22 },
			  { week: 46, supply: 7408, mixBase: 432.36, cbxBase: 46.86, miniGames: 22 },
			  { week: 47, supply: 7556, mixBase: 432.36, cbxBase: 46.86, miniGames: 22 },
			  { week: 48, supply: 7704, mixBase: 432.36, cbxBase: 46.86, miniGames: 22 },
			  { week: 49, supply: 7852, mixBase: 432.36, cbxBase: 46.86, miniGames: 22 },
			  { week: 50, supply: 8000, mixBase: 466.95, cbxBase: 50.14, miniGames: 22 },
			  { week: 51, supply: 8146, mixBase: 466.95, cbxBase: 50.14, miniGames: 22 },
			  { week: 52, supply: 8292, mixBase: 466.95, cbxBase: 50.14, miniGames: 22 },
			  { week: 53, supply: 8438, mixBase: 466.95, cbxBase: 50.14, miniGames: 22 },
			  { week: 54, supply: 8584, mixBase: 466.95, cbxBase: 50.14, miniGames: 22 },
			  { week: 55, supply: 8730, mixBase: 466.95, cbxBase: 50.14, miniGames: 22 },
			  { week: 56, supply: 8876, mixBase: 466.95, cbxBase: 50.14, miniGames: 22 },
			  { week: 57, supply: 9022, mixBase: 466.95, cbxBase: 50.14, miniGames: 22 },
			  { week: 58, supply: 9168, mixBase: 466.95, cbxBase: 50.14, miniGames: 22 },
			  { week: 59, supply: 9314, mixBase: 466.95, cbxBase: 50.14, miniGames: 22 },
			  { week: 60, supply: 9460, mixBase: 504.31, cbxBase: 53.65, miniGames: 22 }
			  
	
		],

	ort: [
			  { week: 40, supply: 5040, mixBase: 516.99, cbxBase: 56.04, miniGames: 28 },
			  { week: 41, supply: 5155, mixBase: 516.99, cbxBase: 56.04, miniGames: 28 },
			  { week: 42, supply: 5270, mixBase: 516.99, cbxBase: 56.04, miniGames: 28 },
			  { week: 43, supply: 5385, mixBase: 516.99, cbxBase: 56.04, miniGames: 28 },
			  { week: 44, supply: 5500, mixBase: 516.99, cbxBase: 56.04, miniGames: 28 },
			  { week: 45, supply: 5615, mixBase: 516.99, cbxBase: 56.04, miniGames: 28 },
			  { week: 46, supply: 5730, mixBase: 516.99, cbxBase: 56.04, miniGames: 28 },
			  { week: 47, supply: 5845, mixBase: 516.99, cbxBase: 56.04, miniGames: 28 },
			  { week: 48, supply: 5960, mixBase: 516.99, cbxBase: 56.04, miniGames: 28 },
			  { week: 49, supply: 6075, mixBase: 516.99, cbxBase: 56.04, miniGames: 28 },
			  { week: 50, supply: 6190, mixBase: 558.34, cbxBase: 59.96, miniGames: 28 },
			  { week: 51, supply: 6303, mixBase: 558.34, cbxBase: 59.96, miniGames: 28 },
			  { week: 52, supply: 6416, mixBase: 558.34, cbxBase: 59.96, miniGames: 28 },
			  { week: 53, supply: 6529, mixBase: 558.34, cbxBase: 59.96, miniGames: 28 },
			  { week: 54, supply: 6642, mixBase: 558.34, cbxBase: 59.96, miniGames: 28 },
			  { week: 55, supply: 6755, mixBase: 558.34, cbxBase: 59.96, miniGames: 28 },
			  { week: 56, supply: 6868, mixBase: 558.34, cbxBase: 59.96, miniGames: 28 },
			  { week: 57, supply: 6981, mixBase: 558.34, cbxBase: 59.96, miniGames: 28 },
			  { week: 58, supply: 7094, mixBase: 558.34, cbxBase: 59.96, miniGames: 28 },
			  { week: 59, supply: 7207, mixBase: 558.34, cbxBase: 59.96, miniGames: 28 },
			  { week: 60, supply: 7320, mixBase: 603.01, cbxBase: 64.16, miniGames: 28 }

		],		

	scl:[
			  { week: 40, supply: 15820, mixBase: 435.63, cbxBase: 47.22, miniGames: 36 },
			  { week: 41, supply: 16180, mixBase: 435.63, cbxBase: 47.22, miniGames: 36 },
			  { week: 42, supply: 16540, mixBase: 435.63, cbxBase: 47.22, miniGames: 36 },
			  { week: 43, supply: 16900, mixBase: 435.63, cbxBase: 47.22, miniGames: 36 },
			  { week: 44, supply: 17260, mixBase: 435.63, cbxBase: 47.22, miniGames: 36 },
			  { week: 45, supply: 17620, mixBase: 435.63, cbxBase: 47.22, miniGames: 36 },
			  { week: 46, supply: 17980, mixBase: 435.63, cbxBase: 47.22, miniGames: 36 },
			  { week: 47, supply: 18340, mixBase: 435.63, cbxBase: 47.22, miniGames: 36 },
			  { week: 48, supply: 18700, mixBase: 435.63, cbxBase: 47.22, miniGames: 36 },
			  { week: 49, supply: 19060, mixBase: 435.63, cbxBase: 47.22, miniGames: 36 },
			  { week: 50, supply: 19420, mixBase: 470.48, cbxBase: 50.52, miniGames: 36 },
			  { week: 51, supply: 19775, mixBase: 470.48, cbxBase: 50.52, miniGames: 36 },
			  { week: 52, supply: 20130, mixBase: 470.48, cbxBase: 50.52, miniGames: 36 },
			  { week: 53, supply: 20485, mixBase: 470.48, cbxBase: 50.52, miniGames: 36 },
			  { week: 54, supply: 20840, mixBase: 470.48, cbxBase: 50.52, miniGames: 36 },
			  { week: 55, supply: 21195, mixBase: 470.48, cbxBase: 50.52, miniGames: 36 },
			  { week: 56, supply: 21550, mixBase: 470.48, cbxBase: 50.52, miniGames: 36 },
			  { week: 57, supply: 21905, mixBase: 470.48, cbxBase: 50.52, miniGames: 36 },
			  { week: 58, supply: 22260, mixBase: 470.48, cbxBase: 50.52, miniGames: 36 },
			  { week: 59, supply: 22615, mixBase: 470.48, cbxBase: 50.52, miniGames: 36 },
			  { week: 60, supply: 22970, mixBase: 508.12, cbxBase: 54.06, miniGames: 36 }	
			  

		],
	
		
	ocl:	[
			  { week: 40, supply: 22750, mixBase: 952.34, cbxBase: 114.69, miniGames: 47 },
			  { week: 41, supply: 23267, mixBase: 952.34, cbxBase: 114.69, miniGames: 47 },
			  { week: 42, supply: 23784, mixBase: 952.34, cbxBase: 114.69, miniGames: 47 },
			  { week: 43, supply: 24301, mixBase: 952.34, cbxBase: 114.69, miniGames: 47 },
			  { week: 44, supply: 24818, mixBase: 952.34, cbxBase: 114.69, miniGames: 47 },
			  { week: 45, supply: 25335, mixBase: 952.34, cbxBase: 114.69, miniGames: 47 },
			  { week: 46, supply: 25852, mixBase: 952.34, cbxBase: 114.69, miniGames: 47 },
			  { week: 47, supply: 26369, mixBase: 952.34, cbxBase: 114.69, miniGames: 47 },
			  { week: 48, supply: 26886, mixBase: 952.34, cbxBase: 114.69, miniGames: 47 },
			  { week: 49, supply: 27403, mixBase: 952.34, cbxBase: 114.69, miniGames: 47 },
			  { week: 50, supply: 27920, mixBase: 1028.53, cbxBase: 122.72, miniGames: 47 },
			  { week: 51, supply: 28431, mixBase: 1028.53, cbxBase: 122.72, miniGames: 47 },
			  { week: 52, supply: 28942, mixBase: 1028.53, cbxBase: 122.72, miniGames: 47 },
			  { week: 53, supply: 29453, mixBase: 1028.53, cbxBase: 122.72, miniGames: 47 },
			  { week: 54, supply: 29964, mixBase: 1028.53, cbxBase: 122.72, miniGames: 47 },
			  { week: 55, supply: 30475, mixBase: 1028.53, cbxBase: 122.72, miniGames: 47 },
			  { week: 56, supply: 30986, mixBase: 1028.53, cbxBase: 122.72, miniGames: 47 },
			  { week: 57, supply: 31497, mixBase: 1028.53, cbxBase: 122.72, miniGames: 47 },
			  { week: 58, supply: 32008, mixBase: 1028.53, cbxBase: 122.72, miniGames: 47 },
			  { week: 59, supply: 32519, mixBase: 1028.53, cbxBase: 122.72, miniGames: 47 },
			  { week: 60, supply: 33030, mixBase: 1110.81, cbxBase: 131.31, miniGames: 47 }
		],
		
	fcl:[
			  { week: 40, supply: 5180, mixBase: 7618.74, cbxBase: 524.32, miniGames: 75 },
			  { week: 41, supply: 5298, mixBase: 7618.74, cbxBase: 524.32, miniGames: 75 },
			  { week: 42, supply: 5416, mixBase: 7618.74, cbxBase: 524.32, miniGames: 75 },
			  { week: 43, supply: 5534, mixBase: 7618.74, cbxBase: 524.32, miniGames: 75 },
			  { week: 44, supply: 5652, mixBase: 7618.74, cbxBase: 524.32, miniGames: 75 },
			  { week: 45, supply: 5770, mixBase: 7618.74, cbxBase: 524.32, miniGames: 75 },
			  { week: 46, supply: 5888, mixBase: 7618.74, cbxBase: 524.32, miniGames: 75 },
			  { week: 47, supply: 6006, mixBase: 7618.74, cbxBase: 524.32, miniGames: 75 },
			  { week: 48, supply: 6124, mixBase: 7618.74, cbxBase: 524.32, miniGames: 75 },
			  { week: 49, supply: 6242, mixBase: 7618.74, cbxBase: 524.32, miniGames: 75 },
			  { week: 50, supply: 6360, mixBase: 8228.24, cbxBase: 561.02, miniGames: 75 },
			  { week: 51, supply: 6476, mixBase: 8228.24, cbxBase: 561.02, miniGames: 75 },
			  { week: 52, supply: 6592, mixBase: 8228.24, cbxBase: 561.02, miniGames: 75 },
			  { week: 53, supply: 6708, mixBase: 8228.24, cbxBase: 561.02, miniGames: 75 },
			  { week: 54, supply: 6824, mixBase: 8228.24, cbxBase: 561.02, miniGames: 75 },
			  { week: 55, supply: 6940, mixBase: 8228.24, cbxBase: 561.02, miniGames: 75 },
			  { week: 56, supply: 7056, mixBase: 8228.24, cbxBase: 561.02, miniGames: 75 },
			  { week: 57, supply: 7172, mixBase: 8228.24, cbxBase: 561.02, miniGames: 75 },
			  { week: 58, supply: 7288, mixBase: 8228.24, cbxBase: 561.02, miniGames: 75 },
			  { week: 59, supply: 7404, mixBase: 8228.24, cbxBase: 561.02, miniGames: 75 },
			  { week: 60, supply: 7520, mixBase: 8886.50, cbxBase: 600.29, miniGames: 75 }
		],
		
	sw: [
			  { week: 40, supply: 4250, mixBase: 489.78, cbxBase: 58.99, miniGames: 25 },
			  { week: 41, supply: 4347, mixBase: 489.78, cbxBase: 58.99, miniGames: 25 },
			  { week: 42, supply: 4444, mixBase: 489.78, cbxBase: 58.99, miniGames: 25 },
			  { week: 43, supply: 4541, mixBase: 489.78, cbxBase: 58.99, miniGames: 25 },
			  { week: 44, supply: 4638, mixBase: 489.78, cbxBase: 58.99, miniGames: 25 },
			  { week: 45, supply: 4735, mixBase: 489.78, cbxBase: 58.99, miniGames: 25 },
			  { week: 46, supply: 4832, mixBase: 489.78, cbxBase: 58.99, miniGames: 25 },
			  { week: 47, supply: 4929, mixBase: 489.78, cbxBase: 58.99, miniGames: 25 },
			  { week: 48, supply: 5026, mixBase: 489.78, cbxBase: 58.99, miniGames: 25 },
			  { week: 49, supply: 5123, mixBase: 489.78, cbxBase: 58.99, miniGames: 25 },
			  { week: 50, supply: 5220, mixBase: 528.96, cbxBase: 63.11, miniGames: 25 },
			  { week: 51, supply: 5315, mixBase: 528.96, cbxBase: 63.11, miniGames: 25 },
			  { week: 52, supply: 5410, mixBase: 528.96, cbxBase: 63.11, miniGames: 25 },
			  { week: 53, supply: 5505, mixBase: 528.96, cbxBase: 63.11, miniGames: 25 },
			  { week: 54, supply: 5600, mixBase: 528.96, cbxBase: 63.11, miniGames: 25 },
			  { week: 55, supply: 5695, mixBase: 528.96, cbxBase: 63.11, miniGames: 25 },
			  { week: 56, supply: 5790, mixBase: 528.96, cbxBase: 63.11, miniGames: 25 },
			  { week: 57, supply: 5885, mixBase: 528.96, cbxBase: 63.11, miniGames: 25 },
			  { week: 58, supply: 5980, mixBase: 528.96, cbxBase: 63.11, miniGames: 25 },
			  { week: 59, supply: 6075, mixBase: 528.96, cbxBase: 63.11, miniGames: 25 },
			  { week: 60, supply: 6170, mixBase: 571.27, cbxBase: 67.53, miniGames: 25 }  

		],
		
	well: [
			  { week: 40, supply: 6480, mixBase: 1360.49, cbxBase: 163.85, miniGames: 67 },
			  { week: 41, supply: 6627, mixBase: 1360.49, cbxBase: 163.85, miniGames: 67 },
			  { week: 42, supply: 6774, mixBase: 1360.49, cbxBase: 163.85, miniGames: 67 },
			  { week: 43, supply: 6921, mixBase: 1360.49, cbxBase: 163.85, miniGames: 67 },
			  { week: 44, supply: 7068, mixBase: 1360.49, cbxBase: 163.85, miniGames: 67 },
			  { week: 45, supply: 7215, mixBase: 1360.49, cbxBase: 163.85, miniGames: 67 },
			  { week: 46, supply: 7362, mixBase: 1360.49, cbxBase: 163.85, miniGames: 67 },
			  { week: 47, supply: 7509, mixBase: 1360.49, cbxBase: 163.85, miniGames: 67 },
			  { week: 48, supply: 7656, mixBase: 1360.49, cbxBase: 163.85, miniGames: 67 },
			  { week: 49, supply: 7803, mixBase: 1360.49, cbxBase: 163.85, miniGames: 67 },
			  { week: 50, supply: 7950, mixBase: 1469.33, cbxBase: 175.32, miniGames: 67 },
			  { week: 51, supply: 8095, mixBase: 1469.33, cbxBase: 175.32, miniGames: 67 },
			  { week: 52, supply: 8240, mixBase: 1469.33, cbxBase: 175.32, miniGames: 67 },
			  { week: 53, supply: 8385, mixBase: 1469.33, cbxBase: 175.32, miniGames: 67 },
			  { week: 54, supply: 8530, mixBase: 1469.33, cbxBase: 175.32, miniGames: 67 },
			  { week: 55, supply: 8675, mixBase: 1469.33, cbxBase: 175.32, miniGames: 67 },
			  { week: 56, supply: 8820, mixBase: 1469.33, cbxBase: 175.32, miniGames: 67 },
			  { week: 57, supply: 8965, mixBase: 1469.33, cbxBase: 175.32, miniGames: 67 },
			  { week: 58, supply: 9110, mixBase: 1469.33, cbxBase: 175.32, miniGames: 67 },
			  { week: 59, supply: 9255, mixBase: 1469.33, cbxBase: 175.32, miniGames: 67 },
			  { week: 60, supply: 9400, mixBase: 1586.87, cbxBase: 187.59, miniGames: 67 }
		  ],
		  
	lake:[
			  { week: 40, supply: 3690, mixBase: 3428.43, cbxBase: 235.94, miniGames: 84 },
			  { week: 41, supply: 3774, mixBase: 3428.43, cbxBase: 235.94, miniGames: 84 },
			  { week: 42, supply: 3858, mixBase: 3428.43, cbxBase: 235.94, miniGames: 84 },
			  { week: 43, supply: 3942, mixBase: 3428.43, cbxBase: 235.94, miniGames: 84 },
			  { week: 44, supply: 4026, mixBase: 3428.43, cbxBase: 235.94, miniGames: 84 },
			  { week: 45, supply: 4110, mixBase: 3428.43, cbxBase: 235.94, miniGames: 84 },
			  { week: 46, supply: 4194, mixBase: 3428.43, cbxBase: 235.94, miniGames: 84 },
			  { week: 47, supply: 4278, mixBase: 3428.43, cbxBase: 235.94, miniGames: 84 },
			  { week: 48, supply: 4362, mixBase: 3428.43, cbxBase: 235.94, miniGames: 84 },
			  { week: 49, supply: 4446, mixBase: 3428.43, cbxBase: 235.94, miniGames: 84 },
			  { week: 50, supply: 4530, mixBase: 3702.71, cbxBase: 252.46, miniGames: 84 },
			  { week: 51, supply: 4613, mixBase: 3702.71, cbxBase: 252.46, miniGames: 84 },
			  { week: 52, supply: 4696, mixBase: 3702.71, cbxBase: 252.46, miniGames: 84 },
			  { week: 53, supply: 4779, mixBase: 3702.71, cbxBase: 252.46, miniGames: 84 },
			  { week: 54, supply: 4862, mixBase: 3702.71, cbxBase: 252.46, miniGames: 84 },
			  { week: 55, supply: 4945, mixBase: 3702.71, cbxBase: 252.46, miniGames: 84 },
			  { week: 56, supply: 5028, mixBase: 3702.71, cbxBase: 252.46, miniGames: 84 },
			  { week: 57, supply: 5111, mixBase: 3702.71, cbxBase: 252.46, miniGames: 84 },
			  { week: 58, supply: 5194, mixBase: 3702.71, cbxBase: 252.46, miniGames: 84 },
			  { week: 59, supply: 5277, mixBase: 3702.71, cbxBase: 252.46, miniGames: 84 },
			  { week: 60, supply: 5360, mixBase: 3998.92, cbxBase: 270.13, miniGames: 84 }
		 ],
		 
	spw:[
			  { week: 40, supply: 2880, mixBase: 1224.44, cbxBase: 147.46, miniGames: 25 },
			  { week: 41, supply: 2945, mixBase: 1224.44, cbxBase: 147.46, miniGames: 25 },
			  { week: 42, supply: 3010, mixBase: 1224.44, cbxBase: 147.46, miniGames: 25 },
			  { week: 43, supply: 3075, mixBase: 1224.44, cbxBase: 147.46, miniGames: 25 },
			  { week: 44, supply: 3140, mixBase: 1224.44, cbxBase: 147.46, miniGames: 25 },
			  { week: 45, supply: 3205, mixBase: 1224.44, cbxBase: 147.46, miniGames: 25 },
			  { week: 46, supply: 3270, mixBase: 1224.44, cbxBase: 147.46, miniGames: 25 },
			  { week: 47, supply: 3335, mixBase: 1224.44, cbxBase: 147.46, miniGames: 25 },
			  { week: 48, supply: 3400, mixBase: 1224.44, cbxBase: 147.46, miniGames: 25 },
			  { week: 49, supply: 3465, mixBase: 1224.44, cbxBase: 147.46, miniGames: 25 },
			  { week: 50, supply: 3530, mixBase: 1322.40, cbxBase: 157.79, miniGames: 25 },
			  { week: 51, supply: 3594, mixBase: 1322.40, cbxBase: 157.79, miniGames: 25 },
			  { week: 52, supply: 3658, mixBase: 1322.40, cbxBase: 157.79, miniGames: 25 },
			  { week: 53, supply: 3722, mixBase: 1322.40, cbxBase: 157.79, miniGames: 25 },
			  { week: 54, supply: 3786, mixBase: 1322.40, cbxBase: 157.79, miniGames: 25 },
			  { week: 55, supply: 3850, mixBase: 1322.40, cbxBase: 157.79, miniGames: 25 },
			  { week: 56, supply: 3914, mixBase: 1322.40, cbxBase: 157.79, miniGames: 25 },
			  { week: 57, supply: 3978, mixBase: 1322.40, cbxBase: 157.79, miniGames: 25 },
			  { week: 58, supply: 4042, mixBase: 1322.40, cbxBase: 157.79, miniGames: 25 },
			  { week: 59, supply: 4106, mixBase: 1322.40, cbxBase: 157.79, miniGames: 25 },
			  { week: 60, supply: 4170, mixBase: 1428.19, cbxBase: 168.83, miniGames: 25 }
		],	 
		 
	wtw: [
			  { week: 40, supply: 1020, mixBase: 9523.42, cbxBase: 655.40, miniGames: 100 },
			  { week: 41, supply: 1043, mixBase: 9523.42, cbxBase: 655.40, miniGames: 100 },
			  { week: 42, supply: 1066, mixBase: 9523.42, cbxBase: 655.40, miniGames: 100 },
			  { week: 43, supply: 1089, mixBase: 9523.42, cbxBase: 655.40, miniGames: 100 },
			  { week: 44, supply: 1112, mixBase: 9523.42, cbxBase: 655.40, miniGames: 100 },
			  { week: 45, supply: 1135, mixBase: 9523.42, cbxBase: 655.40, miniGames: 100 },
			  { week: 46, supply: 1158, mixBase: 9523.42, cbxBase: 655.40, miniGames: 100 },
			  { week: 47, supply: 1181, mixBase: 9523.42, cbxBase: 655.40, miniGames: 100 },
			  { week: 48, supply: 1204, mixBase: 9523.42, cbxBase: 655.40, miniGames: 100 },
			  { week: 49, supply: 1227, mixBase: 9523.42, cbxBase: 655.40, miniGames: 100 },
			  { week: 50, supply: 1250, mixBase: 10285.30, cbxBase: 701.28, miniGames: 100 },
			  { week: 51, supply: 1273, mixBase: 10285.30, cbxBase: 701.28, miniGames: 100 },
			  { week: 52, supply: 1296, mixBase: 10285.30, cbxBase: 701.28, miniGames: 100 },
			  { week: 53, supply: 1319, mixBase: 10285.30, cbxBase: 701.28, miniGames: 100 },
			  { week: 54, supply: 1342, mixBase: 10285.30, cbxBase: 701.28, miniGames: 100 },
			  { week: 55, supply: 1365, mixBase: 10285.30, cbxBase: 701.28, miniGames: 100 },
			  { week: 56, supply: 1388, mixBase: 10285.30, cbxBase: 701.28, miniGames: 100 },
			  { week: 57, supply: 1411, mixBase: 10285.30, cbxBase: 701.28, miniGames: 100 },
			  { week: 58, supply: 1434, mixBase: 10285.30, cbxBase: 701.28, miniGames: 100 },
			  { week: 59, supply: 1457, mixBase: 10285.30, cbxBase: 701.28, miniGames: 100 },
			  { week: 60, supply: 1480, mixBase: 11108.12, cbxBase: 750.37, miniGames: 100 }
		 ],
		 
	fm: [
			  { week: 40, supply: 160, mixBase: 24760.90, cbxBase: 1704.03, miniGames: 117 },
			  { week: 41, supply: 164, mixBase: 24760.90, cbxBase: 1704.03, miniGames: 117 },
			  { week: 42, supply: 168, mixBase: 24760.90, cbxBase: 1704.03, miniGames: 117 },
			  { week: 43, supply: 172, mixBase: 24760.90, cbxBase: 1704.03, miniGames: 117 },
			  { week: 44, supply: 176, mixBase: 24760.90, cbxBase: 1704.03, miniGames: 117 },
			  { week: 45, supply: 180, mixBase: 24760.90, cbxBase: 1704.03, miniGames: 117 },
			  { week: 46, supply: 184, mixBase: 24760.90, cbxBase: 1704.03, miniGames: 117 },
			  { week: 47, supply: 188, mixBase: 24760.90, cbxBase: 1704.03, miniGames: 117 },
			  { week: 48, supply: 192, mixBase: 24760.90, cbxBase: 1704.03, miniGames: 117 },
			  { week: 49, supply: 196, mixBase: 24760.90, cbxBase: 1704.03, miniGames: 117 },
			  { week: 50, supply: 200, mixBase: 26741.77, cbxBase: 1823.32, miniGames: 117 },
			  { week: 51, supply: 204, mixBase: 26741.77, cbxBase: 1823.32, miniGames: 117 },
			  { week: 52, supply: 208, mixBase: 26741.77, cbxBase: 1823.32, miniGames: 117 },
			  { week: 53, supply: 212, mixBase: 26741.77, cbxBase: 1823.32, miniGames: 117 },
			  { week: 54, supply: 216, mixBase: 26741.77, cbxBase: 1823.32, miniGames: 117 },
			  { week: 55, supply: 220, mixBase: 26741.77, cbxBase: 1823.32, miniGames: 117 },
			  { week: 56, supply: 224, mixBase: 26741.77, cbxBase: 1823.32, miniGames: 117 },
			  { week: 57, supply: 228, mixBase: 26741.77, cbxBase: 1823.32, miniGames: 117 },
			  { week: 58, supply: 232, mixBase: 26741.77, cbxBase: 1823.32, miniGames: 117 },
			  { week: 59, supply: 236, mixBase: 26741.77, cbxBase: 1823.32, miniGames: 117 },
			  { week: 60, supply: 240, mixBase: 28881.11, cbxBase: 1950.95, miniGames: 117 }
		]
}
