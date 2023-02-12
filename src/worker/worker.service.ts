import { Injectable } from '@nestjs/common';
import * as uuid from 'uuid';
import { CreateWorkerDto } from './dto/create-worker-dto';
import { Workers, workerServiceType } from './model/worker.model';

@Injectable()
export class WorkerService {
  private worker: Workers[] = [];

  // create a worker
  createWorker(createWorkerDto: CreateWorkerDto): Workers {
    const { name, email } = createWorkerDto;
    const worker: Workers = {
      id: uuid.v4(),
      name,
      email,
      service: workerServiceType.ELECTRICIAN,
    };
    this.worker.push(worker);
    return worker;
  }

  // Get Profile By Id
  getProfileById(id: string): Workers {
    // Validate if worker exist
    const found = this.worker.find((worker) => worker.id === id);
    if (!found) {
      throw new Error('Worker not found');
    }
    return found;
  }

  // Edit profile by id
  updateWorkerServiceType(id: string, role: workerServiceType): Workers {
    const worker = this.getProfileById(id);
    worker.service = role;
    return worker;
  }

  // delete profile
  deleteWorkerProfile(id: string): void {
    const found = this.getProfileById(id);
    this.worker = this.worker.filter((worker) => worker.id !== found.id);
  }

  // View Profile
  viewProfile(id: string): Workers {
    const found = this.getProfileById(id);
    return found;
  }

  // View Services
  viewServices() {
    return 'This action returns all services';
  }

  viewServiceById(id: string): string {
    return `This action return ${id} View service`;
  }

  workerHistory(id: string): string {
    return `This action return ${id} Worker History`;
  }

  withdraw(id: string): string {
    return `This action return ${id} Withdraw`;
  }

  searchService(id: string): string {
    return `This action return ${id} Search for a service`;
  }
}
