
function go(){
axios.get('https://Toms-Flask-App.193ftgw.repl.co').then(resp => {
	data = resp.data;
   data2 = data.replace("[", "");
	 data3 = data2.replace("]", "");


	dataList = data3.split("},")
	//console.log(dataList)

	elements_List = []

	for (let i = 0; i < dataList.length; i++ )  {

		newElement = dataList[i].split(",")
		//onsole.log(newElement)
		elements_List.push(newElement)
		
	}
	
	name1 = document.getElementById("name1")
	num1 = getRandomInt(0,elements_List.length)
  name1.innerHTML = elements_List[num1][1]

	votes1 = document.getElementById("votes1")
votes1.innerHTML = elements_List[num1][4] 
	
name2 = document.getElementById("name2")
num2 = getRandomInt(0,elements_List.length)
	
	while (num2 == num1){
		num2 = getRandomInt(0,elements_List.length)
	}
	
	name2. innerHTML = elements_List[num2][1] 
	
	votes2 = document.getElementById("votes2")
votes2.innerHTML = elements_List[num2][4];

	
});
}

go(); 
var payload;

function doPostRequest() {

    //let payload = { name: 'SF21', year: '2022' };
	 var x = document.getElementById("myText").value;
	var z = document.getElementById("myYear").value;
	let y = {name: String(x), year: String(z), image : String(x) + ".jpg", votes: "0"};
	console.log(y)
	payload = y;

	//post

 axios.post('https://Toms-Flask-App.193ftgw.repl.co', payload);
    console.log(payload);
};




function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
};

function vote_One(){
	//console.log(elements_List)
	let name = document.getElementById("name1").innerHTML;
	n_2 = name.replace(/'/g, "")	
	n_3 = n_2.replace('name: ', "")
	n_4 = n_3.replace(" ", "")
	console.log(n_4)
	insert_payload = {name:String(n_3)}
	for (let e = 0; e < elements_List.length; e++){
		if (name == elements_List[e][1]){
			axios.post('https://Toms-Flask-App.193ftgw.repl.co/vote', insert_payload);
go();
		}
	}
};

function vote_Two(){
	let name = document.getElementById("name2").innerHTML;
n_2 = name.replace(/'/g, "")	
	n_3 = n_2.replace('name: ', "")
	n_4 = n_3.replace(" ", "")
	console.log(n_4)
	insert_payload = {name:String(n_3)}
	for (let e = 0; e < elements_List.length; e++){
		if (name == elements_List[e][1]){
			axios.post('https://Toms-Flask-App.193ftgw.repl.co/vote', insert_payload);
go();
		}
	}
	
};