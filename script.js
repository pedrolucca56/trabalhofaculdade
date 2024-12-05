document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const dataNascimento = document.getElementById('dataNascimento').value;
    
    if (nome && dataNascimento) {
        const listaAlunos = document.getElementById('alunosLista');
        
        const alunoItem = document.createElement('li');
        alunoItem.innerHTML = `
            <span>${nome} - ${dataNascimento}</span>
            <button class="remover">Remover</button>
            <button class="realizado">Realizado</button>
            <button class="pendente">Pendente</button>
        `;
        
        alunoItem.querySelector('.remover').addEventListener('click', function() {
            listaAlunos.removeChild(alunoItem);
        });
        
        alunoItem.querySelector('.realizado').addEventListener('click', function() {
            alunoItem.classList.toggle('realizado');
            alunoItem.querySelector('.realizado').disabled = true; 
            alunoItem.querySelector('.pendente').disabled = false; 
        });
        
        alunoItem.querySelector('.pendente').addEventListener('click', function() {
            alunoItem.classList.remove('realizado');
            alunoItem.querySelector('.realizado').disabled = false;
            alunoItem.querySelector('.pendente').disabled = true; 
        });
        
        listaAlunos.appendChild(alunoItem);
        
        document.getElementById('nome').value = '';
        document.getElementById('dataNascimento').value = '';
    }
});
