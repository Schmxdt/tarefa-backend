import { inject, injectable } from 'tsyringe'
import { Tarefa } from '@modules/tarefa/infra/typeorm/entities/tarefa'
import { ITarefaRepository } from '@modules/tarefa/repositories/i-tarefa-repository'

interface IRequest {
  search: string,
  page: number,
  rowsPerPage: number,
  columnOrder: Array<'ASC' | 'DESC'>
}

@injectable()
class ListTarefaUseCase {
  constructor(@inject('TarefaRepository')
    private tarefaRepository: ITarefaRepository
  ) {}

  async execute({
    search,
    page,
    rowsPerPage,
    columnOrder
  }: IRequest): Promise<Tarefa[]> {
    try {
      const tarefas = await this.tarefaRepository.list(
        search,
        page,
        rowsPerPage,
        columnOrder
      )

      return tarefas
    } catch (err) {
      throw err
    }
  }
}

export { ListTarefaUseCase }
