export default function sortingByHealth (units) {
     units.sort((a, b) => a.health < b.health ? 1: -1);
     return units;
}

