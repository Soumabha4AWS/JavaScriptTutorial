
    const renderHook = document.getElementById('app');
    const h3Element = document.createElement('h3');
    const pElement = document.createElement('p');
      h3Element.innerHTML = `
        I am the header
      `;	  
	  pElement.innerHTML = `
        I am the paragraph
      `;      
    renderHook.append(h3Element);
	renderHook.append(pElement);




