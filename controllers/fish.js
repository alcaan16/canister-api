import { fishModel } from "../models/fish.js";
import { DEFAULTS } from "../config.js";

export class fishController {
  static async getAllfish(request, response) {
    const {
      limit = DEFAULTS.LIMIT_PAGINATION,
      offset = DEFAULTS.OFFSET_PAGINATION,
      category_slug,
      level
    } = request.query;

    const paginatedfish = await fishModel.getAllfish({
      limit,
      offset,
      category_slug,
      level,
    });

    return response.json(paginatedfish);
  }
  
  static async getfishByName(request, response) {
    //TODO: OBTENER UN RECURSO POR ID
    const fishSlug = request.params.slug;

    const fish = await fishModel.getfishByName(fishSlug);

    if (!fish) {
      return response.status(404).json({ error: "fish not found" });
    }
    return response.json(fish);
  }

  static async createfish(request, response) {
    //TODO: CREAR UN RECURSO
    const { name, species, habitat, ph_level } = request.body;
    const newfish = await fishModel.createfish({
      name,
      species,
      habitat,
      ph_level,
    });

    return response.status(201).json(newfish);
  }

  static async updatefish(request, response) {
    //TODO: ACTUALIZAR UN RECURSO
  }

  static async updatefishPartial(request, response) {
    //TODO: ACTUALIZAR UN RECURSO PARCIAL
  }

  static async deletefish(request, response) {
    //TODO: ELIMINAR UN RECURSO
  }
}
