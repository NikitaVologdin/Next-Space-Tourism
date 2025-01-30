import {
  compareRoleWithSlug,
  compareTechWithSlug,
} from "../utils/findDocument";
import { expect, test, describe } from "vitest";

describe("compareRoleWithSlug()", () => {
  test("Compares crew member one word role with the slug", () => {
    const role = "Commander";
    const slug = "commander";
    const result = compareRoleWithSlug(role, slug);
    expect(result).toBe(true);
  });

  test("Compares crew member two word role with the slug", () => {
    const role = "Flight Engineer";
    const slug = "engineer";
    const result = compareRoleWithSlug(role, slug);
    expect(result).toBe(true);
  });
});

describe("compareTechWithSlug()", () => {
  test("compares tech name with slug", () => {
    const tech = "Space capsule";
    const slug = "space-capsule";
    const result = compareTechWithSlug(tech, slug);
    expect(result).toBe(true);
  });
});
