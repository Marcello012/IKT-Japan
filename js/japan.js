const sidebar = document.getElementById("mySidebar");
const main = document.getElementById("main");
const button = document.getElementById("button");

function openNav() {
	sidebar.style.width = "250px";
	main.style.marginLeft = "250px"; //turn off for mobile
	button.style.visibility = "hidden";
	button.style.opacity = "0";
	button.style.transition = "visibility 0s ease 0.5s, opacity 0.5s";
}
	
function closeNav() {
	sidebar.style.width = "0";
	main.style.marginLeft = "0"; //turn off for mobile
	button.style.opacity = button.style.visibility = "";
	button.style.transition = "visibility 0s ease 0s, opacity 0.5s";
}