
axios.get('https://Toms-Flask-App.193ftgw.repl.co').then(resp => {
	data = resp.data;
   data2 = data.replace("[", "");
	 data3 = data2.replace("]", "");

	name1 = document.getElementById("name1")
	name1.innerHTML = data3
		
});

var payload;

function doPostRequest() {

    //let payload = { name: 'SF21', year: '2022' };
	 var x = document.getElementById("myText").value;
	var z = document.getElementById("myYear").value;
	let y = {name: String(x), year: String(z), image : String(x) + ".jpg"};
	console.log(y)
	payload = y;

	//post

 axios.post('https://Toms-Flask-App.193ftgw.repl.co', payload);
    console.log(payload);
}

