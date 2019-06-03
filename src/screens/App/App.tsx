import * as React from "react";
import { SafeAreaView } from "react-native";
import { Input } from "../../components/Collection"
import {Text, View, Button, Image} from "../../components/Base"

interface Props {}
interface State {
    firstname: any,
    lastname: any,
}

class App extends React.Component <Props, State> {

    state = {
        firstname: "",
        lastname: "",
    }

    onUpdateFirst = (firstname: any) => {
        this.setState({ firstname })
    }

    onUpdateLast = (lastname: any) => {
        this.setState({ lastname })
    }

    public render() {

        const { firstname, lastname } = this.state

        return(
            <SafeAreaView style={{
                alignItems: "center",
                backgroundColor: "#F5FCFF",
                flex: 1,
                justifyContent: "center"
              }}>
                <View style={{ padding: 10 }}>
                    <Button text="hello" style={{ button: { backgroundColor: "red" } }} />
                </View>

                <View>
                    <Image style={{ width: 200, height: 200 }} source={require("../../assets/placeholder.png")} />
                </View>

                <Text style={{ padding: 10 }}>{`${firstname} ${lastname}`}</Text>

                <View style={{ width: 200 }}>
                    <Input isRequired label="First" onChange={this.onUpdateFirst} />
                    <Input isRequired label="Last" onChange={this.onUpdateLast} />
                </View>
            </SafeAreaView>
        )
    }
}



export default App