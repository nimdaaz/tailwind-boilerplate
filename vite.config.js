/*
const { resolve } = require('path')
export default {
    plugins: [],
    server: {
        open: '/index.html',
        port: 3116,
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                another: resolve(__dirname, 'another.html')
            }
        }
    }
}*/

const { resolve } = require('path')
export default {
    plugins: [],
    root: './',
    server: {
        open: '/index.html',
        port: 3116,
    },
    build: {
        outDir: 'dist',
        /*rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                another: resolve(__dirname, 'another.html')
            }
        },*/
    },
    publicDir: 'assets'
}