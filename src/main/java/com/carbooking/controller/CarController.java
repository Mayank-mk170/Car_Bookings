package com.carbooking.controller;

import com.carbooking.entity.Car;
import com.carbooking.payload.CarDto;
import com.carbooking.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/cars")
public class CarController {

    @Autowired
    private CarService carService;

    @GetMapping
    public List<Car> getAllCars(){
        return carService.getAllCars();
    }

    @GetMapping("/{id}")
    public Car getCarById(@PathVariable Long id){
        return carService.getCarById(id);
    }

    @PostMapping("add_car")
    public Car addCar(@RequestBody Car car){
        return carService.addCar(car);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateCar(@PathVariable Long id, @RequestBody CarDto carDetails ){
        Car updateCar =  carService.updateCar(id, carDetails);
        return ResponseEntity.ok(updateCar);

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCar(@PathVariable Long id) {
        String message = carService.deleteCar(id);
        return  ResponseEntity.ok(message);
    }
}
