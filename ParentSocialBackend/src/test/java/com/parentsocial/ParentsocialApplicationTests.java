package com.parentsocial;

import com.parentsocial.controllers.PlayDateController;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
@WebMvcTest(PlayDateController.class)
class ParentsocialApplicationTests {

    @Test
    void contextLoads() {
    }

}
