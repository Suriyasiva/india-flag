// show flag and details

// var pop="population: 1,394,975,829";
// var reg="region: Asia";
// var cap="capital: New delhi";

// var countrydetails=[pop,reg,cap];


// let countriesInfo = [
//     {
//       name: "India",
//       population: " 1,394,975,829",
//       region: "Asia",
//       flag:
//         "https://upload.wikimedia.org/wikipedia/commons/7/7b/India_flag_300.png",
//       capital: "New delhi"
//     }];

var flagurl= "https://upload.wikimedia.org/wikipedia/commons/7/7b/India_flag_300.png";



var creatediv=document.createElement("div");
creatediv.setAttribute("class","bgsheet");

var createimgtag=document.createElement("img");
createimgtag.setAttribute("src",flagurl);
createimgtag.setAttribute("class","flagbg");
creatediv.append(createimgtag);

var createhtag=document.createElement("h");
createhtag.innerText="India";
createhtag.setAttribute("class","indiasize")
creatediv.append(createhtag)

var para=document.createElement("p")
    para.setAttribute("class","parasize")
   para.innerText="Population: 1,394,975,829"
    creatediv.append(para)

    var para1=document.createElement("p")
    para1.setAttribute("class","parasize1")
   para1.innerText=" Region: Asia";
    creatediv.append(para1)

    var para2=document.createElement("p")
    para2.setAttribute("class","parasize2")
   para2.innerText="Capital: New delhi";
    creatediv.append(para2)


// for (let index = 0; index < countrydetails.length; index++) {
//     var para=document.createElement("p")
//     para.setAttribute("class","parasize")
//     para.innerText=countrydetails[index]
//     creatediv.append(para)
    
// }
    
// var editcontent=document.getElementsByClassName("parasize")
// console.log(editcontent[0].innerText);


document.body.append(creatediv);










