package org.cradlePlatform.repository;

import org.cradlePlatform.model.FollowUp;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface FollowUpRepository extends CrudRepository<FollowUp, Integer> {
	Iterable<FollowUp> findByPatientIdOrderByIdDesc(int patientId);
	Iterable<FollowUp> findTopByPatientIdOrderByIdDesc(int patientId);
}
