package com.cat.one.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

// Clase que representa la tabla de la base de datos
@Entity
@Data
@Table(name = "cat")
@NoArgsConstructor
@AllArgsConstructor

public class Cat {
    // Atributos de la tabla 
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long catID;

    private String nombre;
    private String propietario;
    private String color;
    private String edad;
}
