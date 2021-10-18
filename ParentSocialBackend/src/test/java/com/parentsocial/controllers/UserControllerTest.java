package com.parentsocial.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.parentsocial.models.User;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.junit.Assert.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@RunWith(SpringRunner.class)
@WebMvcTest(UserController.class)

public class UserControllerTest {

    @Autowired
    private MockMvc mockMvc;

    private ObjectMapper mapper = new ObjectMapper();

    @Before
    public void setUp() throws Exception {

    }

    @Test
    public void shouldReturnNewUserOnValidPostRequest() throws Exception {
        User user = new User(1,"sami","password", "jon","Que");


        String inputJson = mapper.writeValueAsString(user);
        String outputJson = mapper.writeValueAsString(user);

        mockMvc.perform(
                        post("/user")
                                .content(inputJson)
                                .contentType(MediaType.APPLICATION_JSON)
                )
                .andDo(print())
                .andExpect(status().isCreated())
                .andExpect(content().json(outputJson));

    }

    @Test
    public void shouldReturn422WhenPostingEmptyUsername() throws Exception {
        User user = new User(2, "jake", "password", "jake", "Tommy");
        String inputJson = mapper.writeValueAsString(user);


        mockMvc.perform(
                        post("/user")
                                .content(inputJson)
                                .contentType(MediaType.APPLICATION_JSON)
                )
                .andDo(print())
                .andExpect(status().isUnprocessableEntity());
    }

    @Test
    public void shouldDeleteUserAndReturn204StatusCode() throws Exception {
        mockMvc.perform(delete("/user/"))
                .andDo(print())
                .andExpect(status().isNoContent());
    }


    
    @Test
    public void shouldReturn404WhenAttemptingToDeleteAUserThatDoesNotExist() throws Exception {
        mockMvc.perform(delete("/user/"))
                .andDo(print())
                .andExpect(status().isNotFound());
    }

    @Test
    public void shouldReturnAllUsersInCollection() throws Exception {
        mockMvc.perform(get("/user"))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0]").isNotEmpty());
    }

    @Test
    public void shouldReturnUserByName() throws Exception {
        // Since the cities do not have ID's, we can use the same Object to create both the input and the output json.
        User user = new User(3,"jonny", "password", "john","smith");

        String outputJson = mapper.writeValueAsString(user);

        mockMvc.perform(get("/user/"))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().json(outputJson));
    }

    @Test
    public void shouldUpdateById() throws Exception {
        User user = new User(4,"seeme", "password", "john","smith");

        String outputJson = mapper.writeValueAsString(user);

        mockMvc.perform(put("/user/2"))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().json(outputJson));
    }
}
