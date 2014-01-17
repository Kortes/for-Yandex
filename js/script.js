(function ($) {
    $(document).ready(function() {

        // функция перевода числа в 26-ричную систему счисления типа a..z
        function to26radix(x) {
            var y = x.toString(26);
            var z = '';
            for (var i = 0; i < y.length; i++) {
                var c = y[i].charCodeAt(0);
                var m = (i == y.length - 1) ? 49 : 48;
                var n = (c > 96) ? (c + 10) : (c + m);
                z += String.fromCharCode(n);
            }
            return z;
        }

        // функция вывода массава в виде списка в указанный селектор
        function withResults(str, arrow){
            $(str).html('<ul class="b-list"></ul>');

            for (var i = 0; i < arrow.length; i++){
                $(str).find('.b-list').append('<li class="b-list__item">'+arrow[i]+'</li>');
            }
        }

        var classes = ['b-statcounter','b-statcounter__metrika','b-statcounter__metrika_type_js','i-bem','b-search__table','b-form-input','b-form-input_theme_grey','b-form-input_size_l','i-bem','b-form-input__input','b-search__button','b-form-button__content','b-form-button__text','b-form-button__input','i-bem','b-main-menu','b-main-menu__tab','b-main-menu__tab','b-main-menu__tab','b-main-menu__tab','b-main-menu__tab_type_selected','b-main-menu__tab','b-main-menu__tab_type_selected','l-page__right','b-static-text','b-static-text','b-foot__layout-column','b-foot__layout-column_type_left','b-link','b-foot__link','b-foot__layout-column','b-foot__layout-column','b-foot__layout-column_type_center','b-link','b-foot__link','b-foot__layout-column','b-foot__layout-column_type_penultima','b-link','b-foot__link','b-foot__layout-column','b-foot__layout-column_type_right','b-copyright__link','b-foot__layout-gap-i'];
        var classes_unique = {};
        var sorted = [];

        //вывод начальных значений
        withResults('.b-source', classes);

        // объект уникальных строк
        for (var i = 0; i < classes.length; i++) {
            if (classes[i] in classes_unique) {
                classes_unique[classes[i]]++;
            } else {
                classes_unique[classes[i]] = 1;
            }
        }

        // создание отсортированного по убыванию массива на основе объекта уникальных строк
        for (var i in classes_unique) {
            sorted.push([i, classes_unique[i]]);
        }
        sorted.sort(function(x,y){ return y[1] - x[1]; });


        // замена изначальных классов на соответсвующие в заданной системе счисления
        for (var i = 0; i < sorted.length; i++) {
            for(var j = 0; j < classes.length; j++){
                if(sorted[i][0] == classes[j]){
                    classes[j] = to26radix(i);
                }
            }
        }

        // вывод результата
        withResults('.b-result', classes);

    });

})(jQuery);

