import { inject, injectable } from 'tsyringe'
import { ITarefaSelectDTO } from '@modules/tarefa/dtos/i-tarefa-dto'
import { ITarefaRepository } from '@modules/tarefa/repositories/i-tarefa-repository'

@injectable()
class SelectTarefaUseCase {
  constructor(@inject('TarefaRepository')
    private tarefaRepository: ITarefaRepository
  ) {}

  async execute(): Promise<ITarefaSelectDTO[]> {
    try {
      const tarefas = await this.tarefaRepository.select()

      return tarefas
    } catch (err) {
      throw err
    }
  }
}

export { SelectTarefaUseCase }
