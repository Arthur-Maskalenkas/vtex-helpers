import fs from 'fs';
import {default as pathNode} from 'path'
export const normalizePath =  (path) => {
    return new URL(path, import.meta.url).pathname
}

export const getDirectories = (path) => {
    const pathNormalized = new URL(path, import.meta.url)
    const log = {
        path,
        pathNode1: pathNode.join(path, import.meta.url),
        pathNode2: pathNode.join(import.meta.url,path),
        pathNode3: pathNode.join(path, pathNormalized.pathname),
        pathNode4: pathNode.join(pathNormalized.pathname, path)

    }

    console.log(log)
    return fs.readdirSync(pathNormalized)
        .filter(file => fs.statSync(pathNormalized).isDirectory())
        .map(file => normalizePath(file))

}

const buildPath = (path, rest) => `${path}/${rest}`

export const layers = {
    tests: {
        folderPath: '../tests'
    },
    components: {
        folderPath: '../src/components'
    },
    context: {
        folderPath: '../../src/context',
        folderPathNormalized: normalizePath('../src/context'),
        dirFolders: function () {
           return {
               hooks: buildPath(this.folderPath, 'hooks'),
               reducer: buildPath(this.folderPath, 'reducer')
           }
        }
    }
}

export const choicesData = {
    layer: {
        type: 'list',
        var: 'layerType',
        message: 'Em qual camada o arquivo deve ser criado?',
        metaData: {
            type: 'list',
            name: 'layerType',
            message: 'Em qual camada o arquivo deve ser criado?',
        }
    },
    dir: {
        type: 'list',
        var: 'baseDir',
        message: 'Em qual diretorio o arquivo deve ser criado?',
        metaData: {
            type: 'list',
            name: 'fileType',
            message: 'Em qual diretorio o arquivo deve ser criado?',
        }
    },

    nameFile: {
        metaData: {
            type: 'input',
            name: 'name',
            message: 'Qual o nome do arquivo?'
        }
    }
}