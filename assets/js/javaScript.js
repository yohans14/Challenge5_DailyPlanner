var loadTasks = function () {
	var today = moment().format("ddd MMMM Do YYYY, h:mm A");
	$("#currentDay").text(today);

	$(".time-block").each(function () {
		var workHour = parseInt($(this).attr("id"));
		var currentHour = moment().hour();

		if (workHour < currentHour) {
			$(this).addClass("past");
		} else if (workHour === currentHour) {
			$(this).addClass("present");
		} else {
			$(this).addClass("future");
		}
	});
	for (var i = 9; i < 18; i++) {
		$("#" + i + " .textarea").val(localStorage.getItem(i));
	}
};

//save btn was clicked
$(".saveBtn").click(function () {
	var workHour = $(this).parent().attr("id");
	var taskText = $(this).siblings(".textarea").val();

	if (taskText && workHour) {
		console.log(taskText, workHour);

		localStorage.setItem(workHour, taskText);
	}
});

loadTasks();

setInterval(function () {
	loadTasks();
}, 1000 * 60 * 5);
