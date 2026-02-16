import { DEFAULTS } from "../config.js";
import fish from "../data/fish.json" with { type: "json" };

export class fishModel {
  static async getAllfish({
    limit = DEFAULTS.LIMIT_PAGINATION,
    offset = DEFAULTS.OFFSET_PAGINATION,
    category_slug,
    level,
  }) {
    let filteredfish = fish;

    if (category_slug) {
      filteredfish = fish.filter((fish) =>
        fish.category_slug.toLowerCase().includes(category_slug.toLowerCase()),
      );
    }

    if (level) {
      filteredfish = filteredfish.filter((fish) =>
        fish.level.toLowerCase().includes(level.toLowerCase()),
      );
    }

    if (!filteredfish.length) {
      return [];
    }

    const paginatedfish = filteredfish.slice(
      Number(offset),
      Number(offset) + Number(limit),
    );

    return paginatedfish;
  }
  static async getfishByName(name) {
    return fish.find((fish) => fish.slug === name);
  }

  static async createfish({ name, species, habitat, ph_level }) {
    const newfish = {
      id: crypto.randomUUID(),
      name,
      species,
      habitat,
      ph_level,
    };

    fish.push(newfish);
    return newfish;
  }
}
