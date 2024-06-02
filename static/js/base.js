function SVG_load() {
    document.querySelectorAll("svg").forEach((e) => {
        fetch(e.getAttribute("src")).then(data => data.text()).then(text => {
            const template = document.createElement('template'); template.innerHTML = text; 

            to_replace = template.content.children[0];
            for(let attr = 0; attr < e.attributes.length; attr++) {
                to_replace.setAttribute(e.attributes[attr].name, e.attributes[attr].value);
                console.log(e.attributes[attr].name, e.attributes[attr].value);
            };

            e.replaceWith(to_replace);
        });
    });
}

SVG_load();