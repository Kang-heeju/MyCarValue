import { TypeOrmModuleOptions } from "@nestjs/typeorm"
import { User } from "src/user/entity/user.entity"

export const typeORMconfig: TypeOrmModuleOptions = {
    type : 'sqlite',
    database : 'db.sqlite',
    entities : [User],
    synchronize : true,
}