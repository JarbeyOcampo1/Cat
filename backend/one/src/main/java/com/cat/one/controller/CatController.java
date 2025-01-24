package com.cat.one.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.cat.one.models.Cat;
import com.cat.one.repositorie.CatRepositorie;

// Controlador de la API
@RestController
@RequestMapping("/api/cat")
public class CatController {

    @Autowired
    private CatRepositorie catRepositorie;

    //obtener todos los gatos
    @GetMapping
    public List<Cat> obtener_Gato() {
        return catRepositorie.findAll();
    }

    //obtener gato por id
    @GetMapping("/{catID}")
    public Cat obtener_gato_id(@PathVariable ("catID") Long catID) {
        return catRepositorie.findById(catID).orElse(null);
    }

    //crear gato
    @PostMapping()
    public Cat crear_gato(@RequestBody Cat cat) {
        return catRepositorie.save(cat);
    }
    
    //actualizar gato
    @PutMapping("/{catID}")
    public Cat actualizar_gato(@PathVariable ("catID") Long catID, @RequestBody Cat cat) {
      cat.setCatID(catID);
      return catRepositorie.save(cat);
    }

    //Eliminar gato
    @DeleteMapping("/{catID}")
    public void eliminar_gato(@PathVariable ("catID") Long catID){
        catRepositorie.deleteById(catID);
    }
}
