package com.parentsocial.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.parentsocial.models.DayCare;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.junit.Assert.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;


@RunWith(SpringRunner.class)
@WebMvcTest(DayCareController.class)
public class DayCareControllerTest {


    @Autowired
    private MockMvc mockMvc;

    private ObjectMapper mapper = new ObjectMapper();
    @Before
    public void setUp() throws Exception {

    }

    @Test
    public void shouldReturnNewDaycareOnValidPostRequest() throws Exception {
        DayCare dayCare = new DayCare(2, "title","1122 main street", "abc@email.com", "345-345-5433","blabla" );


        String inputJson = mapper.writeValueAsString(dayCare);
        String outputJson = mapper.writeValueAsString(dayCare);

        mockMvc.perform(
                        post("/daycare")
                                .content(inputJson)
                                .contentType(MediaType.APPLICATION_JSON)
                )
                .andDo(print())
                .andExpect(status().isCreated())
                .andExpect(content().json(outputJson));

    }

    @Test
    public void shouldReturn422WhenPostingEmptyDaycareName() throws Exception {
        DayCare dayCare = new DayCare(2, "title","1122 main street", "abc@email.com", "345-345-5433","blabla" );
        String inputJson = mapper.writeValueAsString(dayCare);


        mockMvc.perform(
                        post("/daycare")
                                .content(inputJson)
                                .contentType(MediaType.APPLICATION_JSON)
                )
                .andDo(print())
                .andExpect(status().isUnprocessableEntity());
    }

    @Test
    public void shouldDeleteDaycareAndReturn204StatusCode() throws Exception {
        mockMvc.perform(delete("/daycare"))
                .andDo(print())
                .andExpect(status().isNoContent());
    }



    @Test
    public void shouldReturn404WhenAttemptingToDeleteADaycareThatDoesNotExist() throws Exception {
        mockMvc.perform(delete("/daycare"))
                .andDo(print())
                .andExpect(status().isNotFound());
    }

    @Test
    public void shouldReturnAllDaycareInCollection() throws Exception {
        mockMvc.perform(get("/daycare"))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0]").isNotEmpty());
    }

    @Test
    public void shouldReturnDaycareByName() throws Exception {
        // Since the cities do not have ID's, we can use the same Object to create both the input and the output json.
        DayCare dayCare = new DayCare(2, "title","1122 main street", "abc@email.com", "345-345-5433","blabla" );

        String outputJson = mapper.writeValueAsString(dayCare);

        mockMvc.perform(get("/daycare"))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().json(outputJson));
    }

    @Test
    public void shouldUpdateById() throws Exception {
        DayCare dayCare = new DayCare(2, "title","1122 main street", "abc@email.com", "345-345-5433","blabla" );

        String outputJson = mapper.writeValueAsString(dayCare);

        mockMvc.perform(put("/daycare/2"))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().json(outputJson));
    }
}