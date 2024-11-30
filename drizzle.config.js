/**@type { import("drizzle-kit").Config} */
export default{
    schema:"./utils/schema.js",
    dialect:'postgresql',
    dbCredentials:{
        url: 'postgresql://neondb_owner:9utXJOSjWZw2@ep-purple-dust-a5e24gvh.us-east-2.aws.neon.tech/mock-ai-int?sslmode=require',
    }
};