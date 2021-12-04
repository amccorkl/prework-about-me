// When the factButton is clicked...
$("#factButton").on("click", function() {
	//typed in "Array after booFacts" and deleted the "s" from Facts
	var number = Math.floor((Math.random() * booFactArray.length)); 
	// typed in "Array after booFacts" and deleted the "s" from Facts
	$("#factText").text(booFactArray[number]) 
})


// This array holds all of our Boo facts. Deleted the "s" after Fact and added "Array" after Fact, 
//added quotation marks around each separate Fact, added periods to each sentence, deleted the British "u" in favorite
//not sure why on the website it takes 2 clicks to move to the next "fact"
var booFactArray = ["Boo is a pomeranian.", "Boo's best friend is another pomeranian named Buddy.", "Boo the Pomeranian was born on March 16, making him a Pisces.", "Boo's favorite food is grass.", "Boo has released two books."]


// When the textPink button is pressed...
$("#textPink").on("click", function() {
	//change funtext to pink, placed pink in quotes
	$("#funText").css("color", "pink")
})


// When the textOrange button is pressed...
$("#textOrange").on("click", function() {
	//indent, change funText to orange
	$("#funText").css("color", "orange")
})

// When the textGreen button is pressed...
$("#textGreen").on("click", function() {
	// Change funText to green
	$("#funText").css("color", "green")
})

// When the boxGrow button is clicked... 
//added quotes around click
$("#boxGrow").on("click", function() { 
	// Increase the size of the box
	//added the width and fast on the same line, not sure that matters
	$("#box").animate({height:"+=75px", width:"+=75px"}, "fast"); 
})

// When the boxShrink button is clicked...
//added quotes around click
$("#boxShrink").on("click", function() {
	// Decrease the size of the box
	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
})