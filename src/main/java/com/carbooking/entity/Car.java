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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getModelNumber() {
        return modelNumber;
    }

    public void setModelNumber(String modelNumber) {
        this.modelNumber = modelNumber;
    }

    public Date getYearOfManufacture() {
        return yearOfManufacture;
    }

    public void setYearOfManufacture(Date yearOfManufacture) {
        this.yearOfManufacture = yearOfManufacture;
    }

    public String getFuleType() {
        return fuleType;
    }

    public void setFuleType(String fuleType) {
        this.fuleType = fuleType;
    }

    public Integer getKmRun() {
        return kmRun;
    }

    public void setKmRun(Integer kmRun) {
        this.kmRun = kmRun;
    }

    public String getTranmission() {
        return tranmission;
    }

    public void setTranmission(String tranmission) {
        this.tranmission = tranmission;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
}