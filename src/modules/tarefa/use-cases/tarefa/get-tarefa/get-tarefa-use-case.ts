import { inject, injectable } from 'tsyringe'
import { Tarefa } from '@modules/tarefa/infra/typeorm/entities/tarefa'
import { ITarefaRepository } from '@modules/tarefa/repositories/i-tarefa-repository'

@injectable()
class GetTarefaUseCase {
  constructor(@inject('TarefaRepository')
    private tarefaRepository: ITarefaRepository
  ) {}

  async execute(id: string): Promise<Tarefa> {
    try {
      const tarefa = await this.tarefaRepository.get(id)
  
      return tarefa
    } catch (err) {
      throw err
    }
  }
}

export { GetTarefaUseCase }
