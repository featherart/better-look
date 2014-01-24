'use strict';

/* Controllers */
var histoApp = angular.module('histoApp', []);
histoApp.controller('NodeCtrl', function($scope) { 
    $scope.nodes = [ 
      { name: 'node1',
        number: '1234'}, 
      { name: 'node2',
        number : '1432'}, 
      { name: 'node3',
        number : '999'}, 
      { name: 'node4',
        number : '111'},
      { name: 'node5',
        number : '888'},  
      ];
  });

histoApp.controller('DistCtrl', function($scope) { 
    $scope.distributions = [ 
      { name: 'file1',
        node:  'node8'}, 
      { name: 'file5',
        node: 'node8'}, 
      { name: 'file6',
        node: 'node4'}   
      ];
  });

histoApp.controller('FileCtrl', function($scope) {
    $scope.files = [
      { name: 'file1',
        number : 25 }, 
      { name: 'file2',
        number : 252 },
      { name: 'file3',
        number : 525}, 
      { name: 'file4',
        number : 111 }
    ];
});
      
// 'file1' : 'node8', 'file5' : 'node8', 'file6' : 'node4', 'file10' : 'node6', 'file2' : 'node10', 'file4' : 'node9', 'file7' : 'node7', 'file9' : 'node2', 'file11' : 'node1',
  

