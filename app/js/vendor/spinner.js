(function( $ ) {
    $.fn.spinner = function(options) {

        var settings = $.extend({
            min: 1,
            max: false,
            onUp: function() {},
            onDown: function() {},
            onBlur: function() {},
            onChange: function() {}
        }, options);

		this.keyup(function () {     
			this.value = this.value.replace(/[^1-9]/g,'');
		});
		
        return this.each(function() {
            var $this = $(this);
			
            var spinnerUp = function() {
                var count = $this.val()/1;
                var max = getMax();

                count = (max && count > max) ? max : count+1;
                setValue(count);

                visualBtn();
                settings.onUp($this);
                settings.onChange($this);
            };

            var spinnerDown = function() {
                var count = $this.val()/1;
                count = count > settings.min ? count-1 : settings.min;
                setValue(count);

                visualBtn();
                settings.onDown($this);
                settings.onChange($this);
            };

            var spinnerBlur = function() {
                var count = $this.val()/1;
                var max = getMax();

                count = (max && count >= max) ? max : count;
                setValue(count);

                visualBtn();
                settings.onBlur($this);
                settings.onChange($this);
            };

            var visualBtn = function() {
                var count = $this.val()/1;
                var max = getMax();

                if (max && count >= max) {
                    btnUp.attr('disabled', 'disabled');
                } else {
                    btnUp.removeAttr('disabled');
                }

                if (count == settings.min) {
                    btnDown.attr('disabled', 'disabled');
                } else {
                    btnDown.removeAttr('disabled');
                }
            };

            var getMax = function() {
                return $this.data('spinner')/1 || settings.max;
            };

            var setValue = function(value) {
                $this.val(value);
            }

            var btnUp = $('<button type="button">').addClass('btn spinner-up').html('<i class="icon-chevron-up"></i>').on('click', spinnerUp);
            var btnDown = $('<button type="button">').addClass('btn spinner-down').html('<i class="icon-chevron-down"></i>').on('click', spinnerDown);
            var btnGroup = $('<div>').addClass('btn-group btn-group-vertical btn-group-spinner').append(btnUp, btnDown);

            if ($this.next().hasClass('btn-group-spinner')) {
                $this.next().remove();
                $this.on('blur', spinnerBlur).after(btnGroup);
            } else {
                $this.on('blur', spinnerBlur).wrap('<div class="spinner-div" />').after(btnGroup);
            }

            visualBtn();
        });

    };
})( jQuery );
