import { inject, injectable } from 'tsyringe'
import { ITarefaRepository } from '@modules/tarefa/repositories/i-tarefa-repository'

interface IRequest {
  search: string
}

@injectable()
class CountTarefaUseCase {
  constructor(@inject('TarefaRepository')
    private tarefaRepository: ITarefaRepository
  ) {}

  async execute({
    search
  }: IRequest): Promise<{ count: number }> {
    try {
      const tarefasCount = await this.tarefaRepository.count(search)

      return tarefasCount
    } catch (err) {
      throw err
    }
  }
}

export { CountTarefaUseCase }
