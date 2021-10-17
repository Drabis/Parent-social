package com.parentsocial.repository;

import com.parentsocial.models.PlayDate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlayDateRepository extends JpaRepository<PlayDate, Integer> {
}
