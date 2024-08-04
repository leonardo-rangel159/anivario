document.addEventListener("DOMContentLoaded", function() {
    /*  Esta função é chamada quando o documento HTML foi completamente carregado e analisado,
        mas antes de carregar os estilos, imagens e subframes. O evento `DOMContentLoaded` é ideal
        para executar scripts que manipulam o DOM depois que o HTML está completamente carregado.
    */

    const confettiElements = document.querySelectorAll(".confetti");// Seleciona todos os elementos com a classe `confetti` e os armazena na variável `confettiElements`.

    confettiElements.forEach(confetti => {// Itera sobre cada elemento com a classe `confetti`.

        const delay = Math.random() * -10;// Gera um número aleatório entre 0 e -10 para definir o atraso da animação de cada confete.

        const leftPosition = Math.random() * 100;// Gera um número aleatório entre 0 e 100 para definir a posição horizontal de cada confete.

        confetti.style.animationDelay = `${delay}s`;// Define o atraso da animação do confete com o valor gerado aleatoriamente em segundos.

        confetti.style.left = `${leftPosition}%`;// Define a posição horizontal do confete com o valor gerado aleatoriamente em porcentagem.
    });
});
