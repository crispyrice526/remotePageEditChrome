This chrome extension allows the controller of the JSON the extension pulls down, to inject HTML and manipulate into any chrome site the extension is enabled on.
 

Setup:  
        
        1. Go to chrome://extensions
        
        2. Make sure developer mode is enabled. (Top Right Corner)
        
        3. Host a file that allows you to grab the instructions and add the url to `content.js`. (View `Host JSON file` below for help`)
        
        4. Edit the content.js file and edit the variable on line one `jsonFileUrl` to link to your JSON file.

        4. Click `load unpacked` and select the downloaded folder. (Top Left Corner)

        5. Use your JSON file to remotely edit websites!

Instructions Format   (View examples in example.json)

        1. `selector`: Treat selector as the document.querySelector("") function. Add the entire indentifier for selector. 
                For example if I wanted to a select a class I would use `"selector": ".exElement"` or for id, `"selector": "#exElement"`.

        2. `action`: There are two actions, first is `"action": "txt"`. Txt allows you to change the textContent of the targeted element
                from selector. Second is "action": "append". Append allows you to change the entire HTML of an element. Simply input the HTML
                and the targeted element from selector will use that HTML. (Keep in mind that string in JSON with `"` and `'` in them 
                must have break characters `\` behind them.)
                
        3. `value`: Value is what `txt` and `append` use for their string and html respectfully.
        
        4. `childPath`: Childpath allows you to map to a specific element using a parent element and a laid out path to the child element.
                For example, the path to reach the img element in the below html would be `"childPath": [2,0,3,1]`.
                `
                <selectedElement>
                <div0></div0><div1></div1><div2>
                <div0><div1`></div1><div2></div2><div3></div3><div4>
                <div0></div0><img></img>
                </div4></div0></div2>
                </selectedElement>
                `

Host JSON File:

        1. Make your own github repo.
        2. Create a new `JSON` file in the repo and add your `JSON` instructions.
        3. Navigate to viewing the file and select the `view raw` option.
        4. Copy the url from the `view raw` Github page.
