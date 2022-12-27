/*Criar uma função que recebe como argumento o nome do aluno
  verificar se esse aluno esta na lista, se estiver retornar a nota do mesmo
  caso não esteja retornar uma mensagem de erro */

const alunos = ['João', 'Juliana', 'Caio', 'Rodrigo'];
const notas = [10, 8, 7.5, 5.5];

const listaDuasDimensoes = [alunos, notas];

function exibeAlunoMedia (aluno) {
//includes() verifica se o elemento passada como parametro está no array em questão
    if(listaDuasDimensoes[0].includes(aluno)){
// indexOf() retorna o inidce do elemento passado como parametro
        const indice = listaDuasDimensoes[0].indexOf(aluno)
        const media = listaDuasDimensoes[1][indice]

        console.log(`${aluno} tem a media ${media}`);

    } else{
        console.log("aluno não encontrado");
    }
}
exibeAlunoMedia('Juliana');