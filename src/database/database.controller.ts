import { Controller, Get } from '@nestjs/common';
import { DatabaseService } from './database.service';

@Controller('database')
export class DatabaseController {
    constructor( private database : DatabaseService){}

    @Get('savecache')
    savecache(){
        return this.database.saveCache();
    }

    @Get('getcache')
     async getcache(){
        return  await this.database.getCache();
    }
}
