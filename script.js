


axios.get('https://Toms-Flask-App.193ftgw.repl.co').then(resp => {

    console.log(resp.data);
});

var payload;

function doPostRequest() {

    //let payload = { name: 'SF21', year: '2022' };
	 var x = document.getElementById("myText").value;

	let y = {name: String(x), year: "2022", image : String(x) + ".jpg"};
	console.log(y)
	payload = y;

	//post

 axios.post('https://Toms-Flask-App.193ftgw.repl.co', payload);
    console.log(payload);
}

