var date = {id: '00000000786833b147b2c8e3'};
function chatWindow(){
	$.get('/chats', date)
		.done(function(data){
			$.each(data, function(i, chat){
				$('#chat').append("<p>" + chat.username + " : " + chat.message + "</p>");
				date = {id: chat._id}
			})
			$('#chat').scrollTop($('#chat').prop("scrollHeight"));
			console.log(data);
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
