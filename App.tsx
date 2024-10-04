import { StatusBar } from "expo-status-bar";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import InputComponent from "./src/components/Input";
import { generateClient } from "aws-amplify/data";
import { Schema } from "./amplify/data/resource";
import outputs from "./amplify_outputs.json";
import { Amplify } from "aws-amplify";
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

Amplify.configure(outputs);
const client = generateClient<Schema>();

const data = client.models;

export default function App() {
  const [todo, setTodo] = useState("");
  const [todoArray, setTodoArray] = useState<any>();

  async function fetchTodos() {
    const result = await client.models.customers.list();
    console.log("result", result);
    setTodoArray(result.data);
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async () => {
    try {
      if (todo.trim().length > 0) {
        let num = await client.models.customers.list();
        const creaedData = await client.models.customers.create({
          email: `${todo.split(" ").join(".")}@gmail.com`,
          id: num.data.length++,
          name: todo,
          phone: "1234567890",
        });
        console.log("created data==>", creaedData);

        const updatedResult = await client.models.customers.list();
        console.log("updated==>", updatedResult);
        setTodoArray(updatedResult.data);
        Alert.alert("Todo added");
        setTodo("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View
        style={{
          width: "100%",
          justifyContent: "space-around",
          flexDirection: "row",
          marginTop: 60,
        }}
      >
        {/* <TouchableOpacity style={styles.customButton} onPress={() => upload()}>
        <Text style={styles.customText}>Upload</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.customButton}
        onPress={() => download()}
      > */}
        {/* <Text style={styles.customText}>Download</Text>
      </TouchableOpacity> */}
      </View>
      <View style={styles.inputContainer}>
        <InputComponent
          placeholder="Enter text"
          onChangeText={setTodo}
          value={todo}
        />
        <TouchableOpacity style={styles.button} onPress={addTodo}>
          <Text>Add</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        bounces={true}
        showsVerticalScrollIndicator={false}
        style={{ marginVertical: 10, padding: 10 }}
      >
        {todoArray && todoArray.length > 0
          ? todoArray.map((el: any) => {
              return (
                <View key={el.id} style={styles.dataContainer}>
                  <Text style={styles.dataText}>{el.name}</Text>
                  {/* <TouchableOpacity
                  style={{
                    backgroundColor: "orange",
                    padding: 7,
                    borderRadius: 8,
                  }}
                  onPress={() => deleteTodo(el.id)}
                >
                  <Text>Del</Text>
                </TouchableOpacity> */}
                  {/* <TouchableOpacity
                  style={{
                    backgroundColor: "aqua",
                    padding: 7,
                    borderRadius: 8,
                  }}
                  onPress={() => updateTodo({ task: todo, id: el.id })}
                >
                  <Text>Upd</Text>
                </TouchableOpacity> */}
                </View>
              );
            })
          : null}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 10,
  },
  inputContainer: {
    marginVertical: 19,
    padding: 5,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 7,
    flexDirection: "row",
    gap: 10,
  },
  inputStyles: {
    width: "80%",
  },
  button: {
    padding: 10,
    borderRadius: 7,
    backgroundColor: "yellow",
  },
  dataContainer: {
    borderTopWidth: 1,
    borderTopColor: "gray",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 7,
  },
  dataText: {
    width: "80%",
  },
  customButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "black",
  },
  customText: {
    color: "white",
  },
});
