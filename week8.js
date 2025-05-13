/*
Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
Use at least one array.
Use at least two classes.
Your menu should have the options to create, view, and delete elements.
*/

class Vehicle {
    constructor(model, plate, milage) {
        this.model = model;
        this.plate = plate;
        this.milage = milage;
        
    }
    
}

class Menu {
    constructor() {
        this.cars = [];
    }
        showMainMenu() {
            return prompt(`
            Main Menu:
            _________________________
            1: View All Vehicles
            2: Add a Vehicle
            3: Delete a Vehicle 
            0: Exit Program`)
        }


        addCar(){
            let carModel = prompt("Enter car model:");
            let carPlate = prompt('Enter car plate no:');
            let carMilage = prompt('Enter car milage');
            this.cars.push(new Vehicle(carModel, carPlate, carMilage));
        }  
        viewCars(){
            let displayCars =(`Index#   Model   Plate#   Milage
                `);
            for(let i=0;i<this.cars.length; i++){
        
                displayCars += ( `------------------------------  
                ${i}:    ${this.cars[i].model}    ${this.cars[i].plate}    ${this.cars[i].milage}
                `);
            }
            
            alert(`Car Inventory:
            ______________________________
            ${displayCars}`)
        } 
        deleteCar() {
            let carIndex = prompt("Enter car index to DELETE:")
            this.cars.splice(carIndex, 1);            }


        start(){
            let selection = this.showMainMenu();
            while (selection != 0) {
                switch(selection) {
                    case '1':
                        this.viewCars();
                    break;
            
                    case '2':
                        this.addCar();
                        
                    break;
            
                    case '3': 
                        this.deleteCar();
            
                    break;
    
                    default: 
                        selection = 0;
                }
                selection = this.showMainMenu();
            }
            alert('Goodbye!')
        }    
    }


let menu = new Menu();
menu.start();


