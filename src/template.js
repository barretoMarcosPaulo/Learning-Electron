const data = require('./data')


module.exports = {
    generate(){
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
                type:'radio'
            }
            template.push(menuItem)
        })

        return template
    }
}