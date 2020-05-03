const jsonfile = require('jsonfile-promised')
const fs = require('fs')
const path = require('path')

module.exports = {
    async salvaDados(curso, tempoEstudado){
        let arquivoDoCurso = path.join(__dirname, `../data/${curso}.json`)

        if(fs.existsSync(arquivoDoCurso)){
            this.adicionaTempo(arquivoDoCurso,tempoEstudado)
        }else{
            this.criaArquivoDeCurso(arquivoDoCurso, tempoEstudado)    
        }
    },

    adicionaTempo(ArquivoDoCurso, tempo){
            let dados = {
                tempoDeEstudo: tempo
            }

            jsonfile.writeFile(ArquivoDoCurso,dados)
    },

    criaArquivoDeCurso(nomeArquivo, conteudoArquivo){
        jsonfile.writeFile(nomeArquivo, {})
            .then(()=>{
                console.log("Arquivo Criado")
                this.adicionaTempo(nomeArquivo, conteudoArquivo)
            }).catch((error)=>{
                console.log(error)
            })
    },
}