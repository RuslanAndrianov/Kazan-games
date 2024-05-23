package edu.java.kazan_games;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class Controller {

    @Autowired
    private DBService service;

    @GetMapping("/games")
    public List<Game> getGames() {
        System.out.println("GET request");
        return service.getAll();
    }
}
