import createConnection from '../index'

async function create() {
  const connection = await createConnection()

  await connection.query(`TRUNCATE TABLE menu_options`)

  await connection.query(
    `INSERT INTO menu_options (
    	id,
			module_id,
			sequence,
			label,
			route,
			icon,
			key,
      created_at,
      updated_at
    ) values 
			('faf75d1f-944b-49c3-99c0-63a2b56bd409', '45129c15-e280-442f-9750-50c139c71954', '001001', 'Tarefas', '/tarefas', 'List', 'tarefa-tarefas', 'now()', 'now()')`
  )

  await connection.close()
}

create().then(() => console.log('Menu options table created!'))
