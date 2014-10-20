;(function ($) {
    $.fn.dynamicHandlers = function (type, handler) {

        var context = this;
        var dataTypeFilter = '[data-' + type + ']';
        $(context).filter(dataTypeFilter).add(dataTypeFilter, context).each(function (index, item) {
            var $element = $(item);
            var eventTypes = $element.data(type).split(' ');
            $.each(eventTypes, function (index, item) {
                $element.on(item, handler);
            });
        });

        return $(this);

    };

})(jQuery);