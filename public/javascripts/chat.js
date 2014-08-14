function chatWindow(){
	$.get('/chats')
		.done(function(data){
			$('#chat').html(data);
			$('#chat').scrollTop($('#chat').prop("scrollHeight"));
		})
}

function clearMsg(){
	$('#msg').val('');
}

$(document).ready(function(){

	chatWindow();

	var timer = setInterval(chatWindow, 2000);

	$('#message').submit(function(e){
		e.preventDefault();
		var request = $.ajax({
			type: "POST",
			url: '/message',
			data: $('#message').serialize(),
			success: clearMsg()
		}).done(function(data){
			console.log(data);
		})
	});

})
