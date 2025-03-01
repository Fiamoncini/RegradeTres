document.getElementById('botao').addEventListener('click', () => {
    let x1 = parseFloat(document.getElementById('x1').value.trim());
    let x2 = parseFloat(document.getElementById('x2').value.trim());
    let y1 = parseFloat(document.getElementById('y1').value.trim());
    
    
    if (isNaN(x1) || isNaN(x2) || isNaN(y1) || x1 === 0) {
        alert("Preencha todos os campos corretamente e certifique-se de que X1 não seja zero.");
        return;
    }

    let y2 = (y1 * x2) / x1;

    document.getElementById('y2').value = y2.toFixed(2);
});
