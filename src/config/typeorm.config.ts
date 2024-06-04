import { TypeOrmModuleOptions } from "@nestjs/typeorm"
import { Report } from "src/reports/entity/reports.entity"
import { User } from "src/user/entity/user.entity"

export const typeORMconfig: TypeOrmModuleOptions = {
    type : 'sqlite',
    database : 'db.sqlite',
    entities : [User, Report],
    synchronize : true,
}