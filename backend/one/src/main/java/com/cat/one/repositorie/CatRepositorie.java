package com.cat.one.repositorie;

import org.springframework.data.jpa.repository.JpaRepository;
import com.cat.one.models.Cat;

// Interfaz que extiende de JpaRepository para poder realizar las operaciones CRUD
public interface CatRepositorie extends JpaRepository<Cat, Long> {

} 
