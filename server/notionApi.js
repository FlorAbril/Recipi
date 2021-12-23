import  { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export const getAllRecipes = async (req, res) => {
  const response = await notion.databases.query({ database_id: process.env.NOTION_DATABASE_ID });
  const results = response.results
  return results
}