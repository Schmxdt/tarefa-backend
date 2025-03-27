import createConnection from '../index'

async function create() {
  const connection = await createConnection()

  await connection.query(
    `INSERT INTO modules (
    	id,
			name,
      created_at,
      updated_at
    ) values 
			('45129c15-e280-442f-9750-50c139c71954', 'Tarefas', 'now()', 'now()')`
  )

  await connection.close()
}

create().then(() => console.log('Menu options table created!'))
