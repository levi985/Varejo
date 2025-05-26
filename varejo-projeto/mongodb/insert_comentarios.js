// insert_comentarios.js

const { MongoClient } = require('mongodb');
const fs = require('fs');

// Lê o arquivo JSON com os comentários
const comentarios = JSON.parse(fs.readFileSync('datasets/comentarios.json', 'utf8'));

// Configura a conexão com o MongoDB
const url = 'mongodb://localhost:27017';
const dbName = 'varejo';
const collectionName = 'comentarios';

async function inserirComentarios() {
    const client = new MongoClient(url);

    try {
        await client.connect();
        console.log('Conectado ao MongoDB');

        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        const result = await collection.insertMany(comentarios);
        console.log(`${result.insertedCount} comentários inseridos.`);
    } catch (err) {
        console.error('Erro ao inserir os comentários:', err);
    } finally {
        await client.close();
    }
}

inserirComentarios();

