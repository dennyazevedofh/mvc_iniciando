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

console.log(htmlHeaderMaterias)
htmlHeader.innerHTML += htmlHeaderMaterias
console.log(htmlHeader)
document.querySelector('[data-table-alunos] thead').appendChild(htmlHeader)
