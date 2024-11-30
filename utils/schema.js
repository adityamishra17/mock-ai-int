import { pgTable,serial,text,varchar } from "drizzle-orm/pg-core";


export const Mockinterview=pgTable('mockinterview',{
    


id:serial('id').primaryKey(),
jsonMockResp:text('jsonMockResp').notNull() ,
jobPosition:varchar('jobPosition').notNull() ,
jobDesc:varchar('jobDesc').notNull(),
jobExperience:varchar('jobExperience').notNull() ,
createdBy:varchar('createdBy').notNull(),
createdAt:varchar('createdAt'),
mockld:varchar('mockld').notNull()
})