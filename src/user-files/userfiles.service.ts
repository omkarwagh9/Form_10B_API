import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { ResponseDTO } from 'src/dto/common.dto copy';
import { UserFiles } from 'src/entity/userfiles.entity';

@Injectable()
export class UserFilesService {
  constructor(
    @Inject('USERS_FILES_REPOSITORY')
    private userFilesRepository: typeof UserFiles,
  ) {}

  async getUserFiles(mobile_no: string,pan_no: string):Promise<ResponseDTO> {
  const result=await this.userFilesRepository.findAll({
    where: { mobile_no:mobile_no,pan_no:pan_no },
  });
    const userObj = result.map(item => ({
    id:item.id,
    name: item.name,
    pan_no: item.pan_no,
    mobile_no: item.mobile_no,
    file: item.file,
    }));

   if(userObj.length===0){
    return {
      status: HttpStatus.BAD_REQUEST,
      response: {msg:"user not found"},
    };
  }else{
  return {
    status: HttpStatus.OK,
    response: {userObj},
  };
}
  }

    async updateDownloadTime(id: number):Promise<ResponseDTO> {
    const currentTime=new Date();
    const result=await this.userFilesRepository.update(
      {downloaded_time:currentTime},
      {where:{id:id,}});
      
       if(result[0]==1){
       return {
        status: HttpStatus.OK,
        response: {msg:"download succesful"},
      };
    }else{
      return {
        status: HttpStatus.BAD_REQUEST,
        response: {msg:"download failed"},
      };
    }
  }

    async addFiles(body):Promise<ResponseDTO>{
      await this.userFilesRepository.create(body);
      return {
        status: HttpStatus.OK,
        response: {msg:"data added"},
      };
    }
  }

