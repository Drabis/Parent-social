package com.parentsocial.repository;

import com.parentsocial.models.DayCare;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DayCareRepository extends JpaRepository<DayCare, Integer> {
}
