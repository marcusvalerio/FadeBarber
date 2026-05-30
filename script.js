
let clientes = [];

function showSection(id){
  document.querySelectorAll('.section').forEach(sec=>{
    sec.classList.remove('active');
  });

  document.getElementById(id).classList.add('active');
}

function abrirModal(){
  document.getElementById('modal').style.display = 'flex';
}

function fecharModal(){
  document.getElementById('modal').style.display = 'none';
}

function adicionarCliente(){
  const nome = document.getElementById('nome').value;
  const barbeiro = document.getElementById('barbeiro').value;
  const corte = document.getElementById('corte').value;

  if(!nome) return;

  clientes.push({
    nome,
    barbeiro,
    corte
  });

  renderizarClientes();
  fecharModal();

  document.getElementById('nome').value = '';
  document.getElementById('barbeiro').value = '';
  document.getElementById('corte').value = '';
}

function renderizarClientes(){
  const tabela = document.getElementById('clientesTabela');

  tabela.innerHTML = '';

  clientes.forEach((cliente,index)=>{
    tabela.innerHTML += `
      <tr>
        <td>${cliente.nome}</td>
        <td>${cliente.barbeiro}</td>
        <td>${cliente.corte}</td>
        <td>
          <button onclick="removerCliente(${index})">Remover</button>
        </td>
      </tr>
    `;
  });

  document.getElementById('clientesTotal').innerText = clientes.length;
  document.getElementById('cortes').innerText = clientes.length * 2;
  document.getElementById('faturamento').innerText = 'R$ ' + (clientes.length * 45);
}

function removerCliente(index){
  clientes.splice(index,1);
  renderizarClientes();
}
