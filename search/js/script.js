function search(){
	var search = document.getElementById('search').value.toLowerCase();
	var target = document.getElementById("list");
	var list = target.getElementsByTagName('li');
	for(var i=0; i < list.length; i++){
		var text = list[i].innerHTML;
		if(text.toLowerCase().indexOf(search) > -1){
			list[i].style.display = "";
		}else{
			list[i].style.display = "none";
		}
	}
}