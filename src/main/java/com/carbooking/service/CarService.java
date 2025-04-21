package com.carbooking.service;

import com.carbooking.entity.Car;
import com.carbooking.payload.CarDto;
import com.carbooking.repository.CarRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarService {

    @Autowired
    private CarRepository carRepository;

    @Autowired
    private ModelMapper modelMapper;


    public List<Car> getAllCars() {
        return carRepository.findAll();
    }

    public Car getCarById(Long id) {
        return carRepository.findById(id).orElseThrow(() -> new RuntimeException("Car not found"));

    }

    public Car addCar(Car car) {
        return carRepository.save(car);
    }

    public Car updateCar(Long id, CarDto carDetails) {
        Car car = getCarById(id);
        // Map only non-null values from carDetails to car
        modelMapper.map(carDetails, car);

        return carRepository.save(car);
    }
    public String deleteCar(Long id) {
        Car car = getCarById(id);
        carRepository.delete(car);
        return "Car with ID " + id + " has been successfully deleted. ";
    }
}

