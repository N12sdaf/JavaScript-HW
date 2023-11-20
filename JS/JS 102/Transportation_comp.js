class Vehicle {
    constructor(name, manufacturer, ID) {
      this.name = name;
      this.manufacturer = manufacturer;
      this.ID = ID;
    }
  }
  
  class Car extends Vehicle {
    constructor(name, manufacturer, ID, carType, fuelType) {
      super(name, manufacturer, ID);
      this.carType = carType;
      this.fuelType = fuelType;
    }
  }
  
  class Airplane extends Vehicle {
    constructor(name, manufacturer, ID, planeType) {
      super(name, manufacturer, ID);
      this.planeType = planeType;
    }
  }
  
  class Employee {
    constructor(name, ID, dateOfBirth) {
      this.name = name;
      this.ID = ID;
      this.dateOfBirth = dateOfBirth;
    }
  }
  
  class Driver extends Employee {
    constructor(name, ID, dateOfBirth, licenseID) {
      super(name, ID, dateOfBirth);
      this.licenseID = licenseID;
    }
  }
  
  class Pilot extends Employee {
    constructor(name, ID, dateOfBirth, licenseID) {
      super(name, ID, dateOfBirth);
      this.licenseID = licenseID;
    }
  }
  
  class Reservation {
    constructor(reservationDate, employeeID, vehicleID, reservationID) {
      this.reservationDate = reservationDate;
      this.employeeID = employeeID;
      this.vehicleID = vehicleID;
      this.reservationID = reservationID;
    }
  }
  
  const camry = new Car("camry", "Toyota", "C001", "Sedan", "electrical");
  const accord = new Car("accord", "Honda", "C002", "SUV", "petrol");
  const edge = new Car("edge", "Ford", "C003", "Compact", "petrol");
  
  const B575 = new Airplane("B575", "Boeing", "P001", "Commercial");
  const F15 = new Airplane("F15", "Airbus", "P002", "Private");
  
  function makeReservation(employeeID, vehicleID) {
    const employee = employees.find(emp => emp.ID === employeeID);
    const vehicle = vehicles.find(veh => veh.ID === vehicleID);
  
    if (employee instanceof Pilot && vehicle instanceof Car) {
      console.log("Pilots cannot drive cars. Incompatible reservation.");
    } else if (employee instanceof Pilot && vehicle instanceof Airplane) {
      const reservation = new Reservation(new Date(), employeeID, vehicleID, reservations.length + 1);
      reservations.push(reservation);
      console.log("Reservation successfully made for pilot and airplane.");
    } else {
      console.log("Invalid combination of employee and vehicle for reservation.");
    }
  }
  
  const employees = [
    new Driver("ahmed", "D001", "1990-01-15", "DL001"),
    new Pilot("nawaf", "P001", "1985-05-20", "PL001"),
    new Driver("khaled", "D002", "1988-09-08", "DL002"),
  ];
  
  const vehicles = [camry, accord, edge, B575, F15];
  const reservations = [];
  
  makeReservation("P001", "C001"); 
  makeReservation("D001", "C002"); 
  makeReservation("P001", "P002"); 
  
  console.log("Reservations:");
  const reservationDetails = reservations.map(reservation => ({
    ReservationID: reservation.reservationID,
    EmployeeName: employees.find(emp => emp.ID === reservation.employeeID).name,
    VehicleName: vehicles.find(veh => veh.ID === reservation.vehicleID).name,
    ReservationDate: reservation.reservationDate.toISOString(),
  }));
  
  console.log(reservationDetails);
  