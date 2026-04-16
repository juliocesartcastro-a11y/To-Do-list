// Função que adiciona uma nova tarefa na tabela
function adicionarTarefa() {
    // Pega os valores digitados
    const tarefa = document.getElementById('tarefa').value;
    const prazo = document.getElementById('prazo').value;

    // Validação simples
    if (tarefa === '' || prazo === '') {
        alert('Preencha todos os campos!');
        return;
    }

    // Seleciona o corpo da tabela
    const tabela = document.getElementById('listaTarefas');

    // Cria uma nova linha
    const novaLinha = document.createElement('tr');

    // ================= CELULA TAREFA =================
    const celulaTarefa = document.createElement('td');
    celulaTarefa.textContent = tarefa;

    // ================= CELULA PRAZO =================
    const celulaPrazo = document.createElement('td');
    celulaPrazo.textContent = prazo;

    // ================= CELULA CHECKBOX =================
    const celulaCheck = document.createElement('td');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    celulaCheck.appendChild(checkbox);

    // ================= CELULA EXCLUIR =================
    const celulaExcluir = document.createElement('td');
    const botaoExcluir = document.createElement('button');

    botaoExcluir.textContent = 'Excluir';

    botaoExcluir.style.backgroundColor = '#e74c3c';
    botaoExcluir.style.color = 'white';
    botaoExcluir.style.border = 'none';
    botaoExcluir.style.padding = '5px 10px';
    botaoExcluir.style.cursor = 'pointer';

    // Evento de clique para remover a linha
    botaoExcluir.onclick = function () {
        tabela.removeChild(novaLinha);
    };

    celulaExcluir.appendChild(botaoExcluir);

    // ================= MONTAGEM DA LINHA =================
    novaLinha.appendChild(celulaTarefa);
    novaLinha.appendChild(celulaPrazo);
    novaLinha.appendChild(celulaCheck);
    novaLinha.appendChild(celulaExcluir);

    // Adiciona a linha na tabela
    tabela.appendChild(novaLinha);

    // Limpa os campos após adicionar
    document.getElementById('tarefa').value = '';
    document.getElementById('prazo').value = '';
}