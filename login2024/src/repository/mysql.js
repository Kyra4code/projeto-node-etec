import database from 'mysql2/promise'

async function connect(){
    return await database.createConnection({
        'password':'',
        'host':'localhost',
        'user':'root',
        'port':'3306',
        'database':'loginTec20224',
    })
}

export default {connect}