package food.rest;

import com.google.gson.Gson;
import org.json.simple.parser.ParseException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.ArrayList;

@RestController
public class RestTest {
    ArrayList<Food> foods = new ArrayList<>();
    Gson gson;


    public RestTest() throws IOException, ParseException {
        this.foods = JSONHandler.jsonToArrayList(foods);
        this.gson = new Gson();
    }

    @GetMapping("/test")
    public String doIt(){
        String toString = gson.toJson(foods.get(0));
        return toString;
    }

    @GetMapping("/food/category/{category}")
    public String getCategory(@PathVariable String category){
        ArrayList<Food> categorizedFoods = JSONHandler.getSpecificFoods(foods, category);
        return gson.toJson(categorizedFoods);
    }

    @GetMapping("/food/names/{name}")
    public String getFoodByName(@PathVariable String name){
        ArrayList<Food> foodsByName = JSONHandler.getFoodsByName(foods, name);
        return gson.toJson(foodsByName);
    }

    @GetMapping("/food/id/{id}")
    public String getFoodById(@PathVariable long id){
        Food foodById = JSONHandler.getFoodById(foods, id);
        return gson.toJson(foodById);
    }

}
