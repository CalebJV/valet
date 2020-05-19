import * as driversAPI from './fakeDriverService';

const cars = [
  {
    _id: '99853',
    guestName: 'Smith, S',
    roomNumber: '809',
    rego: 'AYR741',
    driver: { _id: '0', name: 'Caleb' },
    chargeMethod: 'Member',
    chargePrice: '$35',
    movement: [
      { _id: '0', direction: 'IN', date: '19/05/2020', time: '15:30' },
      { _id: '1', direction: 'OUT', date: '19/05/2020', time: '16:30' },
      { _id: '2', direction: 'IN', date: '19/05/2020', time: '19:00' },
      { _id: '3', direction: 'OUT', date: '20/05/2020', time: '10:30' },
    ],
    notes: '',
  },
  {
    _id: '99847',
    guestName: 'Doe, J',
    roomNumber: '1412',
    rego: 'AYR741',
    driver: { _id: '1', name: 'Seb' },
    chargeMethod: 'Member',
    chargePrice: '$35',
    movement: [
      { _id: '0', direction: 'IN', date: '19/05/2020', time: '15:30' },
      { _id: '1', direction: 'OUT', date: '19/05/2020', time: '16:30' },
    ],
    notes: '',
  },
  {
    _id: '99888',
    guestName: 'Wilson, S',
    roomNumber: '1752',
    rego: 'AYR741',
    driver: { _id: '0', name: 'Caleb' },
    chargeMethod: 'Member',
    chargePrice: '$35',
    movement: [
      { _id: '0', direction: 'IN', date: '19/05/2020', time: '15:30' },
      { _id: '1', direction: 'OUT', date: '19/05/2020', time: '16:30' },
      { _id: '2', direction: 'IN', date: '19/05/2020', time: '19:00' },
    ],
    notes: '',
  },
  {
    _id: '99863',
    guestName: 'Brown, M',
    roomNumber: '809',
    rego: 'AYR741',
    driver: { _id: '0', name: 'Caleb' },
    chargeMethod: 'Member',
    chargePrice: '$35',
    movement: [
      { _id: '0', direction: 'IN', date: '19/05/2020', time: '15:30' },
    ],
    notes: '',
  },
  {
    _id: '99813',
    guestName: 'Miller, R',
    roomNumber: '809',
    rego: 'AYR741',
    driver: { _id: '0', name: 'Caleb' },
    chargeMethod: 'Member',
    chargePrice: '$35',
    movement: [
      { _id: '0', direction: 'IN', date: '19/05/2020', time: '15:30' },
    ],
    notes: '',
  },
];

export function getCars() {
  return cars;
}

export function getCar(id) {
  return cars.find((c) => c._id === id);
}

export function saveCar(car, move) {
  let carInDb = cars.find((c) => c._id === car._id) || {};
  carInDb.guestName = car.guestName;
  carInDb.roomNumber = car.roomNumber;
  carInDb.driver = driversAPI.drivers.find((d) => d._id === car.driverId);
  carInDb.chargeMethod = car.chargeMethod;
  carInDb.chargePrice = car.chargePrice;
  carInDb.entry = car.movement.push(move);
  carInDb.notes = car.notes;

  if (!carInDb._id) {
    carInDb._id = car._id;
    cars.push(carInDb);
  } else {
    return console.log('id already exists');
  }

  return carInDb;
}

export function deleteCar(id) {
  let carInDb = cars.find((c) => c._id === id);
  cars.splice(cars.indexOf(carInDb), 1);
  return carInDb;
}
