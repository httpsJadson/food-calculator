import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { UsersService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PaginationDto } from '../common/dto/pagination.dto';
import { AuthTokenGuard } from '../common/guards/authToken.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { JobRole } from '../common/enums/jobRole.enum';
import { ApiBearerAuth } from '@nestjs/swagger';

@UseGuards(AuthTokenGuard)
@Roles(JobRole.ADMIN)
@ApiBearerAuth()
@Controller('user')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll(@Query() query: PaginationDto) {
    return this.userService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
