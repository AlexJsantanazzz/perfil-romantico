document.getElementById("quiz").addEventListener("submit", function(e){

    e.preventDefault();

    let total = 0;

    total += parseInt(document.querySelector('input[name="mao"]:checked').value);
    total += parseInt(document.querySelector('input[name="acessorio"]:checked').value);
    total += parseInt(document.querySelector('input[name="anel"]:checked').value);
    total += parseInt(document.querySelector('input[name="conforto"]:checked').value);
    total += parseInt(document.querySelector('input[name="estilo"]:checked').value);

    let aro;
    let mensagem;

    if(total <= 6){
        aro = "15 ou 16";
        mensagem = "Você possui um perfil delicado e romântico 💖";
    }
    else if(total <= 10){
        aro = "17";
        mensagem = "Você possui um perfil equilibrado e elegante ✨";
    }
    else{
        aro = "18 ou 19";
        mensagem = "Você possui um perfil marcante e sofisticado 💎";
    }

    document.getElementById("resultado").innerHTML =
    `
    ${mensagem}<br><br>
    Obrigado por participar! 💕
    `;
    
    console.log("Estimativa de aro:", aro);
});