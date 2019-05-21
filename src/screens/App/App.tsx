import * as React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Input } from "../../components/Collection"
import {Text, View, Button} from "../../components/Base"

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    flex: 1,
    justifyContent: "center"
  }
});

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
            <SafeAreaView style={styles.container}>
                <View>
                    <Text>{`${firstname} ${lastname}`}</Text>
                    <Button text="hello" style={{ button: {backgroundColor: "red"} }} />
                </View>
                <Input isRequired label="First" onChange={this.onUpdateFirst} />
                <Input isRequired label="Last" onChange={this.onUpdateLast} />
            </SafeAreaView>
        )
    }
}



export default App