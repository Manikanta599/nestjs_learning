import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';  // Correct the import path

@Module({
  imports: [UsersModule],
})
export class AppModule {}
