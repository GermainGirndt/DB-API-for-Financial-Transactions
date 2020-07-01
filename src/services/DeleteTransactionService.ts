import { getCustomRepository } from 'typeorm';
import TransactionsRepository from '../repositories/TransactionsRepository';

import AppError from '../errors/AppError';

interface RequestDTO {
  id: string;
}

class DeleteTransactionService {
  public async execute({ id }: RequestDTO): Promise<void> {
    const transactionsRepository = getCustomRepository(TransactionsRepository);

    try {
      await transactionsRepository.delete({ id });
    } catch {
      throw new AppError('Repository not found.');
    }
  }
}

export default DeleteTransactionService;
