export const customHash = (password: string): string => {
  let hash = 0xabcdef; // Initial hash value (random prime-like number)
  const salt = "sarobysaaretechmarouacameroun"; // Static salt for additional security

  const combined = password + salt; // Salting the password before hashing

  for (let i = 0; i < combined.length; i++) {
    const charCode = combined.charCodeAt(i);
    hash ^= (hash << 5) + (hash >> 2) + charCode; // Mixing function
    hash = hash & 0xffffffff; // Keep it in 32-bit space
  }

  return hash.toString(16); // Convert to hex
};
