/*dynamic width*/
		
jQuery(document).ready(function() {
	setTimeout(function() {
	
		$('.left').each(
			function()
			{
				$(this).jScrollPane(
					{
						showArrows: $(this).is('.arrow')
					}
				);
				var api = $(this).data('jsp');
				var throttleTimeout;
				$(window).bind(
					'resize',
					function()
					{
						if (!throttleTimeout) {
							throttleTimeout = setTimeout(
								function()
								{
									api.reinitialise();
									throttleTimeout = null;
								},
								50
							);
						}
					}
				);
			}
		)
	
	}, 5);
	
	setTimeout(function() {
	
	$('.middle').each(
		function()
		{
			$(this).jScrollPane(
				{
					showArrows: $(this).is('.arrow')
				}
			);
			var api = $(this).data('jsp');
			var throttleTimeout;
			$(window).bind(
				'resize',
				function()
				{
					if (!throttleTimeout) {
						throttleTimeout = setTimeout(
							function()
							{
								api.reinitialise();
								throttleTimeout = null;
							},
							50
						);
					}
				}
			);
		}
	)
	
	}, 5);
	
	setTimeout(function() {
	
	$('.right').each(
		function()
		{
			$(this).jScrollPane(
				{
					showArrows: $(this).is('.arrow')
				}
			);
			var api = $(this).data('jsp');
			var throttleTimeout;
			$(window).bind(
				'resize',
				function()
				{
					if (!throttleTimeout) {
						throttleTimeout = setTimeout(
							function()
							{
								api.reinitialise();
								throttleTimeout = null;
							},
							50
						);
					}
				}
			);
		}
	)
	
	}, 5);
	
	$('.top').height( $('.top').height() - 35 );
	/*$('.content').marginRight( $('.content').marginRight() + 2 );*/

});