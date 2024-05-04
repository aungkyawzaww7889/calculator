// GET UI 
const getshowresults  = document.getElementById('showresults');
const getnumbers = document.querySelectorAll('.numbers');
// const getplus = document.getElementById('plus');
// const getminus = document.getElementById('minus');
// const getmultiply = document.getElementById('multiply');
// const getdivided = document.getElementById('divided');
// const getclear = document.getElementById('clear');
// const gettodoall = document.getElementById('todoall');
const getoperations = document.querySelectorAll('.operations');




//getnumbers 
getnumbers.forEach(function(getnumber){
    // console.log(getnumber);

    getnumber.addEventListener('click',function(e){


        if(getshowresults.innerText == "NaN"){
            getshowresults.innerText = "";
        }

        if(getshowresults.innerText === "0"){
            getshowresults.innerText = "";

        }

        getshowresults.innerText += e.target.innerText.trim();



    });
});


//getoperations items
getoperations.forEach(function(getoperation){
    // console.log(getoperation);
    getoperation.addEventListener('click',function(e){
        // console.log(e.target);

        let lastvalue = getshowresults.innerText.substring(getshowresults.innerText.length,getshowresults.innerText.length-1);
        // console.log(lastvalue);

        if(!isNaN(lastvalue) && e.target.innerHTML === "="){
            getshowresults.innerText = eval(getshowresults.innerText);
        }else if(e.target.innerText === "C"){
            getshowresults.innerText = "0";
        }else{
            if (!isNaN(lastvalue)){
            getshowresults.innerText += e.target.innerHTML; 
        }};

        // console.log(getshowresults.innerText);


    });

});


//clear number 
// function clearfun(){
//     getshowresults.innerText = "";
// }
// getclear.addEventListener('click',clearfun);




// // plus function 
// function plusfun(){
//     getshowresults.innerText += "+";

// }
// getplus.addEventListener('click',plusfun);




// // getallitems function 
// function getalltodofun(){
//     plusfun();

// }
// gettodoall.addEventListener('click',getalltodofun);