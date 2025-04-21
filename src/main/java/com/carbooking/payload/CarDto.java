package com.carbooking.payload;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class CarDto {
    private String name;
    private String modelNumber;
    private Date yearOfManufacture;
    private String fuleType;
    private Integer kmRun;
    private String tranmission;
    private Double price;
    private String description;
    private String imageUrl;
}
