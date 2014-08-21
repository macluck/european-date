# AngularJS directive, making Angular Bootstrap datepicker european-friendly

[Angular Bootstrap's datepicker] (http://angular-ui.github.io/bootstrap/) is very useful directive. 
However, it has no support for dates in European format.
european-date fixes this problem by using MomentJs to parse the date in European format.

In order to install the directive, 
* run `bower install -save european-date`
* add `EuropeanDate` module to your app
* add `european-date` attribute to your datepicker

You are then good to go!
