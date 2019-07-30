$(function(){
	desingSelect();
	tabMenu();
});


function popOpen(obj){
	$(obj).show();
	$(obj).find('.dim').on('click', function(){
		$(obj).hide();
	});
}


function popClose(obj){
	$(obj).hide();
}

function desingSelect(){
	$('.select_type1 select').on('change', function(){
		var val = $('.select_type1 select option:selected').text();
		var obj = $(this).next('.design');

		obj.find('.placeholder').text(val);
		obj.addClass('selected');
	});	
}

 function tabMenu(){
	//tabType1
   $('.tab-menu a').on('click', function(){
	   var href= $(this).attr('href');
	   var siblings = $(this).parents('li').siblings('').find('a');
	   siblings.each(function(){
		   var h = $(this).attr('href');
		   $(this).parents('li').removeClass('on');
		   $(h).hide();
	   });
	   $(this).parents('li').addClass('on');
	   $(href).show();

	   return false;
   });
}