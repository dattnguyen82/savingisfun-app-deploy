'use strict';

/* Controllers */
angular.module('savingisfun.controller.account', [])
.controller('accountController', function ($scope) {
   console.log("account");
   
   $scope.source = 10000.0;
   $scope.savings = 250.0;
   $scope.delta = 0;
   
   
   $scope.year_goal = { total: 5000.0, per: 0, width: '' };  
   $scope.current_goal = { total: 1000.0, per: 0, width: '' };
   
   
   $scope.new_current_goal = $scope.current_goal.total;
   $scope.new_year_goal = $scope.year_goal.total;
   
   $scope.history = [];
   $scope.phrases = ["Great!", "Keep it up!", "You rock!", "Excellent!", "You'll hit your goal in no time!", "Nice job!", "There's no stopping you!"];
   
   $scope.mini_goal_name = "";
   $scope.mini_goal_amount = 0;
   $scope.mini_goals = [];
   
   var calculate_goals = function()
   {
      $scope.year_goal.per = Math.min( ($scope.savings / $scope.year_goal.total) * 100, 100 );
      $scope.year_goal.width = String($scope.year_goal.per + '%');
      
      if ( $scope.year_goal.per >= 100)
      {
         //add_to_history("Yearly Goal Reached!", "You have saved ", $scope.year_goal.total, "", "'fa fa-money'"); 
      }
      
      $scope.current_goal.per = Math.min( ($scope.savings / $scope.current_goal.total) * 100, 100); 
      $scope.current_goal.width = String($scope.current_goal.per + '%');
      
      if ( $scope.current_goal.per >= 100)
      {
         //add_to_history("Current Goal Reached!", "You have saved ", $scope.year_goal.total, "", "'fa fa-money'"); 
      }
      
      var i = 0;
      for (i = 0; i<$scope.mini_goals.length; i++)
      {
         $scope.mini_goals[i].per = Math.min( ($scope.savings / $scope.mini_goals[i].goal) * 100, 100); 
         $scope.mini_goals[i].width = String($scope.mini_goals[i].per + '%');
         if ( $scope.mini_goals[i].per >= 100)
         {
             $scope.mini_goals[i].show_trophy = true;
             //add_to_history($scope.mini_goals[i].name +  " Mini Goal Reached!", "You have saved ", $scope.year_goal.total, "", "'fa fa-money'");  
         }
         
      }
   };
   
   var add_to_history = function(history_title, history_comment, history_delta, history_phrase, history_icon)
   {
      var timeline_class = "timeline-inverted";
      
      if ( $scope.history.length % 2 == 0 )
      {
         timeline_class = "";
      }
      
      $scope.history.push( { timestamp: Date.now(), 
                             title: history_title,
                             icon: "'fa fa-clock'", 
                             comment: history_comment, 
                             delta: history_delta, 
                             class: timeline_class, 
                             phrase: history_phrase } );
       
   };
   
   $scope.addToSavings = function(){
      var d = Math.min($scope.delta, $scope.source);    
      $scope.source -= d;
      $scope.savings += d;   
      
      calculate_goals();   
      
      var p = $scope.phrases[Math.floor((Math.random() * 6))];
      
      add_to_history("Fund Transfer","Deposited ", d, p, "'fa fa-money'");      
   };
   
   $scope.setNewCurrentGoal = function(){
      $scope.current_goal.total =  $scope.new_current_goal;
      
      calculate_goals();   
   };
   
   $scope.setNewYearGoal = function(){
      $scope.year_goal.total =  $scope.new_year_goal; 
      
      calculate_goals();   
   };
   
   $scope.addToMiniGoals = function(){
      var mini = {name: $scope.mini_goal_name, goal: $scope.mini_goal_amount, per: 0, width: "", show_trophy: false};
      
      $scope.mini_goals.push(mini);
      
      
      var p = $scope.phrases[Math.floor((Math.random() * 6))];
      
      add_to_history("Goal Added","Added a mini-goal of ", $scope.mini_goal_amount, p, "'fa fa-trophy'");
       
      calculate_goals();   
   };
   
   var init = function()
   {
      calculate_goals();
   };
   
   init();
   
});