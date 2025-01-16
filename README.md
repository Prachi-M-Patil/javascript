#problem
class Package {
  constructor(id, weight, destination) {
    this.id = id;
    this.weight = weight;
    this.destination = destination;
  }
}

class Shipment {
  constructor(id, packages, courier, status = "In Transit") {
    this.id = id;
    this.packages = packages;
    this.courier = courier;
    this.status = status;
  }
}

class Courier {
  constructor(id, name, vehicle) {
    this.id = id;
    this.name = name;
    this.vehicle = vehicle;
  }
}

class ShippingCompany {
  constructor() {
    this.packages = [];
    this.shipments = [];
    this.couriers = [];
  }

  addPackage(package) {
    this.packages.push(package);
    console.log("Package added:", package);
  }

  registerCourier(courier) {
    this.couriers.push(courier);
    console.log("Courier registered:", courier);
  }

  createShipment(id, packageIds, courierId) {
    const packages = this.packages.filter((pkg) => packageIds.includes(pkg.id));
    const courier = this.couriers.find((c) => c.id === courierId);
    if (!courier) {
      console.log("Invalid courier ID");
      return;
    }
    const shipment = new Shipment(id, packages, courier);
    this.shipments.push(shipment);
    console.log("Shipment created:", shipment);
  }

  updateShipmentStatus(id, status) {
    const shipment = this.shipments.find((s) => s.id === id);
    if (shipment) {
      shipment.status = status;
      console.log("Shipment status updated:", shipment);
    } else {
      console.log("Shipment not found.");
    }
  }

  viewAllPackages() {
    console.log("All packages:", this.packages);
  }

  viewCourierInfo(courierId) {
    const courier = this.couriers.find((c) => c.id === courierId);
    if (courier) {
      console.log("Courier details:", courier);
      console.log(
        "Shipments handled:",
        this.shipments.filter((s) => s.courier.id === courierId)
      );
    } else {
      console.log("Courier not found.");
    }
  }
}

// Example Usage
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const company = new ShippingCompany();

function mainMenu() {
  console.log("\n--- Shipping Management System ---");
  console.log("1. Add Package");
  console.log("2. Register Courier");
  console.log("3. Create Shipment");
  console.log("4. Update Shipment Status");
  console.log("5. View All Packages");
  console.log("6. View Courier Info");
  console.log("7. Exit");
  readline.question("Choose an option: ", (option) => {
    switch (option) {
      case "1":
        readline.question("Enter Package ID, Weight, Destination: ", (input) => {
          const [id, weight, destination] = input.split(",");
          company.addPackage(new Package(id, parseFloat(weight), destination));
          mainMenu();
        });
        break;
      case "2":
        readline.question("Enter Courier ID, Name, Vehicle: ", (input) => {
          const [id, name, vehicle] = input.split(",");
          company.registerCourier(new Courier(id, name, vehicle));
          mainMenu();
        });
        break;
      case "3":
        readline.question("Enter Shipment ID, Package IDs (comma-separated), Courier ID: ", (input) => {
          const [id, packageIds, courierId] = input.split(",");
          company.createShipment(
            id,
            packageIds.split(";").map((pkgId) => pkgId.trim()),
            courierId
          );
          mainMenu();
        });
        break;
      case "4":
        readline.question("Enter Shipment ID and New Status: ", (input) => {
          const [id, status] = input.split(",");
          company.updateShipmentStatus(id, status);
          mainMenu();
        });
        break;
      case "5":
        company.viewAllPackages();
        mainMenu();
        break;
      case "6":
        readline.question("Enter Courier ID: ", (courierId) => {
          company.viewCourierInfo(courierId.trim());
          mainMenu();
        });
        break;
      case "7":
        console.log("Exiting...");
        readline.close();
        break;
      default:
        console.log("Invalid option, try again.");
        mainMenu();
        break;
    }
  });
}

mainMenu();
