import { inject, injectable } from 'tsyringe'
import { Tarefa } from '@modules/tarefa/infra/typeorm/entities/tarefa'
import { ITarefaRepository } from '@modules/tarefa/repositories/i-tarefa-repository'

@injectable()
class DeleteTarefaUseCase {
  constructor(@inject('TarefaRepository')
    private tarefaRepository: ITarefaRepository
  ) {}

  async execute(id: string): Promise<Tarefa[]> {
    try {
      await this.tarefaRepository.delete(id)

      const tarefas= await this.tarefaRepository.list('', 0, 100, [])
  
      return tarefas
    } catch (err) {
      throw err
    }
  }
}

export { DeleteTarefaUseCase }
