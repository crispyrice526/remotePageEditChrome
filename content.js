var jsonFileUrl = "https://raw.githubusercontent.com/crispyrice526/remotePageEditChrome/refs/heads/main/example.json" //ADD JSON FILE URL HERE

var getIns = async () => {
  try {
    let response = await fetch(jsonFileUrl);
    let data = await response.text();
    return data;
  } catch (error) {
    console.error('Error fetching the txt file:', error);
  }
};

var getChildEl = (element, childPath) => { 
  childPath.forEach((index) => { 
    element = element.children[index]; 
  }); 
  return element; 
};

var main = async () => {  
  var ins = await getIns();
  var ins = JSON.parse(ins)
  ins.instructions.forEach(item => 
    {
    var element = document.querySelector(item.selector)
    if(!element){
      console.error("Error: No Element Found For "+item.selector)
      return;
    }
    if(item.childPath) element = getChildEl(element,item.childPath)
    if(item.action == "txt") element.textContent = item.value;
    if(item.action == "append"){
      let parent = element.parentNode;
      element.parentNode.removeChild(element)
      let newElement = document.createElement(item.elementType)
      newElement.innerHTML = item.value;
      parent.appendChild(newElement)
    }
  });
};
main();
