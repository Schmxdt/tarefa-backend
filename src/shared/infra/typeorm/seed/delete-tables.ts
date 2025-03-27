import createConnection from '../index'

async function create() {
  const connection = await createConnection()

  await connection.query(`drop table tarefas`)

  await connection.close()
}

create().then(() => console.log('Tables deleted!'))
