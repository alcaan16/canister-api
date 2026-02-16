import { DEFAULTS } from "../config.js";
import fishCategories from "../data/fish-categories.json" with { type: "json" };

export class fishCategoriesModel {
  static async getAllfishCategories({
    limit = DEFAULTS.LIMIT_PAGINATION,
    offset = DEFAULTS.OFFSET_PAGINATION,
    id,
  }) {
    let filteredfishCategories = fishCategories;

    if (id) {
      filteredfishCategories = fishCategories.filter((fishCategory) =>
        parseInt(fishCategory.id) === parseInt(id),
      );
    }

    if (!filteredfishCategories.length) {
      return [];
    }

    const paginatedfishCategories = filteredfishCategories.slice(
      Number(offset),
      Number(offset) + Number(limit),
    );

    return paginatedfishCategories;
  }
    static async getfishCategoryByName(name) {
    return fishCategories.find((fishCategory) => fishCategory.slug === name);
  }

  static async createfishCategory({ name, species, habitat, ph_level }) {
    const newfishCategory = {
      id: crypto.randomUUID(),
      name,
      species,
      habitat,
      ph_level,
    };

    fishCategories.push(newfishCategory);
    return newfishCategory;
  }
}
