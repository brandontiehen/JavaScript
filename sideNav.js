/**
	* "SideNav" - Navigation Plugin
	* Developed by, Brandon Tiehen
	* NOTE: Edit your HTML classes or the classes/id's written in this script to match your needs.
	* CSS included in zip at github.com/brandontiehen
*/
function openNav(){
	document.getElementById("menu").style.width="285px";
	document.getElementById("menu").style.borderRight="1px solid #FFF";
	document.getElementById("blanket").style.width="100%";
	document.getElementById("blanket").style.opacity="1";
}
function closeNav(){
	document.getElementById("menu").style.width="0";
	document.getElementById("main").style.marginLeft="0";
	document.getElementById("blanket").style.width="0";
	document.getElementById("blanket").style.opacity="0";
	document.getElementById("menu").style.borderRight="none";
}