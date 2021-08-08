import React, { Component } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  StyleSheet,
} from "react-native";

import { HEADER_IMAGE_HEIGHT } from "./HeaderImage";
import { MIN_HEADER_HEIGHT } from "./Header";

const styles = StyleSheet.create({
  section: {
    padding: 16,
  },
  item: {
    borderBottomColor: "#e2e3e4",
    borderBottomWidth: 1,
    marginTop: 16,
  },
  description: {
    marginBottom: 8,
  },
  text: {
    fontFamily: "Montserrat-Bold",
    fontSize: 18,
  },
  title1: {
    fontFamily: "Oswald-Regular",
    fontSize: 24,
  },
  divider: {
    height: 2,
    backgroundColor: "#e2e3e4",
  },
  item: {
    padding: 16,
    borderBottomColor: "#e2e3e4",
    borderBottomWidth: 1,
    marginTop: 16,
  },
  title: {
    fontFamily: "Oswald-Regular",
    fontSize: 16,
    marginBottom: 8,
  },
});

class Fetch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      error: null,
      isLoading: true,
    };
    this.arrayholder = [];
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const url = "https://randomuser.me/api/?&results=40";
    this.setState({ loading: true });

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          data: res.results,
          error: res.error || null,
          loading: false,
        });
        this.arrayholder = res.results;
      })
      .catch((error) => {
        this.setState({ error, loading: false });
      });
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%",
        }}
      />
    );
  };

  searchFilterFunction = (text) => {
    this.setState({
      value: text,
    });

    const newData = this.arrayholder.filter((item) => {
      const itemData = `${item.name.title.toUpperCase()} 
      ${item.name.first.toUpperCase()} ${item.name.last.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
    });
  };
  renderItem(data) {
    return (
      <View style={styles.item}>
        <Text
          style={styles.title}
        >{`${data.item.name.first.toUpperCase()} ${data.item.name.last.toUpperCase()}`}</Text>
        <Text style={styles.description}>{data.item.email}</Text>
      </View>
    );
  }

  render() {
    if (this.state.loading) {
      return (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.email}
        />
      </View>
    );
  }
}

export default Fetch;
