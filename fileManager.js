import fs from 'fs';

function createDirectory(dirPath) {
    return new Promise((resolve, reject) => {
        fs.mkdir(dirPath, {recursive: true}, (err) => {
            if(err) {
                reject(err)
            } else {
                resolve(`Directory '${dirPath}' created successfully`)
            }
        })
    })
}

function createFile(filePath, content = '') {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, content, 'utf8', (err) => {
            if(err) {
                reject(err)
            } else {
                resolve(`File '${filePath}' created successfully`)
            }
        })
    })
}

function listFiles(dirPath) {
    return new Promise((resolve, reject) => {
        fs.readdir(dirPath, 'utf8', (err, data) => {
            if(err) {
                reject(err)
            } else {
                resolve(data);
            }
        });
    });
}

function readFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if(err) {
                reject(err)
            } else {
                resolve(data);
            }
        });
    });
}

function writeFile(filePath, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, content, 'utf8', (err) => {
            if(err) {
                reject(err)
            } else {
                resolve('File written successfully');
            }
        });
    });
}

function deleteFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.unlink(filePath, (err) => {
            if(err) {
                reject(err)
            } else {
                resolve('File deleted successfully');
            }
        });
    });
}

export default {createDirectory, createFile, listFiles, readFile, writeFile, deleteFile};