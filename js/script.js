//</IBG>========================================================================================================
function ibg() {

	$.each($('.ibg'), function (index, val) {
		if ($(this).find('img').length > 0) {
			$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
		}
	});
}

ibg();
//</IBG>========================================================================================================

//<BURGER>========================================================================================================
$(function () {
	$('.icon-menu').click(function (event) {
		$('.icon-menu, .menu__body').toggleClass('active');
	});
	$('.body-menu__item_1').click(function (event) {
		$('.sing-up__body').toggleClass('_active');
	});
	$('.body-menu__item_2').click(function (event) {
		$('.sing-in__body').toggleClass('__active');
	});
	$('.block-items-1').click(function (event) {
		$('.item-items-block--active-1, .item-items-block-1, .block-items__bg-1').toggleClass('-active_1');
	});
	$('.block-items-2').click(function (event) {
		$('.item-items-block--active-2, .item-items-block-2, .block-items__bg-2').toggleClass('-active_2');
	});
	$('.block-items-3').click(function (event) {
		$('.item-items-block--active-3, .item-items-block-3, .block-items__bg-3').toggleClass('-active_3');
	});
	$('.block-items-4').click(function (event) {
		$('.item-items-block--active-4, .item-items-block-4, .block-items__bg-4').toggleClass('-active_4');
	});
});
//</BURGER>========================================================================================================

//<TABS>========================================================================================================
$(document).ready(function () {
	$('.tabs__link').click(function (e) {
		e.preventDefault();

		$('.tabs__link').removeClass('tabs__link-active');
		$('.block-tabs').removeClass('block-tabs-active');

		$(this).addClass('tabs__link-active');
		$($(this).attr('href')).addClass('block-tabs-active');
	});
});
//</TABS>========================================================================================================

//</СПОЙЛЕР>============================================================================================
$(document).ready(function () {
	$('.categories-portfolio__title>span').click(function (event) {
		if ($('.categories-portfolio').hasClass('one')) {
			$('.categories-portfolio__title>span').not($(this)).removeClass('active');
			$('.categories-portfolio__list').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
});


$(document).ready(function () {
	$('.tabs__link').click(function (event) {
		if ($('.tabs__items').hasClass('one')) {
			$('.tabs__link').not($(this)).removeClass('active');
			$('.tabs__text').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
});
//</СПОЙЛЕР>============================================================================================


//<КЛИК НА ЛЮБУЮ ОБЛАСТЬ>//</СПОЙЛЕР>============================================================================================
jQuery(function ($) {
	$(document).mouseup(function (e) { // событие клика по веб-документу
		var div = $(".sing-up__body"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
			&& div.has(e.target).length === 0) { // и не по его дочерним элементам
			div.removeClass("_active"); // скрываем его
		}
	});
	$(document).mouseup(function (e) { // событие клика по веб-документу
		var div = $(".sing-in__body"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
			&& div.has(e.target).length === 0) { // и не по его дочерним элементам
			div.removeClass("__active"); // скрываем его
		}
	});
});

document.documentElement.addEventListener("click", function (e) {
	if (!e.target.closest('.categories-portfolio__title')) {
		let categories = document.querySelector('.categories-portfolio__title>span');
		categories.classList.remove('active');
	}
})