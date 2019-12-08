package food.rest.code.endpoints;

import com.google.gson.Gson;
import food.rest.code.Entities.Food;
import food.rest.code.logic.JSONHandler;
import org.json.simple.parser.ParseException;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.ServerEndpoint;
import java.io.IOException;
import java.util.ArrayList;

@RestController
@RequestMapping(path = "${v1API}/food")
public class FoodController {
    ArrayList<Food> foods = new ArrayList<>();
    Gson gson;
    JSONHandler jsonHandler = new JSONHandler();


    public FoodController() throws IOException, ParseException {

        this.foods = jsonHandler.jsonToArrayList(foods);
        this.gson = new Gson();
    }

    @GetMapping("/test")
    public String doIt(){
        String toString = gson.toJson(foods.get(0));
        return toString;
    }

    @GetMapping("/{id}")
    public String getFoodById(@PathVariable long id){
        Food foodById = jsonHandler.getFoodById(foods, id);
        return gson.toJson(foodById);
    }
    @GetMapping("/category")
    public String getCategory(@RequestParam String name){
        ArrayList<Food> categorizedFoods = jsonHandler.getSpecificFoods(foods, name);
        return gson.toJson(categorizedFoods);
    }

    @GetMapping("/names")
    public String getFoodByName(@RequestParam String name){
        ArrayList<Food> foodsByName = jsonHandler.getFoodsByName(foods, name);
        return gson.toJson(foodsByName);
    }


}
