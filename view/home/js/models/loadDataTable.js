$(document).ready(function(){

  var model = getQuerystring("model");

  if (model == "A"){
      var dataSet =[
        [1, "Best Accuracy", "Naive Bayes",	"Bernoulli",	0.7,	0.8,	0.7],
        [2, "Best Accuracy", "KNN",	"K:7 weight:uniform metric: minkowski algorithm:auto",	0.7,	0.933333333333,	0.7],
        [3, "Best Accuracy", "KNN", 	"K:8 weight:uniform metric: minkowski algorithm:auto", 0.68, 1.0, 0.65],
        [4, "Best Recall", "SVC", "Kernel Linear", 0.7, 1.0, 0.67],
        [5, "Best Precision", "SVC", "Kernel Sigmoid", 0.76, 0.933333333333, 0.84],
        [6, "Best Precision", "KNN",	"K:9 weight:uniform metric: minkowski algorithm:auto",	0.7,	0.8, 0.82],
        [7, "Best Precision", "NuSVC",	"Kernel Linear",	0.7,	0.766666666667,	0.7]
      ];

      $(".title").html("Selected Models for A Superfice Sector");
  }

  if (model == "B"){
      var dataSet =[
        [1, "Best Accuracy", "AdaBoost",	"Estimators:10 Algorithm:SAMME",	0.8333333333333333,	1.0, 0.78],
        [2, "Best Accuracy", "AdaBoost",	"Estimators:50 Algorithm:SAMME",	0.8,	1.0,	0.7],
        [3, "Best Accuracy", "AdaBoost",	"Estimators:50 Algorithm:SAMME.R",	0.8,	1.0,	0.7],
        [4, "Best Accuracy", "Random Forest",	"Estimators:50 Algorithm:Gini",	0.8,	1.0,	0.7333333333333333],
        [5, "Best Recall", "KNN",	"K:6 weight:uniform metric: minkowski algorithm:auto",	0.8333333333333333,	1.0,	0.7333333333333333],
        [6, "Best Recall", "KNN",	"K:8 weight:uniform metric: minkowski algorithm:auto",	0.75,	1.0, 0.7333333333333333],
        [7, "Best Precision", "KNN",	"K:6 weight:uniform metric: minkowski algorithm:auto",	0.8333333333333333,	1.0,	0.7333333333333333],
        [8, "Best Precision", "KNN",	"K:6 weight:uniform metric: euclidean algorithm:auto",	0.8,	1.0,	0.8],
        [9, "Best Precision", "KNN",	"K:6 weight:uniform metric: minkowski algorithm:ball_tree",	0.75,	1.0,	0.8]
      ];

      $(".title").html("Selected Models for B Superfice Sector");
  }

  if (model == "C"){

    var dataSet =[
      [1, "Best Accuracy", "KNN",	"K:6 weight:uniform metric: minkowski algorithm:auto",	0.8888888888888888,	1.0,	0.8],
      [2, "Best Accuracy", "KNN",	"K:6 weight:uniform metric: euclidean algorithm:auto",	0.8055555555555555,	1.0,	0.78],
      [3, "Best Accuracy", "KNN",	"K:1 weight:uniform metric: euclidean algorithm:auto",	0.7777777777777777,	0.8,	0.89],
      [4, "Best Recall", "KNN",	"K:6 weight:uniform metric: minkowski algorithm:auto",	0.8888888888888888,	1.0,	0.8],
      [5, "Best Precision", "KNN",	"K:6 weight:uniform metric: euclidean algorithm:auto",	0.8055555555555555,	1.0,	0.78],
      [6, "Best Precision", "KNN",	"K:1 weight:uniform metric: euclidean algorithm:auto",	0.8055555555555555,	0.933333333333, 0.6666666666666666],
      [7, "Best Precision", "KNN",	"K:6 weight:uniform metric: minkowski algorithm:auto",	0.8888888888888888,	1.0,	0.8]
    ];

    $(".title").html("Selected Models for C Superfice Sector");
  }

  if (model == "F"){

    var dataSet =[
      [1, "Best Accuracy", "NuSVC",	"Kernel Linear",	0.7222222222222222,	1.0,	0.7222222222222222],
      [2, "Best Accuracy", "AdaBoost",	"Estimators:10 Algorithm:SAMME",	0.69,	0.87, 0.7],
      [3, "Best Recall", "NuSVC",	"Kernel Linear",	0.7222222222222222,	1.0,	0.7222222222222222],
      [4, "Best Recall", "NuSVC",	"Kernel RBF", 0.69, 0.87, 0.7],
      [5, "Best Precision", "NuSVC", "Kernel Linear", 0.7222222222222222, 1.0, 0.7222222222222222],
      [6, "Best Precision", "AdaBoost",	"Estimators:10 Algorithm:SAMME",	0.69,	0.87, 0.7],
      [7, "Best Precision", "Random Forest",	"Estimators:10 Algorithm:Gini",	0.6388888888888888,	0.6666666666666666,	0.7222222222222222]
    ];

    $(".title").html("Selected Models for F Superfice Sector");
  }

  if (model == "H"){

    var dataSet =[
      [1, "Best Accuracy", "KNN",	"K:3 weight:uniform metric: euclidean algorithm:auto",	0.86,	1.0,	0.85],
      [2, "Best Accuracy", "KNN",	"K:3 weight:uniform metric: minkowski algorithm:ball_tree",	0.7833333333333333,	1.0,	0.7],
      [3, "Best Accuracy", "NuSVC",	"Kernel Sigmoid",	0.8,	1.0, 0.76],
      [4, "Best Recall", "KNN",	"K:3 weight:uniform metric: euclidean algorithm:auto",	0.86,	1.0,	0.85],
      [5, "Best Recall", "KNN",	"K:3 weight:uniform metric: minkowski algorithm:ball_tree",	0.7833333333333333,	1.0,	0.7],
      [6, "Best Precision", "KNN",	"K:3 weight:uniform metric: euclidean algorithm:brute",	0.7833333333333333,	1.0,	0.7],
      [7, "Best Precision", "KNN",	"K:3 weight:uniform metric: minkowski algorithm:brute",	0.7833333333333333,	1.0,	0.7]

    ];

    $(".title").html("Selected Models for H Superfice Sector");
  }

  if (model == "M"){

    var dataSet =[
      [1, "Best Accuracy", "KNN",	"K:5 weight:uniform metric: minkowski algorithm:ball_tree",	0.8,	0.78,	0.7],
      [2, "Best Accuracy", "KNN",	"K:5 weight:uniform metric: euclidean algorithm:brute",	0.7833333333333333,	0.933333333333,	0.8],
      [3, "Best Accuracy", "KNN",	"K:5 weight:uniform metric: minkowski algorithm:brute",	0.7,	0.4,	0.8],
      [4, "Best Recall", "MLP",	"Activation: identity, solver: sgd, learning_rate: invscaling, levels:10-5-15",	0.7833333333333333,	1.0,	0.7],
      [5, "Best Recall", "MLP",	"Activation: logistic, solver: sgd, learning_rate: invscaling, levels: 10-5-10",	0.68,	1.0,	0.68],
      [6, "Best Recall", "MLP",	"Activation: relu, solver: sgd, learning_rate: invscaling, levels: 5-10-10",	0.75,	1.0,	0.74],
      [7, "Best Precision", "NuSVC",	"Kernel Poly",	0.7833333333333333,	0.8,	0.7],
      [8, "Best Precision", "NuSVC",	"Kernel RBF",	0.7833333333333333,	0.8,	0.7],
      [9, "Best Precision", "SVC",	"Kernel Poly",	0.7833333333333333,	0.8,	0.7]
    ];

    $(".title").html("Selected Models for M Superfice Sector");
  }

  if (model == "N"){

    var dataSet =[
      [1, "Best Accuracy", "Naive Bayes",	"Bernoulli",	1.0,	1.0,	1.0],
      [2, "Best Accuracy", "Naive Bayes",	"Gaussian",	1.0,	1.0,	1.0],
      [3, "Best Accuracy", "Random Forest",	"Estimators:10 Algorithm:Gini",	1.0,	1.0,	1.0],
      [4, "Best Recall", "Random Forest",	"Estimators:10 Algorithm:Gini",	1.0,	1.0,	1.0],
      [5, "Best Recall", "Random Forest",	"Estimators:20 Algorithm:Gini",	1.0,	1.0,	1.0],
      [6, "Best Recall", "Random Forest",	"Estimators:30 Algorithm:Gini",	1.0,	1.0,	1.0],
      [7, "Best Precision", "Random Forest",	"Estimators:10 Algorithm:Gini",	1.0,	1.0,1.0],
      [8, "Best Precision", "Random Forest",	"Estimators:20 Algorithm:Gini",	1.0,	1.0,	1.0],
      [9, "Best Precision", "Random Forest",	"Estimators:30 Algorithm:Gini",	1.0,	1.0,	1.0]
    ];

    $(".title").html("Selected Models for N Superfice Sector");
  }

  if (model == "O"){

    var dataSet =[
      [1, "Best Accuracy", "KNN",	"K:3 weight:uniform metric: euclidean algorithm:auto",	0.7833333333333333,	0.87,	0.78],
      [2, "Best Accuracy", "KNN",	"K:3 weight:uniform metric: minkowski algorithm:ball_tree",	0.76,	0.78,	0.67],
      [3, "Best Accuracy", "KNN",	"K:3 weight:uniform metric: euclidean algorithm:brute",	0.71,	0.933333333333,	0.67],
      [4, "Best Recall", "KNN",	"K:3 weight:uniform metric: minkowski algorithm:brute",	0.76,	0.78,	0.67],
      [5, "Best Recall", "Naive Bayes",	"Gaussian",	0.73,	1.0,	0.67],
      [6, "Best Recall", "KNN",	"K:3 weight:uniform metric: euclidean algorithm:auto",	0.7833333333333333,	0.87, 0.78],
      [7, "Best Precision", "KNN",	"K:3 weight:uniform metric: minkowski algorithm:ball_tree",	0.76,	0.78, 0.67],
      [8, "Best Precision", "KNN",	"K:3 weight:uniform metric: euclidean algorithm:brute",	0.71,	0.933333333333,	0.67],
      [9, "Best Precision", "Naive Bayes",	"Gaussian",	0.73,	1.0,	0.67]
    ];

    $(".title").html("Selected Models for O Superfice Sector");
  }

  if (model == "P"){

    var dataSet =[
      [1, "Best Accuracy", "Naive Bayes",	"Gaussian",	0.7666666666666666,	0.766666666667,	0.83],
      [2, "Best Accuracy", "Random Forest",	"Estimators:20 Algorithm:Gini",	0.7166666666666667,	0.8333333333333334,	0.7999999999999999],
      [3, "Best Accuracy", "Random Forest", "Estimators:50 Algorithm:Gini",	0.7166666666666667,	0.8333333333333334,	0.7999999999999999],
      [4, "Best Accuracy", "Random Forest",	"Estimators:20 Algorithm:Entropy",	0.7166666666666667,	0.8333333333333334,	0.7999999999999999],
      [5, "Best Recall", "Naive Bayes",	"Bernoulli",	0.73,	1.0,	0.71],
      [6, "Best Recall", "Random Forest",	"Estimators:20 Algorithm:Gini",	0.7166666666666667,	0.8333333333333334,	0.7999999999999999],
      [7, "Best Recall", "Random Forest",	"Estimators:50 Algorithm:Gini",	0.7166666666666667,	0.8333333333333334,	0.7999999999999999],
      [8, "Best Recall", "Random Forest",	"Estimators:20 Algorithm:Entropy",	0.7166666666666667,	0.8333333333333334,	0.7999999999999999],
      [9, "Best Precision", "Naive Bayes",	"Gaussian",	0.7666666666666666,	0.766666666667,	0.83],
      [10, "Best Precision", "Random Forest",	"Estimators:20 Algorithm:Gini",	0.7166666666666667,	0.8333333333333334,	0.7999999999999999],
      [11, "Best Precision", "Random Forest",	"Estimators:50 Algorithm:Gini",	0.7166666666666667,	0.8333333333333334,	0.7999999999999999],
      [12, "Best Precision", "Random Forest",	"Estimators:20 Algorithm:Entropy",	0.7166666666666667,	0.8333333333333334,	0.7999999999999999]
    ];

    $(".title").html("Selected Models for P Superfice Sector");
  }

  if (model == "R"){

    var dataSet =[
      [1, "Best Accuracy", "Naive Bayes",	"Bernoulli",	0.6575757575757576,	0.67,	0.68],
      [2, "Best Recall", "SVC",	"Kernel Linear",	0.6015151515151516,	1.0,	0.6666666666666666],
      [3, "Best Precision", "Naive Bayes",	"Bernoulli",	0.6575757575757576,	0.67,	0.68]
    ];

    $(".title").html("Selected Models for R Superfice Sector");
  }

  if (model == "T"){

    var dataSet =[
      [1, "Best Accuracy", "KNN",	"K:3 weight:uniform metric: euclidean algorithm:auto",	0.6944444444444445,	0.8333333333333334,	0.7222222222222222],
      [2, "Best Accuracy", "KNN",	"K:3 weight:uniform metric: minkowski algorithm:auto",	0.6944444444444445,	0.8333333333333334,	0.7222222222222222],
      [3, "Best Accuracy", "AdaBoost",	"Estimators:20 Algorithm:SAMME",	0.6388888888888888,	0.8333333333333334,	0.611111111111111],
      [4, "Best Accuracy", "AdaBoost",	"Estimators:100 Algorithm:SAMME",	0.6388888888888888,	0.8333333333333334,	0.611111111111111],
      [5, "Best Recall", "MLP",	 "Activation: logistic, solver: lbfgs, learning_rate: adaptive, levels: 10-5-5",	0.6666666666666666,	1.0,	0.5],
      [6, "Best Precision", "KNN",	"K:3 weight:uniform metric: euclidean algorithm:auto",	0.6944444444444445,	0.8333333333333334,	0.7222222222222222],
      [7, "Best Precision", "KNN",	"K:3 weight:uniform metric: minkowski algorithm:auto",	0.6944444444444445,	0.8333333333333334,	0.7222222222222222]
    ];

    $(".title").html("Selected Models for T Superfice Sector");
  }

  if (model == "U"){

    var dataSet =[
      [1, "Best Accuracy", "Decision Tree",	"Gain Function gin, Splitter: best",	1.0,	1.0,	1.0],
      [2, "Best Accuracy", "Decision Tree",	"Gain Function entropy, Splitter: best",	1.0,	1.0,	1.0],
      [3, "Best Recall", "Random Forest",	"Estimators:10 Algorithm:Gini",	1.0,	1.0,	1.0],
      [4, "Best Recall", "Random Forest",	"Estimators:20 Algorithm:Gini",	1.0,	1.0,	1.0],
      [5, "Best Recall", "Random Forest",	"Estimators:50 Algorithm:Gini",	1.0,	1.0,	1.0],
      [6, "Best Precision", "Random Forest",	"Estimators:10 Algorithm:Gini",	1.0,	1.0,	1.0],
      [7, "Best Precision", "Random Forest",	"Estimators:20 Algorithm:Gini",	1.0,	1.0,	1.0],
      [8, "Best Precision", "Random Forest",	"Estimators:50 Algorithm:Gini",	1.0,	1.0,	1.0]
    ];

    $(".title").html("Selected Models for U Superfice Sector");
  }
  if (model=="Z"){

    var dataSet =[
      [1, "Best Accuracy", "GradientBoostingClassifier",	"Iterations: 50",	0.7410714285714285,	0.766666666667,	0.8333333333333334],
      [2, "Best Accuracy", "GradientBoostingClassifier",	"Iterations: 150",	0.7410714285714285,	0.8333333333333334,	0.7222222222222222],
      [3, "Best Accuracy", "GradientBoostingClassifier",	"Iterations: 200",	0.7410714285714285,	0.8333333333333334,	0.7222222222222222],
      [4, "Best Recall", "MLP",	"Activation: relu, solver: sgd, learning_rate: invscaling, levels: 15-10-5",	0.6964285714285715,	1.0,	0.7333333333333333],
      [5, "Best Precision", "GradientBoostingClassifier",	"Iterations: 50",	0.7410714285714285,	0.766666666667,	0.8333333333333334]
    ];

    $(".title").html("Selected Models for Z Superfice Sector");
  }
  viewData(dataSet);
});

function getQuerystring(key, default_) {
	if (default_ == null)
		default_ = "";
	key = key.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
	var regex = new RegExp("[\\?&amp;]"+key+"=([^&amp;#]*)");
	var qs = regex.exec(window.location.href);
	if(qs == null)
		return default_;
	else
		return qs[1];
};


var viewData = function(dataSet){
  var dataSet = dataSet;

$('#example').DataTable( {
      data: dataSet,
      columns: [
          { title: "#" },
          {title: "Criterion Selected"},
          { title: "Algorithm" },
          { title: "Params" },
          { title: "Accuracy" },
          { title: "Precision" },
          { title: "Recall" },
      ]
  } );
}
