import { Controller } from '@nestjs/common';
import { Get, Post, Put } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Res, Req, Body, Query, Param } from '@nestjs/common/decorators/http/route-params.decorator';
import { UserFilesService } from './userfiles.service';

@Controller('userfiles')
export class UserFilesController {
  constructor(private readonly userFilesService: UserFilesService) {}

  @Get('get_user_files')
  async getUserFiles(
    @Query('mobile_no') mobile_no: string,
    @Query('pan_no') pan_no: string,
    @Res() res) 
    {
    const result = await this.userFilesService.getUserFiles(mobile_no,pan_no);
    return res.status(result.status).send(result.response);
  }

  @Put('download_success')
 async updateDownloadTime(@Query('id') id: number,@Res() res) {
    const result = await this.userFilesService.updateDownloadTime(id);
    return res.status(result.status).send(result.response);
  }

  @Post('add')
  async addFiles(@Body() body,@Res() res){
      const result=await this.userFilesService.addFiles(body);
      return res.status(result.status).send(result.response);   
  }
}
