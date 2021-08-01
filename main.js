 fetch('https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json')
  .then((data) => {return data.json();
                 console.log(data.json());
                })
  .then((users)=>loadusers(users)) 
  const buttons=document.createElement("div")

function loadusers(users){
  const info=document.createElement('div')
  info.className="info"

  users.forEach(user => {
    const container=document.createElement('div')
    
    container.innerHTML=`
    <div class="container">
    <h1 class="id">${user.id}</h1>
    <div class="basic" >
    <h2 class="name">${user.name}</h2>
    <h5 class="email">${user.email}</h5>
    </div>
    </div>
    `
    info.append(container)
  });
  document.body.append(info)
}
function pages (){
  fetch('https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json')
  .then((data) => {return data.json(); })
  .then((users)=>{
                  console.log((Math.ceil(users.length/10)))
                  loadusers(users.slice(0,10))   
                  for( var m=1; m<=(Math.ceil(users.length/10));m++)
                                  {console.log((Math.ceil(users.length/10)))
                                             console.log(m)
                                             const pagess=document.createElement("button");
                                             pagess.className="button112"
                                             pagess.innerText=m;
                                             buttons.append(pagess)
                                    
                                
                                             pagess.onclick=function (){
                                                                       document.querySelector(".info").remove();
                                                                       var k=(parseInt(pagess.innerText))
                                                                        console.log(k)
                                                                        loadusers(users.slice((k-1)*10,k*10))
                                             
                                                                         }
                                              
                                          }   
                })  }
                pages()
                document.body.append(buttons)
    
