// Calcula a média de notas de cada aluno, por matéria
// e adiciona a média ao objeto aluno
alunos.forEach(aluno => {
	aluno.media = {}

	for(let materia in aluno.notas) {
		aluno.media[materia] = average(...aluno.notas[materia])
	}
})

//console.log(alunos)

// Inserir no thead da tabela a lista de matérias
const htmlHeader = document.createElement('tr')
htmlHeader.innerHTML = '<td>Nome</td>'

const htmlHeaderMaterias = Object.keys(alunos[0].notas).map(materia => {
	//console.log(materia)
	return `<td>${materia}</td>`
}).join('')

//console.log(htmlHeaderMaterias)
htmlHeader.innerHTML += htmlHeaderMaterias
//console.log(htmlHeader)
document.querySelector('[data-table-alunos] thead').appendChild(htmlHeader)

// Inserir no tbody da tabela a lista de alunos e suas médias
alunos.forEach(aluno => {
	let htmlRow = document.createElement('tr')
	htmlRow.innerHTML = `<td>${aluno.nome}</td>`

	const htmlRowMaterias = Object.keys(aluno.media).map(materia => {
		return `<td>${aluno.media[materia]}</td>`
	}).join('')

	htmlRow.innerHTML += htmlRowMaterias
	document.querySelector('[data-table-alunos] tbody').appendChild(htmlRow)
})

// Adicionar aluno
document.querySelector('form').addEventListener('submit', function(e) {
	e.preventDefault()
	const nome = document.getElementById('first_name').value
	// como forme de exemplo, para poder incluir um novo aluno ele deve obbrigatoriamente obdecer a estrutura de notas
	// caso contrário, o código irá quebrar
	// portanto, vamos neste momento usar a estrutura de notas existente de algum aluno e ajustar o nome
	// para o novo aluno
	// futuramente precisamos ajustar tudo, visto que o _id deve ser único.
	const newAluno = {
		_id: 0,
		nome,
		notas: {
			backend_1: [1, 1, 2, 2],
			frontend_2: [2, 2, 2, 2],
			bancodados: [2, 2, 3, 3],
			ferramentas: [3, 3, 3, 3],
		},
	}
	//console.log(nome)
	// é preciso calcular aa média das notas do novo aluno
	// portanto vamos repetir uma parte do nosso código.
	newAluno.media = {}
	for(let materia in newAluno.notas) {
		newAluno.media[materia] = average(...newAluno.notas[materia])
	}

	alunos.push(newAluno)
})