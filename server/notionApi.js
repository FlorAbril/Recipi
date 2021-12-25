import  { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_API_KEY });
console.log("apikey",process.env.NOTION_API_KEY)

export const getAllRecipes = async () => {
  const recipes = []
  try{
    const response = await notion.databases.query({ database_id: process.env.NOTION_DATABASE_ID });
    const results = response.results
    results.forEach(recipe => {
      recipes.push(
        {
          date: recipe.properties.Date.date.start,
          id: recipe.id,
          title: recipe.properties.Title.title[0].plain_text,
          detail: recipe.properties.Detail.rich_text[0].plain_text
        }
      )
  });
  }catch(error){  
    console.log(error)    
  }
  return recipes
}