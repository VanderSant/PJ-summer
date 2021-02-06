var link = 'https://api.polijunior.com.br/produtos';

const sendHttpRequest = (method, url, data) =>{
    const promise = new Promise(( resolve, reject) =>{
        const xhr= new XMLHttpRequest();
        xhr.open(method, url);
        xhr.respondeType='json';
        if(data){
            xhr.setRequestHeader('Content-Type','application/json');
        }
        xhr.onload = () => {
            resolve(xhr.response);
        };
        xhr.onerror = () => {
            reject('Something went wrong!')
        }
        xhr.send(JSON.stringify(data));
    });
    return promise;
};

const getData = () =>{

    sendHttpRequest('GET',link)
    .then(responseData=>{
        var data = JSON.parse(responseData);
        var numcapsulas = data.length;
        console.log(data);
        for(var i = 0;i<numcapsulas;i++){
            if(i%2==0){
                buildcoffeepost(data[i],"coluna-capsulas um");
            }
            else{
            buildcoffeepost(data[i],"coluna-capsulas dois");
            }
        };
        
    });
};


function buildcoffeepost(cap, local){
    var capsula = document.getElementById(local);
    console.log(cap.nome);
    var nome = document.createElement("DIV");
    var inte = document.createElement("DIV");
    var prec = document.createElement("DIV");
    var desc = document.createElement("DIV");
    var div0 = document.createElement("DIV");
    var div1 = document.createElement("DIV");
    var div2 = document.createElement("DIV");
    var img = document.createElement("IMG");

    div0.classList.add("caps0");
    div1.classList.add("caps1");
    div2.classList.add("caps2");
    nome.classList.add("nomecaps");
    inte.classList.add("intecaps");
    prec.classList.add("preccaps");
    desc.classList.add("desccaps");
    img.classList.add("imgcaps");

    img.src= cap.foto;
    nome.innerHTML = "<br>"+cap.nome+"<br><br>";
    inte.innerHTML = "Intensidade: "+cap.intensidade+ "<br><br>";
    prec.innerHTML = "R$ "+cap.preco+"<br><br>";
    desc.innerHTML =  cap.descricao+"<br><br>";
    var aux0 = capsula.appendChild(div0);
    var aux1 = aux0.appendChild(div1);
    aux1.appendChild(img);
    var aux2 = aux0.appendChild(div2);
    aux2.appendChild(nome);
    aux2.appendChild(desc);
    aux2.appendChild(inte);
    aux2.appendChild(prec);
};

getData();
