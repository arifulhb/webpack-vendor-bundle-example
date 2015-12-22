//require("font-awesome-webpack");

var custom_css = require('./resources/css/custom.css');


var cjs         = require('./resources/js/my-commonjs.js');

/* jquery */
$(document).ready(function(){

    $('.title').html('<h3>Webpack Starter Kit</h3>');
    $('.lead').html('Pre-configured <em>webpack.confg</em> file with necessary <em>module loaders</em>, ' +
        '<em>resolve</em>, <em>plugins</em> etc and ' +
        ' <strong>production ready</strong> configuration!');


    $('.message').html('<h3>'+cjs.sayTheWord()+'</h3>');


});

/* jquey.Inputmask */
$('.date').inputmask('99-99-9999');


/* bootstrap function */
$('#myTabs a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
});


/* lodash */
var arr =['one', 'tow', 'three'];

    console.log('lodash test');
    _.each(arr, function(n){
        console.log(n);
    });

/* moment */
var m = moment();
console.log(m.format());