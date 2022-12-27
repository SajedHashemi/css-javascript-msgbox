const _success_icon = '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" id="mainIconPathAttribute" fill="green"></path> <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" id="mainIconPathAttribute" fill="green"></path> </svg>';
const _warning_icon = '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-exclamation-diamond" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z" id="mainIconPathAttribute" fill="orange"></path> <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" id="mainIconPathAttribute" fill="orange"></path> </svg>';
const _info_icon = '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-info-square" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" id="mainIconPathAttribute" fill="#03989e" filter="url(#shadow)"></path> <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" id="mainIconPathAttribute" fill="#03989e"></path> <filter id="shadow"><feDropShadow id="shadowValue" stdDeviation=".5" dx="0" dy="0" flood-color="black"></feDropShadow></filter><filter id="shadow"><feDropShadow id="shadowValue" stdDeviation=".5" dx="0" dy="0" flood-color="black"></feDropShadow></filter></svg>';
const _error_icon = '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-x-octagon" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z" id="mainIconPathAttribute" fill="#ff0000"></path> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" id="mainIconPathAttribute" fill="#ff0000"></path> </svg>';
var isDown=false;

function msgBox(id, title="Information", content="This is message box", btns=[{text:'OK'}], icon=_info_icon, timeout=0){
  var elem = document.getElementById(id)
  elem.innerHTML = '<div class="msg-box-body"><div class="msg-box-header"></div><div class="msg-box-icon"></div><div class="msg-box-content"></div><div class="msg-box-footer"></div></div>';
  msgBoxIcon(id, icon);
  msgBoxTitle(id, title);
  msgBoxContent(id,content);
  msgBoxButtons(id,btns);
  msgBoxShow(id, timeout);
  
  elem.addEventListener('mousedown', function(e) {
    isDown = true;
    offset = [elem.offsetLeft - e.clientX, elem.offsetTop - e.clientY];
  }, true);

  elem.addEventListener('mouseup', function() {
    isDown = false;
  }, true);

  elem.addEventListener('mousemove', function(event) {
    event.preventDefault();
    if (isDown) {
      mousePosition = {
        x : event.clientX,
        y : event.clientY
      };
      elem.style.left = (mousePosition.x + offset[0]) + 'px';
      elem.style.top  = (mousePosition.y + offset[1]) + 'px';
    }
  }, true);
}

function msgBoxShow(id, tm){
  var elem = document.getElementById(id);
  elem.querySelector('.msg-box-body').classList.remove('close');
  elem.style.display = 'block';
  if(tm>0) setTimeout(()=>msgBoxHide(id),tm);
}

function msgBoxHide(id, lockClicked=false, reload=false){
  if(!lockClicked){
    var elem = document.getElementById(id);
    elem.querySelector('.msg-box-body').classList.add('close');
    setTimeout(()=>{
      elem.style.display = 'none';
      if(reload) location.reload();
    },400);
  }
}

function msgBoxIcon(id, icon){
  var elem = document.getElementById(id).querySelector('.msg-box-icon');
  if(icon==null || icon==undefined || icon=='')
    elem.innerHTML = _info_icon;
  else
    elem.innerHTML = icon;
}

function msgBoxTitle(id, title){
  var elem = document.getElementById(id).querySelector('.msg-box-header');
  if(title==null || title==undefined || title=='')
    elem.style.display='none';
  else
    elem.innerHTML = title;
}

function msgBoxContent(id, content){
  var elem = document.getElementById(id).querySelector('.msg-box-content');
  if(content==null || content==undefined || content=='')
    elem.innerHTML = '';
  else
    elem.innerHTML = content;
}

function msgBoxButtons(id, btns){
  var elem = document.getElementById(id).querySelector('.msg-box-footer');
  elem.innerHTML = "";
  if(btns==null || btns==undefined || btns==''){
    elem.innerHTML += '<div class="msg-box-btns n1"><button onclick="msgBoxClicked(this,\''+id+'\')">OK</button></div>';
  }else{
    switch(btns.length){
      case 1:
        elem.innerHTML += '<div class="msg-box-btns n1"><button onclick="msgBoxClicked(this,\''+id+'\','+btns[0].callback+',[\''+btns[0].params+'\'])">'+btns[0].text+'</button></div>';
        break;
      case 2:
        elem.innerHTML += '<div class="msg-box-btns n2"><button onclick="msgBoxClicked(this,\''+id+'\','+btns[0].callback+',[\''+btns[0].params+'\'])">'+btns[0].text+'</button><button onclick="msgBoxClicked(this,\''+id+'\','+btns[1].callback+',[\''+btns[1].params+'\'])">'+btns[1].text+'</button></div>';
        break;
      case 3:
        elem.innerHTML += '<div class="msg-box-btns n3"><button onclick="msgBoxClicked(this,\''+id+'\','+btns[0].callback+',[\''+btns[0].params+'\'])">'+btns[0].text+'</button><button onclick="msgBoxClicked(this,\''+id+'\','+btns[1].callback+',[\''+btns[1].params+'\'])">'+btns[1].text+'</button><button onclick="msgBoxClicked(this,\''+id+'\','+btns[2].callback+',[\''+btns[2].params+'\'])">'+btns[2].text+'</button></div>';
        break;
      default:
        elem.innerHTML += '<div class="msg-box-btns n1"><button onclick="msgBoxClicked(this,\''+id+'\')">OK</button></div>';
        break;
    }
  }
}

function msgBoxTimeout(id, timeout){
  if(timeout>0) setTimeout(()=>msgBoxHide(id),timeout);
}

function msgBoxClicked(elem, id, callback, params){
  elem.innerHTML = '<span class="fa fa-spinner fa-pulse"></span>';
  if(callback==undefined || callback==''){
    msgBoxHide(id);
  }else{
    if(window['\''+callback+'\'']=='function')
      callback.apply(callback,params);
    else
      msgBoxHide(id);
  }
}

