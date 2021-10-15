package com.parentsocial.controllers;

import com.parentsocial.models.DayCare;
import com.parentsocial.models.PlayDate;
import com.parentsocial.repository.PlayDateRepository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class PlayDateController {
    private final PlayDateRepository repository;

    PlayDateController(PlayDateRepository repo) {
        this.repository = repo;
    }

    @GetMapping("/playDate")
    @ResponseBody
    @Operation(summary = "Get All Play Date", tags = { "Play Date" })
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Get All Play Date List", content = { @Content(mediaType = "application/json", schema = @Schema(implementation = PlayDate.class)) })})
    List<PlayDate> all() {
        return repository.findAll();
    }

    @PostMapping("/playDate")
    @ResponseBody
    @Operation(summary = "Create a Play Date", tags = { "Play Date" })
    @io.swagger.v3.oas.annotations.parameters.RequestBody(description = "JSON object with Play Date model", required = true, content = { @Content(mediaType = "application/json", schema = @Schema(implementation = PlayDate.class)) })
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Play Date, where create object", content = { @Content(mediaType = "application/json", schema = @Schema(implementation = PlayDate.class)) }),
    })
    PlayDate create(@RequestBody PlayDate playDate) {
        return repository.save(playDate);
    }

    @ResponseBody
    @GetMapping("/playDate/{id}")
    @Operation(summary = "Get Play Date By ID", tags = { "Play Date" })
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Get Day Care Object", content = { @Content(mediaType = "application/json", schema = @Schema(implementation = PlayDate.class)) })})
    public Optional<PlayDate> get(@PathVariable Integer id) {
        return this.repository.findById(id);
    }

    @PutMapping("/playDate/{id}")
    @ResponseBody
    @Operation(summary = "Create a Play Date", tags = { "Play Date" })
    @io.swagger.v3.oas.annotations.parameters.RequestBody(description = "JSON object with Play Date model", required = true, content = { @Content(mediaType = "application/json", schema = @Schema(implementation = PlayDate.class)) })
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Play Date, where create object", content = { @Content(mediaType = "application/json", schema = @Schema(implementation = PlayDate.class)) }),
    })
    public PlayDate update( @PathVariable Integer id, @RequestBody PlayDate daycare) {
        PlayDate model = this.repository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException(id + ""));


        return this.repository.save(model);
    }

    @DeleteMapping("/playDate/{id}")
    @Operation(summary = "Delete Play Date By ID", tags = { "Play Date" })
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Deleted Play Date Object", content = { @Content(mediaType = "application/json", schema = @Schema(implementation = PlayDate.class)) })})
    public Optional<PlayDate> delete(@PathVariable("id") Integer id) {
        Optional<PlayDate> model = this.repository.findById(id);
        this.repository.deleteById(id);

        return model;
    }

}
