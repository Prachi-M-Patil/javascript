Assignment: Shipping Management System

Problem Statement:

Shipping Management System oxing Object-Oriented JavaScript. The system will manage packages, shopnems, us

Requirements

1. Classes and Objects

Create the following classes:

Package: Represents a package to be shipped

Shipment Represents the shipment details for packages

Courier. Represents a courier responsible for delivering shipments Shipping Company Represents the overall chipping syriem

2. Attributes:

Package

Unique identifier for the package

weight: Weight of the package.

destination: Address where the package needs to be delivered.

Shipment

ta: Unique identifier for the shipment.

status: Status of the shipment (In Transit, Delivered, etc.).

packages: List of packages in the shipment.

courier: The courier assigned to deliver the shipment.

Courier:

14: Unique identifier for the courier.

name: Name of the courier.

vehicle: Vehicle details used for delivery.

Shipping Company

packages: List of all packages in the system.

shipments: List of all shipments in the system.

couriers: List of registered couriers.

Functional Requirements

Implement the following features:

1. Add Packages: Add a new package to the system. 2. Register Couriers: Register couriers with the system.

3. Create Shipment: Create a shipment with multiple packages and assign a courier.

4. Track Shipment: Track the current status of a shipment by its ID.

5. Update Shipment Status: Update the status of a shipment (eg. to Transit Delivered).

6. View All Packages: Display all packages and their details

7. View Courier Info: Display the courier details and the shipments they are handling

Additional Features (Optional for advanced learners):

Implement delivery time estimation based on the distance or weight.

Allow searching for packages by destination or package ID<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Shipping Management System</title>
</head>
<body>
  <h1>Shipping Management System</h1>

  <div>
    <h2>Add Package</h2>
    <label>Package ID:</label>
    <input type="text" id="packageId">
    <label>Weight:</label>
    <input type="number" id="packageWeight">
    <label>Destination:</label>
    <input type="text" id="packageDestination">
    <button onclick="addPackage()">Add Package</button>
  </div>

  <div>
    <h2>Register Courier</h2>
    <label>Courier ID:</label>
    <input type="text" id="courierId">
    <label>Courier Name:</label>
    <input type="text" id="courierName">
    <label>Vehicle:</label>
    <input type="text" id="courierVehicle">
    <button onclick="registerCourier()">Register Courier</button>
  </div>

  <div>
    <h2>Create Shipment</h2>
    <label>Shipment ID:</label>
    <input type="text" id="shipmentId">
    <label>Package IDs (comma-separated):</label>
    <input type="text" id="packageIds">
    <label>Courier ID:</label>
    <input type="text" id="courierIdForShipment">
    <button onclick="createShipment()">Create Shipment</button>
  </div>

  <div>
    <h2>Update Shipment Status</h2>
    <label>Shipment ID:</label>
    <input type="text" id="shipmentIdForUpdate">
    <label>New Status:</label>
    <input type="text" id="shipmentStatus">
    <button onclick="updateShipmentStatus()">Update Status</button>
  </div>

  <div>
    <h2>View All Packages</h2>
    <button onclick="viewAllPackages()">View Packages</button>
    <textarea id="allPackages" readonly></textarea>
  </div>

  <div>
    <h2>View Courier Info</h2>
    <label>Courier ID:</label>
    <input type="text" id="courierIdToView">
    <button onclick="viewCourierInfo()">View Info</button>
    <textarea id="courierInfo" readonly></textarea>
  </div>

  <script>
    class Package {
      constructor(id, weight, destination) {
        this.id = id;
        this.weight = weight;
        this.destination = destination;
      }
    }

    class Courier {
      constructor(id, name, vehicle) {
        this.id = id;
        this.name = name;
        this.vehicle = vehicle;
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

    class ShippingCompany {
      constructor() {
        this.packages = [];
        this.shipments = [];
        this.couriers = [];
      }

      addPackage(pkg) {
        this.packages.push(pkg);
      }

      registerCourier(courier) {
        this.couriers.push(courier);
      }

      createShipment(id, packageIds, courierId) {
        const packages = this.packages.filter(pkg => packageIds.includes(pkg.id));
        const courier = this.couriers.find(c => c.id === courierId);
        if (courier) {
          this.shipments.push(new Shipment(id, packages, courier));
        }
      }

      updateShipmentStatus(id, status) {
        const shipment = this.shipments.find(s => s.id === id);
        if (shipment) {
          shipment.status = status;
        }
      }

      getAllPackages() {
        return this.packages;
      }

      getCourierInfo(courierId) {
        const courier = this.couriers.find(c => c.id === courierId);
        if (courier) {
          return {
            courier,
            shipments: this.shipments.filter(s => s.courier.id === courierId)
          };
        }
        return null;
      }
    }

    const company = new ShippingCompany();

    function addPackage() {
      const id = document.getElementById("packageId").value;
      const weight = parseFloat(document.getElementById("packageWeight").value);
      const destination = document.getElementById("packageDestination").value;
      company.addPackage(new Package(id, weight, destination));
      alert("Package added successfully!");
    }

    function registerCourier() {
      const id = document.getElementById("courierId").value;
      const name = document.getElementById("courierName").value;
      const vehicle = document.getElementById("courierVehicle").value;
      company.registerCourier(new Courier(id, name, vehicle));
      alert("Courier registered successfully!");
    }

    function createShipment() {
      const id = document.getElementById("shipmentId").value;
      const packageIds = document.getElementById("packageIds").value.split(",");
      const courierId = document.getElementById("courierIdForShipment").value;
      company.createShipment(id, packageIds, courierId);
      alert("Shipment created successfully!");
    }

    function updateShipmentStatus() {
      const id = document.getElementById("shipmentIdForUpdate").value;
      const status = document.getElementById("shipmentStatus").value;
      company.updateShipmentStatus(id, status);
      alert("Shipment status updated successfully!");
    }

    function viewAllPackages() {
      const packages = company.getAllPackages();
      document.getElementById("allPackages").value = packages.map(pkg => 
        `ID: ${pkg.id}, Weight: ${pkg.weight}, Destination: ${pkg.destination}`).join("\n");
    }

    function viewCourierInfo() {
      const courierId = document.getElementById("courierIdToView").value;
      const info = company.getCourierInfo(courierId);
      if (info) {
        document.getElementById("courierInfo").value = `Courier Name: ${info.courier.name}, Vehicle: ${info.courier.vehicle}\nShipments:\n` + 
          info.shipments.map(s => `Shipment ID: ${s.id}, Status: ${s.status}`).join("\n");
      } else {
        document.getElementById("courierInfo").value = "Courier not found.";
      }
    }
  </script>
</body>
</html>
