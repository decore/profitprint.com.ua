$(document).ready(function () {
	$("[data-toggle='tooltip']").tooltip();
	
	$('.wizard').wizard();
	$('.wizard-actions .btn-prev').click(function(){
		$('#cart-wizard').wizard('previous','foo');
	});
	$('.wizard-actions .btn-next').click(function(){
		$('#cart-wizard').wizard('next','foo');
	});

	$('.spinner').spinner();

	$('[rel=href] button').click(function(event){
		$( $(this).data('target') ).modal('show');
		event.stopPropagation ? event.stopPropagation() : (event.cancelBubble=true);
	});
	$('[rel=href]').click(function(){
		location.href = $(this).data('href');
	});

	$('.checkbox-tabs label').click(function (e) {
		$(this).tab('show');
	});

	$('.compatibility').dotdotdot({
		height: '60px'
	});

	var favicon=new Favico();
	favicon.badge(1);
});