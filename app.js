$("#home_button").click(function(o){$("html, body").animate({scrollTop:$("#title").offset().top},"slow"),o.stopPropagation()}),$("#about_button").click(function(o){$("html, body").animate({scrollTop:$("#about").offset().top},"slow"),o.stopPropagation()}),$("#projects_button").click(function(o){$("html, body").animate({scrollTop:$("#projects").offset().top},"slow"),o.stopPropagation()}),$("#contact_button").click(function(o){$("html, body").animate({scrollTop:$("#contact").offset().top},"slow"),o.stopPropagation()}),$("#button-hamburger").click(function(o){$("#buttons").hasClass("on")?($("#buttons").removeClass("on"),$("#buttons").addClass("off")):($("#buttons").removeClass("off"),$("#buttons").addClass("on"))});
var app=angular.module("projectsApp",[]);app.controller("projectsController",["$scope","$http",function(o,t){t.get("res/projects.json").then(function(t){o.projects=t.data.projects})}]);
$(window).scroll(function(){var n=$(window).scrollTop(),i=$(window).height(),o=i/2;n>3*o?$("#project-container").css("animation-play-state","running"):n>o&&$("#about-container").css("animation-play-state","running")});