package com.parentsocial.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.parentsocial.models.PlayDate;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.junit.Assert.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@RunWith(SpringRunner.class)
public class PlayDateControllerTest {

    @Autowired
    private MockMvc mockMvc;

    private ObjectMapper mapper = new ObjectMapper();
    @Before
    public void setUp() throws Exception {

    }

    @Test
    public void shouldReturnNewDaycareOnValidPostRequest() throws Exception {
        PlayDate playDate = new PlayDate(2, "title","blabla", null );

        String inputJson = mapper.writeValueAsString(playDate);
        String outputJson = mapper.writeValueAsString(playDate);

        mockMvc.perform(
                        post("/playDate")
                                .content(inputJson)
                                .contentType(MediaType.APPLICATION_JSON)
                )
                .andDo(print())
                .andExpect(status().isCreated())
                .andExpect(content().json(outputJson));

    }

    @Test
    public void shouldReturn422WhenPostingEmptyPLayDateName() throws Exception {
        PlayDate playDate = new PlayDate(2, "title","blabla", null );
        String inputJson = mapper.writeValueAsString(playDate);


        mockMvc.perform(
                        post("/playDate")
                                .content(inputJson)
                                .contentType(MediaType.APPLICATION_JSON)
                )
                .andDo(print())
                .andExpect(status().isUnprocessableEntity());
    }

    @Test
    public void shouldDeletePlayDateAndReturn204StatusCode() throws Exception {
        mockMvc.perform(delete("/playDate"))
                .andDo(print())
                .andExpect(status().isNoContent());
    }



    @Test
    public void shouldReturn404WhenAttemptingToDeleteAPlayDateThatDoesNotExist() throws Exception {
        mockMvc.perform(delete("/PlayDate"))
                .andDo(print())
                .andExpect(status().isNotFound());
    }

    @Test
    public void shouldReturnAllPlayDateInCollection() throws Exception {
        mockMvc.perform(get("/playDate"))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0]").isNotEmpty());
    }

    @Test
    public void shouldReturnPlayDateByName() throws Exception {
        // Since the cities do not have ID's, we can use the same Object to create both the input and the output json.
        PlayDate playDate = new PlayDate(2, "title","blabla", null );

        String outputJson = mapper.writeValueAsString(playDate);

        mockMvc.perform(get("/playDate"))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().json(outputJson));
    }

    @Test
    public void shouldUpdateById() throws Exception {
        PlayDate playDate = new PlayDate(2, "title","blabla", null );
        String outputJson = mapper.writeValueAsString(playDate);

        mockMvc.perform(put("/playDate/2"))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().json(outputJson));
    }
}