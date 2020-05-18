const data = require('./data')


module.exports = {
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

        return template
    }
}