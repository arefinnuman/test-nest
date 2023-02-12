import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateWorkerDto } from './dto/create-worker-dto';
import { Workers, workerServiceType } from './model/worker.model';
import { WorkerService } from './worker.service';

@Controller('worker')
export class WorkerController {
  constructor(private workerService: WorkerService) {}

  // create a worker
  @Post('create-worker')
  createWorker(@Body() createWorkerDto: CreateWorkerDto): Workers {
    return this.workerService.createWorker(createWorkerDto);
  }

  // Get Profile By Id
  @Get('profile/:id')
  getProfileById(@Param('id', ParseUUIDPipe) id: string): Workers {
    return this.workerService.getProfileById(id);
  }

  // Edit profile by id (service)
  @Put('profile/:id')
  updateWorkerServiceType(
    @Param('id') id: string,
    @Body('service') service: workerServiceType,
  ): Workers {
    return this.workerService.updateWorkerServiceType(id, service);
  }

  // delete profile
  @Delete('profile/:id')
  deleteById(@Param('id') id: string): void {
    return this.workerService.deleteWorkerProfile(id);
  }

  // View All Services
  @Get('services')
  viewServices() {
    return this.workerService.viewServices();
  }

  // View One Service
  @Get('service/:id')
  viewServiceById(@Param('id') id: string) {
    return this.workerService.viewServiceById(id);
  }
  // Worker History
  @Get('history/:id')
  workerHistory(@Param('id') id: string) {
    return this.workerService.workerHistory(id);
  }

  // Withdraw
  @Get('withdraw/:id')
  withdraw(@Param('id') id: string) {
    return this.workerService.withdraw(id);
  }

  // Search for a service
  @Get('search/:id')
  searchService(@Param('id') id: string) {
    return this.workerService.searchService(id);
  }
}
