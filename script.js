function addNewskField(){


    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('sField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('rows',1);
    newNode.setAttribute('placeholder','Enter Here');

    let skillsOb=document.getElementById('skills');
    let skAddButtonOb=document.getElementById('skAddButton');

    skillsOb.insertBefore(newNode,skAddButtonOb);

}


function addNewcField(){


    let newNode1 =document.createElement('textarea');
    newNode1.classList.add('form-control');
    newNode1.classList.add('cField');
    newNode1.classList.add('mt-2');
    newNode1.setAttribute('rows',1);
    newNode1.setAttribute('placeholder','Enter Here');

    let certiOb=document.getElementById('certi');
    let cAddButtonOb=document.getElementById('cAddButton');

    certiOb.insertBefore(newNode1,cAddButtonOb);

}

function addNewaqField(){


    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('aqField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('rows',3);
    newNode.setAttribute('placeholder','Enter Here');

    let aqOb=document.getElementById('aq');
    let aqAddButtonOb=document.getElementById('aqAddButton');

    aqOb.insertBefore(newNode,aqAddButtonOb);

}

function addNewweField(){


    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('rows',3);
    newNode.setAttribute('placeholder','Enter Here');

    let weOb=document.getElementById('we');
    let weAddButtonOb=document.getElementById('weAddButton');

    weOb.insertBefore(newNode,weAddButtonOb);

}
function addNewprField(){


    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('proField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('rows',3);
    newNode.setAttribute('placeholder','Enter Here');

    let proOb=document.getElementById('pro');
    let proAddButtonOb=document.getElementById('proAddButton');

    proOb.insertBefore(newNode,proAddButtonOb);

}


// generating cv 

function generatecv(){
    // console.log('generting cv');


    let namefield=document.getElementById('namefield').value;
    let nameT=document.getElementById('nameT');

    nameT.innerHTML=namefield;


    document.getElementById('nameT2').innerHTML=namefield;

    // for mailid 
    document.getElementById('mailT').innerHTML=document.getElementById('mailfield').value;

    //for contact 

    document.getElementById('contactT').innerHTML=document.getElementById('contactfield').value;
    
// for address 
    document.getElementById('addT').innerHTML=document.getElementById('addressfield').value;

    // for hobbies 
    document.getElementById('hoobt').innerHTML=document.getElementById('Hobbyfield').value;

    //for languages
    document.getElementById('langt').innerHTML=document.getElementById('Languagesfield').value;


    // fro skills 
    // document.getElementById('skillT').innerHTML=document.getElementById('skillsfield').value;
    let ske=document.getElementsByClassName('sField');
    let stri='';

    for(let e of ske){
        stri=stri  + `<li> ${e.value} </li>`;

    }
    document.getElementById('skillT').innerHTML=stri;


    // fblink 
    document.getElementById('fbT').innerHTML=document.getElementById('fbfield').value;


    // insta link 
    document.getElementById('instaT').innerHTML=document.getElementById('instafield').value;

// linkdein link 
    document.getElementById('linkedinT').innerHTML=document.getElementById('LinkedINfield').value;


    //objective 
    document.getElementById('objectiveT').innerHTML=document.getElementById('objectivefield').value;


    // workexperience

    let wes=document.getElementsByClassName('weField');


    let str='';


    for(let e of wes){
        str=str+`<li> ${e.value} </li>`;
    }

    document.getElementById('weT').innerHTML=str;


    // projects 

    let prs=document.getElementsByClassName('proField');


    let strw='';


    for(let e of prs){
        strw=strw +`<li> ${e.value} </li>`;
    }

    document.getElementById('proT').innerHTML=strw;


    // acedimcs qualifcation 
    let aqo=document.getElementsByClassName('aqField');


    let st='';


    for(let e of aqo){
        st=st +`<li> ${e.value} </li>`;
    }

    document.getElementById('aqT1').innerHTML=st;

    // certification 


    let cer=document.getElementsByClassName('cField');


    let s='';


    for(let e of cer){
        s=s +`<li> ${e.value} </li>`;
    }

    document.getElementById('certiT').innerHTML=s;


    document.getElementById('cv-form').style.display='none';
    document.getElementById('cv-template').style.display='block';

}


function printcv(){
    window.print();
}