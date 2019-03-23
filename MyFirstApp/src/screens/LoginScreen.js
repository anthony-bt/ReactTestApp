import React from "react";
import { Button, View, Text } from "react-native";


export class LoginScreen extends React.Component {

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Login Page</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('drawerStack')}
        />
      </View>
    );
  }
}
