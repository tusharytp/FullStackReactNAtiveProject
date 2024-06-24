import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

const App = () => {
    const [data, setData] = useState([])


    const getAPI = async () => {

        try {
            const url = "https://jsonplaceholder.typicode.com/posts";
            let res = await fetch(url);
            res = await res.json();
            setData(res)
        }
        catch (err) {
            setData(err)
        }
    }

    useEffect(() => {
        getAPI()
    }, [data])

    return (
        <View>
            <Text>This an FlatList Using API Get</Text>
            {
                data.length ?
                    data.map((item) => {
                        return (
                            <View>
                                <Text style={{ color: "red" }}>
                                    {item.id}
                                </Text>
                                <Text>
                                    {item.title}
                                </Text>
                                <Text>
                                    {item.body}
                                </Text>
                            </View>
                        )
                    }
                    ) : null
            }
        </View>
    )
}



export default App;