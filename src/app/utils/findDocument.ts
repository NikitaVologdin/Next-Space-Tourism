export function compareRoleWithSlug(role: string, slug: string) {
  const arr = role.split(" ");
  if (arr.length > 1) return arr[1].toLowerCase() === slug;
  if (arr.length === 1) return arr[0].toLowerCase() === slug;
  return undefined;
}

export function compareTechWithSlug(tech: string, slug: string) {
  const arr = tech.toLowerCase().split(" ");
  const str = arr.join("-");
  return str === slug;
}
