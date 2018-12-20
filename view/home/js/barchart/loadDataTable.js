$(document).ready(function(){

  viewData();
});

var viewData = function(){
  var dataSet = [
    ["Positionaccept", 0.83, 0.91, 0.20, 0.04, 1.0, 0.14],
    ["ProteinPropens",	0.30,	0.3,	0.31,	0.09,	1.0,	-0.1],
    ["MOSST",	-0.49,	-0.5,	0.48,	0.23,	1.1,	-1.3],
    ["yDDG",	-1.08,	-0.85,	2.04,	4.16,	3.9,	-8.7],
    ["SaccW",	27.73,	16.3,	29.65,	879.42,	111.8,	0.0],
    ["Functional relevance function",	0.33,	0.25,	0.26,	0.07,	1.0,	0.0],
    ["SaccM",	31.86,	23.35,	31.34,	982.65,	128.5,	0.0]


  ];

$('#example').DataTable( {
      data: dataSet,
      columns: [
          { title: "Attribute" },
          { title: "Mean" },
          { title: "Median" },
          { title: "STD" },
          { title: "Variance" },
          { title: "Max" },
          { title: "Min" }
      ]
  } );
}
