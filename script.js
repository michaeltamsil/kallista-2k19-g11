$(function() {
    
    $.getJSON('./IPA.json', response => {
        const { data } = response
        
        const newData = data.sort((a, b) => {
            return a.name - b.name;
        })

        newData.forEach(item => {
            let tr = $('<tr></tr>')
            
            let name = $('<td></td>')
            if (item.name) {
                $(name).text(item.name)
            }
            $(tr).append(name);

            let githubName = $('<td></td>')
            if (item.name) {
                $(githubName).text(item.githubName)
            }
            $(tr).append(githubName);

            let basicHTMLURL = $('<td></td>')
            if (item.basicHTMLURL) {
                const buttonLink = $(`<a class="btn btn-success" target="_blank" href="${item.basicHTMLURL}">website</a>`)
                $(buttonLink).text('website');
                $(basicHTMLURL).html(buttonLink)
            }
            $(tr).append(basicHTMLURL);
            
            $('#IPA tbody').append(tr);
        })

    })
})