var date = {id: 0};
function chatWindow(){
	$.get('/chats', date)
		.done(function(data){
			$.each(data, function(i, chat){
				$('#chat').append("<p>" + chat.username + " : " + chat.message + "</p>");
			})
			$('#chat').scrollTop($('#chat').prop("scrollHeight"));
		}, 'json')
}

function clearMsg(){
	$('#msg').val('');
}

$(document).ready(function(){

	chatWindow();

	var timer = setInterval(chatWindow, 2500);

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
