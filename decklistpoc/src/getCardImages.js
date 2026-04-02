export async function getRichDecklistFromPlaintext(decklist) {
  const lines = decklist.split('\n');
  const richDecklist = [];
  for (let line of lines) {
    await new Promise(resolve => setTimeout(resolve, 100));
    const match = line.match(/^\s*(\d+)\s*x?\s+(.+)$/);
    const cardname = match ? match[2].trim() : line.trim();
    const response = await fetch(`https://api.scryfall.com/cards/named?exact=${encodeURIComponent(cardname)}`);
    if (response.ok) {
      const cardData = await response.json();
      const imgUri = cardData.image_uris.large;
      richDecklist.push({ name: cardname, image: imgUri });
    } else {
      console.error(`Card not found: ${cardname}`);
    }
  }
  return richDecklist;
}
