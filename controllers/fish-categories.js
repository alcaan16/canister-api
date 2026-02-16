import { fishCategoriesModel } from "../models/fishCategories.js";
import { DEFAULTS } from "../config.js";

export class fishCategoriesController {
  static async getAllFishCategories(request, response) {
    const {
      limit = DEFAULTS.LIMIT_PAGINATION,
      offset = DEFAULTS.OFFSET_PAGINATION
    } = request.query;

    const paginatedcategories = await fishCategoriesModel.getAllfishCategories({
      limit,
      offset
    });

    return response.json(paginatedcategories);
  }
  static async getFishCategoryByName(request, response) {
    //TODO: OBTENER UN RECURSO POR ID
    const searchName = request.params.name;

    const name = await fishCategoriesModel.getfishCategoryByName(searchName);

    if (!name) {
      return response.status(404).json({ error: "category not found" });
    }
    return response.json(name);
  }
  static async createFishCategory(request, response) {
    //TODO: CREAR UN RECURSO
    const { name, description } = request.body;
    const newcategory = await fishCategoriesModel.createfishCategory({
      name,
      description,
    });

    return response.status(201).json(newcategory);
  }

  static async updateFishCategory(request, response) {
    //TODO: ACTUALIZAR UN RECURSO
  }

  static async updateFishCategoryPartial(request, response) {
    //TODO: ACTUALIZAR UN RECURSO PARCIAL
  }

  static async deleteFishCategory(request, response) {
    //TODO: ELIMINAR UN RECURSO
  }
}
