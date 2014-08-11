function chatWindow(){
	$.get('/chats')
		.done(function(data){
			$('#chat').html(data);
			$('#chat').scrollTop($('#chat').prop("scrollHeight"));
		})
}

$(document).ready(function(){

	var timer = setInterval(chatWindow, 2000);

	$('#message').submit(function(e){
		e.preventDefault();
		var request = $.ajax({
			type: "POST",
			url: '/message',
			data: $('#message').serialize(),
		}).done(function(data){
			console.log(data);
		})
	});

})
