const data = require('./data')


module.exports = {
    generate(){
        let template = [
            { 
                'label' : 'Cursos' 
            },

            {
                'type' : 'separator'
            }
        ]
        let cursos = data.getNameCursos()
        return template
    }
}