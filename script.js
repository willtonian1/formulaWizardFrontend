var load = 0
var load2 = 0

image1 = document.getElementById("image1")
image2 = document.getElementById("image2")


function go() {
    axios.get('https://team-willtonian1-formulawizardbackend-main-7puvzl3oma-wm.a.run.app/').then(resp => {
        data = resp.data;
        data2 = data.replace("[", "");
        data3 = data2.replace("]", "");

        dataList = data3.split("},")

        elements_List = []

        for (let i = 0; i < dataList.length; i++) {

            newElement = dataList[i].split(",")
                //onsole.log(newElement)
            elements_List.push(newElement)

        }



        name_html_1();

        // votes_html_1();

        image_src_1();

        //second inline


        name_html_2();

        //votes_html_2();

        image_src_2();

    });
};

go();
leaderboard();

var payload;

function doPostRequest() {

    //let payload = { name: 'SF21', year: '2022' };
    var x = document.getElementById("myText").value;
    var z = document.getElementById("myYear").value;
    let y = { name: String(x), year: String(z), image: String(x) + ".jpg", votes: "0" };
    console.log(y)
    payload = y;

    //post

    axios.post('https://team-willtonian1-formulawizardbackend-main-7puvzl3oma-wm.a.run.app/', payload);
    console.log(payload);
}; //entering cars

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
};

function vote_One() {

    //console.log(elements_List)
    let name = document.getElementById("image1").src;
    console.log(name)

    ayo = name.replace("https://www.f1draft.com/images2/", "")

    let name10 = ayo.replace(".jpg", "")
    insert_payload = { name: String(name10) }
    console.log(insert_payload)
    for (let e = 0; e < elements_List.length; e++) {

        ssstr1 = elements_List[e][3]

        ssstr2 = ssstr1.replace("image", "")
        ssstr3 = ssstr2.replace(/'/g, "")
        ssstr4 = ssstr3.replace(" : ", "")
        console.log(ssstr4)
        console.log(ayo)
        if (ayo == ssstr4) {
            axios.post('https://team-willtonian1-formulawizardbackend-main-7puvzl3oma-wm.a.run.app/vote', insert_payload);

            //reloading new content
            name_html_1();

            //votes_html_1();

            image_src_1();

            //second inline


            name_html_2();

            //votes_html_2();

            image_src_2();


        }
    }

};

function vote_Two() {



    let name = document.getElementById("image2").src;
    console.log(name)

    ayo = name.replace("https://www.f1draft.com/images2/", "")

    let name10 = ayo.replace(".jpg", "")
    insert_payload = { name: String(name10) }
    console.log(insert_payload)
    for (let e = 0; e < elements_List.length; e++) {

        ssstr1 = elements_List[e][3]

        ssstr2 = ssstr1.replace("image", "")
        ssstr3 = ssstr2.replace(/'/g, "")
        ssstr4 = ssstr3.replace(" : ", "")
        console.log(ssstr4)
        console.log(ayo)
        if (ayo == ssstr4) {
            axios.post('https://team-willtonian1-formulawizardbackend-main-7puvzl3oma-wm.a.run.app/vote', insert_payload);

            //reloading new content
            name_html_1();

            //votes_html_1();

            image_src_1();

            //second inline


            name_html_2();

            //votes_html_2();

            image_src_2();


        }
    }

};

var num1;

function name_html_1() {
    name1 = document.getElementById("name1")
    num1 = getRandomInt(0, elements_List.length)
    nom = elements_List[num1][1]
    nom2 = nom.replace("name", "")
    nom3 = nom2.replace(/'/g, "")
    nom4 = nom3.replace(" : ", "")
    name1.innerHTML = nom4
};

function name_html_2() {
    name2 = document.getElementById("name2")
    num2 = getRandomInt(0, elements_List.length)

    while (num2 == num1) {
        num2 = getRandomInt(0, elements_List.length)
    }

    nomm = elements_List[num2][1]
    nomm2 = nomm.replace("name", "")
    nomm3 = nomm2.replace(/'/g, "")
    nomm4 = nomm3.replace(" : ", "")
    name2.innerHTML = nomm4

};

function image_src_1() {
    image1 = document.getElementById("image1")
    sstr1 = elements_List[num1][3]
    sstr2 = sstr1.replace("image", "")
    sstr3 = sstr2.replace(/'/g, "")
    sstr4 = sstr3.replace(" : ", "")
    image1.src = "images2/" + sstr4

    image1.onload


};

function image_src_2() {
    image2 = document.getElementById("image2")
    str1 = elements_List[num2][3]
    str2 = str1.replace("image", "")
    str3 = str2.replace(/'/g, "")
    str4 = str3.replace(" : ", "")
    image2.src = "images2/" + str4
};

// function votes_html_1() {

//     votes1 = document.getElementById("votes1")

//     vote1 = elements_List[num1][4].replace("votes", "")
//     vote2 = vote1.replace(/'/g, "")
//     vote3 = vote2.replace(" : ", "")
//     vote4 = vote3.replace("}", "")
//     votes1.innerHTML = " Current Votes: " + vote4

// };

// function votes_html_2() {

//     votes2 = document.getElementById("votes2")
//     vote21 = elements_List[num2][4].replace("votes", "")
//     vote22 = vote21.replace(/'/g, "")
//     vote23 = vote22.replace(" : ", "")
//     votes24 = vote23.replace("}", "")
//     votes2.innerHTML = " Current Votes: " + votes24

// };


function images_sync() {
    load += 1
    console.log(load + ".........." + load2)
    if (load == load2) {


        image1.style.display = 'flex';
        image2.style.display = "flex";
        console.log("yo")

    } else {
        image1.style.display = 'none';
        image2.style.display = "none";
    }
}

function images_sync2() {
    load2 += 1
    console.log(load + ".........." + load2)

    if (load == load2) {


        image1.style.display = 'flex';
        image2.style.display = "flex";
        console.log("yo")

    } else {
        image1.style.display = 'none';
        image2.style.display = "none";
    }
}

//Leaderboard stuff
function leaderboard() {
    axios.get('https://team-willtonian1-formulawizardbackend-main-7puvzl3oma-wm.a.run.app/leaderboard').then(resp => {
        ldata = resp.data


        ldata2 = ldata.replace("[", "");
        ldata3 = ldata2.replace("]", "");


        ldata4 = ldata3.replace(/}/g, '.')
        ldata5 = ldata4.replace(/{/g, "")
        ldataList = ldata5.split(".")

        lelements_List = []

        for (let i = 0; i < ldataList.length; i++) {

            lnewElement = ldataList[i].split(",")
                //onsole.log(newElement)
            lelements_List.push(lnewElement)

        }





        //leaderboard_space = document.getElementById("leader");
        //leaderboard_space.innerHTML = String(lelements_List);

        //leaderboard_html();
        five();
    })

}

function remove_string(strings) {
    strings2 = strings.replace("'name': ", "")
    strings3 = strings2.replace(/'/g, "")
    return strings3

}

function remove_votes(votes) {
    votes2 = votes.replace(/'/g, "")
    votes4 = votes2.replace("votes:", "")

    return votes4;
}

function leaderboard_html() {
    column1 = document.getElementById("no1");
    column2 = document.getElementById("no1v")
    column1.innerHTML = remove_string(lelements_List[(lelements_List.length - 2)][0])
    column2.innerHTML = remove_votes(lelements_List[(lelements_List.length - 2)][1])
}


function five() {
    for (let i = 0; i < 10; i++) {
        column = document.getElementById("no" + String(i + 1))
        column2 = document.getElementById("no" + String(i + 1) + "v")

        column.innerHTML = remove_string(lelements_List[lelements_List.length - (2 + i)][0])
        column2.innerHTML = remove_votes(lelements_List[lelements_List.length - (2 + i)][1])

    }
}