package com.parentsocial.controllers;


import com.parentsocial.models.DayCare;
import com.parentsocial.models.PlayDate;
import com.parentsocial.repository.DayCareRepository;
import com.parentsocial.repository.PlayDateRepository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.sql.Array;
import java.util.Arrays;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;
import javax.validation.Valid;

@RestController
@CrossOrigin
public class DayCareController {


    private final DayCareRepository repository;

    DayCareController(DayCareRepository repo) {
        this.repository = repo;
    }

    @GetMapping("/daycare")
    @ResponseBody
    @Operation(summary = "Get All Daycare", tags = { "Daycare" })
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Get All Daycare List", content = { @Content(mediaType = "application/json", schema = @Schema(implementation = DayCare.class)) })})
    List<DayCare> all() {
        return repository.findAll();
    }

    @PostMapping("/Daycare")
    @ResponseBody
    @Operation(summary = "Create Daycare", tags = { "Daycare" })
    @io.swagger.v3.oas.annotations.parameters.RequestBody(description = "JSON object with Daycare model", required = true, content = { @Content(mediaType = "application/json", schema = @Schema(implementation = DayCare.class)) })
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Daycare, where create object", content = { @Content(mediaType = "application/json", schema = @Schema(implementation = DayCare.class)) }),
    })
   DayCare create(@RequestBody DayCare dayCare) {
        return repository.save(dayCare);
    }

    @ResponseBody
    @GetMapping("/Daycare/{id}")
    @Operation(summary = "Get Daycare By ID", tags = { "Daycare" })
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Get Daycare Object", content = { @Content(mediaType = "application/json", schema = @Schema(implementation = DayCare.class)) })})
    public Optional<DayCare> get(@PathVariable Integer id) {
        return this.repository.findById(id);
    }

    @PutMapping("/Daycare/{id}")
    @ResponseBody
    @Operation(summary = "Create a Daycare", tags = { "Daycare" })
    @io.swagger.v3.oas.annotations.parameters.RequestBody(description = "JSON object with Daycare model", required = true, content = { @Content(mediaType = "application/json", schema = @Schema(implementation = DayCare.class)) })
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Daycare, where create object", content = { @Content(mediaType = "application/json", schema = @Schema(implementation =DayCare.class)) }),
    })
    public DayCare update( @PathVariable Integer id, @RequestBody DayCare daycare) {
       DayCare model = this.repository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException(id + ""));


        return this.repository.save(model);
    }

    @DeleteMapping("/Daycare/{id}")
    @Operation(summary = "Delete Daycare By ID", tags = { "Daycare" })
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Deleted Daycare Object", content = { @Content(mediaType = "application/json", schema = @Schema(implementation = DayCare.class)) })})
    public Optional<DayCare> delete(@PathVariable("id") Integer id) {
        Optional<DayCare> model = this.repository.findById(id);
        this.repository.deleteById(id);

        return model;
    }
}









//private static int idCounter = 1;

    /*private static List<DayCare> dayCareList = new ArrayList<>(Arrays.asList(


        new DayCare("ret", "Pet Sounds", "123 Main Street Nashville TN", "abs@email.com", "res",  idCounter++),
            new DayCare("ret", "Pet Sounds", "123 Main Street Nashville TN", "abs@email.com", "res",  idCounter++))


            );





    @GetMapping("/daycares")
    @ResponseStatus(value = HttpStatus.OK)
    public List<DayCare> getAllDaycare() {
        return dayCareList;
    }

    @PostMapping("/daycares")
    @ResponseStatus(value = HttpStatus.CREATED)
    public DayCare CreateDaycare(@RequestBody @Valid DayCare dayCare) {
        dayCare.setId(idCounter++);
        dayCareList.add(dayCare);
        return dayCare;
    }

    @PutMapping("/daycare/{id}")
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    public void updateRecordById(@PathVariable int id, @RequestBody DayCare daycare) {
        int index = -1;

        for (int i = 0; i < dayCareList.size(); i++) {
            if (dayCareList.get(i).getId() == id) {
                index = -1;
                break;
            }
        }

        if (index >= 0) {
            dayCareList.set(index, daycare);
        }
    }

    @DeleteMapping("/daycares/{id}")
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    public void deleteDayCareById(@PathVariable int id) {
        int index = -1;

        for(int i = 0; i < dayCareList.size(); i++) {
            if(dayCareList.get(i).getId() == id) {
                index = -1;
                break;
            }
        }

        if(index >= 0) {
            dayCareList.remove(index);
        }
    }

    @GetMapping("/daycares/{id}")
    @ResponseStatus(value = HttpStatus.OK)
    public DayCare getDayCareById(@PathVariable Integer id) {
        DayCare foundDayCare = null;

        for(DayCare dayCare : dayCareList) {
            if(foundDayCare.getId() == id) {
                foundDayCare = dayCare;
                break;
            }
        }
        return foundDayCare;
    }*/
//}