package com.cat.one.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

// Configuracion de la API
@Configuration
@EnableWebMvc
public class Config  implements WebMvcConfigurer {
    //Metodo para configurar el CORS
    @Override
      public void addCorsMappings(CorsRegistry registry){
        registry.addMapping("/**")
        .allowedOrigins("http://localhost:5173/")//Escribir la url del proyecto front a conectar
        .allowedMethods("*")//podemos especificar los metodos a permitir desde el front
        .allowCredentials(true);//para que permita las credenciales
    
    }
    
}
