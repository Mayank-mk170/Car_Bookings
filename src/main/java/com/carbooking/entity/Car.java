package com.carbooking.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@Entity
@Table(name = "car")
public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "model_number", nullable = false, unique = true)
    private String modelNumber;

    @Temporal(TemporalType.DATE)
    @Column(name = "year_of_manufacture", nullable = false)
    private Date yearOfManufacture;

    @Column(name = "fule_type", nullable = false)
    private String fuleType;

    @Column(name = "km_run", nullable = false)
    private Integer kmRun;

    @Column(name = "tranmission", nullable = false)
    private String tranmission;

    @Column(name = "price", nullable = false)
    private Double price;

    @Column(name = "description", nullable = false, length = 1000)
    private String description;

    @Column(name = "image_url")
    private String imageUrl;

}