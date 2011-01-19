(function ($)
{
	$(document).ready( function()
	{
		$(".sticky-header").remove();
		
		$("th a").add(".pager a").click( function(e)
		{
			$("#problem-archive-search-form").attr("action", $(this).attr("href") );
			
			$("#problem-archive-search-form").submit();
			
			e.preventDefault();
		});
	});
	
})(jQuery);
