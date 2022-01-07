import { createRecipe } from "../../services/notionApi";

export default async (req, res) => {
  const response = await createRecipe(req.body)
	res.status(200).json(response)
};
