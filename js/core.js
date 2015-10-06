
jQuery(document).ready(function () {
$('#send').on('click', function(){ 
		$('.error').fadeOut('slow');

		var error = false; 

		var firstname = $('input#firstname').val();
		if(firstname == "" || firstname == " ") {
			$('#err-name').fadeIn('slow');
			error = true; 
		}

		var companyname = $('input#companyname').val();
		if(companyname == "" || companyname == " ") {
			$('#err-company').fadeIn('slow'); 
			error = true;
		}

		var email_compare = /^([a-z0-9_.-]+)@([da-z.-]+).([a-z.]{2,6})$/; 
		var email = $('input#email').val(); 
		if (email == "" || email == " ") {
			$('#err-email').fadeIn('slow');
			error = true;
		}else if (!email_compare.test(email)) {
			$('#err-emailvld').fadeIn('slow'); 
			error = true;
		}
		
		var phone = $('input#phone').val(); 
		if(phone == "" || phone == " ") {
			$('#err-phone').fadeIn('slow'); 
			error = true;
		}
		
		var themessage = $('textarea#themessage').val(); 
		if(themessage == "" || themessage == " ") {
			$('#err-themessage').fadeIn('slow'); 
			error = true;
		}


		if(error == true) {
			$('#err-form').slideDown('slow');
			return false;
		}

		var data_string = $('#contact_form').serialize(); 

		$.ajax({
			type: "POST",
			url: $('#contact_form').attr('action'),
			data: data_string,
			timeout: 6000,
			error: function(request,error) {
				if (error == "timeout") {
					$('#err-timedout').slideDown('slow');
				}
				else {
					$('#err-state').slideDown('slow');
					$("#err-state").html('An error occurred: ' + error + '');
				}
			},
			success: function() {
				$('#contact_form').slideUp('slow');
				$('.success').slideDown('slow');
			}
		});

		return false; 
	}); 
});