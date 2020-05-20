const data = require('./data')


module.exports = {
    templateInicial : null,
    generate(window){
        let template = [
            { 
                label : 'Cursos' 
            },

            {
                type : 'separator'
            }
        ]
        let cursos = data.getNameCursos()
        cursos.forEach((curso)=>{
            let menuItem = {
                label:curso,
                type:'normal',
                click: ()=>{
                    window.send('curso-trocado',curso)
                }
            }
            template.push(menuItem)
        })

        this.templateInicial = template
        return template
    },
    add(curso,window){
        this.templateInicial.push({
            label: curso,
            type: 'normal',
            click: () => {
                window.send('curso-trocado', curso)
            }
        })
        return this.templateInicial
    }
}