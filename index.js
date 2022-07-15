//How come we don't have to define users or drivers? and what is sought?

function findMatching(nuts, sucked) {
  return nuts.filter(
    (fuckboi) => fuckboi.toLowerCase() === sucked.toLowerCase()
  );
}

function fuzzyMatch(nuts, Pussy) {
  return nuts.filter(
    (fuckboi) => fuckboi.toLowerCase().indexOf(Pussy.toLowerCase()) === 0
  );
}

function matchName(nuts, blueStrips) {
  return nuts.filter((dirt) => dirt.name === blueStrips);
}
