package com.parentsocial.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.util.Date;
import java.util.Objects;

@Entity
@Table(name = "playdate")
public class PlayDate {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
   private Integer id;

    private String title;
    private String description;


    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
    public Date event_time;

    public PlayDate() {
    }

    public PlayDate(Integer id, String title, String description, Date event_time) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.event_time = event_time;
    }

    public Integer getId() {
        return id;
    }


    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getEvent_time() {
        return event_time;
    }

    public void setEvent_time(Date event_time) {
        this.event_time = event_time;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        PlayDate playDate = (PlayDate) o;
        return Objects.equals(id, playDate.id) && Objects.equals(title, playDate.title) && Objects.equals(description, playDate.description) && Objects.equals(event_time, playDate.event_time);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, title, description, event_time);
    }

    @Override
    public String toString() {
        return "PlayDate{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", event_time=" + event_time +
                '}';
    }
}
