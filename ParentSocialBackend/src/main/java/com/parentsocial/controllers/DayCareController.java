package com.parentsocial.controllers;


import com.parentsocial.models.DayCare;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.sql.Array;
import java.util.Arrays;
import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;

@RestController
@CrossOrigin
public class DayCareController {


    private static int idCounter = 1;

    private static List<DayCare> dayCareList = new ArrayList<>(Arrays.asList(


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
    }
}



//
//    private  DayCareRepository repository;
//
//    DayCareController(DayCareRepository repo) {
//        this.repository = repo;
//    }
//
//    @GetMapping("/dayCare")
//    @ResponseBody
//    @Operation(summary = "Get All Day Care", tags = { "Day Care" })
//    @ApiResponses(value = {
//            @ApiResponse(responseCode = "200", description = "Get All Day Care List", content = { @Content(mediaType = "application/json", schema = @Schema(implementation = DayCare.class)) })})
//    List<DayCare> all() {
//        return repository.findAll();
//    }
//
//    @ResponseBody
//    @PostMapping("/dayCare")
//    @Operation(summary = "Create Day Care", tags = { "Day Care" })
//    @io.swagger.v3.oas.annotations.parameters.RequestBody(description = "JSON object with Day Care model", required = true, content = { @Content(mediaType = "application/json", schema = @Schema(implementation = DayCare.class)) })
//    @ApiResponses(value = {
//            @ApiResponse(responseCode = "200", description = "DayCare, where create object", content = { @Content(mediaType = "application/json", schema = @Schema(implementation = DayCare.class)) }),
//            })
//    DayCare create(@RequestBody DayCare daycare) {
//        return repository.save(daycare);
//    }
//
//    @ResponseBody
//    @GetMapping("/dayCare/{id}")
//    @Operation(summary = "Get Day Care By ID", tags = { "Day Care" })
//    @ApiResponses(value = {
//            @ApiResponse(responseCode = "200", description = "Get Day Care Object", content = { @Content(mediaType = "application/json", schema = @Schema(implementation = DayCare.class)) })})
//    public Optional<DayCare> get(@PathVariable Long id) {
//        return this.repository.findById(id);
//    }
//
//    @PutMapping("/dayCare/{id}")
//    @Operation(summary = "Update Day Care", tags = { "Day Care" })
//    @io.swagger.v3.oas.annotations.parameters.RequestBody(description = "JSON object with Day Care model", required = true, content = { @Content(mediaType = "application/json", schema = @Schema(implementation = DayCare.class)) })
//    @ApiResponses(value = {
//            @ApiResponse(responseCode = "200", description = "DayCare, where updated object", content = { @Content(mediaType = "application/json", schema = @Schema(implementation = DayCare.class)) }),
//    })
//    public DayCare update( @PathVariable Long id, @RequestBody DayCare daycare) {
//        DayCare model = this.repository.findById(id)
//                .orElseThrow(() -> new EntityNotFoundException(id + ""));
//
//        model.daycare_name = daycare.daycare_name;
//        model.description = daycare.description;
//        model.address = daycare.address;
//        model.phone_number = daycare.phone_number;
//        model.email = daycare.email;
//
//        return this.repository.save(model);
//    }
//
//    @DeleteMapping("/dayCare/{id}")
//    @Operation(summary = "Delete Day Care By ID", tags = { "Day Care" })
//    @ApiResponses(value = {
//            @ApiResponse(responseCode = "200", description = "Deleted Day Care Object", content = { @Content(mediaType = "application/json", schema = @Schema(implementation = DayCare.class)) })})
//    public Optional<DayCare> delete(@PathVariable("id") Long id) {
//        Optional<DayCare> model = this.repository.findById(id);
//        this.repository.deleteById(id);
//
//        return model;
//    }
//
//}
