 
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  
  schema: './configs/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url:'postgresql://neondb_owner:npg_N8QnSMs9tdKk@ep-crimson-mud-a56hjd1i-pooler.us-east-2.aws.neon.tech/ai-lms?sslmode=require'
  },
});
