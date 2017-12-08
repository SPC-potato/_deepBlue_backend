require('../static/style/index.styl');
require('jquery/dist/jquery.min');
require('bootstrap/dist/js/bootstrap.min');
require('bootstrap/dist/css/bootstrap.min.css');

$('#getData').click(function () {
    $.get(
        "http://localhost:3000/find", function (data, status) {
            data.forEach(function (item) {
                $('#dataWrap').append('<tr><td>' + item.name + '</td><td>' + item.price + '</td><td>' + item.price_unit + '</td></tr>')
            })
        }
    )
});