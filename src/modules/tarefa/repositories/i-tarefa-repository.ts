import { ITarefaDTO, ITarefaSelectDTO } from '@modules/tarefa/dtos/i-tarefa-dto'
import { Tarefa } from '@modules/tarefa/infra/typeorm/entities/tarefa'
import { HttpResponse } from '@shared/helpers'

interface ITarefaRepository {
  create(data: ITarefaDTO): Promise<Tarefa>


  list(
    search: string,
    page: number,
    rowsPerPage: number,
    columnOrder: ('ASC' | 'DESC')[]
  ): Promise<Tarefa[]>


  select(): Promise<ITarefaSelectDTO[]>


  count(search: string): Promise<{ count: number }>


  get(id: string): Promise<Tarefa>


  update(data: ITarefaDTO): Promise<Tarefa>


  delete(id: string): Promise<void>
}

export { ITarefaRepository }
