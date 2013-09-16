/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-cart' : '&#xe000;',
			'icon-cart-2' : '&#xe001;',
			'icon-paragraph-justify' : '&#xe002;',
			'icon-print' : '&#xe003;',
			'icon-barcode' : '&#xe004;',
			'icon-menu' : '&#xe005;',
			'icon-contrast' : '&#xe006;',
			'icon-search' : '&#xe007;',
			'icon-arrow-left' : '&#xf060;',
			'icon-arrow-right' : '&#xf061;',
			'icon-file' : '&#xe008;',
			'icon-qrcode' : '&#xf275;',
			'icon-barcode-2' : '&#xf276;',
			'icon-envelope' : '&#xf003;',
			'icon-time' : '&#xf017;',
			'icon-phone' : '&#xf095;',
			'icon-map-marker' : '&#xf041;',
			'icon-chevron-up' : '&#xf077;',
			'icon-chevron-down' : '&#xf078;',
			'icon-circle-blank' : '&#xf10c;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};