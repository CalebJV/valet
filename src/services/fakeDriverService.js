export const drivers = [
  { _id: '0', name: 'Caleb', position: 'Concierge' },
  { _id: '1', name: 'Seb', position: 'Head Concierge' },
  { _id: '2', name: 'Carl', position: 'Porter' },
  { _id: '3', name: 'Matthew', position: 'Doorman' },
];

export function getDrivers() {
  return drivers.filter((g) => g);
}
