package com.parentsocial.models;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "daycare")
public class DayCare {
     @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
     private Integer id;

    private String daycare_name;
    private String address;
    private String email;
    private String phone_number;
    private String description;


    public DayCare( Integer id,String daycare_name, String address, String email, String phone_number, String description) {
        this.id = id;
        this.daycare_name = daycare_name;
        this.address = address;
        this.email = email;
        this.phone_number = phone_number;
        this.description = description;

    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDaycare_name() {
        return daycare_name;
    }

    public void setDaycare_name(String daycare_name) {
        this.daycare_name = daycare_name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone_number() {
        return phone_number;
    }

    public void setPhone_number(String phone_number) {
        this.phone_number = phone_number;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }



    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        DayCare dayCare = (DayCare) o;
        return Objects.equals(daycare_name, dayCare.daycare_name) && Objects.equals(address, dayCare.address) && Objects.equals(email, dayCare.email) && Objects.equals(phone_number, dayCare.phone_number) && Objects.equals(description, dayCare.description) && Objects.equals(id, dayCare.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(daycare_name, address, email, phone_number, description, id);
    }

    @Override
    public String toString() {
        return "DayCare{" +
                "id=" + id +
                ", daycare_name='" + daycare_name + '\'' +
                ", address='" + address + '\'' +
                ", email='" + email + '\'' +
                ", phone_number='" + phone_number + '\'' +
                ", description='" + description + '\'' +
                '}';
    }
}

