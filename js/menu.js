
$(document).ready(function () {

	$('.secciones article').hide();
	$('.secciones article:first').show();
	$('.options__menu a:first').addClass('selected');
	//alert('funciona');


	$('.options__menu a').click(function () {
		$('.secciones article').hide();
		var activeTab = $(this).attr('href')
		$(activeTab).show();

		$('.options__menu a').removeClass('selected');
		$(this).addClass('selected');
		return false;
	});


});