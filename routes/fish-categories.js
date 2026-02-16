import { Router } from "express";
import { fishCategoriesController } from "../controllers/fish-categories.js"

export const fishCategoriesRouter = Router()

fishCategoriesRouter.get('/', fishCategoriesController.getAllFishCategories)

fishCategoriesRouter.get('/:name', fishCategoriesController.getFishCategoryByName)

fishCategoriesRouter.post('/', fishCategoriesController.createFishCategory)

fishCategoriesRouter.put('/:id', fishCategoriesController.updateFishCategory)

fishCategoriesRouter.patch('/:id', fishCategoriesController.updateFishCategoryPartial)

fishCategoriesRouter.delete('/:id', fishCategoriesController.deleteFishCategory)

