$(function () {

    const fnPrintToBody = (obj) => {
        const {htmlSelector, urlData} = obj;
        $.getJSON(urlData, response => {
            const {data} = response

            const newData = data.sort((a, b) => {
                console.log(a.name < b.name)
                return a.name < b.name
                    ? -1
                    : 1;
            });

            newData.forEach(item => {
                let tr = $('<tr></tr>')

                let name = $('<td></td>')
                if (item.name) {
                    $(name).text(item.name)
                }
                $(tr).append(name);

                let githubName = $('<td></td>')
                if (item.githubName) {
                    $(githubName).html(`<a target="_blank" href="https://github.com/${item.githubName}">${item.githubName}</a>`)
                }
                $(tr).append(githubName);

                let basicHTMLURL = $('<td></td>')
                let buttonLink = $(`<a class="btn btn-success" target="_blank">website</a>`);
                if (item.basicHTMLURL) {
                    $(buttonLink).attr('href', item.basicHTMLURL);
                    $(buttonLink).attr('target', "_blank");
                } else {
                    $(buttonLink).addClass('disabled')
                }
                $(buttonLink).text('website');
                $(basicHTMLURL).html(buttonLink)

                $(tr).append(basicHTMLURL);
                $(htmlSelector).append(tr);
            })

        })
    };

    fnPrintToBody({htmlSelector: '#IPA tbody', urlData: 'IPA.json'})
    fnPrintToBody({htmlSelector: '#IPS tbody', urlData: 'IPS.json'})

})