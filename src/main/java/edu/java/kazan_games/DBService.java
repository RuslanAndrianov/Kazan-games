package edu.java.kazan_games;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.simple.JdbcClient;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DBService {

    @Autowired
    private JdbcClient jdbcClient;

    public List<Game> getAll() {
        String sql = "SELECT * FROM games";
        return jdbcClient
                .sql(sql)
                .query(Game.class)
                .list();
    }
}
