package com.parentsocial.controllers;

import com.parentsocial.models.CustomErrorResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.ArrayList;
import java.util.List;

@RestControllerAdvice
public class ControllerExceptionHandler {
    @ExceptionHandler(value = {MethodArgumentNotValidException.class})
    public ResponseEntity<List<CustomErrorResponse>> newResponseErrors(MethodArgumentNotValidException e) {

        // BindingResult holds the validation errors
        BindingResult result = e.getBindingResult();

        // Validation errors are stored in FieldError objects
        List<FieldError> fieldErrors = result.getFieldErrors();

        // Translate the FieldErrors to CustomErrorResponse
        List<CustomErrorResponse> errorResponseList = new ArrayList<>();

        for (FieldError fieldError : fieldErrors) {
            CustomErrorResponse errorResponse = CustomErrorResponse.generateCustomErrorResponse(HttpStatus.UNPROCESSABLE_ENTITY, fieldError.getDefaultMessage());
            errorResponseList.add(errorResponse);
        }

        // Create and return the ResponseEntity
        ResponseEntity<List<CustomErrorResponse>> responseEntity = new ResponseEntity<>(errorResponseList, HttpStatus.UNPROCESSABLE_ENTITY);
        return responseEntity;
    }

    @ExceptionHandler(value = IndexOutOfBoundsException.class)
    public ResponseEntity<CustomErrorResponse> handleOutOfRangeException(IndexOutOfBoundsException e) {
        HttpStatus httpStatus = HttpStatus.UNPROCESSABLE_ENTITY;
        CustomErrorResponse error = CustomErrorResponse.generateCustomErrorResponse(httpStatus, e.getMessage());
        ResponseEntity<CustomErrorResponse> responseEntity = new ResponseEntity<>(error, httpStatus);
        return responseEntity;
    }

    @ExceptionHandler(value = HttpMessageNotReadableException.class)
    public ResponseEntity<CustomErrorResponse> handleNonIntegerInputs(HttpMessageNotReadableException e) {
        HttpStatus httpStatus = HttpStatus.UNPROCESSABLE_ENTITY;
        CustomErrorResponse error = CustomErrorResponse.generateCustomErrorResponse(httpStatus, e.getMessage());
        ResponseEntity<CustomErrorResponse> responseEntity = new ResponseEntity<>(error, httpStatus);
        return responseEntity;
    }

//    @ExceptionHandler(value = DivideByZeroException.class)
//    public ResponseEntity<CustomErrorResponse> handleDivideByZeroException(DivideByZeroException e) {
//        HttpStatus httpStatus = HttpStatus.UNPROCESSABLE_ENTITY;
//        CustomErrorResponse error = CustomErrorResponse.generateCustomErrorResponse(httpStatus, e.getMessage());
//        ResponseEntity<CustomErrorResponse> responseEntity = new ResponseEntity<>(error, httpStatus);
//        return responseEntity;
//    }

}
