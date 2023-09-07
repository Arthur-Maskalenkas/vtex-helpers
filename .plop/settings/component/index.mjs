import {choicesData, getDirectories, layers} from "../../utils.mjs";

const choices = {
    dirName: {
        type: 'list',
        name: 'fileType',
        message: 'Em qual diretorio o arquivo deve ser criado?',
        choices: () => {
            return [
                'hooks',
                'reducer'
            ]
        }
    },

    fileName: {
        type: 'input',
        name: 'fileName',
        message: 'Qual o nome do arquivo?'
    }
}

export default {
    description: 'Creates a new component',
    prompts: [
       choices.dirName,
        choices.fileName
    ],
    actions: [
        {
            type: 'add',
            path: `../src/context/{{${choices.dirName.name}}}/{{${choices.fileName.name}}}.ts`,
            templateFile: 'templates/generic.tsx.hbs'
        },
        {
            type: 'add',
            path: `../tests/context/{{${choices.dirName.name}}}/{{${choices.fileName.name}}}.spec.ts`,
            templateFile: 'templates/generic.spec.hbs'
        }
    ]
}