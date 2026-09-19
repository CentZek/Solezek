export interface Character {
  id: string;
  name: string; // Bahdini display name
  nameEn: string;
  avatar: string; // emoji avatar
}

export const characters: Character[] = [
  { id: 'dara', name: 'دارا', nameEn: 'Dara', avatar: '👦' },
  { id: 'rojin', name: 'ڕۆژین', nameEn: 'Rojin', avatar: '👧' },
  { id: 'azad', name: 'ئازاد', nameEn: 'Azad', avatar: '👨' },
  { id: 'shirin', name: 'شیرین', nameEn: 'Shirin', avatar: '👩' },
];

export function getCharacter(id: string): Character {
  return (
    characters.find((c) => c.id === id) ?? {
      id,
      name: id,
      nameEn: id,
      avatar: '🙂',
    }
  );
}
