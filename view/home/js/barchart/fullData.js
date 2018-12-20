$(document).ready(function(){

  graphicAAMt();
  graphicAAWt();
  clinical();
  posType();
  resultAttribute();
  sector();
  shbondsM();
  shbondsW();
  sstruct();
});

var sstruct = function(){
  var data = [{
  values :[ 50.000000, 4.000000, 16.000000, 85.000000, 11.000000, 11.000000, 79.000000],
  labels : [ 'A', '3', 'B', 'E', 'I', 'H', 'L'],
  type: 'pie'
  }];
  var layout = {
  height: 400,
  width: 400,
  title: 'Sstruct'
  };
  Plotly.newPlot('Sstruct', data, layout);
}
var shbondsW = function(){

  var data = [{
  values :[ 49.000000, 17.000000, 190.000000],
  labels : [ 'S', 'U', 'N'],
  type: 'pie'
  }];
  var layout = {
  height: 400,
  width: 400,
  title: 'ShbondsW'
  };
    Plotly.newPlot('shbondsW', data, layout);
}

var shbondsM = function(){

  var data = [{
values :[ 37.000000, 23.000000, 196.000000],
labels : [ 'S', 'U', 'N'],
type: 'pie'
}];
var layout = {
height: 400,
width: 400,
title: 'ShbondsM'
};
Plotly.newPlot('shbondsM', data, layout);

}
var sector = function(){
  var data = [{
values :[ 20.000000, 10.000000, 11.000000, 11.000000, 7.000000, 18.000000, 39.000000, 4.000000, 13.000000, 58.000000, 8.000000, 11.000000, 46.000000],
labels : [ 'A', 'C', 'B', 'F', 'H', 'M', 'O', 'N', 'P', 'R', 'U', 'T', 'Z'],
type: 'pie'
}];
var layout = {
height: 400,
width: 400,
title: 'SectorSuperficie'
};
Plotly.newPlot('sector', data, layout);

}

var resultAttribute = function(){

  var data = [{
values :[ 24.000000, 23.000000, 47.000000, 11.000000, 76.000000, 14.000000, 61.000000],
labels : [ 'S', 'E', 'D', 'U', 'L', 'T', 'N'],
type: 'pie'
}];
var layout = {
height: 400,
width: 400,
title: 'Result'

};

Plotly.newPlot('result', data, layout);
}

var posType = function(){

  var data = [{
values :[ 120.000000, 9.000000, 20.000000, 98.000000, 9.000000],
labels : [ 'I', 'P', 'S', 'N', 'V'],
type: 'pie'
}];
var layout = {
height: 400,
width: 400,
title: 'Positiontype'
};
Plotly.newPlot('Positiontype', data, layout);

}
var clinical = function () {

  var data = [{
values :[ 135.000000, 121.000000],
labels : [ 'D', 'N'],
type: 'pie'
}];
var layout = {
  height: 400,
  width: 400,
title: 'Clinical'
};
Plotly.newPlot('clinical', data, layout);

}

var graphicAAMt = function(){
  var data = [{
values :[ 13.000000, 9.000000, 4.000000, 21.000000, 16.000000, 9.000000, 12.000000, 14.000000, 9.000000, 3.000000, 18.000000, 13.000000, 9.000000, 28.000000, 18.000000, 25.000000, 7.000000, 6.000000, 10.000000, 12.000000],
labels : [ 'A', 'C', 'E', 'D', 'G', 'F', 'I', 'H', 'K', 'M', 'L', 'N', 'Q', 'P', 'S', 'R', 'T', 'W', 'V', 'Y'],
type: 'pie'
}];
var layout = {
height: 400,
width: 400,
title: 'AAMt'
};
  Plotly.newPlot('graphicAAMt', data, layout);
}

var graphicAAWt = function (){

  var data = [{
values :[ 6.000000, 5.000000, 7.000000, 10.000000, 12.000000, 14.000000, 11.000000, 10.000000, 6.000000, 39.000000, 18.000000, 11.000000, 16.000000, 24.000000, 18.000000, 5.000000, 8.000000, 25.000000, 11.000000],
labels : [ 'A', 'C', 'E', 'D', 'G', 'F', 'I', 'H', 'K', 'L', 'N', 'Q', 'P', 'S', 'R', 'T', 'W', 'V', 'Y'],
type: 'pie'
}];
var layout = {
  height: 400,
  width: 400,
title: 'AAWt'
};
Plotly.newPlot('graphicAAWt', data, layout);
}
