function buscarPersonagem () {
    const url = "https://api.narutodb.xyz/character/search?name=";
    const procurar = document.getElementById('btnProcurar').value;
    const nomePersonagem = document.getElementById('pesquisaNome').value;

    console.log(nomePersonagem)
    pegarInfo(url, nomePersonagem)
}
function pegarInfo(url, nomePersonagem) {
    fetch(url + nomePersonagem)
        .then(response => response.json())
            .then(data => {
                personagem = data;
                imgPersonagem = personagem.images[1];
                imgPersonagem = imgPersonagem.substring(0, imgPersonagem.length - 14)

                card = `<div id="personagem">
                            <img src="${imgPersonagem}" id="imagemPersonagem" width="350px" crossorigin="anonymous" referrerPolicy="no-referrer" >
                            <br>
                            <p> ${personagem.name} </p>
                        </div>`;
                personagem_card.innerHTML = card;
            })
        .catch(err =>console.log(err))

    const url2 = "https://animechan.vercel.app/api/quotes/character?name="; 
    fetch(url2 + nomePersonagem)
        .then(response => response.json())
            .then(quotes => {
                card2 = `<div id="quote">
                            <p class="texto_quote"> ${quotes[0].quote} </p>
                            <br> <br>
                            <p class="texto_quote"> ${quotes[1].quote} </p>
                        </div>`
                quote_card.innerHTML = card2;
            })
        .catch(err => console.log(err))
}