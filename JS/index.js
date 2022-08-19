<script type="text/javascript">
require(['jquery'], function ($) {
    $(document).click(function (e) {
        e.stopPropagation();

        var target = $(e.target);

        if (target.parents('.header-location-inner').length || target.attr('class') == 'header-location-inner') {
            if ($('.location-block-button').is(':visible')) {
                window.location.href = getBaseURL() + 'storelocator';

                return;
            }

            if ($('.loader').is(':visible')) {
                return;
            }

            toggleDropdown();

            return;
        }

        if (!target.parents('.dropdown-store').length) {
            if (target.attr('class') == 'dropdown-store') {
                return;
            }

            $('.dropdown-store').hide();
            $('.header-location').addClass('radius');
            $('.arrow-down').show();
            $('.arrow-up').hide();
            $('.header-location-inner').attr('aria-expanded', 'false');
        }
    });

    $(document).on('keypress', function (e) {
        if (e.which == 13) {
            if ($('.header-location-inner').is(':focus')) {
                toggleDropdown();
            }
        }
    });

    function toggleDropdown() {
        if ($('.dropdown-store').is(':visible')) {
            $('.dropdown-store').hide();
            $('.header-location').addClass('radius');
            $('.arrow-down').show();
            $('.arrow-up').hide();
            $('.header-location-inner').attr('aria-expanded', 'false');
        } else {
            $('.dropdown-store').css('display', 'flex');
            $('.header-location').removeClass('radius');
            $('.arrow-down').hide();
            $('.arrow-up').show();
            $('.header-location-inner').attr('aria-expanded', 'true');
        }
    }
});
</script>

<script type="text/javascript">
require(['jquery'], function ($) {
    $(document).click(function (e) {
        e.stopPropagation();

        var target = $(e.target);

        if (target.parents('.header-location-inner').length || target.attr('class') == 'header-location-inner') {
            if ($('.location-block-button').is(':visible')) {
                window.location.href = getBaseURL() + 'storelocator';

                return;
            }

            if ($('.loader').is(':visible')) {
                return;
            }

            toggleDropdown();

            return;
        }

        if (!target.parents('.dropdown-store').length) {
            if (target.attr('class') == 'dropdown-store') {
                return;
            }

            $('.dropdown-store').hide();
            $('.header-location').addClass('radius');
            $('.arrow-down').show();
            $('.arrow-up').hide();
            $('.header-location-inner').attr('aria-expanded', 'false');
        }
    });

    $(document).on('keypress', function (e) {
        if (e.which == 13) {
            if ($('.header-location-inner').is(':focus')) {
                toggleDropdown();
            }
        }
    });

    function toggleDropdown() {
        if ($('.dropdown-store').is(':visible')) {
            $('.dropdown-store').hide();
            $('.header-location').addClass('radius');
            $('.arrow-down').show();
            $('.arrow-up').hide();
            $('.header-location-inner').attr('aria-expanded', 'false');
        } else {
            $('.dropdown-store').css('display', 'flex');
            $('.header-location').removeClass('radius');
            $('.arrow-down').hide();
            $('.arrow-up').show();
            $('.header-location-inner').attr('aria-expanded', 'true');
        }
    }
});
</script>