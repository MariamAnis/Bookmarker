var Name = document.getElementById('name');
var url = document.getElementById('url');
var btn=document.getElementById('btn');
var row = document.getElementById('tablerow');

var sites;
(function(){
    if(localStorage.getItem('list')){
        sites = JSON.parse(localStorage.getItem('list'))
        display();
    }
    else{
        sites=[];
    }
})();




function add(){
    var site = {
        siteName:Name.value ,
        siteUrl : url.value

    } 
    sites.push(site);
    localStorage.setItem('list',JSON.stringify(sites));
    display();
}
function display(){
    box='';
    for(var i=0;i<sites.length;i++){
        box+=`
        <tr>
                    <td>${i+1}</td>
                    <td>${sites[i].siteName}</td>
                    <td><button class="btn btn-info" onclick="visit(${i})">Visit</button></td>
                    <td><button class="btn btn-danger" onclick="Delete(${i})"> Delete</button></td>
                  </tr>
        `
        
    }
    row.innerHTML=box;

}

function Delete(index){
    sites.splice(index,1);
    localStorage.setItem('list',JSON.stringify(sites));
    display();
}

function visit(index){
  window.open(sites[index].siteUrl,'_blank');
}