$(document).ready(function(){

	// Contact form code
  $('form.login').submit(function (e) {
		// return false so form submits through jQuery rather than reloading page.
		if(e.preventDefault) e.preventDefault();
		else e.returnValue = false;

			var thisForm 		= $(this).closest('.login-form'),
				error 			= 0,
				originalError 	= thisForm.attr('original-error'),
				loadingSpinner;
			if (typeof originalError !== typeof undefined && originalError !== false) {
				thisForm.find('.form-error').text(originalError);
			}

			$(thisForm).find('.validate-required').each(function(){
				if($(this).val() === ''){
					$(this).addClass('field-error');
					error = 1;
				}else{
					$(this).removeClass('field-error');
				}
			});
			
			if (error === 1){
      	$(this).closest('.email-form').find('.form-error').fadeIn(200);
			}else {

			// Hide the error if one was shown
			$(this).closest('.email-form').find('.form-error').fadeOut(200);
			// Create a new loading spinner while hiding the submit button.
			loadingSpinner = $('<div />').addClass('form-loading').insertAfter($(thisForm).find('input[type="submit"]'));
			$(thisForm).find('input[type="submit"]').hide();

			jQuery.ajax({
      	type: "POST",
        url: "mail/mail.php",
        data: thisForm.serialize(),
        success: function (response) {
					// Swiftmailer always sends back a number representing numner of emails sent.
					// If this is numeric (not Swift Mailer error text) AND greater than 0 then show success message.
					$(thisForm).find('.form-loading').remove();
					$(thisForm).find('input[type="submit"]').show();
					if($.isNumeric(response)){
						if(parseInt(response) > 0){
							thisForm.find('.form-success').fadeIn(1000);
							thisForm.find('.form-error').fadeOut(1000);
							setTimeout(function(){ thisForm.find('.form-success').fadeOut(500); }, 5000);
						}
					}
					// If error text was returned, put the text in the .form-error div and show it.
					else{
						// Keep the current error text in a data attribute on the form
						thisForm.find('.form-error').attr('original-error', thisForm.find('.form-error').text());
						// Show the error with the returned error text.
						thisForm.find('.form-error').text(response).fadeIn(1000);
						thisForm.find('.form-success').fadeOut(1000);
					}
				},
        error: function (errorObject, errorText, errorHTTP) {
	        // Keep the current error text in a data attribute on the form
					thisForm.find('.form-error').attr('original-error', thisForm.find('.form-error').text());
					// Show the error with the returned error text.
					thisForm.find('.form-error').text(errorHTTP).fadeIn(1000);
					thisForm.find('.form-success').fadeOut(1000);
	        $(thisForm).find('.form-loading').remove();
					$(thisForm).find('input[type="submit"]').show();
        }
			});

			$(".name").html( "" );
			$(".email").html( "" );
			$(".message").html( "" );

    }
		return false;
  });
});
