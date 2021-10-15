package com.parentsocial.migration;

import com.parentsocial.repository.DayCareRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class LoadDatabase {
    private static final Logger log = LoggerFactory.getLogger(LoadDatabase.class);
    @Bean
    CommandLineRunner initDatabase1(DayCareRepository repository) {
        return args -> {
//            log.info("Save start1");
//            repository.save(new User("test1", "password1", "student"));
//            log.info("Save end1");
        };
    }


}